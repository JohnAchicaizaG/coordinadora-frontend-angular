/**
 * Interfaz que define la estructura de datos para el inicio de sesión
 */
export interface LoginDto {
	/**
	 * Correo electrónico del usuario
	 */
	email: string;
	/**
	 * Contraseña del usuario
	 */
	password: string;
}
