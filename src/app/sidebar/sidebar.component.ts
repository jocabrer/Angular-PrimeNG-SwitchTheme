import { Component, inject } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../Services/theme.service';
import Material from '@primeng/themes/material';
import Aura from '@primeng/themes/aura';
import Lara  from '@primeng/themes/lara';
import Nora  from '@primeng/themes/nora';


/**
 * Sidebar component
 */
@Component({
  selector: 'app-sidebar',
  imports: [DrawerModule, ButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
	/**
	 * Sidebar visibility
	 */
	visible: boolean = false;
	/**
	 * Sidebar theme
	 */
	themes = inject(ThemeService);
	/**
	 * material theme
	 */
	mat = Material;
	/**
	 * aura theme
	 */
	aura = Aura;
	/**
	 * lara theme
	 */
	lara = Lara;
	/**
	 * nora theme
	 */
	nora = Nora;

}
