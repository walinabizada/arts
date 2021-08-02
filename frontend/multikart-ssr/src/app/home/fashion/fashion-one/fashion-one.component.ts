import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductSlider } from '../../../shared/data/slider';
import { Product } from '../../../shared/classes/product';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-fashion-one',
  templateUrl: './fashion-one.component.html',
  styleUrls: ['./fashion-one.component.scss']
})
export class FashionOneComponent implements OnInit {

  public products: Product[] = [];
  public productCollections: any[] = [];
  
  constructor(private _sanitizer:DomSanitizer, public productService: ProductService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'fashion');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        })
      })
    });
  }

  public ProductSliderConfig: any = ProductSlider;

  public sliders = [{
    title: 'Christina Quarles',
    subTitle: 'The Dreaming Girl',
    image: 'assets/images/slider/2back.jpg',
    image1: 'assets/images/slider/featured/featured (1).png'
  }, {
    title: 'Gerhard Richter',
    subTitle: 'The Colorful Soul of an Artist',
    image: 'assets/images/slider/2back.jpg',
    image1: 'assets/images/slider/featured/featured (2).jpg'
  }, {
    title: 'Donald Judd',
    subTitle: 'Where is The Moon?',
    image: 'assets/images/slider/2back.jpg',
    image1: 'assets/images/slider/featured/featured (1).jpg'
  }, {
    title: 'Sania Arts',
    subTitle: 'The Old Times of the Kabul City',
    image: 'assets/images/slider/2back.jpg',
    image1: 'assets/images/slider/featured/featured (3).jpg'
  }, {
    title: 'Huguette Caland',
    subTitle: 'The Pursuit of Happiness',
    image: 'assets/images/slider/2back.jpg',
    image1: 'assets/images/slider/featured/featured (4).jpg'
  }
  ]

  // Collection
  public categories = [{
    image: 'assets/images/slider/featured/featured (1).png',
    artist: 'Christina Quarles',
    title: 'The Dreaming Girl',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">d1 milano</a></li><li><a href="#">damaskeening</a></li><li><a href="#">diving watch</a></li>'),
  }, {
    image: 'assets/images/slider/featured/featured (2).jpg',
    artist: 'Gerhard Richter',
    title: 'The Colorful Soul of an Artist',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Shock-resistant watch</a></li><li><a href="#">Skeleton watch</a></li><li><a href="#">Slow watch</a></li>'),
  }, {
    image: 'assets/images/slider/featured/featured (1).jpg',
    artist: 'Donald Judd',
    title: 'Where is The Moon?',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li>'),
  }, {
    image: 'assets/images/slider/featured/featured (3).jpg',
    artist: 'Sania Arts',
    title: 'The Old Times of the Kabul City',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Manufacture dhorlogerie</a></li><li><a href="#">Mechanical watch</a></li><li><a href="#">Microbrand watches</a></li>'),
  }, {
    image: 'assets/images/slider/featured/featured (4).jpg',
    artist: 'Huguette Caland',
    title: 'The Pursuit of Happiness',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">d1 milano</a></li><li><a href="#">damaskeening</a></li><li><a href="#">diving watch</a></li>'),
  }]
  // Collection category
  public collectionsCategory = [{
    image: 'assets/images/collection/furniture/1.jpg',
    save: '+100 Items',
    title: 'Pastel',
    link: '/home/left-sidebar/collection/furniture'
  }, {
    image: 'assets/images/collection/furniture/1.jpg',
    save: '+30 Items',
    title: 'Charcoal',
    link: '/home/left-sidebar/collection/furniture'
  },{
    image: 'assets/images/collection/furniture/1.jpg',
    save: '+20 Items',
    title: 'Conté',
    link: '/home/left-sidebar/collection/furniture'
  },{
    image: 'assets/images/collection/furniture/1.jpg',
    save: '+100 Items',
    title: 'Crayon',
    link: '/home/left-sidebar/collection/furniture'
  }, {
    image: 'assets/images/collection/furniture/1.jpg',
    save: '+31 Items',
    title: 'Graphite',
    link: '/home/left-sidebar/collection/furniture'
  },{
    image: 'assets/images/collection/furniture/1.jpg',
    save: '+60 Items',
    title: 'Marker',
    link: '/home/left-sidebar/collection/furniture'
  }, {
    image: 'assets/images/collection/furniture/1.jpg',
    save: '+10 Items',
    title: 'Pen and Ink',
    link: '/home/left-sidebar/collection/furniture'
  }, {
    image: 'assets/images/collection/furniture/1.jpg',
    save: '+15 Items',
    title: 'Pen and Ink',
    link: '/home/left-sidebar/collection/furniture'
  }
]
// Categories name
public categoriesName = ['airbag', 'burn bag', 'briefcase', 'carpet', 'turkey'];
  // Collection banner
  public collections = [{
    image: 'assets/images/collection/fashion/1.jpg',
    save: 'save 50%',
    title: 'men'
  }, {
    image: 'assets/images/collection/fashion/2.jpg',
    save: 'save 50%',
    title: 'women'
  }];

  // Blog
  public blog = [{
    image: 'assets/images/blog/1.jpg',
    date: '25 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/2.jpg',
    date: '26 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/3.jpg',
    date: '27 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/4.jpg',
    date: '28 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }];

  // Logo
  public logo = [{
    image: 'assets/images/logos/1.png',
  }, {
    image: 'assets/images/logos/2.png',
  }, {
    image: 'assets/images/logos/3.png',
  }, {
    image: 'assets/images/logos/4.png',
  }, {
    image: 'assets/images/logos/5.png',
  }, {
    image: 'assets/images/logos/6.png',
  }, {
    image: 'assets/images/logos/7.png',
  }, {
    image: 'assets/images/logos/8.png',
  }];

  ngOnInit(): void {
  }

  // Product Tab collection
  getCollectionProducts(collection) {
    return this.products.filter((item) => {
      if (item.collection.find(i => i === collection)) {
        return item
      }
    })
  }
  
}
