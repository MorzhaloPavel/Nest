import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/poducts.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://pavel:22222@cluster0.tvaiu.mongodb.net/nest?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
