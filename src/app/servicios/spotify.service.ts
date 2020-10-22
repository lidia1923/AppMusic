import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  cabeceras: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQBm13regobhgGa5ixY-UcBc_K1WQvpw97Pt_IXFR-WPZtWaZgqUT2a0BC1pMhcqUWeXEFpz__iqQTjGtGo'
  });

  constructor(private http: HttpClient) { }

  getNewReleases() {
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=10', {headers: this.cabeceras});
  }

  getArtistas(termino: string){
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers: this.cabeceras});
  }

  getArtista(id: string){
    return this.http.get(`https://api.spotify.com/v1/artists/${id}`, {headers: this.cabeceras});
  }
  
  getTopTrack(id: string){
    return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=AR`, {headers: this.cabeceras});
  }

  getTrack(id: string){
    return this.http.get(`https://api.spotify.com/v1/tracks/${id}?market=EC`,{headers: this.cabeceras});
  }
}
