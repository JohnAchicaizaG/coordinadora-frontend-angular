import { signalStore, patchState, withState, withMethods } from '@ngrx/signals';
import { initialUiState } from './ui.state';

/**
 * Store de UI que maneja el estado global de la interfaz de usuario
 * @description Proporciona métodos para controlar el estado de carga y mensajes de error
 */
export const UiStore = signalStore(
	{ providedIn: 'root' },
	withState(initialUiState),
	withMethods((state) => ({
		/**
		 * Activa el estado de carga
		 */
		showLoading: () => patchState(state, { loading: true }),
		/**
		 * Desactiva el estado de carga
		 */
		hideLoading: () => patchState(state, { loading: false }),
		/**
		 * Establece un mensaje de error
		 * @param msg - El mensaje de error a mostrar
		 */
		setError: (msg: string) => patchState(state, { errorMessage: msg }),
		/**
		 * Limpia el mensaje de error actual
		 */
		clearError: () => patchState(state, { errorMessage: null }),
	})),
);
