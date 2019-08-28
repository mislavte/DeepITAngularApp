import { DrzavaService } from './../drzava.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drzava } from './drzava.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drzava',
  templateUrl: './drzava.component.html',
  styleUrls: ['./drzava.component.css']
})
export class DrzavaComponent implements OnInit {

  // listaDrzava: Drzava[];

  listaDrzava = [
    {id: 1, naziv: 'Hrvatska'},
    {id: 3, naziv: 'Hrvatska'},
    {id: 2, naziv: 'Hrvatska'}
  ];

  constructor(
    private drzavaService: DrzavaService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    // loadanje država
    // this.drzavaService.getAll().subscribe(
    //   drzave => this.listaDrzava = drzave
    // );

  }

}
