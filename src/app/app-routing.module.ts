import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { ConfigComponent } from './config/config.component';
import { CreateComponent } from './create/create.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'anuncios', component: AnnouncementsComponent },
  { path: 'configuracion', component: ConfigComponent },
  { path: 'nuevo-anuncio', component: CreateComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'buscar', component: SearchComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
