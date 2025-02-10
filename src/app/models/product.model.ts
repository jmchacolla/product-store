//import { Deserializable } from "./deserializable.model";

//export class Product implements Deserializable{
export interface Product  {
    id: string;
    title: string;
    image: string;
    price: number;
    description: string;
    brand: string;
    model: string;
    color: string;
    category: string;
    discount: number;

    // constructor() {
    //     this.id = "";
    //     this.title = "";
    //     this.image = "";
    //     this.price = 0;
    //     this.description = "";
    //     this.brand = "";
    //     this.model = "";
    //     this.color = "";
    //     this.category = "";
    //     this.discount = 0;
    // }
}