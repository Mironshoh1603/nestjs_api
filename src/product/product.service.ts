import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getHello(): any {
    return { name: 'Mironshoh', age: 25 };
  }
}
