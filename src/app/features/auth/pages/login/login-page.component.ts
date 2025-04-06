import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '@features/auth/components/login/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
	selector: 'app-login-page',
	standalone: true,
	imports: [CommonModule, LoginFormComponent, ReactiveFormsModule],
	templateUrl: './login-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginPageComponent {}
