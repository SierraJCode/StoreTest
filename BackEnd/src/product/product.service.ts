import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './interface/product.interface';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

    async findAll():Promise<Product[]>{
        return this.productModel.find().exec();
    }

    async findOne(id: string): Promise<Product>{
        return this.productModel.findById(id).exec();
    }

    async create(createProductDTO: CreateProductDTO): Promise<Product>{
        return new this.productModel(createProductDTO).save();
    }

    async update(id: string, createProductDTO: CreateProductDTO): Promise<Product>{
        return this.productModel.findByIdAndUpdate(id, createProductDTO, { new: true } ).exec();
    }

    async delete(id: string): Promise<Product>{
        return this.productModel.findByIdAndUpdate(id)
    }
    
    
}