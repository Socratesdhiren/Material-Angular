import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 *  authentication service
 */
@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticationService {

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
   * makes a POST request to administrator login API
   *
   * @param {object} - object of type Login class.
   *
   * @returns user informations such as name and jwt tokens
   */

  login(username: string, password: string) {
    return this.http.post(this.baseUrl + 'login' , {user_name: username, password: password});
  }

  /**
   * makes a GET request to administrator logout API
   *
   * @returns user
   */
  logout() {
    return this.http.get(this.baseUrl + 'logout', {headers: this.authHeader});
  }
}
