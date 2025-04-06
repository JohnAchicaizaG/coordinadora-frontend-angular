import {
	ApplicationConfig,
	provideAppInitializer,
	inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { AuthStore } from './features/auth/store/auth.store';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(),
		provideAppInitializer(() => {
			const authStore = inject(AuthStore);
			return authStore.restoreSession();
		}),
	],
};
