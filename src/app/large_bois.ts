// TODO
export const files: any = [
`// fileinput.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { browserRefresh } from '../app.component';

//@ts-ignore
import fileinput from '@uswds/uswds/js/usa-file-input';

@Component({
	selector: 'app-fileinput',
	templateUrl: './fileinput.component.html',
	styleUrl: './fileinput.component.less'
})
export class FileInputComponent implements OnInit, OnDestroy {
	ngOnInit(): void {
		if (!browserRefresh) {
			fileinput.on();
		}
	}
	
	ngOnDestroy(): void {
		fileinput.off();
	}
}`,

`// app.component.ts
import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.less'
})
export class AppComponent implements OnDestroy {
	title: string = 'fileinput';
	
	subscription: Subscription;
	
	constructor(private router: Router) {
		this.subscription = router.events.subscribe((event) => {
			if (event instanceof NavigationStart) {
				browserRefresh = !router.navigated;
			}
		});
	}
	
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}`];