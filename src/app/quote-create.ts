export class QuoteCreate {
    showDescription:boolean
    constructor(public author:string, public quote:string,public  timePassed:Date){
        
    }
}
