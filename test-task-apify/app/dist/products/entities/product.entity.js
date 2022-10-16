"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor({ name, price }) {
        this.name = name;
        this.price = price;
        this.id = new Date().toString();
    }
}
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map