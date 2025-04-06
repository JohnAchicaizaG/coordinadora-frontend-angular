import { Role } from '../enums/role.enum';

/**
 * Interfaz que representa un usuario en el sistema
 */
export interface User {
	/** Identificador único del usuario */
	id: number;
	/** Correo electrónico del usuario */
	email: string;
	/** Rol del usuario en el sistema */
	role: Role;
}
