import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/model/Station';
import { StationServiceService } from 'src/app/Services/station-service.service';

@Component({
  selector: 'app-save-station',
  templateUrl: './save-station.component.html',
  styleUrls: ['./save-station.component.css']
})
export class SaveStationComponent implements OnInit {


   st  : Station = new Station();

  constructor(private stationservice : StationServiceService ) { }

  ngOnInit(): void {

    console.log(this.stationservice.SaveStation(this.st).subscribe(
      (response) => console.table(response),
      (err : any) => console.log(err),
      ()=> console.log('Done sending station data')
    ));
  }

}
