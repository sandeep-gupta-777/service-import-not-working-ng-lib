import {ModuleWithProviders, NgModule} from '@angular/core';
import {SkgLibTestComponent} from './skg-lib-test.component';
import {TestService} from './test.service';

@NgModule({
  declarations: [SkgLibTestComponent],
  exports: [SkgLibTestComponent],
  imports: [],
})
export class SkgLibTestModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SkgLibTestModule,
      providers: [TestService]
    };
  }
}
