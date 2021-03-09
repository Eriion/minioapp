import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url: string;

  files = [];

  constructor(private appService: AppService) {}

  importFoldersOrFiles(files: FileList) {
    for (let i = 0; i < files.length; i += 1) {
      this.files.push(files.item(i));
    }
  }

  submit2() {
    this.appService.uploadFile2(this.files).subscribe();
  }

  async get1() {
    await this.appService.getUrl1();
  }

  async get2() {
    await this.appService.getUrl2();
  }
}
