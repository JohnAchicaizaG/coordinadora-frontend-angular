import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

/**
 * Tipo que define la estructura de un manejador de errores de validación
 */
type ValidationHandler = (error: unknown, control: AbstractControl) => string;

/**
 * Servicio que maneja la validación de formularios y la generación de mensajes de error
 * @Injectable
 */
@Injectable({ providedIn: 'root' })
export class ValidationService {
	/**
	 * Manejadores de errores predefinidos para diferentes tipos de validación
	 */
	private readonly handlers: Record<string, ValidationHandler> = {
		required: () => 'Este campo es obligatorio',

		email: () => 'Ingrese un correo válido',

		minlength: (error) => {
			const { requiredLength } = error as { requiredLength: number };
			return `Debe tener al menos ${requiredLength} caracteres`;
		},

		maxlength: (error) => {
			const { requiredLength } = error as { requiredLength: number };
			return `Debe tener máximo ${requiredLength} caracteres`;
		},

		pattern: () => 'El formato no es válido',

		mustMatch: () => 'Los campos no coinciden',

		custom: (error) => {
			return (error as { message?: string }).message ?? 'Campo inválido';
		},

		emailExists: () => 'Este correo ya está registrado',
	};

	/**
	 * Registra un nuevo manejador de errores personalizado
	 * @param errorKey - Clave única para identificar el tipo de error
	 * @param handler - Función que maneja el error y devuelve el mensaje correspondiente
	 */
	register(errorKey: string, handler: ValidationHandler): void {
		this.handlers[errorKey] = handler;
	}

	/**
	 * Obtiene el mensaje de error más relevante para un control de formulario
	 * @param control - Control del formulario a validar
	 * @returns El mensaje de error si el control es inválido y ha sido tocado, null en caso contrario
	 */
	getErrorMessage(control: AbstractControl | null): string | null {
		if (!control?.errors || !control.touched) return null;

		for (const [key, value] of Object.entries(control.errors)) {
			const handler = this.handlers[key];
			if (handler) return handler(value, control);
		}

		return 'Campo inválido';
	}
}
