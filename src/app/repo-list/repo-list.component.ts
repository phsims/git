import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import {GithubService} from '../services/github.service';
import { RepoDetails } from '../models/repos';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {
  repoList: Array<RepoDetails>;
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json", 'Accept': 'application/vnd.github.v3+json' })
  };

  constructor(private http: HttpClient, private githubService:GithubService) { }

  onSubmit(searchForm: NgForm): void {
    let repoName = searchForm.value.search;
    this.githubService.getResults(repoName)
      .subscribe(res => (this.repoList = res.items));
  }


  ngOnInit(): void {
  }

}
