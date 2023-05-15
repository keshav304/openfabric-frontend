import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuardService } from './auth-guard.service';
import { ProductAuthGuard } from './product-auth-guard.service';
const routes: Routes = [
  { path: '', redirectTo: '/products',pathMatch: 'full'  },
  { path: 'products', component: ProductListComponent },
  { path: 'product/form', component: ProductFormComponent, canActivate: [ProductAuthGuard]  },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'product/edit/:id', component: ProductEditComponent, canActivate: [ProductAuthGuard]  },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuardService] },
  { path: 'signin', component: SigninComponent, canActivate: [AuthGuardService] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
