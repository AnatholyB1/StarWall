import { Component , OnInit} from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  map: google.maps.Map = {} as google.maps.Map;
  loader = new Loader({
    apiKey: "AIzaSyBONqCtI73Y1JsQaKdrhqcavg_WNgvIj1c",
    version: "weekly",
  });
  
  ngOnInit(): void {
    
    this.initMap()
    this.eqfeed_callback();
  }

    initMap(){
      this.loader.load().then(() => {
        this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: { lat: 20, lng: -160 },
          zoom: 2,
          mapId : '93ce53bc1365900d',
        });
      });
   
    
    }
    // Defines the callback function referenced in the jsonp file.
    eqfeed_callback() {

      
        
        const latLng = new google.maps.LatLng(37, -122);
        const marker = new google.maps.Marker({
          position: latLng,
          map: this.map,
        });
  }
}
  




