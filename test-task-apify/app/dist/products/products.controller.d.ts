import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { RangeProductDto } from "./dto/range-product.dto";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): any;
    findAll(): {};
    findOne(id: string): import("./entities/product.entity").Product;
    getPriceByRange(rangePriceDto: RangeProductDto): {
        total: any;
        count: number;
        lessData: {};
    };
}
