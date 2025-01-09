import { computed, inject, Inject, Injectable, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrimeNG } from 'primeng/config';
import Material from '@primeng/themes/material';

/**
 * Service to switch the theme of the application
 */
@Injectable({
    providedIn: 'root',
})
export class ThemeService {

	primeng = inject( PrimeNG );
	private _themeName = signal<string>( '' );
	public themeName =  computed( () => this._themeName() );

    /**
     * Constructor of the service
     * @param document Inject the document object to access the DOM
     */
    constructor(@Inject(DOCUMENT) private document: Document) {}

    /**
     * Switch the theme of the application
     * @param theme Theme to switch to
     */
    switchTheme() {
        this.primeng.setThemeConfig(
            {
                theme: {
                    preset: Material,
                }
            }
        );
    }
}

