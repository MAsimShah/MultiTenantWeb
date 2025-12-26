import { Routes } from '@angular/router';
import { Signup } from './auth/signup/signup/signup';

export const routes: Routes = [
    {
        path: '',
        component: Signup
    },
    {
        path: 'signup',
        component: Signup
    }
];
