import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root"
})

export class ItemService {

    private items = [
        { id: 0, name: "Google", price: 0 },
        { id: 0, name: "Amazon", price: 0 },
        { id: 0, name: "FaceBook", price: 0 }
    ];

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
}

export class Item {
    constructor(public id: number, public name: string, public price: Number) { }
}

