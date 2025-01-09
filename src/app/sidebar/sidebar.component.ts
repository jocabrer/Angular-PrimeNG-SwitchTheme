import { Component, inject } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../Services/theme.service';

@Component({
  selector: 'app-sidebar',
  imports: [DrawerModule, ButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
	visible: boolean = false;
	themes = inject(ThemeService);


}
