import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Settings } from '../logic/settings';
import { BehaviorSubject, Observable, config } from 'rxjs';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class BreedService {
    private currentUserSubject: BehaviorSubject<User>;
    constructor(
        private http: HttpClient) {
        // https://dog.ceo/api/breeds/list/all 
    }

    async getAllBreeds() {
        //return this.http.get<any>(`https://dog.ceo/api/breeds/list/all/${videoId}`).toPromise();
        return this.http.get<any>("https://dog.ceo/api/breeds/list/all").toPromise();
    }

    async getRandomBreedImagePath(baseBreedName: string, subBreedName: string) {
        return this.http.get<any>(this.buildRandomUrl(baseBreedName, subBreedName)).toPromise();
    }

    buildRandomUrl(baseBreedName: string, subBreedName: string) {
        if (subBreedName) {
            return `https://dog.ceo/api/breed/${baseBreedName}/${subBreedName}/images/random`;
        } else {
            return `https://dog.ceo/api/breed/${baseBreedName}/images/random`;
        }
    }
}   