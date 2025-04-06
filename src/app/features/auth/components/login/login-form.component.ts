import { ValidationService } from '@/app/core/services/validation.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthStore } from '../../store/auth.store';

/**
 * Componente que maneja el formulario de inicio de sesión.
 * Utiliza ReactiveFormsModule para el manejo de formularios reactivos.
 * Implementa ChangeDetectionStrategy.OnPush para optimizar el rendimiento.
 */
@Component({
	selector: 'app-login-form',
	imports: [ReactiveFormsModule],
	templateUrl: './login-form.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
	private fb = inject(FormBuilder);
	public validation = inject(ValidationService);
	public auth = inject(AuthStore);

	/**
	 * Formulario reactivo para el inicio de sesión.
	 * Contiene validaciones para email y contraseña.
	 * - Email: requerido y debe ser un email válido
	 * - Contraseña: requerida y debe tener al menos 6 caracteres
	 */
	form = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required, Validators.minLength(6)]],
	});

	/**
	 * Maneja el envío del formulario de inicio de sesión.
	 * - Valida el formulario y marca todos los campos como tocados si es inválido
	 * - Extrae los valores de email y contraseña
	 * - Llama al método login del AuthStore con las credenciales
	 */
	onSubmit() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		const { email, password } = this.form.value;

		this.auth.login({
			email: email as string,
			password: password as string,
		});
	}
}
