import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 *  dashboard service
 */
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  /**
   * get url for API defined in environment file
   */
  baseUrl = environment.baseUrl;

  /**
   * configuring required headers
   */
  private authHeader = new HttpHeaders({ auth: 'true'});

  /**
   * injecting the required dependencies for this service
   */
  constructor(private http: HttpClient) { }

  /**
   * makes a get request to get the app list
   *
   */

  getApplist() {
    return this.http.get(this.baseUrl + 'apps', {headers: this.authHeader} );
  }
}
