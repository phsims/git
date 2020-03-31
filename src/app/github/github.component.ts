import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json", 'Accept': 'application/vnd.github.v3+json'})
  };
  
  constructor(private http: HttpClient) { }

  onSubmit(searchForm: NgForm){
   let repoName = searchForm.value.search
    return this.http.get(`https://api.github.com/search/repositories?q=${repoName}&sort=stars&order=desc`,this.httpOptions)
    .pipe(
      map(res => console.log('res',res))
      // catchError()
    ).subscribe();
  }

  ngOnInit() {
  }

}
// https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc