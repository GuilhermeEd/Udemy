import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild,
  ContentChild

} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements   OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @ViewChild('boundParagraph') boundParagraph: HTMLElement;
  @ContentChild('boundContent') boundContent: HTMLElement;
  @Input() bindable = 1000;

  constructor() {
  }
  ngOnChanges(){
    this.log('ngOnChanges');
  }
  ngOnInit() {
    this.log('ngOnInit');
  }
  ngDoCheck(){
    this.log('ngDoCheck');
  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit');
    console.log(this.boundContent);
  }
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }
  ngAfterViewInit(){
    this.log('ngAfterViewInit');
    console.log(this.boundParagraph);
  }
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook: string){
    console.log(hook);
  }
}
