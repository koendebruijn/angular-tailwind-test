import { Injectable } from '@angular/core';
import { Beer } from 'src/app/interfaces/beer';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  constructor(private apiService: ApiService) {}

  async getBeers(): Promise<Beer[]> {
    const url = 'https://api.punkapi.com/v2/beers';
    const response = await this.apiService.getApi<Beer[]>(url);

    return response.data;
  }
}
