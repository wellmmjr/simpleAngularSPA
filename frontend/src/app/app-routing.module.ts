import { MyAccountComponent } from './view/my-account/my-account.component';
import { NewsComponent } from './view/news/news.component';
import { ServicesComponent } from './view/services/services.component';
import { PostsComponent } from './view/posts/posts.component';
import { ScheduleComponent } from './view/schedule/schedule.component';
import { HomeComponent } from './view/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "schedule",
    component: ScheduleComponent
  },
  {
    path: "post",
    component: PostsComponent
  },
  {
    path: "services/list",
    component: ServicesComponent
  },
  {
    path: "news",
    component: NewsComponent
  },
  {
    path: "myaccount",
    component: MyAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
