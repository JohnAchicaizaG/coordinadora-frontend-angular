import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-dashboard-layout',
	imports: [RouterOutlet],
	templateUrl: './dashboard-layout.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {}
