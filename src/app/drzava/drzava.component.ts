import { DrzavaService } from './../drzava.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drzava } from './drzava.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-drzava',
  templateUrl: './drzava.component.html',
  styleUrls: ['./drzava.component.css']
})
export class DrzavaComponent implements OnInit {

  listaDrzava: Drzava[];

  constructor(
    private drzavaService: DrzavaService,
    private router: Router) { }

  ngOnInit() {
    this.refreshDrzave();
  }

  delete(id: number) {
    this.drzavaService.delete(id).subscribe(this.refreshDrzave, this.refreshDrzave);
  }

  openEditNew(id?: number) {
    this.router.navigate(['drzavaEditNew/' + id || '']);
  }

  private refreshDrzave = () => {
    this.drzavaService.getAll().subscribe(
      drzave => this.listaDrzava = drzave
    );
  }

}
