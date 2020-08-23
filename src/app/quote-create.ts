export class QuoteCreate {
    public showDescription:boolean;
    public upvotes:number;
    public downvotes:number;
    constructor(public author:string, public quote:string,public  timePassed:Date){
        this.showDescription=false;
        this.upvotes=0;
        this.downvotes=0;
    }
}
