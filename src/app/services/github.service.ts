import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { RepoList, RepoDetails } from '../models/repos';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  repoList: RepoList;
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json", 'Accept': 'application/vnd.github.v3+json' })
  };

  constructor(private http: HttpClient) { }

  getResults(repoName): Observable<RepoList> {
    return this.http.get<RepoList>(`https://api.github.com/search/repositories?q=${repoName}&sort=stars&order=desc`, this.httpOptions)
  }

  getRepo(id, owner): Observable<RepoDetails> {
    return this.http.get<RepoDetails>(`https://api.github.com/repos/${owner}/${id}`, this.httpOptions)
  }

}
