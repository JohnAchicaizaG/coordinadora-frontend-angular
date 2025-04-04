import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationService } from '@core/services/validation.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-login-page',
	standalone: true,
	imports: [ReactiveFormsModule, CommonModule],
	templateUrl: './login-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginPageComponent {
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
