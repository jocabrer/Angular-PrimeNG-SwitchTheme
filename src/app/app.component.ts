import { Component, computed, inject, signal } from '@angular/core';
import { ThemeService } from './Services/theme.service';
import { SidebarComponent } from "./sidebar/sidebar.component";

/**
 * The main component of the application
 */
@Component({
    selector: 'app-root',
    imports: [SidebarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {

	theme = inject(ThemeService);




}
