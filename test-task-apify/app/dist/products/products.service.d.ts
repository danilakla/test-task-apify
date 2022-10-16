import { CreateProductDto } from './dto/create-product.dto';
import { Product } from "./entities/product.entity";
import { RangeProductDto } from "./dto/range-product.dto";
export declare class ProductsService {
    products: Product[];
    create(createProductDto: CreateProductDto): any;
    findAll(): {};
    rangePrice({ maxPrice, minPrice }: RangeProductDto): {
        total: any;
        count: number;
        lessData: {};
    };
    findOne(id: string): Product;
}
