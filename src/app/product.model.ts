export class Product{
    public name: string;
    public description: string;
    public imagePath: string;
    public price: number;
    public brand: string;

    constructor(name:string, description:string, imagePath:string, price:number, brand:string){
        this.name = name;
        this.description=description;
        this.imagePath=imagePath;
        this.price=price;
        this.brand=brand;
    }

}