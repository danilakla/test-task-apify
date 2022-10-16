"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_entity_1 = require("./entities/product.entity");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [{
                id: '1',
                name: '1',
                price: 100.
            },
            {
                id: '2',
                name: '2',
                price: 200
            },
            {
                id: '3',
                name: '3',
                price: 300
            },
            {
                id: '4',
                name: '4',
                price: 400
            },
            {
                id: '5',
                name: '5',
                price: 500
            },
            {
                id: '6',
                name: '6',
                price: 600
            },
            {
                id: '8',
                name: '8',
                price: 800
            },
            ,
            {
                id: '9',
                name: '9',
                price: 900
            },
            {
                id: '10',
                name: '10',
                price: 1000
            },
            {
                id: '7',
                name: '7',
                price: 700
            },
            {
                id: '11',
                name: '11',
                price: 1100
            }];
    }
    create(createProductDto) {
        const product = new product_entity_1.Product(createProductDto);
        return this.products.push(product);
    }
    findAll() {
        return this.products;
    }
    rangePrice({ maxPrice, minPrice }) {
        const data = this.products.filter(el => (el.price <= maxPrice) && (el.price >= minPrice) ? el : false);
        const total = data.length;
        let pagination = 5;
        let count = 0;
        let lessData = [];
        if (total != 0) {
            count = 5;
            if (total < pagination)
                count = total;
            for (let i = 0; i < count; i++) {
                lessData.push(data[i]);
            }
        }
        return {
            total,
            count,
            lessData
        };
    }
    findOne(id) {
        let findData;
        this.products.forEach(el => {
            if (el.id == id) {
                findData = el;
            }
        });
        return findData;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map