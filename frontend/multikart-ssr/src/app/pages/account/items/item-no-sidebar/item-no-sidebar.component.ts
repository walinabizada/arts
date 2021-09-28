import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ProductService } from "../../../../shared/services/product.service";
import { Product } from '../../../../shared/classes/product';

@Component({
  selector: 'app-item-no-sidebar',
  templateUrl: './item-no-sidebar.component.html',
  styleUrls: ['./item-no-sidebar.component.scss']
})
export class ItemNoSidebarComponent implements OnInit {

  itemDiv:boolean=true;
  addItemDiv:boolean=false;

  public grid: string = 'col-xl-3 col-md-6';
  public layoutView: string = 'grid-view';
  public products: Product[] = [];
  public pageNo: number = 1;
  public paginate: any = {}; // Pagination use only
  public sortBy: string; // Sorting Order

  constructor(private route: ActivatedRoute, private router: Router,
    private viewScroller: ViewportScroller, public productService: ProductService) {   
      // Get Query params..
      this.route.queryParams.subscribe(params => {

        this.sortBy = params.sortBy ? params.sortBy : 'ascending';
        this.pageNo = params.page ? params.page : this.pageNo;

        // Get Filtered Products..
        this.productService.getProducts.subscribe(response => {         
          // Sorting Filter
          this.products = this.productService.sortProducts(response, this.sortBy);
          // Paginate Products
          this.paginate = this.productService.getPager(this.products.length, +this.pageNo);     // get paginate object from service
          this.products = this.products.slice(this.paginate.startIndex, this.paginate.endIndex + 1); // get current page of items
        })
      })
  }

  ngOnInit(): void {
  }

  // SortBy Filter
  sortByFilter(value) {
    this.router.navigate([], { 
      relativeTo: this.route,
      queryParams: { sortBy: value ? value : null},
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    }).finally(() => {
      this.viewScroller.scrollToAnchor('products'); // Anchore Link
    });
  }

  // product Pagination
  setPage(page: number) {
    this.router.navigate([], { 
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    }).finally(() => {
      this.viewScroller.scrollToAnchor('products'); // Anchore Link
    });
  }

  // Change Grid Layout
  updateGridLayout(value: string) {
    this.grid = value;
  }

  // Change Layout View
  updateLayoutView(value: string) {
    this.layoutView = value;
    if(value == 'list-view')
      this.grid = 'col-lg-12';
    else
      this.grid = 'col-xl-3 col-md-6';
  }

  // show and hide item div and add item div 
  showDiv(){
    this.itemDiv = !this.itemDiv;
    this.addItemDiv = !this.addItemDiv;
  }
}
