class Product {
    name
    price
    color
    type
    image
    category

    constructor(name, price, color, type, image,category) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.type = type;
        this.image= image;
        this.category = category;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get price() {
        return this.price;
    }

    set price(value) {
        this.price = value;
    }

    get color() {
        return this.color;
    }

    set color(value) {
        this.color = value;
    }

    get type() {
        return this.type;
    }

    set type(value) {
        this.type = value;
    }

    get image() {
        return this.image;
    }

    set image(value) {
        this.image= value;
    }

    get category() {
        return this.category;
    }

    set category(value) {
        this.category= value;
    }
}

