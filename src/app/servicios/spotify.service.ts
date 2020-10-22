import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  cabeceras: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQAHvk0KKPhLMQ7mFKgTQk3l54MpExYhI7XeH0aYhQLP3Qu0OTEJTGrBn2AunpIcmqzHM4IJdSK1eYxRbsc'
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
