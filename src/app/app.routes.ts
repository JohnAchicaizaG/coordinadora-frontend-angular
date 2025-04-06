import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '@core/layout/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from '@features/dashboard/layout/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full', // 👈 importante: sin esto no funciona correctamente
		redirectTo: 'login', // 👈 redirige a /login
	},
	{
		path: '',
		component: AuthLayoutComponent,
		children: [
			{
				path: 'login',
				loadComponent: () =>
					import('@features/auth/pages/login/login-page.component'),
			},
			{
				path: 'register',
				loadComponent: () =>
					import('@features/auth/pages/register/register-page.component'),
			},
		],
	},
	{
		path: 'dashboard',
		component: DashboardLayoutComponent,
		children: [
			{
				path: '',
				loadComponent: () =>
					import('@features/dashboard/pages/home/home.component'),
			},
		],
	},
];
