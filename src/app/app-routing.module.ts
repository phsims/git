import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';

const routes: Routes = [
  { path: '', component: RepoListComponent },
  { path: 'details/:owner/:id', component: RepoDetailsComponent },
  { path: '**', component: RepoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
