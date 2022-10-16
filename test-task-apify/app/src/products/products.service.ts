import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {Product} from "./entities/product.entity";
import {RangeProductDto} from "./dto/range-product.dto";

@Injectable()
export class ProductsService {
    products:Product[]=[{
        id:'1',
        name:'1',
        price:100.
    },
        {
            id:'2',
            name:'2',
            price:200
        },
        {
            id:'3',
            name:'3',
            price:300
        }
        ,{
            id:'4',
            name:'4',
            price:400
        }
        ,{
            id:'5',
            name:'5',
            price:500
        }
        ,{
            id:'6',
            name:'6',
            price:600
        }
        ,{
            id:'8',
            name:'8',
            price:800
        },
        ,{
            id:'9',
            name:'9',
            price:900
        }
        ,{
            id:'10',
            name:'10',
            price:1000
        }
        ,{
            id:'7',
            name:'7',
            price:700
        }
        ,{
            id:'11',
            name:'11',
            price:1100
        }]
    create(createProductDto: CreateProductDto) {


        const product=new Product(createProductDto);
        return this.products.push(product)
    }

    findAll() {
        return this.products
    }


    rangePrice({maxPrice,minPrice}:RangeProductDto) {
        const data:Product[]=this.products.filter(el=>(el.price<=maxPrice)&&(el.price>=minPrice)?el:false)
        const total=data.length
        let pagination=5;//we can to change on 1000 like in task, but it makes no sense
        let count=0


        let lessData:Product[]=[];
        if(total!=0){
            count=5;
            if(total<pagination) count=total
            for (let i=0; i<count; i++){
                lessData.push(data[i]);
            }
        }
        return {
            total,
            count,
            lessData}
    }

    findOne(id: string) {
        let findData:Product;
        this.products.forEach(el=> {
            if(el.id == id){
                findData=el;
            }

        })
        return findData
    }


}
