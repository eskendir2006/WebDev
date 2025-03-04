import { Product } from './product';

export class ProductList {
  private products: Product[] = [
    {
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=gallery-large',
      name: 'Чехол Для Apple iPhone 13 прозрачный',
      description: 'Чехол для Apple iPhone 13 прозрачный',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
    },
    {
      imageUrl: '../../assets/image9.png',
      name: 'Apple iPhone 13',
      description: '128Gb черный',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    },
    {
      imageUrl: '../../assets/image8.png',
      name: 'Xiaomi Redmi 13C',
      description: ' 8 ГБ/256 ГБ черный',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',

    },
    {
      imageUrl: '../../assets/image1.png',
      name: 'Apple iPhone 13',
      description: '128Gb белый',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000#!/item',

    },
    {
      imageUrl: '../../assets/image4.png',
      name: 'Apple iPhone 14',
      description: '128Gb черный',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000#!/item',

    },
    {
      imageUrl: '../../assets/image5.png',
      name: 'Xiaomi Redmi Note 11',
      description: '4 ГБ/128 ГБ серый',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-4-gb-128-gb-seryi-103541773/?c=750000000#!/item'
    },
    {
      imageUrl: '../../assets/image4.png',
      name: 'iPhone 14 Pro',
      description: '128Gb фиолетовый',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/?c=750000000#!/item',
    },
    {
      imageUrl: '../../assets/image6.png',
      name: 'Samsung Galaxy A53',
      description: '8 ГБ/256 ГБ черный',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a53-5g-8-gb-256-gb-chernyi-104253200/?c=750000000#!/item',
    },
    {
      imageUrl: '../../assets/image3.png',
      name: 'Apple iPhone 13',
      description: '128Gb розовый',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000#!/item',
    },
    {
      imageUrl: '../../assets/image5.png',
      name: 'Samsung Galaxy A03 Core',
      description: '2 ГБ/32 ГБ медный',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-mednyi-105772530/?c=750000000#!/item'
    },
    {
      imageUrl: '../../assets/image1.png',
      name: 'Product 2',
      description: 'Description of product 2',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item'
    },
    {
      imageUrl: '../../assets/image1.png',
      name: 'Product 2',
      description: 'Description of product 2',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item'
    },
    {
      imageUrl: '../../assets/image1.png',
      name: 'Product 2',
      description: 'Description of product 2',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item'
    },

  ];

  public getProducts(): Product[] {
    return this.products;
  }
}