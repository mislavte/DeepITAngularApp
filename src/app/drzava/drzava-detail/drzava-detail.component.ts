import { Component, OnInit, NgZone } from '@angular/core';
import { DrzavaService } from 'src/app/drzava.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Drzava } from '../drzava.model';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-drzava-detail',
  templateUrl: './drzava-detail.component.html',
  styleUrls: ['./drzava-detail.component.css']
})
export class DrzavaDetailComponent implements OnInit {

  public drzava: Drzava;

  constructor(
    private drzavaService: DrzavaService,
    private route: ActivatedRoute,
    private router: Router,
    private zone: NgZone) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      if (id) {
        this.drzavaService.getById(id)
          .subscribe(drzava => this.drzava = drzava);
      } else {
        this.drzava = new Drzava();
        this.drzava.Active = true;
      }
    });
  }

  onSubmit(form: NgForm) {
    if (this.drzava.ID) {
      this.drzavaService.update(this.drzava).subscribe(this.goBack, this.goBack);
    } else {
      this.drzavaService.create(this.drzava).subscribe(this.goBack, this.goBack);
    }
  }

  private goBack = () => {
    this.router.navigate(['drzava']);
  }
}
