import { Component, OnInit,Input,Output } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
quotes = [
  new Quote(1, 'The moon is beautiful.','A.B Clark',"Z.G",new Date(2019,5,14)),
  new Quote(2, 'The Heroes of our country stand together.','sanii.muthui',"Z.G",new Date(2019,2,12)),
  new Quote(3, 'To Be beautiful starts from self belief.','dunteh',"Z.G",new Date(2019,5,24)),
  new Quote(4, 'The velvex of Human Anatomy','Solaris Project',"Z.G",new Date(2019,3,1)),
  new Quote(5, 'Aspire To Inspire','Denzel Washington',"Z.G",new Date(2019,5,9)),
];

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  this.quotes.unshift(quote)

}
deleteQuote(isComplete, index) {
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

    if (toDelete) {
      this.quotes.splice(index, 1)
    }
  }
}
toogleDetails(index){
  this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
}

  constructor() { }

  ngOnInit() {
  }

}