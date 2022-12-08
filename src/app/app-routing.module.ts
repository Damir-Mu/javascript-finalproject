import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'products', 
    component: ProductsListComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'products/:productId', 
    component: ProductDetailsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'cart', 
    component: ShoppingCartComponent,
    canActivate: [AuthGuard]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}