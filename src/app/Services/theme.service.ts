import { computed, Inject, Injectable, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**
 * Service to switch the theme of the application
 */
@Injectable({
    providedIn: 'root',
})
export class ThemeService {


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
    switchTheme(theme: string) {
        let themeLink = this.document.getElementById(
            'app-theme'
        ) as HTMLLinkElement;

        if (themeLink) {
            themeLink.href = theme + '.css';
        }
    }
}

