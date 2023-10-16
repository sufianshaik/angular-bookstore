import { Iprice } from "./Iprice";

export interface IbookDetails {
    ISBN : number ; 
    title : string ; 
    author : string ; 
    summary : string ; 
    image : string ;
    price : Iprice ; 
    qty?: number ;
}