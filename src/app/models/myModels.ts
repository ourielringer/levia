
export class Item{

    // quantite:number

    constructor(
        public name:string,
        public amount: number,
        public price:number,
        public image:string,
        public categorie:string,
        public quantite?:number

        ){ }
}