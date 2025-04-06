/**
 * Interfaz que define la estructura de respuesta estándar de la API
 * @template T - Tipo genérico para los datos de la respuesta
 */
export interface ApiResponse<T = unknown> {
	/** Indica si la operación fue exitosa */
	success: boolean;
	/** Mensaje descriptivo de la respuesta */
	message: string;
	/** Datos de la respuesta, tipados según el genérico T */
	data: T;
}
