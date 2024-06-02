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
  constructor(private id:number , private name:string,private image:string,private auther:string , private description:string, private favorite:boolean,private type:string ,private addDate?:string,private readDate?:string) {
    this.i=this.id;
    this.n=this.name;
    this.img=this.image;
    this.auth=this.auther;
    this.des=this.description;
    this.fav=this.favorite
    this.t=this.type;
    this.AD=this.addDate;
    this.RD=this.readDate;
  }
}
