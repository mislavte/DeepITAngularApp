import { GradService } from './../grad.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Grad } from './grad.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-grad',
  templateUrl: './grad.component.html',
  styleUrls: ['./grad.component.css']
})
export class GradComponent implements OnInit {

  public listaGradova: Grad[];

  constructor(
    private gradService: GradService,
    private router: Router) { }

  ngOnInit() {
    this.refreshGradovi();
  }

  openEditNew(id?: number) {
    this.router.navigate(['gradEditNew/' + id || '']);
  }

  delete(id: number) {
    this.gradService.delete(id).subscribe(this.refreshGradovi, this.refreshGradovi);
  }

  private refreshGradovi = () => {
    this.gradService.getAll().subscribe(
      data => this.listaGradova = data
    );
  }
}
