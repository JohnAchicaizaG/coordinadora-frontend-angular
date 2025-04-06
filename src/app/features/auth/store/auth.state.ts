import { User } from '@/app/core/models/user-model';

/**
 * Interfaz que define el estado de autenticación de la aplicación
 * @interface AuthState
 * @property {User | null} user - Información del usuario autenticado
 * @property {string | null} accessToken - Token de acceso para las peticiones autenticadas
 * @property {boolean} isAuthenticated - Indica si el usuario está autenticado
 */
export interface AuthState {
	user: User | null;
	accessToken: string | null;
	isAuthenticated: boolean;
}

/**
 * Estado inicial del módulo de autenticación
 * @constant {AuthState}
 */
export const initialAuthState: AuthState = {
	user: null,
	accessToken: null,
	isAuthenticated: false,
};
