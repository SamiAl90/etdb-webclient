import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as layoutActions from '../actions/layout.actions';
//import * as fromChild from '../reducers/layout.reducer';

@Component({
    selector: 'etdb-layout',
    templateUrl: 'layout.component.html'
})

export class LayoutComponent {
    links: any[] = [
        {
            path: 'movies',
            displayName: 'Movies',
            icon: 'movie'
        }
    ]
    showSidenav$: Observable<boolean>;
    private sidenavVisible: boolean;
    
    public constructor(private store: Store<fromRoot.State>) {
        this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
        this.subscribeShowSidenav();
    }

    private subscribeShowSidenav(): void {
        this.showSidenav$.subscribe(value => this.sidenavVisible = value, error => console.log(error));
    }


    private toggleSidenav(): void {
        console.log(this.sidenavVisible);
        if(!this.sidenavVisible)
            this.openSidenav();
        else
            this.closeSidenav();
    }

    private openSidenav(): void {
        this.store.dispatch(new layoutActions.OpenSidenav());
    }

    private closeSidenav(): void {
        this.store.dispatch(new layoutActions.CloseSidenav());
    }

    submit(value: any){
        
    }
}