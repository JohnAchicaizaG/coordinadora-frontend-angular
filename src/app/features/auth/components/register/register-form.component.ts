import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationService } from '@core/services/validation.service';
import { Role } from '@core/enums/role.enum';

/**
 * Componente que maneja el formulario de registro de usuarios.
 * Permite a los usuarios registrarse proporcionando su nombre, email, contraseña y rol.
 */
@Component({
	selector: 'app-register-form',
	standalone: true,
	imports: [ReactiveFormsModule, CommonModule],
	templateUrl: './register-form.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
	/** Servicio para construir formularios reactivos */
	private fb = inject(FormBuilder);
	/** Servicio para validaciones personalizadas */
	public validation = inject(ValidationService);

	/** Lista de roles disponibles para selección */
	roles = Object.values(Role);

	/** Formulario reactivo para el registro de usuarios */
	form = this.fb.group({
		name: ['', [Validators.required]],
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required, Validators.minLength(6)]],
		role: [undefined, [Validators.required]],
	});

	/**
	 * Maneja el envío del formulario de registro.
	 * Valida el formulario y procesa los datos si es válido.
	 */
	onSubmit() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		const data = this.form.value;
		console.log('Registro enviado:', data);
		// Aquí podrías llamar a un AuthService o emitir un evento
	}
}
