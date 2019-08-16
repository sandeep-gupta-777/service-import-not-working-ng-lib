import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SkgLibTestModule} from 'skg-lib-test';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    (SkgLibTestModule as any).forRoot(),//throws error: ERROR in src/app/app.module.ts(13,22): error TS2339: Property 'forRoot' does not exist on type 'typeof SkgLibTestModule'
    // SkgLibTestModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
