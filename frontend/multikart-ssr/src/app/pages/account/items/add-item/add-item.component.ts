import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ItemService } from 'src/app/shared/services/item.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  collections = [];
  categories = [];
  tags = [];
  materialList = [];
  selectedItems = [];
  selectedCats = [];
  dropdownSettings:IDropdownSettings = {};
  categorySettings:IDropdownSettings = {};

  files: File[] = [];
  imagesArr = [];

  public itemFrom: FormGroup;
  public counter: number = 1;

  constructor(private fb: FormBuilder, private itemService: ItemService) { 
    this.itemFrom = this.fb.group({
      title: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      description: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      metaTitle: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      metaDesc: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      price: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      discount: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      dx: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      dy: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      size: ['', Validators.required],
      material: [this.selectedItems],
      // selectedCol: ['', Validators.required],
      selectedCat: [this.selectedCats],
      selectedTag: ['', Validators.required],
      userId: '',
      totalItem: '',
      // imageAlt: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      images: [],

    })
  }
  onSubmit(): void {
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.itemFrom.value);
    this.itemService.create(this.itemFrom.value)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
    // this.counter=1;
    // this.files=[];
    // this.itemFrom.reset();
  }
  increment() {
    this.counter += 1;
    this.itemFrom.controls['totalItem'].setValue(this.counter);
  }

  decrement() {
    this.counter -= 1;
    this.itemFrom.controls['totalItem'].setValue(this.counter);
  }
  // replaceFile(){
  //   this.files.splice(0,1); // index =0 , remove_count = 1
  // }
  onSelect(event) {
    // console.log(event);
    this.files.push(...event.addedFiles);
    // if(this.files.length > 1){ // checking if files array has more than one content
    //   this.replaceFile(); // replace file
    // }
    this.imagesArr=[];
    this.files.forEach((file,index) => {
      this.readFile(file).then(fileContents => {
        // Put this string in a request body to upload it to an API.
        this.imagesArr.push(fileContents);
        // console.log(fileContents);
      });
    });
    this.itemFrom.controls['images'].setValue(this.imagesArr);

    
    // this.readFile(this.files[0]).then(fileContents => {
    //   // Put this string in a request body to upload it to an API.
    //   this.itemFrom.controls['image'].setValue(fileContents);
    //   // console.log(fileContents);
    // });
  }
  private async readFile(file: File): Promise<string | ArrayBuffer> {
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = e => {
        return resolve((e.target as FileReader).result);
      };
  
      reader.onerror = e => {
        console.error(`FileReader failed on file ${file.name}.`);
        return reject(null);
      };
  
      if (!file) {
        console.error('No file to read.');
        return reject(null);
      }
  
      reader.readAsDataURL(file);
    });
  }
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  ngOnInit(): void {
    this.tags = [
      { tag_id: 1, tag_value: 'new' },
      { tag_id: 2, tag_value: 's' },
      { tag_id: 3, tag_value: 'm' },
      { tag_id: 4, tag_value: 'l' },
      { tag_id: 5, tag_value: 'art' }
    ];
    this.categories = [
      { cat_id: 1, cat_text: 'POP Art' },
      { cat_id: 2, cat_text: 'Custom' },
      { cat_id: 3, cat_text: 'Painting' },
      { cat_id: 4, cat_text: 'Surrealism' },
      { cat_id: 5, cat_text: 'Fantasy' }
    ];
    this.selectedCats = [
      // { cat_id: 1, cat_value: 'POP Art' }
    ];
    this.categorySettings = {
      singleSelection: false,
      limitSelection:2,
      idField: 'cat_id',
      textField: 'cat_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    // this.collections = [
    //   { col_id: 1, col_text: 'Best Sellers' },
    //   { col_id: 2, col_text: 'New Products' },
    //   { col_id: 3, col_text: 'Featured Products' },
    //   { col_id: 4, col_text: 'On Sale' }
    // ];
    this.materialList = [
      { item_id: 1, item_text: 'Pen and Ink' },
      { item_id: 2, item_text: 'Pastel' },
      { item_id: 3, item_text: 'Cante' },
      { item_id: 4, item_text: 'Crayon' },
      { item_id: 5, item_text: 'Graphite' },
      { item_id: 6, item_text: 'Marker' },
      { item_id: 7, item_text: 'Charcoal' }
    ];
   
    this.selectedItems = [
      // { item_id: 3, item_text: 'Pastel' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    
   
  }
  onCatSelect(item: any) {
    // console.log(item);
  }
  onSelectAllCat(items: any) {
    // console.log(items);
  }
  onItemSelect(item: any) {
    // console.log(item);
  }
  onSelectAll(items: any) {
    // console.log(items);
  }

}
