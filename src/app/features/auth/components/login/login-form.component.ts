import { ValidationService } from '@/app/core/services/validation.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-login-form',
	imports: [ReactiveFormsModule],
	templateUrl: './login-form.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
	private fb = inject(FormBuilder);
	public validation = inject(ValidationService);

	form = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required, Validators.minLength(6)]],
	});

	onSubmit() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		const { email, password } = this.form.value;
		console.log('Login con:', email, password);

		// Aquí iría la lógica para llamar al AuthService
	}
}
