import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  uploadFile2(files: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    for (const file of files) {
      formData.append('files', file);
    }

    return this.http.post(`http://localhost:3000/uploadFile2`, formData, {
      reportProgress: true,
      observe: 'events',
      responseType: 'json',
    });
  }

  async getUrl1() {
    return await this.http
      .get<string>('http://localhost:3000/url1')
      .toPromise();
  }

  async getUrl2() {
    return await this.http
      .get<string>('http://localhost:3000/url2')
      .toPromise();
  }
}
