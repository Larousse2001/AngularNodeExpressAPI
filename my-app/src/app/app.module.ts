import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DisplayBoardComponent } from './display-board.component';
import { UsersComponent } from './users.component';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { RecipesModule } from './recipes/recipes.module';


// state related imports
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { reducers, metaReducers } from './app-state/reducers';
// import { CustomRouterStateSerializer } from './app-state/shared/utils';
// import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        DisplayBoardComponent,
        UsersComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RecipesModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        SharedModule,
        HttpClientModule,
    ]
})
export class AppModule { }
