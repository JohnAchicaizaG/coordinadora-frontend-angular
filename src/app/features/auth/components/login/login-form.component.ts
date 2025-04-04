import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-login-form',
	imports: [],
	templateUrl: './login-form.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {}
