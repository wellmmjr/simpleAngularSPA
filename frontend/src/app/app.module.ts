import { HomeScrollViewComponent } from './components/sourceComponents/home-components/home-scroll-view/home-scroll-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

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
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
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
import { HomeCarouselComponent } from './components/sourceComponents/home-components/home-carousel/home-carousel.component';
import { PickPicTo64ButtonComponent } from './components/sourceComponents/noParentOnes/pick-pic-to64-button/pick-pic-to64-button.component';
import { PicFormTo64Component } from './components/sourceComponents/noParentOnes/pic-form-to64/pic-form-to64.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner';
import { PrettyAlertComponent } from './components/sourceComponents/noParentOnes/pretty-alert/pretty-alert.service'

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
    HomeScrollViewComponent,
    HomeCarouselComponent,
    PickPicTo64ButtonComponent,
    PicFormTo64Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {
    provide: LOCALE_ID,
    useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
