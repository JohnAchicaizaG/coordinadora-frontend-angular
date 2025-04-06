/**
 * Store de autenticación que maneja el estado y las operaciones relacionadas con la autenticación de usuarios.
 * Utiliza @ngrx/signals para la gestión del estado.
 */
import {
	signalStore,
	withState,
	patchState,
	withComputed,
	withMethods,
} from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tap, switchMap, pipe, catchError, of } from 'rxjs';
import { initialAuthState } from './auth.state';
import { UiStore } from '@/app/core/store/ui.store';
import { LoginDto } from '../models/auth.dto';
import { User } from '@/app/core/models/user-model';

export const AuthStore = signalStore(
	{ providedIn: 'root' },
	withState(initialAuthState),
	withComputed((state) => ({
		/** Indica si el usuario está autenticado */
		isLoggedIn: state.isAuthenticated,
		/** Email del usuario actual */
		userEmail: computed(() => state.user()?.email ?? ''),
		/** Rol del usuario actual */
		userRole: computed(() => state.user()?.role ?? null),
	})),
	withMethods((store, authService = inject(AuthService)) => {
		const ui = inject(UiStore);

		return {
			/**
			 * Inicia sesión con las credenciales proporcionadas
			 * @param credentials - Credenciales de inicio de sesión
			 * @returns Observable que emite el resultado de la operación
			 */
			login: rxMethod<LoginDto>(
				pipe(
					tap(() => {
						ui.clearError();
						ui.showLoading();
					}),
					switchMap((credentials) =>
						authService.login(credentials).pipe(
							tap(({ data }) => {
								patchState(store, {
									user: data.user,
									accessToken: data.accessToken,
									isAuthenticated: true,
								});
								localStorage.setItem('token', data.accessToken);
								localStorage.setItem('user', JSON.stringify(data.user));
							}),
							catchError((error) => {
								ui.setError('Credenciales incorrectas o error de red');
								console.error(error);
								return of(null);
							}),
							tap(() => ui.hideLoading()),
						),
					),
				),
			),

			/**
			 * Restaura la sesión del usuario desde el almacenamiento local
			 * Si no hay token o datos de usuario almacenados, no hace nada
			 */
			restoreSession: () => {
				const token = localStorage.getItem('token');
				const userJson = localStorage.getItem('user');

				if (!token || !userJson) return;

				const user: User = JSON.parse(userJson);
				patchState(store, {
					isAuthenticated: true,
					accessToken: token,
					user,
				});
			},

			/**
			 * Cierra la sesión del usuario actual
			 * Elimina el token y los datos del usuario del almacenamiento local
			 * Restaura el estado inicial de autenticación
			 */
			logout: () => {
				localStorage.removeItem('token');
				localStorage.removeItem('user');
				patchState(store, initialAuthState);
			},
		};
	}),
);
