import { Injectable } from '@nestjs/common';
// import { ProductSchema } from './schema/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './interface/product.interface';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

    async findAll(): Promise<Product[]>{
        return this.productModel.find().exec();
    }
    async findOne(id: string): Promise<Product>{
        return this.productModel.findById(id).exec();
    }
    
    async create(createProductDTO: CreateProductDTO): Promise<Product>{
        const newProduct = new this.productModel(createProductDTO);
        return newProduct.save()
    }
}
