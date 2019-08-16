import {Component, OnInit} from '@angular/core';
// import {TestService} from '../../projects/skg-lib-test/src/lib/test.service';
import {TestService} from 'skg-lib-test/lib/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sandeep-test';

  constructor(private skgLibTestService: TestService) {

  }

  ngOnInit(): void {
    this.skgLibTestService.showAlert();
  }

}
