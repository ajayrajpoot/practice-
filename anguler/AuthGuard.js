/**
 * 14. What is AuthGuard in Angular ?
In Angular, Auth Guards are used to protect routes and determine whether a user is allowed to access a specific route or not based on their authentication status or user role. Auth Guards are implemented as services and are typically used in conjunction with Angular’s routing system.
Here’s an example to demonstrate how Auth Guards work in Angular:

Create an Auth Guard service:
 import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check the user's authentication status or role
    const isAuthenticated = /* your authentication check */;
    const userRole = /* get user role */;

    if (isAuthenticated && userRole === 'admin') {
      return true;  // Allow access to the route
    } else {
      this.router.navigate(['/login']);  // Redirect to login page or unauthorized page
      return false; // Deny access to the route
    }
  }
}
2. Define routes in the app module:
 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
In this example, we have three routes: the home route, the admin route, and the login route. The admin route is protected by the AuthGuard by setting the canActivate property to [AuthGuard].
3. Implement the protected component:
 import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: 'Admin Page'
})
export class AdminComponent { }
4. Use the Auth Guard in the template or component:
 <!-- Example of using Auth Guard in a template -->
<button [routerlink]="['/admin']" *ngif="isAuthenticated">Go to Admin</button>

<!-- Example of using Auth Guard in a component -->
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-some-component',
  template: `
    <button (click)="goToAdmin()" *ngif="isAuthenticated">Go to Admin</button>
  `
})
export class SomeComponent {
  isAuthenticated: boolean;

  constructor(private router: Router) {}

  goToAdmin() {
    if (this.isAuthenticated) {
      this.router.navigate(['/admin']);
    }
  }
}
In both examples above, the Auth Guard is used to conditionally display or navigate to the admin route based on the user’s authentication status. If the user is authenticated and has the appropriate role (in this case, ‘admin’), they are granted access to the route. Otherwise, they are redirected to the login page or an unauthorized page.
Conclusion :
Auth Guards play a crucial role in securing routes and controlling access to different parts of an Angular application based on authentication and authorization rules. By implementing and utilizing Auth Guards, you can ensure that certain routes are protected and only accessible to authorized users.

 */