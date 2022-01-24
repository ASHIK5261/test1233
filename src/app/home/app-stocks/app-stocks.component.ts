import { Component, OnInit } from '@angular/core';
import finnhub from 'node_modules/finnhub/dist';
import { AppStocksDataService } from './app-stocks-data.service';
@Component({
  selector: 'app-app-stocks',
  templateUrl: './app-stocks.component.html',
  styleUrls: ['./app-stocks.component.scss']
})
export class AppStocksComponent implements OnInit {
  stockList: any=[];
  selectedStock: any;
  stockData: { status: string; from: string; symbol: string; open: number; high: number; low: number; close: number; volume: number; afterHours: number; preMarket: number; };

  constructor(private stockDataService:AppStocksDataService) { }

  ngOnInit(): void {
    // this.selectedStock={active: true,
    //   'cik': "0000320193",
    //   'composite_figi': "BBG000B9XRY4",
    //   currency_name: "usd",
    //   last_updated_utc: "2022-01-22T00:00:00Z",
    //   locale: "us",
    //   market: "stocks",
    //   name: "Apple Inc.",
    //   primary_exchange: "XNAS",
    //   share_class_figi: "BBG001S5N8V8",
    //   ticker: "AAPL",
    //   type: "CS"
    //   }
    //   this.stockData={
    //     "status": "OK",
    //     "from": "2022-01-21",
    //     "symbol": "TCS",
    //     "open": 10.06,
    //     "high": 10.13,
    //     "low": 9.73,
    //     "close": 19.79,
    //     "volume": 670651,
    //     "afterHours": 9.79,
    //     "preMarket": 10.17
    //    }
    this.stockDataService.getStockSList().
      subscribe(arg =>{
        this.stockList = arg.results
        this.selectedStock=this.stockList.filter(obj=>obj.ticker=="AAPL")[0]
        console.log(this.selectedStock)
        this.updateStockData()
      } );
    
  }
  updateStockData() {
    this.stockDataService.getStockData(this.selectedStock).
    subscribe(res =>{
      this.stockData=res;
    });
  }
  onValueChange(data){
    this.selectedStock=data
    console.log(this.selectedStock)
    this.updateStockData()
  }
}
