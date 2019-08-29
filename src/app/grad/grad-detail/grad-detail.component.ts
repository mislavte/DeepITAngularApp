import { GradService } from './../../grad.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grad } from '../grad.model';
import { NgForm } from '@angular/forms';
import { Drzava } from 'src/app/drzava/drzava.model';
import { DrzavaService } from './../../drzava.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-grad-detail',
  templateUrl: './grad-detail.component.html',
  styleUrls: ['./grad-detail.component.css']
})
export class GradDetailComponent implements OnInit {

  public grad: Grad;

  public drzave: Drzava[];

  constructor(
    protected gradService: GradService,
    protected drzavaService: DrzavaService,
    protected route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      if (id) {
        this.gradService.getById(id).subscribe(
          grad => {
            this.grad = grad;
            this.getDrzaveZaLookup(grad.DrzavaID);
          });
      } else {
        this.grad = this.grad || new Grad();
        this.grad.Active = true;
        this.getDrzaveZaLookup();
      }});
  }

  private getDrzaveZaLookup = (drzavaID?: number) => {
    this.drzavaService.getAll().subscribe(
      data => {
        this.drzave = data;
        if (drzavaID && !data.map(d => d.ID).includes(drzavaID)) {
          this.drzavaService.getById(drzavaID).subscribe(
            res => this.drzave.push(res)
          );
        }
      }
    );
  }

  onSubmit(form: NgForm) {
    if (this.grad.ID) {
      this.gradService.update(this.grad).subscribe(this.goBack, this.goBack);
    } else {
      this.gradService.create(this.grad).subscribe(this.goBack, this.goBack);
    }
  }

  private goBack = () => {
    this.router.navigate(['grad']);
  }
}
