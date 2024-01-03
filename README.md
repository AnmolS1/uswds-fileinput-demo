# USWDS File Input Asynchronous Loading Solution

## problem
Incorrect styling of USWDS components due to asynchronous loading occurring when using the Angular router.

![incorrectly styled file input component before refresh](/images/problem-before-refresh.png "incorrectly styled file input component before refresh")

***incorrectly styled file input component before refresh***

![correctly styled file input component after refresh](/images/problem-after-refresh.png "incorrectly styled file input component after refresh")

***correctly styled file input component after refresh***

## solution

First, detect whether the route was accessed manually or through the Angular router. Then, import the component and initialize in the `OnInit` lifecycle event. Finally, ensure to only initialize the component manually if the route was accessed through the angular router.

If the component is loaded regardless of direct or indirect route access it will be loaded twice on direct access, once manually and once again when USWDS's JS modifies the static HTML automatically.

```javascript
// app.component.ts
import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

...
export class AppComponent implements OnDestroy {
	subscription: Subscription;
	
	constructor(private router: Router) {
		this.subscription = router.events.subscribe((event) => {
			if (event instanceof NavigationStart) {
				// check if route was accessed directly or through router
				browserRefresh = !router.navigated;
			}
		});
	}
	
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
```

```javascript
// fileinput.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { browserRefresh } from '../app.component';

//@ts-ignore
import fileinput from '@uswds/uswds/js/usa-file-input';

...
export class FileInputComponent implements OnInit, OnDestroy {
	ngOnInit(): void {
		// if route was not accessed directly, we have to switch it on manually
		if (!browserRefresh) {
			fileinput.on();
		}
	}
	
	ngOnDestroy(): void {
		fileinput.off();
	}
}
```
