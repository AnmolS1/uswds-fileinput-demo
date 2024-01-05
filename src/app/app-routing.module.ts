import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileInputComponent } from './fileinput/fileinput.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'fileinput', component: FileInputComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
