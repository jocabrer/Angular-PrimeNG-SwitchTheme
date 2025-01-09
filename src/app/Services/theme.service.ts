import { computed, inject, Inject, Injectable, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrimeNG } from 'primeng/config';
import { MaterialBaseDesignTokens } from '@primeng/themes/material/base';
import { Preset } from '@primeng/themes/types';

/**
 * Service to switch the theme of the application
 */
@Injectable({
    providedIn: 'root',
})
export class ThemeService {

	primeng = inject( PrimeNG );
    private _themeSelected = signal<Preset<MaterialBaseDesignTokens>>({} as Preset<MaterialBaseDesignTokens>);
	public themeSelected =  computed( () => this._themeSelected() );

    /**
     * Constructor of the service
    */
    constructor() {}

    /**
     * Switch the theme of the application
     * @param theme Theme to switch to
     */
    switchTheme(t: Preset<MaterialBaseDesignTokens>) {
		this._themeSelected.set( t );
		console.log( t );
        this.primeng.setThemeConfig(
            {
                theme: {
                    preset: t,
                }
            }
        );
    }
}

