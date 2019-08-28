import { GradService } from './../grad.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Grad } from './grad.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grad',
  templateUrl: './grad.component.html',
  styleUrls: ['./grad.component.css']
})
export class GradComponent implements OnInit {

  // public listaGradova: Grad[];

  listaGradova = [
    {id: 1, naziv: 'Hrvatska'},
    {id: 3, naziv: 'Hrvatska'},
    {id: 2, naziv: 'Hrvatska'}
  ];

  constructor(
    private gradService: GradService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    // this.gradService.getAll().subscribe(
    //   gradovi => this.listaGradova = gradovi
    // );
  }

  openEditNew() {
    debugger;
  }

}
