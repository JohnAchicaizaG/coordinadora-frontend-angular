import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	let spectator: Spectator<AppComponent>;
	const createComponent = createComponentFactory(AppComponent);

	beforeEach(() => {
		spectator = createComponent();
	});

	it('debería crear el componente', () => {
		expect(spectator.component.title).toEqual('hola');
	});
});
