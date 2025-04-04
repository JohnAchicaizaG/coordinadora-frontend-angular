import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

type ValidationHandler = (error: unknown, control: AbstractControl) => string;

@Injectable({ providedIn: 'root' })
export class ValidationService {
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
	 * Permite registrar nuevos errores personalizados desde cualquier parte
	 */
	register(errorKey: string, handler: ValidationHandler): void {
		this.handlers[errorKey] = handler;
	}

	/**
	 * Devuelve el mensaje más relevante del control si está tocado
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
