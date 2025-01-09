import { Component, inject } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../Services/theme.service';
import Material from '@primeng/themes/material';
import Aura from '@primeng/themes/aura';

@Component({
  selector: 'app-sidebar',
  imports: [DrawerModule, ButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

	mat = Material;
	aura = Aura;
	visible: boolean = false;
	themes = inject(ThemeService);


}
