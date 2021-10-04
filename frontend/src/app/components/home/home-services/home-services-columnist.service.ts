import { CarouselContent } from '../../sourceComponents/home-components/home-carousel/carouselContent.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HomeColumnistService {

    baseURL = "http://localhost:3001/columnist"

    constructor(private httpClient: HttpClient) { }


    //columnist services
    listCarouselContent(): Observable<CarouselContent[]> {
        return this.httpClient.get<CarouselContent[]>(this.baseURL)
    }

    createCarouselContent(carousel: CarouselContent): Observable<CarouselContent> {
        return this.httpClient.post<CarouselContent>(this.baseURL, carousel)
    }
}