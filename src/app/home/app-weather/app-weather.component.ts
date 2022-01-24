import { Component, OnInit } from '@angular/core';
import { AppWeatherDataService } from './app-weather-data.service';
import { groupBy, GroupResult } from "@progress/kendo-data-query";
@Component({
  selector: 'app-app-weather',
  templateUrl: './app-weather.component.html',
  styleUrls: ['./app-weather.component.scss']
})
export class AppWeatherComponent implements OnInit {
  locations: GroupResult[];
  //currentLocation:any;
  weatherData: any;
  todayForeCast: any;
  selectedLocation: any;
  timeString: string;
  todayDate: string;
  currentData: any;
  tempUnit:any='C';
  constructor(private weatherService:AppWeatherDataService) { }

  ngOnInit(): void {
    //this.selectedLocation={'Key':'347629','EnglishName':'San Francisco','Country':{'ID':'US'}}
    this.todayDate=new Date().toLocaleDateString()
    this.getCurrentLocation();
    this.startClock();
    this.weatherService.getCities().subscribe(res=>{
     this.locations = groupBy(res, [
      { field: "Country.EnglishName" },
    ]);
    })
  }
   startClock(){
    setInterval(()=>{
     this.timeString=new Date().toLocaleTimeString();
    }, 1000);
  }
  
  getCurrentLocation() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    let success=(pos)=> {
      var crd = pos.coords;
    
    
    
     this.weatherService.getCityData(crd.latitude,crd.longitude)
       .subscribe(arg =>{

        this.selectedLocation = arg
        
        this.updateWeatherData();
       } );
   // this.updateWeatherData();
    }
    
