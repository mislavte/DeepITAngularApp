import { GradService } from './../../grad.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Grad } from '../grad.model';

@Component({
  selector: 'app-grad-detail',
  templateUrl: './grad-detail.component.html',
  styleUrls: ['./grad-detail.component.css']
})
export class GradDetailComponent implements OnInit {

  public grad: Grad;

  constructor(
    private gradService: GradService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.grad = this.gradService.getById(params.get('id'));
    });
  }

}
