import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private singleJsonData = {
    add1: [
      {
        attribute: 'avc',
        value: 'Residential',
      },
      {
        attribute: 'aqi',
        value: 'Apartment',
      },
      {
        attribute: 'organisation',
        value: '108',
      },
      {
        attribute: 'Subbuilding',
        value: 'Tower 3',
      },
      {
        attribute: 'premise',
        value: 'Glenn Radars',
      },
      {
        attribute: 'building',
        value: 'NA',
      },
      {
        attribute: 'postbox',
        value: 'NA',
      },
      {
        attribute: 'dependentthoroughfare',
        value: 'Outer Ring Rd',
      },
      {
        attribute: 'thoroughfare',
        value: 'Mahatma Gandhi Street',
      },
      {
        attribute: 'doubledependentlocality',
        value: 'Sky Stream Township',
      },
      {
        attribute: 'dependentlocality',
        value: 'Manish Nagar',
      },
      {
        attribute: 'locality',
        value: 'Somelwada',
      },
      {
        attribute: 'subadministrativearea',
        value: 'MH',
      },
      {
        attribute: 'administrativearea',
        value: 'IND',
      },
      {
        attribute: 'superadministrativearea',
        value: 'IND',
      },
      {
        attribute: 'postalcode',
        value: '828122',
      },
      {
        attribute: 'country',
        value: 'IND',
      },
      {
        attribute: 'ISO1356',
        value: 'Verified',
      },
      {
        attribute: 'latitude',
        value: '98.889.89.09',
      },
      {
        attribute: 'longitude',
        value: '10.08.899.544',
      },
      {
        attribute: 'geoaccuracy',
        value: '877m',
      },
      {
        attribute: 'geodistance',
        value: '577m',
      },
    ],
  };
  private multiJsonData = {
    add1: [
      {
        attribute: 'avc',
        value: 'Residential',
      },
      {
        attribute: 'aqi',
        value: 'Apartment',
      },
      {
        attribute: 'organisation',
        value: '108',
      },
      {
        attribute: 'Subbuilding',
        value: 'Tower 3',
      },
      {
        attribute: 'premise',
        value: 'Glenn Radars',
      },
      {
        attribute: 'building',
        value: 'NA',
      },
      {
        attribute: 'postbox',
        value: 'NA',
      },
      {
        attribute: 'dependentthoroughfare',
        value: 'Outer Ring Rd',
      },
      {
        attribute: 'thoroughfare',
        value: 'Mahatma Gandhi Street',
      },
      {
        attribute: 'doubledependentlocality',
        value: 'Sky Stream Township',
      },
      {
        attribute: 'dependentlocality',
        value: 'Manish Nagar',
      },
      {
        attribute: 'locality',
        value: 'Somelwada',
      },
      {
        attribute: 'subadministrativearea',
        value: 'MH',
      },
      {
        attribute: 'administrativearea',
        value: 'IND',
      },
      {
        attribute: 'superadministrativearea',
        value: 'IND',
      },
      {
        attribute: 'postalcode',
        value: '828122',
      },
      {
        attribute: 'country',
        value: 'IND',
      },
      {
        attribute: 'ISO1356',
        value: 'Verified',
      },
      {
        attribute: 'latitude',
        value: '98.889.89.09',
      },
      {
        attribute: 'longitude',
        value: '10.08.899.544',
      },
      {
        attribute: 'geoaccuracy',
        value: '877m',
      },
      {
        attribute: 'geodistance',
        value: '577m',
      },
    ],

    add2: [
      {
        attribute: 'avc',
        value: 'Residential2',
      },
      {
        attribute: 'aqi',
        value: 'Apartment2',
      },
      {
        attribute: 'organisation',
        value: '108',
      },
      {
        attribute: 'Subbuilding',
        value: 'Tower 3',
      },
      {
        attribute: 'premise',
        value: 'Glenn Radars',
      },
      {
        attribute: 'building',
        value: 'NA',
      },
      {
        attribute: 'postbox',
        value: 'NA',
      },
      {
        attribute: 'dependentthoroughfare',
        value: 'Outer Ring Rd',
      },
      {
        attribute: 'thoroughfare',
        value: 'Mahatma Gandhi Street',
      },
      {
        attribute: 'doubledependentlocality',
        value: 'Sky Stream Township',
      },
      {
        attribute: 'dependentlocality',
        value: 'Manish Nagar',
      },
      {
        attribute: 'locality',
        value: 'Somelwada',
      },
      {
        attribute: 'subadministrativearea',
        value: 'MH',
      },
      {
        attribute: 'administrativearea',
        value: 'IND',
      },
      {
        attribute: 'superadministrativearea',
        value: 'IND',
      },
      {
        attribute: 'postalcode',
        value: '828122',
      },
      {
        attribute: 'country',
        value: 'IND',
      },
      {
        attribute: 'ISO1356',
        value: 'Verified',
      },
      {
        attribute: 'latitude',
        value: '98.889.89.09',
      },
      {
        attribute: 'longitude',
        value: '10.08.899.544',
      },
      {
        attribute: 'geoaccuracy',
        value: '877m',
      },
      {
        attribute: 'geodistance',
        value: '577m',
      },
    ],
    add3: [
      {
        attribute: 'avc',
        value: 'Residential3',
      },
      {
        attribute: 'aqi',
        value: 'Apartment3',
      },
      {
        attribute: 'organisation',
        value: '108',
      },
      {
        attribute: 'Subbuilding',
        value: 'Tower 3',
      },
      {
        attribute: 'premise',
        value: 'Glenn Radars',
      },
      {
        attribute: 'building',
        value: 'NA',
      },
      {
        attribute: 'postbox',
        value: 'NA',
      },
      {
        attribute: 'dependentthoroughfare',
        value: 'Outer Ring Rd',
      },
      {
        attribute: 'thoroughfare',
        value: 'Mahatma Gandhi Street',
      },
      {
        attribute: 'doubledependentlocality',
        value: 'Sky Stream Township',
      },
      {
        attribute: 'dependentlocality',
        value: 'Manish Nagar',
      },
      {
        attribute: 'locality',
        value: 'Somelwada',
      },
      {
        attribute: 'subadministrativearea',
        value: 'MH',
      },
      {
        attribute: 'administrativearea',
        value: 'IND',
      },
      {
        attribute: 'superadministrativearea',
        value: 'IND',
      },
      {
        attribute: 'postalcode',
        value: '828122',
      },
      {
        attribute: 'country',
        value: 'IND',
      },
      {
        attribute: 'ISO1356',
        value: 'Verified',
      },
      {
        attribute: 'latitude',
        value: '98.889.89.09',
      },
      {
        attribute: 'longitude',
        value: '10.08.899.544',
      },
      {
        attribute: 'geoaccuracy',
        value: '877m',
      },
      {
        attribute: 'geodistance',
        value: '577m',
      },
    ],

    add4: [
      {
        attribute: 'avc',
        value: 'Residential4',
      },
      {
        attribute: 'aqi',
        value: 'Apartment4',
      },
      {
        attribute: 'organisation',
        value: '108',
      },
      {
        attribute: 'Subbuilding',
        value: 'Tower 3',
      },
      {
        attribute: 'premise',
        value: 'Glenn Radars',
      },
      {
        attribute: 'building',
        value: 'NA',
      },
      {
        attribute: 'postbox',
        value: 'NA',
      },
      {
        attribute: 'dependentthoroughfare',
        value: 'Outer Ring Rd',
      },
      {
        attribute: 'thoroughfare',
        value: 'Mahatma Gandhi Street',
      },
      {
        attribute: 'doubledependentlocality',
        value: 'Sky Stream Township',
      },
      {
        attribute: 'dependentlocality',
        value: 'Manish Nagar',
      },
      {
        attribute: 'locality',
        value: 'Somelwada',
      },
      {
        attribute: 'subadministrativearea',
        value: 'MH',
      },
      {
        attribute: 'administrativearea',
        value: 'IND',
      },
      {
        attribute: 'superadministrativearea',
        value: 'IND',
      },
      {
        attribute: 'postalcode',
        value: '828122',
      },
      {
        attribute: 'country',
        value: 'IND',
      },
      {
        attribute: 'ISO1356',
        value: 'Verified',
      },
      {
        attribute: 'latitude',
        value: '98.889.89.09',
      },
      {
        attribute: 'longitude',
        value: '10.08.899.544',
      },
      {
        attribute: 'geoaccuracy',
        value: '877m',
      },
      {
        attribute: 'geodistance',
        value: '577m',
      },
    ],
  };

  constructor(private http: HttpClient) {}
  getSingleData(): Observable<any> {
    return of(this.singleJsonData);
  }
  getMultiData(): Observable<any> {
    return of(this.multiJsonData);
  }
  convertTowords(lat: any, long: any): Observable<any> {
    const key = 'CGYTJ264';
    // const encodedWord = encodeURIComponent(words.replace(/\s/g, '.'));
    const apiUrl = `https://api.what3words.com/v3/convert-to-3wa?coordinates=${lat},${long}&key=${key}`;
    return this.http.get(apiUrl);
  }

  // googleAddress(lat: number, lng: number): Observable<any> {
  //   // ?latlng=40.714224,-73.961452&key=
  //   const apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
  //   const apiKey = 'AIzaSyADCj8Ip43P2-Xqqc3unoik_pujt83DbaQ';
  //   const url = ` ${apiUrl}?latlng=${lat},${lng}&key=${apiKey}`;
  //   return this.http.get(url);
  // }

  hereMapAddress(lat: any, long: any): Observable<any> {
    const api_key = 'uWFrBdyc9MNmNMSewgV3jzlcEUZagJtS_pmZ5YsoGrs';
    const apiUrl = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat},${long}&lang=en-US&apiKey=${api_key}`;
    // const param = new HttpParams().set('at',`${lat},${long}`).set('apiKey',api_key)
    // console.log(apiUrl);
    return this.http.get(apiUrl);
  }
}
