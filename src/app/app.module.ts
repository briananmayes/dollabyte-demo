import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { UtilityComponent } from './components/utility/utility.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DollabyteComponent } from './components/dollabyte/dollabyte.component';
import { AboutComponent } from './components/about/about.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { TeamComponent } from './components/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UtilityComponent,
    FooterComponent,
    DollabyteComponent,
    AboutComponent,
    RoadmapComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
