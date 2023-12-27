import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTestComponent } from './home-test/home-test.component';
import { FileInputComponent } from './fileinput/fileinput.component';

const routes: Routes = [
	{ path: '', component: HomeTestComponent },
	{ path: 'fileinput', component: FileInputComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
