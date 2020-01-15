import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

/**
 *  category service
 */
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  /**
   * get url for API defined in environment file
   */
  baseUrl = environment.baseUrl;

  /**
   * configuring required headers
   */
  /**
   * configuring required headers
   */
  private authHeader = new HttpHeaders({ auth: 'true'});
  /**
   * injecting the required dependencies for this service
   */
  constructor(private http: HttpClient) {}

  /**
   * makes a get request to get the app list
   *
   */

  getCategorylist() {
    return this.http.get(this.baseUrl + 'categories', {headers: this.authHeader});
  }

  /**
   * Add a get request to get the app list
   */

  addCategory(title: string, enable: boolean) {
    return this.http.post(this.baseUrl + 'categories', {title: title, enable: enable}, {headers: this.authHeader});
  }
}
