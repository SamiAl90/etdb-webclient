import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from '@etdb/browse/container';
import { SignInComponent, RegisterComponent } from '@etdb/core/containers';
import { NotSignedInGuard } from '@etdb/core/guards';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'browse',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        component: SignInComponent,
        canActivate: [NotSignedInGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NotSignedInGuard]
    },
    {
        path: 'browse',
        component: BrowseComponent
    },
    {
        path: 'users',
        loadChildren: async () =>
            (await import('app/users/users.module')).UsersModule
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
