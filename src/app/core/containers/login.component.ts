import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '@etdb/reducers';
import { Observable } from 'rxjs';
import { UserLogin } from '@etdb/core/models';

import * as titleActions from '../actions/title.actions';
import * as authActions from '../actions/auth.actions';

@Component({
    selector: 'etdb-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    loading$: Observable<boolean>;

    public constructor(private store: Store<fromRoot.AppState>) {
        this.store.dispatch(new titleActions.SetTitle('Login'));
        this.loading$ = this.store.select(fromRoot.getAuthLoading);
    }

    public login(userLogin: UserLogin) {
        this.store.dispatch(new authActions.Login(userLogin));
    }
}
