/**
 * Interfaz que define el estado de la interfaz de usuario
 */
export interface UiState {
	/** Indica si hay una operación en curso */
	loading: boolean;
	/** Mensaje de error, si existe */
	errorMessage: string | null;
}

/**
 * Estado inicial de la interfaz de usuario
 */
export const initialUiState: UiState = {
	loading: false,
	errorMessage: null,
};
