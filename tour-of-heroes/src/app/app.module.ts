import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrisisCenterHomeComponent } from './crisis-center/crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center/crisis-center.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { InMemoryDataService } from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CrisisCenterRoutingModule } from './crisis-center/crisis-center-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
