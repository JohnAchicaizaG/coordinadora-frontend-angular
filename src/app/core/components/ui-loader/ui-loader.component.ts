import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
} from '@angular/core';
import { UiStore } from '../../store/ui.store';

@Component({
	selector: 'app-ui-loader',
	standalone: true,
	imports: [],
	templateUrl: './ui-loader.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLoaderComponent {
	private readonly ui = inject(UiStore);
	public readonly loading = computed(() => this.ui.loading());
}
