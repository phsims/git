import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GithubService } from '../services/github.service';
import { RepoDetails } from '../models/repos';


@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss']
})
export class RepoDetailsComponent implements OnInit {
  repo:RepoDetails;

  constructor(private route: ActivatedRoute, private location: Location, private githubService: GithubService) { }

  getRepo(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const owner = this.route.snapshot.paramMap.get('owner');
    console.log('id',this.route.snapshot.paramMap)
    console.log('owner',owner)
    this.githubService.getRepo(id, owner)
      .subscribe(res => {this.repo = res, console.log('res',res)});
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getRepo();
  }

}
