import { ApiResponse } from '@/app/core/models/api-response.model';
import { User } from '@/app/core/models/user-model';
import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
	private http = inject(HttpClient);
	readonly apiUrl = environment.apiUrl;

	/**
	 * Realiza el proceso de autenticación del usuario.
	 * @param credentials - Objeto que contiene las credenciales del usuario
	 * @param credentials.email - Correo electrónico del usuario
	 * @param credentials.password - Contraseña del usuario
	 * @returns Observable con la respuesta del servidor que incluye el usuario y el token de acceso
	 */
	login(credentials: {
		email: string;
		password: string;
	}): Observable<ApiResponse<{ user: User; accessToken: string }>> {
		return this.http.post<ApiResponse<{ user: User; accessToken: string }>>(
			`${this.apiUrl}/auth/login`,
			credentials,
		);
	}
}
