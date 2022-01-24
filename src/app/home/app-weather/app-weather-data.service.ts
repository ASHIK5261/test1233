import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppWeatherDataService {
  private API_KEY = 'W5Z77r3CLC8oDmFlsi3509G4APPDS7zi'

  constructor(private restApiService: RestApiService) { }
  getCities() {

    let params: HttpParams = new HttpParams();
    params = params.set('apikey', this.API_KEY);
    return this.restApiService.getApiAcess('https://dataservice.accuweather.com/locations/v1/topcities/150', params)

  }
  getWeatherData(location: any) {

    let params: HttpParams = new HttpParams();
    params = params.set('apikey', this.API_KEY);
    return this.restApiService.getApiAcess(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}`, params)

  }
  getCityData(latitude: any, longitude: any) {

    let params: HttpParams = new HttpParams();
    params = params.set('apikey', this.API_KEY);
    params = params.set('q', latitude + ',' + longitude);
    //return this.restApiService.getApiAcess(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=W5Z77r3CLC8oDmFlsi3509G4APPDS7zi&q=${latitude},${longitude}`,params)
    return this.restApiService.getApiAcess(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search`, params)
  }
  getcurrentConditions(location: any) {

    let params: HttpParams = new HttpParams();
    params = params.set('apikey', this.API_KEY);
    params = params.set('details', 'true');
    // return this.restApiService.getApiAcess(`https://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=W5Z77r3CLC8oDmFlsi3509G4APPDS7zi&details=true`,params)
    return this.restApiService.getApiAcess(`https://dataservice.accuweather.com/currentconditions/v1/${location}`, params)

  }
}
