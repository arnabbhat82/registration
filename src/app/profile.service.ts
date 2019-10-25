import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profileApiEndPoint =
    'https://chocomonks-40d4f.firebaseio.com/posts.json';

  constructor(private http: HttpClient) {}
  addProfile(newProfile: Profile): Observable<Profile> {
    return this.http.post(this.profileApiEndPoint, newProfile) as Observable<
      Profile
    >;
  }
}
