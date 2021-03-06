import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UploadComponent } from './upload/upload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoggedUserGuard } from './guards/logged-user.guard';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AdminUserGuard } from './guards/admin-user.guard';


const routes: Routes = [
  {
    path: "login",
    data: {
      title: "Login"
    },
    component: LoginComponent
  },
  {
    path: "create-user",
    data: {
      title: "Nuevo Usuario"
    },
    component: CreateUserComponent
  },
  {
    path: "upload",
    data: {
      title: "Subir Imagen"
    },
    component: UploadComponent,
    canActivate: [LoggedUserGuard]
  },
  {
    path: "dashboard",
    data: {
      title: "Inicio"
    },
    component: DashboardComponent,
    canActivate: [LoggedUserGuard]
  },
  {
    path: "admin",
    data: {
      title: "Panel de Administrador"
    },
    component: AdminComponent,
    canActivate: [LoggedUserGuard, AdminUserGuard]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile-user',
    data: {
      title: "Perfil de Usuario"
    },
    component: ProfileUserComponent,
    canActivate: [LoggedUserGuard]
  },
  {
    path: 'searchResult',
    data: {
      title: "Resultados de Búsqueda"
    },
    component: SearchResultsComponent,
    canActivate: [LoggedUserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
