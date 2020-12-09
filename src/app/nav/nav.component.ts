import { Component, OnInit } from '@angular/core';
import {NavService } from "../nav.service"
//import * as csv from "csvtojson";

@Component({
  selector: 'ns-nav',
  templateUrl: './nav.component.tns.html',
  styleUrls: ['./nav.component.tns.css']
})

export class NavComponent implements OnInit {
    items: any;

    iconmoonLbl;
    iconmoonLb2;
    iconmoonLb3;
    constructor(private navService: NavService) {
        this.iconmoonLbl = String.fromCharCode(0xe994);
        this.iconmoonLb2 = String.fromCharCode(0xe99b);
        this.iconmoonLb3 = String.fromCharCode(0xe9d7);

    }

    ngOnInit(): void {
        let items : any;
        this.navService.getMarket()
            .then((response) => {items = response},(e) => { console.log(e)});
        this.items = items;
    }

    csvJSON(markets){

        var lines=markets.split("\n");

        var result = [];

        var headers=lines[0].split(",");

        for(var i=1;i<lines.length;i++){

            var obj = {};
            var currentline=lines[i].split(",");

            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = currentline[j];
            }

            result.push(obj);

        }

        return JSON.parse(JSON.stringify(result));
      }
}
