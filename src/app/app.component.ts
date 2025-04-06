import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiLoaderComponent } from './core/components/ui-loader/ui-loader.component';
@Component({
	selector: 'app-root',
	imports: [RouterOutlet, UiLoaderComponent],
	templateUrl: './app.component.html',
})
export class AppComponent {
	title = 'hola';
}
