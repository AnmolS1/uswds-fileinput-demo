import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeTestComponent } from './home-test/home-test.component';
import { FileInputComponent } from './fileinput/fileinput.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeTestComponent,
		FileInputComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
