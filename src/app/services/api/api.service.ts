import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  public async getApi<T>(
    url: string,
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T>> {
    return axios.get(url, options);
  }
}
