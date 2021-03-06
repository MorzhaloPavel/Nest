import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/produst.schema';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {

    }

  @Get()
  getAll(): Promise<Product[]> {
    return this.productsService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProduct: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProduct)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
      return this.productsService.remove(id)
  }

  @Put(':id')
  update(@Body() updateProduct: UpdateProductDto, @Param('id') id: string): Promise<Product> {
    return this.productsService.update(id, updateProduct)
  }
}
