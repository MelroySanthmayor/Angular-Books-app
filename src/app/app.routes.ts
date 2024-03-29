import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BooksComponent } from './books/books.component';
import { SignupComponent } from './signup/signup.component';



export const AppRoutes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent},
    { path: 'books-page', component: BooksComponent},
    { path: 'signup', component : SignupComponent}

]