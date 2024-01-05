import { Component, OnDestroy, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { browserRefresh } from '../app.component';
import { files } from '../large_bois';

//@ts-ignore
import fileinput from '@uswds/uswds/js/usa-file-input';

@Component({
	selector: 'app-fileinput',
	templateUrl: './fileinput.component.html',
	styleUrl: './fileinput.component.less'
})
export class FileInputComponent implements OnInit, OnDestroy {
	origin: string = window.location.origin;
	
	scenario: string = 'solution';
	isSolution: boolean = this.scenario == 'solution';
	files: string = files;
	
	constructor(private cookieService: CookieService) { }
	
	ngOnInit(): void {
		if (this.checkCookie('scenario')) {
			this.scenario = this.getCookie('scenario');
			this.executeViewChange(false);
			
			this.isSolution = this.scenario == 'solution';
		}
		
		if (this.scenario == 'solution' && !browserRefresh) {
			fileinput.on();
		}
	}
	
	ngOnDestroy(): void {
		fileinput.off();
	}
	
	executeViewChange(route: boolean): void {
		this.setCookie('scenario', this.scenario, 30);
		if (route) {
			window.location.href = origin + '/uswds-fileinput-error-demo' + (this.scenario == 'solution' ? '/fileinput' : '');
		}
	}
	
	checkCookie(name: string) {
		return this.cookieService.check(name);
	}
	
	getCookie(name: string): string {
		return this.cookieService.get(name);
	}
	
	setCookie(name: string, value: string, days: number): void {
		const expires = days * 24 * 60 * 60 * 1000;
		const expirationDate = new Date(Date.now() + expires);

		this.cookieService.set(name, value, expirationDate, '/');
	}
}
