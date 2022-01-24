import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class AppStocksDataService {
  private API_KEY='k5J9FIsce1aD5OCaQ2qGuJ1VU7n7MQeH'
  constructor(private restApiService:RestApiService) { }

  getStockSList() {
    
    let params: HttpParams = new HttpParams();
    params = params.set('apiKey', this.API_KEY);
    params = params.set('active', 'true');
    params = params.set('sort', 'ticker');
    params = params.set('order', 'asc');
  return this.restApiService.getApiAcess('https://api.polygon.io/v3/reference/tickers',params)

  }
  getStockData(data) {
    
    let params: HttpParams = new HttpParams();
    params = params.set('adjusted', 'true');
    params = params.set('apiKey', this.API_KEY);
   
  return this.restApiService.getApiAcess(`https://api.polygon.io/v1/open-close/${data.ticker}/${this.formatDate(data.last_updated_utc)}`,params)

  }
   formatDate(date) {
    var d = new Date(date),
   
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDay()==6||d.getDay()==0)?d.getDate()-1:d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    // if (day.length < 2) 
    //     day = '0' + day;

    return [year, month, day].join('-');
}
 
}
