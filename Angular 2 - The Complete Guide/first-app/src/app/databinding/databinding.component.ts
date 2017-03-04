import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
    stringInterpolation = 'This is a string interpolation!';
    numberInterpolation = 2;
    ngOnInit(){}
}
