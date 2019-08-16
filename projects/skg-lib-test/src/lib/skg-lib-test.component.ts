import { Component, OnInit } from '@angular/core';
import {TestService} from './test.service';

@Component({
  selector: 'lib-skg-lib-test',
  template: `
    <p>
      skg-lib-test works!
    </p>
  `,
  styles: []
})
export class SkgLibTestComponent implements OnInit {

  constructor(private test: TestService) { }

  ngOnInit() {
    this.test.showAlert();
  }

}
