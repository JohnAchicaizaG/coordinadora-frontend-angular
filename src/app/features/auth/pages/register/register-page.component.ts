import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RegisterFormComponent } from '@features/auth/components/register/register-form.component';
@Component({
	selector: 'app-register-page',
	imports: [RegisterFormComponent],
	templateUrl: './register-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterPageComponent {}
