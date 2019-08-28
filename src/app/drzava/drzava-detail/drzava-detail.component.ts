import { Component, OnInit } from '@angular/core';
import { DrzavaService } from 'src/app/drzava.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Drzava } from '../drzava.model';

@Component({
  selector: 'app-drzava-detail',
  templateUrl: './drzava-detail.component.html',
  styleUrls: ['./drzava-detail.component.css']
})
export class DrzavaDetailComponent implements OnInit {

  public drzava: Drzava;

  constructor(
    private drzavaService: DrzavaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.drzava = this.drzavaService.getById();
    this.route.paramMap.subscribe(params => {
      this.drzava = this.drzavaService.getById(params.get('id'));
    });
  }

}
