import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { CreateComponent } from './create/create.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserPanelComponent } from './userPanel/userPanel.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'anuncios', component: AnnouncementsComponent },
  { path: 'panel-usuario', component: UserPanelComponent },
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
