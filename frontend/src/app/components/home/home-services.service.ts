import { CarouselContent } from './../sourceComponents/home-components/home-carousel/carouselContent.model';
import { Observable } from 'rxjs';
import { Highlight } from './../sourceComponents/home-components/home-scroll-view/highlight.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {

  baseURL = "http://localhost:3001/highLights"

  constructor(private httpClient: HttpClient) { }

  //highligths services
  listHighLights(): Observable<Highlight[]>{
    return this.httpClient.get<Highlight[]>(this.baseURL)
  }

  createHighLight(highlight: Highlight): Observable<Highlight>{
    return this.httpClient.post<Highlight>(this.baseURL, highlight)
  }

  loadHighLights(id: number): Observable<Highlight>{
    const url = `${this.baseURL}/${id}`
    return this.httpClient.get<Highlight>(url)
  }

  //columnist services
  listCarouselContent(): Observable<CarouselContent[]>{
    return this.httpClient.get<CarouselContent[]>(this.baseURL)
  }

  createCarouselContent(carousel: CarouselContent): Observable<CarouselContent>{
    return this.httpClient.post<CarouselContent>(this.baseURL, carousel)
  }

}
