import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  categoryId: number;
  likes: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', imageUrl: '../../assets/image1.png', categoryId: 1, likes: 1, },
    { id: 2, name: 'Product 2',imageUrl: '../../assets/image2.png', categoryId: 1, likes: 1, },
    { id: 3, name: 'Product 2',imageUrl: '../../assets/image3.png', categoryId: 1, likes: 1, },
    { id: 4, name: 'Product 2',imageUrl: '../../assets/image4.png', categoryId: 1, likes: 1, },
    { id: 5, name: 'Product 2',imageUrl: '../../assets/image5.png', categoryId: 1, likes: 1, },
    { id: 6, name: 'Product 3', imageUrl: '../../assets/image6.png',categoryId: 2, likes: 1, },
    { id: 7, name: 'Product 3', imageUrl: '../../assets/image7.png',categoryId: 2 , likes: 1,},
    { id: 8, name: 'Product 3', imageUrl: '../../assets/image8.png',categoryId: 2 , likes: 1,},
    { id: 9, name: 'Product 3', imageUrl: '../../assets/image9.png',categoryId: 2 , likes: 1,},
    { id: 10, name: 'Product 3', imageUrl: '../../assets/image2.png',categoryId: 2, likes: 1, },
    { id: 11, name: 'Product 4', imageUrl: '../../assets/image9.png',categoryId: 3, likes: 1, },
    { id: 12, name: 'Product 4', imageUrl: '../../assets/image8.png',categoryId: 3 , likes: 1,},
    { id: 13, name: 'Product 4', imageUrl: '../../assets/image7.png',categoryId: 3 , likes: 1,},
    { id: 14, name: 'Product 4', imageUrl: '../../assets/image6.png',categoryId: 3 , likes: 1,},
    { id: 15, name: 'Product 4', imageUrl: '../../assets/image5.png',categoryId: 3, likes: 1, },
    { id: 16, name: 'Product 5',imageUrl: '../../assets/image4.png', categoryId: 4 , likes: 1,},
    { id: 17, name: 'Product 5',imageUrl: '../../assets/image5.png', categoryId: 4 , likes: 1,},
    { id: 18, name: 'Product 5',imageUrl: '../../assets/image6.png', categoryId: 4 , likes: 1,},
    { id: 19, name: 'Product 5',imageUrl: '../../assets/image3.png', categoryId: 4 , likes: 1,},
    { id: 20, name: 'Product 5',imageUrl: '../../assets/image2.png', categoryId: 4 , likes: 1,},
  ];

  categoryProducts: Product[] = [];

  constructor(private route: ActivatedRoute) {
    let categoryId: number = 0;
    if (this.route.snapshot.paramMap.has('id')) {
      categoryId = +this.route.snapshot.paramMap.get('id')!;
      this.categoryProducts = this.products.filter(p => p.categoryId === categoryId);
    }
  }
  deleteProduct(productId: number) {
    this.categoryProducts = this.categoryProducts.filter(product => product.id !== productId);
  }
  likeProduct(productId: number) {
    const product = this.categoryProducts.find(p => p.id === productId);
    if (product) {
      product.likes += 1;
    }
  }
}