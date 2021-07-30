import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ServicesSecctionComponent } from './components/providedServices/services-secction/services-secction.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HomeComponent } from './view/home/home.component';
import { PostsComponent } from './view/posts/posts.component';
import { ServicesComponent } from './view/services/services.component';
import { NewsComponent } from './view/news/news.component';
import { MyAccountComponent } from './view/my-account/my-account.component';
import { HomeHighlightsComponent } from './components/home/home-highlights/home-highlights.component';
import { HomeColumnistComponent } from './components/home/home-columnist/home-columnist.component';
import { ScheduleComponent } from './view/schedule/schedule.component'
import { MatCardModule } from '@angular/material/card';
import { HomeScrollViewComponent } from './components/sourceComponents/home-scroll-view/home-scroll-view.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    ServicesSecctionComponent,
    HomeComponent,
    PostsComponent,
    ServicesComponent,
    NewsComponent,
    MyAccountComponent,
    HomeHighlightsComponent,
    HomeColumnistComponent,
    ScheduleComponent,
    HomeScrollViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
