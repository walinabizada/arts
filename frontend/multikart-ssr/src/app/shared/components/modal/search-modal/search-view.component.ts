import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  TemplateRef,
  Input,
  Injectable,
  PLATFORM_ID,
  Inject,
} from "@angular/core";
import { ProductDetailsQueckView } from "../../../data/slider";
import { isPlatformBrowser } from "@angular/common";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-view",
  templateUrl: "./search-view.component.html",
  styleUrls: ["./search-view.component.scss"],
})
export class SearchViewComponent implements OnInit, OnDestroy {
  @ViewChild("searchView", { static: false }) SearchView: TemplateRef<any>;

  public hiddenDiv = false;

  public closeResult: string;
  public modalOpen: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  openModal() {
    this.modalOpen = true;
    if (isPlatformBrowser(this.platformId)) {
      // For SSR
      this.modalService
        .open(this.SearchView, {
          size: "xl",
          ariaLabelledBy: "modal-basic-title",
          centered: true,
          windowClass: "search-modal",
        })
        .result.then(
          (result) => {
            `Result ${result}`;
          },
          (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          }
        );
    }
    this.hiddenDiv = true;
    //wait 3 Seconds and hide
    setTimeout(
      function () {
        this.hiddenDiv = false;
        console.log(this.hiddenDiv);
      }.bind(this),
      3000
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
  }
  // Collection category
  public collectionsCategory = [
    {
      image: "assets/images/collection/furniture/new/b3.jpg",
      save: "+10 Items",
      title: "Pen and Ink",
      link: "/home/left-sidebar/collection/furniture",
    },
    {
      image: "assets/images/collection/furniture/new/a1.jpg",
      save: "+100 Items",
      title: "Pastel",
      link: "/home/left-sidebar/collection/furniture",
    },
    {
      image: "assets/images/collection/furniture/new/a3.jpg",
      save: "+20 Items",
      title: "Conté",
      link: "/home/left-sidebar/collection/furniture",
    },
    {
      image: "assets/images/collection/furniture/new/a4.jpg",
      save: "+100 Items",
      title: "Crayon",
      link: "/home/left-sidebar/collection/furniture",
    },
    {
      image: "assets/images/collection/furniture/new/b1.jpg",
      save: "+31 Items",
      title: "Graphite",
      link: "/home/left-sidebar/collection/furniture",
    },
    {
      image: "assets/images/collection/furniture/new/b2.jpg",
      save: "+60 Items",
      title: "Marker",
      link: "/home/left-sidebar/collection/furniture",
    },
    {
      image: "assets/images/collection/furniture/new/b4.jpg",
      save: "+15 Items",
      title: "Pen and Ink",
      link: "/home/left-sidebar/collection/furniture",
    },
    {
      image: "assets/images/collection/furniture/new/a2.jpg",
      save: "+30 Items",
      title: "Charcoal",
      link: "/home/left-sidebar/collection/furniture",
    },
  ];
  // Categories name
  public categoriesName = [
    "Pop Art",
    "Cubism",
    "painting",
    "Fantasy",
    "Surrealism",
  ];
}
