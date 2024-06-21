export class Book {
  i:number;
  n:string;
  img:string;
  auth:string;
  des:string;
  fav:boolean;
  t:string;
  AD?:string;
  RD?:string;
  constructor(private id:number , private title:string,private imageUrl:string,private author:string , private description:string, private favorite:boolean,private type:string ,private addDate?:string,private readDate?:string) {
    this.i=this.id;
    this.n=this.title;
    this.img=this.imageUrl;
    this.auth=this.author;
    this.des=this.description;
    this.fav=this.favorite
    this.t=this.type;
    this.AD=this.addDate;
    this.RD=this.readDate;
  }
}
