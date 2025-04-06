import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationService } from '@core/services/validation.service';
import { Role } from '@core/enums/role.enum';

@Component({
	selector: 'app-register-form',
	standalone: true,
	imports: [ReactiveFormsModule, CommonModule],
	templateUrl: './register-form.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
	private fb = inject(FormBuilder);
	public validation = inject(ValidationService);

	roles = Object.values(Role);

	form = this.fb.group({
		name: ['', [Validators.required]],
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required, Validators.minLength(6)]],
		role: [undefined, [Validators.required]],
	});

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