    let error=(err)=> {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      this.selectedLocation={'Key':'347629','EnglishName':'San Francisco','Country':{'ID':'US'}}
      this.updateWeatherData();
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
  }
  updateWeatherData()
  {

    //this.currentData={"LocalObservationDateTime":"2022-01-24T08:28:00+05:30","EpochTime":1642993080,"WeatherText":"Partly sunny","WeatherIcon":3,"HasPrecipitation":false,"PrecipitationType":null,"IsDayTime":true,"Temperature":{"Metric":{"Value":21.1,"Unit":"C","UnitType":17},"Imperial":{"Value":70.0,"Unit":"F","UnitType":18}},"RealFeelTemperature":{"Metric":{"Value":24.2,"Unit":"C","UnitType":17,"Phrase":"Pleasant"},"Imperial":{"Value":76.0,"Unit":"F","UnitType":18,"Phrase":"Pleasant"}},"RealFeelTemperatureShade":{"Metric":{"Value":21.9,"Unit":"C","UnitType":17,"Phrase":"Pleasant"},"Imperial":{"Value":71.0,"Unit":"F","UnitType":18,"Phrase":"Pleasant"}},"RelativeHumidity":88,"IndoorRelativeHumidity":88,"DewPoint":{"Metric":{"Value":18.9,"Unit":"C","UnitType":17},"Imperial":{"Value":66.0,"Unit":"F","UnitType":18}},"Wind":{"Direction":{"Degrees":45,"Localized":"NE","English":"NE"},"Speed":{"Metric":{"Value":3.7,"Unit":"km/h","UnitType":7},"Imperial":{"Value":2.3,"Unit":"mi/h","UnitType":9}}},"WindGust":{"Speed":{"Metric":{"Value":3.7,"Unit":"km/h","UnitType":7},"Imperial":{"Value":2.3,"Unit":"mi/h","UnitType":9}}},"UVIndex":2,"UVIndexText":"Low","Visibility":{"Metric":{"Value":6.4,"Unit":"km","UnitType":6},"Imperial":{"Value":4.0,"Unit":"mi","UnitType":2}},"ObstructionsToVisibility":"","CloudCover":35,"Ceiling":{"Metric":{"Value":12192.0,"Unit":"m","UnitType":5},"Imperial":{"Value":40000.0,"Unit":"ft","UnitType":0}},"Pressure":{"Metric":{"Value":1010.0,"Unit":"mb","UnitType":14},"Imperial":{"Value":29.83,"Unit":"inHg","UnitType":12}},"PressureTendency":{"LocalizedText":"Rising","Code":"R"},"Past24HourTemperatureDeparture":{"Metric":{"Value":-1.7,"Unit":"C","UnitType":17},"Imperial":{"Value":-3.0,"Unit":"F","UnitType":18}},"ApparentTemperature":{"Metric":{"Value":21.7,"Unit":"C","UnitType":17},"Imperial":{"Value":71.0,"Unit":"F","UnitType":18}},"WindChillTemperature":{"Metric":{"Value":21.1,"Unit":"C","UnitType":17},"Imperial":{"Value":70.0,"Unit":"F","UnitType":18}},"WetBulbTemperature":{"Metric":{"Value":19.7,"Unit":"C","UnitType":17},"Imperial":{"Value":67.0,"Unit":"F","UnitType":18}},"Precip1hr":{"Metric":{"Value":0.0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0.0,"Unit":"in","UnitType":1}},"PrecipitationSummary":{"Precipitation":{"Metric":{"Value":0.0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0.0,"Unit":"in","UnitType":1}},"PastHour":{"Metric":{"Value":0.0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0.0,"Unit":"in","UnitType":1}},"Past3Hours":{"Metric":{"Value":0.0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0.0,"Unit":"in","UnitType":1}},"Past6Hours":{"Metric":{"Value":0.0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0.0,"Unit":"in","UnitType":1}},"Past9Hours":{"Metric":{"Value":0.0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0.0,"Unit":"in","UnitType":1}},"Past12Hours":{"Metric":{"Value":0.0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0.0,"Unit":"in","UnitType":1}},"Past18Hours":{"Metric":{"Value":0.0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0.0,"Unit":"in","UnitType":1}},"Past24Hours":{"Metric":{"Value":0.0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0.0,"Unit":"in","UnitType":1}}},"TemperatureSummary":{"Past6HourRange":{"Minimum":{"Metric":{"Value":20.0,"Unit":"C","UnitType":17},"Imperial":{"Value":68.0,"Unit":"F","UnitType":18}},"Maximum":{"Metric":{"Value":22.9,"Unit":"C","UnitType":17},"Imperial":{"Value":73.0,"Unit":"F","UnitType":18}}},"Past12HourRange":{"Minimum":{"Metric":{"Value":20.0,"Unit":"C","UnitType":17},"Imperial":{"Value":68.0,"Unit":"F","UnitType":18}},"Maximum":{"Metric":{"Value":26.1,"Unit":"C","UnitType":17},"Imperial":{"Value":79.0,"Unit":"F","UnitType":18}}},"Past24HourRange":{"Minimum":{"Metric":{"Value":20.0,"Unit":"C","UnitType":17},"Imperial":{"Value":68.0,"Unit":"F","UnitType":18}},"Maximum":{"Metric":{"Value":30.0,"Unit":"C","UnitType":17},"Imperial":{"Value":86.0,"Unit":"F","UnitType":18}}}},"MobileLink":"http://www.accuweather.com/en/in/pulpatta/2875674/current-weather/2875674?lang=en-us","Link":"http://www.accuweather.com/en/in/pulpatta/2875674/current-weather/2875674?lang=en-us"}
    this.weatherService.getcurrentConditions(this.selectedLocation.Key).subscribe((res)=>{
      console.log(res);
      this.currentData=res[0]
    })
 


    // this.weatherData=[{ "Date": "2022-01-24T07:00:00+05:30", "EpochDate": 1642987800, "Temperature": { "Minimum": { "Value": 68.0, "Unit": "F", "UnitType": 18 }, "Maximum": { "Value": 88.0, "Unit": "F", "UnitType": 18 } }, "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false }, "Night": { "Icon": 33, "IconPhrase": "Clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://www.accuweather.com/en/in/pulpatta/2875674/daily-weather-forecast/2875674?day=1&lang=en-us", "Link": "http://www.accuweather.com/en/in/pulpatta/2875674/daily-weather-forecast/2875674?day=1&lang=en-us" }, { "Date": "2022-01-25T07:00:00+05:30", "EpochDate": 1643074200, "Temperature": { "Minimum": { "Value": 70.0, "Unit": "F", "UnitType": 18 }, "Maximum": { "Value": 88.0, "Unit": "F", "UnitType": 18 } }, "Day": { "Icon": 3, "IconPhrase": "Partly sunny", "HasPrecipitation": false }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://www.accuweather.com/en/in/pulpatta/2875674/daily-weather-forecast/2875674?day=2&lang=en-us", "Link": "http://www.accuweather.com/en/in/pulpatta/2875674/daily-weather-forecast/2875674?day=2&lang=en-us" }, { "Date": "2022-01-26T07:00:00+05:30", "EpochDate": 1643160600, "Temperature": { "Minimum": { "Value": 72.0, "Unit": "F", "UnitType": 18 }, "Maximum": { "Value": 88.0, "Unit": "F", "UnitType": 18 } }, "Day": { "Icon": 3, "IconPhrase": "Partly sunny", "HasPrecipitation": false }, "Night": { "Icon": 36, "IconPhrase": "Intermittent clouds", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://www.accuweather.com/en/in/pulpatta/2875674/daily-weather-forecast/2875674?day=3&lang=en-us", "Link": "http://www.accuweather.com/en/in/pulpatta/2875674/daily-weather-forecast/2875674?day=3&lang=en-us" }, { "Date": "2022-01-27T07:00:00+05:30", "EpochDate": 1643247000, "Temperature": { "Minimum": { "Value": 72.0, "Unit": "F", "UnitType": 18 }, "Maximum": { "Value": 89.0, "Unit": "F", "UnitType": 18 } }, "Day": { "Icon": 3, "IconPhrase": "Partly sunny", "HasPrecipitation": false }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://www.accuweather.com/en/in/pulpatta/2875674/daily-weather-forecast/2875674?day=4&lang=en-us", "Link": "http://www.accuweather.com/en/in/pulpatta/2875674/daily-weather-forecast/2875674?day=4&lang=en-us" }, { "Date": "2022-01-28T07:00:00+05:30", "EpochDate": 1643333400, "Temperature": { "Minimum": { "Value": 71.0, "Unit": "F", "UnitType": 18 }, "Maximum": { "Value": 92.0, "Unit": "F", "UnitType": 18 } }, "Day": { "Icon": 2, "IconPhrase": "Mostly sunny", "HasPrecipitation": false }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://www.accuweather.com/en/in/pulpatta/2875674/daily-weather-forecast/2875674?day=5&lang=en-us", "Link": "http://www.accuweather.com/en/in/pulpatta/2875674/daily-weather-forecast/2875674?day=5&lang=en-us" }];
  
    //   this.todayForeCast=this.weatherData.shift()
  console.log(this.selectedLocation)
    this.weatherService.getWeatherData(this.selectedLocation.Key).subscribe(res=>{
      if(res.DailyForecasts)
      {this.weatherData=res.DailyForecasts;
  
      this.todayForeCast=this.weatherData.shift()
      }
      else{
        this.weatherData=''
      }
      console.log(res)
    })
  }
  onValueChange(data){
  this.selectedLocation=data;
  console.log(this.selectedLocation)
    if (this.selectedLocation) {
      this.updateWeatherData();
  
}
  }
  getTempIcon(icon:any)
  {
    return `https://developer.accuweather.com/sites/default/files/${(icon)<10?'0'+icon:icon}-s.png`
  }
}
