import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';


const routes: Routes = [ { path: 'home', component: MainComponent},
                         { path: 'about', component: AboutusComponent},
                         { path: '', redirectTo: '/home', pathMatch: 'full'}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
