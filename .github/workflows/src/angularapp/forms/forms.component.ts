import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit{
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
OnInit(){
  
}
res:String="";
convert(data: {
  
  to(to: any): unknown;
  fromm(fromm: any): unknown; amountt: any; 
})
{
  let x=+data.fromm;
  let y=+data.to;
  let c=+data.amountt;
  let numt=(c*y)/x;
  let r=Math.round(numt).toFixed(2);
  this.res=r;
  
}
  
 
}
