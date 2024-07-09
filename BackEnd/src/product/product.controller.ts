import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/product.dto';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService){}

    @Get()
    async findAll(){
        return this.productService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return this.productService.findOne(id);
    }

    @Post()
    async create(@Body() createProductDTO: CreateProductDTO){
        return this.productService.create(createProductDTO);
    }

    @Put(':id')
    async update(@Param('id') id: string, createProductDTO: CreateProductDTO){
        return this.productService.update(id, createProductDTO);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.productService.delete(id);
    }
}
