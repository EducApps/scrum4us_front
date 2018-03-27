import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { StoryComponent } from './story/story.component';
import { BacklogComponent } from './backlog/backlog.component';
import { SprintComponent } from './sprint/sprint.component';
import { BurndownComponent } from './burndown/burndown.component';

const appRoutes: Routes = [
  { path: '/'        , component: AppComponent },
  { path: 'time'     , component: TimeComponent },
  { path: 'story'    , component: StoryComponent },
  { path: 'sprint'   , component: SprintComponent },
  { path: 'backlog'  , component: BacklogComponent },
  { path: 'burndown' , component: BurndownComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    StoryComponent,
    BacklogComponent,
    BurndownComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
