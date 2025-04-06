/**
 * Configuración de rutas principales de la aplicación.
 * Define las rutas para autenticación y dashboard.
 */
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '@core/layout/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from '@features/dashboard/layout/dashboard-layout/dashboard-layout.component';

/**
 * @description
 * Configuración de rutas de la aplicación.
 *
 * @property {string} path - Ruta base para el grupo de rutas
 * @property {string} pathMatch - Estrategia de coincidencia de ruta
 * @property {string} redirectTo - Ruta a la que redirigir
 * @property {Component} component - Componente de layout a utilizar
 * @property {Array} children - Rutas hijas del layout
 */
export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'login',
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
