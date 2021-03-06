(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+DhY":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() {
        this.articles = [
            {
                title: "Rolls Royce Article",
                url: "https://robbreport.com/motors/cars/rolls-royce-wraith-custom-art-williams-jr-2820897/"
            },
            {
                title: "NBC Interview",
                utl: "https://www.lx.com/money/how-a-master-counterfeiter-went-from-prison-to-the-hollywood-art-scene/36434/"
            },
            {
                title: "LA Magazine",
                url: "https://www.lamag.com/culturefiles/arthur-j-williams-davincis-gallery/"
            },
            {
                title: "Forbes",
                url: "https://www.forbes.com/2009/06/29/art-of-making-money-opinions-book-review-jason-kersten.html?sh=1b0c12b566c0"
            },
            {
                title: "CNBC American Greed Episode 46",
                url: "https://www.cnbc.com/id/100000024"
            },
            {
                title: "Miami Art Basel Article #1",
                url: "https://sociallifemagazine.com/2021/12/06/an-inside-look-highlights-from-art-basel-2021-nfts-art-crypto-music-more-take-over-miami/"
            },
            {
                title: "Miami Art Basel Article #2",
                url: "https://theknockturnal.com/art-basel-in-review-event-highlights-from-miami-2021-art-crypto-music-more-the-hottest-parties-and-exhibits/"
            }
        ];
        this.videos = [
            {
                title: "Vice Interview",
                url: "https://youtu.be/hIylnZ7lCEM"
            },
            {
                title: "Crypto Auction Video",
                url: "https://www.youtube.com/watch?v=uOHN6SNabCQ&feature=youtu.be"
            },
            {
                title: "Arthur's Passion And Why NFTs",
                url: "https://youtu.be/3autq7pbc78"
            },
            {
                title: "Arthur's Real Life Art Pieces",
                url: "https://youtu.be/uyQZzsabwvQ"
            },
            {
                title: "Beverly Hills Gallery Opening",
                url: "https://youtu.be/Is3C4nyFdds"
            },
            {
                title: "Mohammed Ali Foundation Auction",
                url: "https://www.youtube.com/watch?app=desktop&v=Tvy4s9GSLVc&feature=youtu.be"
            }
        ];
    }
    ngOnInit() {
        const faders = document.querySelectorAll('.fade-in');
        const sliders = document.querySelectorAll('.slide-in');
        const appearOptions = {
            threshold: 0.5
        };
        const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }
                else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);
        faders.forEach(fader => appearOnScroll.observe(fader));
        sliders.forEach(slide => appearOnScroll.observe(slide));
    }
}
AboutComponent.??fac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 54, vars: 0, consts: [["id", "about-arthur", 1, "about-area", "about-area-v1", "pt-50", "pb-50", "pr-50", "pl-50"], [1, "container"], [1, "row"], [1, "col-lg-12", "fade-in"], [1, "ovent-content-box"], [1, "section-title", "section-title-1"], [1, "col-lg-6", "col-md-6", "col-sm-12", "fade-in"], [1, "ovent-img"], ["src", "../../../assets/images/arthur-1.jpeg", "alt", "Picture of Arthur", 1, "img-fluid", "about-img"], [1, "col-lg-6", "col-md-6", "col-sm-12"], [1, "ovent-content-box", "fade-in"], [1, "col-title"], ["href", "https://robbreport.com/motors/cars/rolls-royce-wraith-custom-art-williams-jr-2820897/", 1, "main-btn", "fade-in"], ["href", "https://www.lx.com/money/how-a-master-counterfeiter-went-from-prison-to-the-hollywood-art-scene/36434/", 1, "main-btn", "fade-in"], ["href", "https://www.lamag.com/culturefiles/arthur-j-williams-davincis-gallery/", 1, "main-btn", "fade-in"], ["href", "https://www.forbes.com/2009/06/29/art-of-making-money-opinions-book-review-jason-kersten.html?sh=1b0c12b566c0", 1, "main-btn", "fade-in"], ["href", "https://www.cnbc.com/id/100000024", 1, "main-btn", "fade-in"], ["href", "https://sociallifemagazine.com/2021/12/06/an-inside-look-highlights-from-art-basel-2021-nfts-art-crypto-music-more-take-over-miami/", 1, "main-btn"], ["href", "https://theknockturnal.com/art-basel-in-review-event-highlights-from-miami-2021-art-crypto-music-more-the-hottest-parties-and-exhibits/", 1, "main-btn", "fade-in"], [1, "col-lg-6", "col-md-6", "col-sm-12fade-in"], ["src", "../../../assets/images/arthur-3.jpeg", "alt", "Picture of Arthur", 1, "img-fluid", "about-img"], [1, "col-lg-6", "col-md-9", "col-sm-12"], ["href", "https://youtu.be/hIylnZ7lCEM", 1, "main-btn", "main-btn-2", "fade-in"], ["href", "https://www.youtube.com/watch?v=uOHN6SNabCQ&feature=youtu.be", 1, "main-btn", "main-btn-2", "fade-in"], ["href", "https://youtu.be/3autq7pbc78", 1, "main-btn", "main-btn-2", "fade-in"], ["href", "https://youtu.be/uyQZzsabwvQ", 1, "main-btn", "main-btn-2", "fade-in"], ["href", "https://youtu.be/Is3C4nyFdds", 1, "main-btn", "main-btn-2", "fade-in"], ["href", "https://sociallifemagazine.com/2021/12/06/an-inside-look-highlights-from-art-basel-2021-nfts-art-crypto-music-more-take-over-miami/", 1, "main-btn", "main-btn-2", "fade-in"], ["href", "https://www.youtube.com/watch?app=desktop&v=Tvy4s9GSLVc&feature=youtu.be", 1, "main-btn", "main-btn-2", "fade-in"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Who am I?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "ARTHUR J WILLIAMS JR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Rolls Royce Article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "NBC Interview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "LA Magazine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Forbes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "CNBC American Greed Episode 46");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Miami Art Basel Article #1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Miami Art Basel Article #2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Vice Interview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Crypto Auction Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Arthur's Passion And Why NFTs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Arthur's Real Life Art Pieces");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Beverly Hills Gallery Opening");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Miami Art Basel Article #1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Mohammed Ali Foundation Auction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".about-area-v1[_ngcontent-%COMP%] {\n        background-image: linear-gradient(rgb(45, 45, 59), rgb(29, 29, 59)), url('LT_0007_L.png');\n          background-size: contain;\n          background-repeat: no-repeat;\n          background-blend-mode: lighten;\n}\n.about-img[_ngcontent-%COMP%] {\n    max-width: 350px;\n}\n.about-links[_ngcontent-%COMP%], .articles[_ngcontent-%COMP%], .videos[_ngcontent-%COMP%] {\n    text-align: center;\n}\n.col-title[_ngcontent-%COMP%] {\n    text-align: center;\n}\n.row[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSx5RkFBZ0g7VUFDOUcsd0JBQXdCO1VBQ3hCLDRCQUE0QjtVQUM1Qiw4QkFBOEI7QUFDeEM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1hcmVhLXYxIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYig0NSwgNDUsIDU5KSwgcmdiKDI5LCAyOSwgNTkpKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9MVF8wMDA3X0wucG5nXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcbn1cbi5hYm91dC1pbWcge1xuICAgIG1heC13aWR0aDogMzUwcHg7XG59XG5cbi5hYm91dC1saW5rcywgLmFydGljbGVzLCAudmlkZW9zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29sLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yb3cge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brianamayes/dollabyte/src/main.ts */"zUnb");


/***/ }),

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HeaderComponent {
    constructor(_document, router) {
        this.router = router;
        this.showNav = false;
        // Navigation
        this.navMethod = true;
        // Mobile 
        this.open = false;
        // Add class on resize and onload window
        this.visible = false;
        this.breakpoint = 991;
    }
    toggleNav() {
        this.navMethod = !this.navMethod;
    }
    trigger(item) {
        item.open = !item.open;
    }
    // Sticky Header
    onWindowScroll(_e) {
        if (window.pageYOffset > 90) {
            this.showNav = true;
            let element = document.getElementById('sticky-header');
            element.classList.add('sticky');
        }
        else if (window.pageYOffset == 0) {
            this.showNav = false;
        }
        else {
            let element = document.getElementById('sticky-header');
            element.classList.remove('sticky');
        }
    }
    detectHeader() {
        this.innerWidth = window.innerWidth;
        this.visible = this.innerWidth >= this.breakpoint;
    }
    ngOnInit() {
        this.detectHeader();
        const header = document.querySelector("header");
        const sectionOne = document.querySelector(".home-intro");
        const sectionOneOptions = {
            rootMargin: "-200px 0px 0px 0px"
        };
        const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    header.classList.add("nav-scrolled");
                }
                else {
                    header.classList.remove("nav-scrolled");
                }
            });
        }, sectionOneOptions);
        sectionOneObserver.observe(sectionOne);
    }
    navigateToAbout() {
        this.router.navigate(['/']).then(() => {
            window.location.hash = 'about-dollabyte';
        });
    }
    navigateToArthur() {
        this.router.navigate(['/']).then(() => {
            window.location.hash = 'about-arthur';
        });
    }
    navigateToUtility() {
        this.router.navigate(['/']).then(() => {
            window.location.hash = 'utility';
        });
    }
    navigateToRoadmap() {
        this.router.navigate(['/']).then(() => {
            window.location.hash = 'roadmap';
        });
    }
    navigateToTeam() {
        this.router.navigate(['/']).then(() => {
            window.location.hash = 'team';
        });
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resolveWindow"]);
    } }, decls: 46, vars: 4, consts: [["id", "sticky-header", 1, "header-navigation"], [1, "nav-container", "d-flex", "align-items-center", "justify-content-between", 3, "ngClass", "resize"], [1, "brand_logo"], ["routerLink", "/"], ["src", "../../assets/images/dollabyte-logo-v2.png", "alt", "", 1, "img-fluid", "logo"], [1, "nav-menu", 3, "ngClass"], [1, "navbar-close", 3, "click"], [1, "cross-wrap"], [1, "top"], [1, "bottom"], [1, "main-menu"], [1, "menu-item"], ["href", "#"], [1, "nav-link", 3, "click"], [1, "nav-pushed-item"], [1, "navbar-btn"], ["routerLink", "/contact", 1, "main-btn"], [1, "fas", "fa-wallet"], [1, "nav-push-item", 3, "ngClass", "resize"], [1, "fal", "fa-wallet"], [1, "navbar-toggler", 3, "ngClass", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("resize", function HeaderComponent_Template_div_resize_1_listener() { return ctx.detectHeader(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "DollaByte");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HeaderComponent_Template_div_click_8_listener() { return ctx.toggleNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "nav", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HeaderComponent_Template_a_click_18_listener() { return ctx.navigateToAbout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HeaderComponent_Template_a_click_21_listener() { return ctx.navigateToArthur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "Arthur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HeaderComponent_Template_a_click_24_listener() { return ctx.navigateToUtility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Utility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HeaderComponent_Template_a_click_27_listener() { return ctx.navigateToRoadmap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Roadmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HeaderComponent_Template_a_click_30_listener() { return ctx.navigateToTeam(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, " Connect Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("resize", function HeaderComponent_Template_div_resize_37_listener() { return ctx.detectHeader(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](40, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, " Connect Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HeaderComponent_Template_div_click_42_listener() { return ctx.toggleNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", ctx.visible ? "" : "breakpoint-on");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", ctx.navMethod ? "" : "menu-on");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", ctx.visible ? "" : "d-none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", ctx.navMethod ? "" : "active");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["div.header-navigtion.sticky[_ngcontent-%COMP%]{\n    box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 4%);\n    -webkit-animation: sticky 1.2s;\n            animation: sticky 1.2s;\n}\nh1[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    padding: 24px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkNBQTJDO0lBQzNDLDhCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuaGVhZGVyLW5hdmlndGlvbi5zdGlja3l7XG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYigwIDAgMCAvIDQlKTtcbiAgICBhbmltYXRpb246IHN0aWNreSAxLjJzO1xufVxuaDEge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogMjRweCAwIDAgMDtcbn0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/header/header.component */ "320Y");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/banner/banner.component */ "XRsc");
/* harmony import */ var _components_dollabyte_dollabyte_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dollabyte/dollabyte.component */ "wYW1");
/* harmony import */ var _components_utility_utility_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/utility/utility.component */ "TbFD");
/* harmony import */ var _components_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/roadmap/roadmap.component */ "c+sx");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/team/team.component */ "yoyL");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");









class AppComponent {
    constructor() {
        this.title = 'dollabyte';
        this.classname = "footer-area footer-area-v1 bg_cover";
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 1, consts: [[3, "layout"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-dollabyte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-utility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-roadmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-footer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("layout", ctx.classname);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _components_dollabyte_dollabyte_component__WEBPACK_IMPORTED_MODULE_3__["DollabyteComponent"], _components_utility_utility_component__WEBPACK_IMPORTED_MODULE_4__["UtilityComponent"], _components_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_5__["RoadmapComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_7__["TeamComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: [".banner[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n\n\n\n\na.nav-link[_ngcontent-%COMP%]{\n    text-align: right;\n}\n\n\n.dollabyte[_ngcontent-%COMP%]{\n    -webkit-animation: fadeIn 10s ease;\n            animation: fadeIn 10s ease;\n}\n\n\nimg[_ngcontent-%COMP%] {\n    max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFHQSxlQUFlOzs7QUFDZjtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBQ0E7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLyogTmF2aWdhdGlvbiAqL1xuYS5uYXYtbGlua3tcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5kb2xsYWJ5dGV7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMTBzIGVhc2U7XG59XG5cbmltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ "TbFD":
/*!*********************************************************!*\
  !*** ./src/app/components/utility/utility.component.ts ***!
  \*********************************************************/
/*! exports provided: UtilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityComponent", function() { return UtilityComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UtilityComponent {
    constructor() {
        this.url = "../../assets/images/Final DollaByte NFT.gif";
        this.utility = [
            {
                title: "2500 NFT Presale",
                text: "with 100 of them to receive VIP Event invitation to meet with Arthur at his LA Gallery.",
                url: this.url
            },
            {
                title: "1 NFT owner",
                text: "will receive a 2021 Rolls Royce Ghost with Arthur???s art on it. The NFT owner will have a their input in the art that???s drawn on the car to make it a very personal experience. The last Rolls Royce Arthur did went for almost $800,000, link below.",
                url: this.url
            },
            {
                title: "$DOLLA token",
                text: "each minted NFT will receive a select amount of daily tokens of Dollabyte. All royalties collected after the mint will be given to Dollabyte token to buy rare watches. Dollabyte watch collection will be held with Sotheby???s",
                url: this.url
            },
            {
                title: "1 NFT owner",
                text: "will receive exclusive behind the scenes experience either in Romania or Boston on the set of a blockbuster Hollywood movie.",
                url: this.url
            }
        ];
    }
    ngOnInit() {
        const faders = document.querySelectorAll('.fade-in');
        const sliders = document.querySelectorAll('.slide-in');
        const appearOptions = {
            threshold: 0.5
        };
        const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }
                else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);
        faders.forEach(fader => appearOnScroll.observe(fader));
        sliders.forEach(slider => {
            appearOnScroll.observe(slider);
        });
    }
}
UtilityComponent.??fac = function UtilityComponent_Factory(t) { return new (t || UtilityComponent)(); };
UtilityComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: UtilityComponent, selectors: [["app-utility"]], decls: 38, vars: 1, consts: [["id", "utility", 1, "team-area-v2", "pt-50", "pb-50", "pr-50", "pl-50"], [1, "team-sub"], [1, "container"], [1, "row"], [1, "slide-in", "from-right"], [1, "col-lg-4", "utility-card"], [1, "team-sub-item", "text-center"], [1, "icon", "slide-in", "from-right"], ["src", "../../assets/images/Final DollaByte NFT.gif", "alt", "NFT"], [1, "title", "slide-in", "from-left"], [1, "fade-in"]], template: function UtilityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "DOLLABYTE UTILITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "2500 NFT Presale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "with 100 of them to receive VIP Event invitation to meet with Arthur at his LA Gallery.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "1 NFT owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "With 100 of them to receive VIP Event invitation to meet with Arthur at his LA Gallery.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "$DOLLA token");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Each minted NFT will receive a select amount of daily tokens of Dollabyte. All royalties collected after the mint will be given to Dollabyte token to buy rare watches. Dollabyte watch collection will be held with Sotheby\u2019s");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "1 NFT owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Will receive exclusive behind the scenes experience either in Romania or Boston on the set of a blockbuster Hollywood movie.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("@fade", undefined);
    } }, styles: [".team-area-v2[_ngcontent-%COMP%] {\n    background-image: linear-gradient(rgb(45, 45, 59), rgb(29, 29, 59)), url('LT_0001_RR-copy.png'), url('LT_0002_L-copy.png');\n\tbackground-size: contain;\n\tbackground-repeat: repeat-x;\n\tbackground-blend-mode: lighten;\n    text-align: center;\n}\n\n.container[_ngcontent-%COMP%] {\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBIQUF3SztDQUMzSyx3QkFBd0I7Q0FDeEIsMkJBQTJCO0NBQzNCLDhCQUE4QjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoidXRpbGl0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW0tYXJlYS12MiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYig0NSwgNDUsIDU5KSwgcmdiKDI5LCAyOSwgNTkpKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9MVF8wMDAxX1JSLWNvcHkucG5nXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0xUXzAwMDJfTC1jb3B5LnBuZ1wiKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG5cdGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                ])
            ])
        ] } });


/***/ }),

/***/ "XRsc":
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.??fac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 19, vars: 0, consts: [[1, "banner-area-v1", "se-pre-con"], [1, "banner-content", "text-center"], [1, "row", "justify-content-center", "pb-10"], [1, "col-lg-3", "col-md-6", "col-sm-12"], ["href", "#", 1, "main-btn", "twitter", "fade-in"], [1, "fab", "fa-twitter"], ["href", "#", 1, "main-btn", "discord", "fade-in"], [1, "fab", "fa-discord"], ["href", "#", 1, "main-btn", "fade-in"], [1, "fal", "fa-angle-right"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Arthur J Williams Jr Presents: DOLLABYTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "World Famous Currency Artist ARTHUR J WILLIAMS JR launches his 1st NFT Project.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Follow us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Join our Discord");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Join the Whitelist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } }, styles: [".banner-area-v1[_ngcontent-%COMP%] {\n    background-image: linear-gradient(rgb(45, 45, 59), rgb(29, 29, 59)), url('LT_0001_RR-copy.png'), url('LT_0002_L-copy.png');\n\tbackground-size: contain;\n\tbackground-repeat: repeat-x;\n\tbackground-blend-mode: lighten;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEhBQXdLO0NBQzNLLHdCQUF3QjtDQUN4QiwyQkFBMkI7Q0FDM0IsOEJBQThCO0lBQzNCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXItYXJlYS12MSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYig0NSwgNDUsIDU5KSwgcmdiKDI5LCAyOSwgNTkpKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9MVF8wMDAxX1JSLWNvcHkucG5nXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0xUXzAwMDJfTC1jb3B5LnBuZ1wiKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG5cdGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                ])
            ])
        ] } });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/header/header.component */ "320Y");
/* harmony import */ var _components_utility_utility_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/utility/utility.component */ "TbFD");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _components_dollabyte_dollabyte_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dollabyte/dollabyte.component */ "wYW1");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/roadmap/roadmap.component */ "c+sx");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/team/team.component */ "yoyL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/banner/banner.component */ "XRsc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _components_utility_utility_component__WEBPACK_IMPORTED_MODULE_4__["UtilityComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_dollabyte_dollabyte_component__WEBPACK_IMPORTED_MODULE_6__["DollabyteComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _components_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_8__["RoadmapComponent"],
        _components_team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
        _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_11__["BannerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]] }); })();


/***/ }),

/***/ "c+sx":
/*!*********************************************************!*\
  !*** ./src/app/components/roadmap/roadmap.component.ts ***!
  \*********************************************************/
/*! exports provided: RoadmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapComponent", function() { return RoadmapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RoadmapComponent {
    constructor() {
        this.roadmap = [
            {
                phase: "first",
                title: "Launch DollaByte",
                launch: "January 2022"
            },
            {
                phase: "second",
                title: "Benjamin Derivative Project",
                launch: "30 days post 1st launch"
            }
        ];
    }
    ngOnInit() {
        const faders = document.querySelectorAll('.fade-in');
        const sliders = document.querySelectorAll('.slide-in');
        const appearOptions = {
            threshold: 0.5,
            rootMargin: "0px 0px -100px 0px"
        };
        const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }
                else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);
        faders.forEach(fader => appearOnScroll.observe(fader));
        sliders.forEach(slider => {
            appearOnScroll.observe(slider);
        });
    }
}
RoadmapComponent.??fac = function RoadmapComponent_Factory(t) { return new (t || RoadmapComponent)(); };
RoadmapComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RoadmapComponent, selectors: [["app-roadmap"]], decls: 22, vars: 0, consts: [["id", "roadmap", 1, "about-area", "about-area-v1", "pt-50", "pb-50", "pr-40", "pl-40"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "fade-in"], [1, "section-title", "section-title-1"], [1, "fade-in"], [1, "container-2"], [1, "timeline"], [1, "timeline-content"], [1, "title", "fade-in"]], template: function RoadmapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "ROADMAP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Launch DollaByte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "January 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Benjamin Derivative Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "30 days post 1st launch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".about-area-v1[_ngcontent-%COMP%] {\n    background-image: linear-gradient(rgb(29, 29, 59), rgb(45, 45, 59)), url('LT_0001_RR-copy.png'), url('LT_0002_L-copy.png');\n\tbackground-size: contain;\n\tbackground-repeat: repeat;\n\tbackground-blend-mode: lighten;\n    text-align: center;\n}\n.container-2[_ngcontent-%COMP%] {\n    max-height: 100vh;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.timeline[_ngcontent-%COMP%] {\n    width: -webkit-min-content;\n    width: -moz-min-content;\n    width: min-content;\n    height: auto;\n    max-width: 800px;\n    margin: 0 auto;\n    position: relative;\n    margin-top: 5px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style: none;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 20px;\n    color: white;\n    margin-bottom: 20px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n}\n.timeline-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-weight: 500;\n    line-height: 30px;\n    margin-bottom: 10px;\n}\n.timeline-content-p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 30px;\n    font-weight: 300;\n}\n.timeline[_ngcontent-%COMP%]::before{\n        content: '';\n        position: absolute;\n        height: 100%;\n        width: 2px;\n        left: 48%;\n        transform: translateX(-50%);\n        background-color: #fff;\n    }\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n    float: left;\n    clear: right;\n    transform: translateX(-30px);\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n    float: right;\n    clear: left;\n    transform: translateX(30px);\n}\n@media only screen and (max-width: 991px) {\n    .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n        float: left;\n        clear: right;\n        transform: translateX(-90px);\n    }\n    \n    .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n        float: right;\n        clear: left;\n        transform: translateX(90px);\n    }\n    \n}\n@media only screen and (min-width: 991px) {\n    .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n        float: left;\n        clear: right;\n        transform: translateX(-90px);\n    }\n    \n    .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n        float: right;\n        clear: left;\n        transform: translateX(90px);\n    }\n    \n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n    content: '';\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    background-color: gold;\n    border-radius: 50%;\n    top: 0;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd)::after {\n    transform: translate(50%, 50%);\n    right: 55px;\n}\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even)::after {\n    transform: translate(50%, 50%);\n    left: 25px;\n}\n@media only screen and (max-width: 991px) {\n    .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd)::after {\n        transform: translate(50%, 50%);\n        right: 7px;\n    }\n    .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even)::after {\n        transform: translate(50%, 50%);\n        left: -17px;\n    }\n    \n}\n@media only screen and (min-width: 992px) {\n    .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd)::after {\n        transform: translate(50%, 50%);\n        right: 8px;\n    }\n    .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even)::after {\n        transform: translate(50%, 50%);\n        left: -18px;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvYWRtYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBIQUF3SztDQUMzSyx3QkFBd0I7Q0FDeEIseUJBQXlCO0NBQ3pCLDhCQUE4QjtJQUMzQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFHSTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFVBQVU7UUFDVixTQUFTO1FBQ1QsMkJBQTJCO1FBQzNCLHNCQUFzQjtJQUMxQjtBQUdKO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCwyQkFBMkI7SUFDL0I7O0FBRUo7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWiw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLDJCQUEyQjtJQUMvQjs7QUFFSjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsTUFBTTtBQUNWO0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsV0FBVztBQUNmO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsVUFBVTtBQUNkO0FBRUE7SUFDSTtRQUNJLDhCQUE4QjtRQUM5QixVQUFVO0lBQ2Q7SUFDQTtRQUNJLDhCQUE4QjtRQUM5QixXQUFXO0lBQ2Y7O0FBRUo7QUFFQTtJQUNJO1FBQ0ksOEJBQThCO1FBQzlCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksOEJBQThCO1FBQzlCLFdBQVc7SUFDZjs7QUFFSiIsImZpbGUiOiJyb2FkbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtYXJlYS12MSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigyOSwgMjksIDU5KSwgcmdiKDQ1LCA0NSwgNTkpKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9MVF8wMDAxX1JSLWNvcHkucG5nXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0xUXzAwMDJfTC1jb3B5LnBuZ1wiKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGxpZ2h0ZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lci0yIHtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50aW1lbGluZSB7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi50aW1lbGluZSB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnRpbWVsaW5lIHVsIGxpIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGltZWxpbmUgdWwgbGk6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRpbWVsaW5lLWNvbnRlbnQgaDEge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aW1lbGluZS1jb250ZW50LXAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5cbiAgICAudGltZWxpbmU6OmJlZm9yZXtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICBsZWZ0OiA0OCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG5cblxuLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChvZGQpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogcmlnaHQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KTtcbn1cblxuLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChldmVuKSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNsZWFyOiBsZWZ0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBjbGVhcjogcmlnaHQ7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOTBweCk7XG4gICAgfVxuICAgIFxuICAgIC50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGNsZWFyOiBsZWZ0O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCk7XG4gICAgfVxuICAgIFxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xuICAgIC50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBjbGVhcjogcmlnaHQ7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOTBweCk7XG4gICAgfVxuICAgIFxuICAgIC50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGNsZWFyOiBsZWZ0O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOTBweCk7XG4gICAgfVxuICAgIFxufVxuXG4udGltZWxpbmUgdWwgbGk6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRvcDogMDtcbn1cblxuLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChvZGQpOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xuICAgIHJpZ2h0OiA1NXB4O1xufVxuLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChldmVuKTo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcbiAgICBsZWZ0OiAyNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChvZGQpOjphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcbiAgICAgICAgcmlnaHQ6IDdweDtcbiAgICB9XG4gICAgLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChldmVuKTo6YWZ0ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XG4gICAgICAgIGxlZnQ6IC0xN3B4O1xuICAgIH1cbiAgICBcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQob2RkKTo6YWZ0ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XG4gICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgfVxuICAgIC50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQoZXZlbik6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xuICAgICAgICBsZWZ0OiAtMThweDtcbiAgICB9XG4gICAgXG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], inputs: { layout: "layout" }, decls: 30, vars: 2, consts: [[1, "container"], [1, "footer-content-area", "text-center"], [1, "row", "justify-content-center"], [1, "col-lg-3"], [1, "content-box"], ["src", "../../assets/images/Final DollaByte NFT.gif", "alt", "NFT"], [1, "row", "justify-content-left"], [1, "col-lg-3", "col-md-6", "col-sm-12"], ["href", "#", 1, "main-btn", "twitter", "fade-in"], [1, "fab", "fa-twitter"], ["href", "#", 1, "main-btn", "discord", "fade-in"], [1, "fab", "fa-discord"], ["href", "#", 1, "main-btn", "fade-in"], [1, "fal", "fa-angle-right"], [1, "social-box"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Join the club");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Follow us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Join our Discord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Join the Whitelist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Copyright \u00A9 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Idea by Arthur J Williams Jr | Designed & Developed By Briana Mayes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "app-back-to-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](ctx.layout);
    } }, styles: ["footer[_ngcontent-%COMP%] {\n    background-image: linear-gradient(rgb(45, 45, 59), rgb(29, 29, 59));\n\tbackground-size: contain, contain, contain;\n\tbackground-repeat: repeat-y;\n\tbackground-blend-mode: lighten;\n}\nspan[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUVBQW1FO0NBQ3RFLDBDQUEwQztDQUMxQywyQkFBMkI7Q0FDM0IsOEJBQThCO0FBQy9CO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoNDUsIDQ1LCA1OSksIHJnYigyOSwgMjksIDU5KSk7XG5cdGJhY2tncm91bmQtc2l6ZTogY29udGFpbiwgY29udGFpbiwgY29udGFpbjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuXHRiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGxpZ2h0ZW47XG59XG5zcGFuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "wYW1":
/*!*************************************************************!*\
  !*** ./src/app/components/dollabyte/dollabyte.component.ts ***!
  \*************************************************************/
/*! exports provided: DollabyteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DollabyteComponent", function() { return DollabyteComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DollabyteComponent {
    constructor() { }
    ngAfterViewInit() {
        const faders = document.querySelectorAll('.fade-in');
        const sliders = document.querySelectorAll('.slide-in');
        const appearOptions = {
            threshold: 1,
            rootMargin: "0px 0px -900px 0px"
        };
        const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }
                else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);
        faders.forEach(fader => appearOnScroll.observe(fader));
        sliders.forEach(slider => {
            appearOnScroll.observe(slider);
        });
    }
}
DollabyteComponent.??fac = function DollabyteComponent_Factory(t) { return new (t || DollabyteComponent)(); };
DollabyteComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: DollabyteComponent, selectors: [["app-dollabyte"]], decls: 33, vars: 3, consts: [["id", "about-dollabyte", 1, "team-area-v2", "pt-50", "pb-55", "pl-40", "pr-40"], [1, "team-sub"], [1, "container"], [1, "row"], [1, "section-title", "section-title-1"], [1, "col-lg-6", "col-md-6", "col-sm-12", "fade-in", "img-col"], [1, "ovent-img", "slide-in", "from-left"], ["src", "../../assets/images/dollabyte-logo-v2.png", "alt", "", 1, "img-fluid", "about-dollabyte-img"], [1, "col-lg-5", "col-md-6", "col-sm-12", "fade-in"], [1, "ovent-content-box"], [1, "logo-text", "slide-in", "from-right"], [1, "col-lg-12", "col-md-16", "col-sm-12"], [1, "slide-in", "from-left"], [1, "slide-in", "from-right"]], template: function DollabyteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "WHAT IS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "DOLLABYTE?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "DollaByte");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, " NFT is the first official NFT by ARTHUR J WILLIAMS JR. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "DollaByte");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, " are 10,000 unique NFTs launching on the Terra Blockchain. This is an exclusive project with various utility across the board.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "The NFT Breakdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "This is an animated NFT built with the concept of cryptography in mind. Think inside the $100 bill each components of what it takes to operate. That value no longer has the same value. Blockchain has allowed cryptocurrencies and the real world art to come and hold value all on the same bill. The signature of the famous creators, the unique math based serial number, the value of both the cryptocurrency and art on either side now shows the real value of the $100 Bill.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "Each digitally generated and by the Treasury of the Metaverse Arthur J Williams Jr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("@fade", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("@fade", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("@fade", undefined);
    } }, styles: [".team-area-v2[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgb(29, 29, 59), rgb(45, 45, 59)), url('LT_0001_RR-copy.png'), url('LT_0002_L-copy.png');\n\tbackground-size: contain;\n\tbackground-repeat: repeat-y;\n\tbackground-blend-mode: lighten;\n}\n\n.about-dollabyte-img[_ngcontent-%COMP%] {\n    max-width: 50%;\n    box-shadow: none;\n    padding: 0px;\n    margin: 50px 0px;   \n}\n\n@media only screen and (max-width: 991px) {\n  .about-dollabyte-img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  }\n}\n\np[_ngcontent-%COMP%] {\n  color: #fff;\n  padding-bottom: 15px;\n}\n\n\n\n.rotate[_ngcontent-%COMP%] {\n    -webkit-animation: rotation 5s;\n            animation: rotation 5s;\n  }\n\n.linear[_ngcontent-%COMP%] {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n\n.infinite[_ngcontent-%COMP%] {\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n  }\n\n@-webkit-keyframes rotation {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(359deg);\n    }\n  }\n\n@keyframes rotation {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(359deg);\n    }\n  }\n\n@media only screen and (min-width: 768px) {\n    h4.logo-text[_ngcontent-%COMP%] {\n      margin: 50px 0px;\n    }\n  }\n\n@media only screen and (max-width: 991px) {\n    h4.logo-text[_ngcontent-%COMP%]{\n      margin: 70px 0px;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbGxhYnl0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEhBQXlLO0NBQzFLLHdCQUF3QjtDQUN4QiwyQkFBMkI7Q0FDM0IsOEJBQThCO0FBQy9COztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUNBO0VBQ0U7RUFDQSxlQUFlO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUEsMkRBQTJEOztBQUUzRDtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSx5Q0FBaUM7WUFBakMsaUNBQWlDO0VBQ25DOztBQUVBO0lBQ0UsMkNBQW1DO1lBQW5DLG1DQUFtQztFQUNyQzs7QUFFQTtJQUNFO01BQ0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7RUFDRjs7QUFQQTtJQUNFO01BQ0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7RUFDRjs7QUFFQTtJQUNFO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLGdCQUFnQjtJQUNsQjtFQUNGIiwiZmlsZSI6ImRvbGxhYnl0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW0tYXJlYS12MiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjksIDI5LCA1OSksIHJnYig0NSwgNDUsIDU5KSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvTFRfMDAwMV9SUi1jb3B5LnBuZ1wiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8vTFRfMDAwMl9MLWNvcHkucG5nXCIpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcblx0YmFja2dyb3VuZC1ibGVuZC1tb2RlOiBsaWdodGVuO1xufVxuXG4uYWJvdXQtZG9sbGFieXRlLWltZyB7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiA1MHB4IDBweDsgICBcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmFib3V0LWRvbGxhYnl0ZS1pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxucCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLyogZnJvbSBodHRwczovL2NvZGVwZW4uaW8vU3RyZW5ndGhhbmRGcmVlZG9tL3Blbi9CYWFRWXF3ICovXG5cbi5yb3RhdGUge1xuICAgIGFuaW1hdGlvbjogcm90YXRpb24gNXM7XG4gIH1cbiAgXG4gIC5saW5lYXIge1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgfVxuICBcbiAgLmluZmluaXRlIHtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaDQubG9nby10ZXh0IHtcbiAgICAgIG1hcmdpbjogNTBweCAwcHg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIGg0LmxvZ28tdGV4dHtcbiAgICAgIG1hcmdpbjogNzBweCAwcHg7XG4gICAgfVxuICB9XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                ])
            ])
        ] } });


/***/ }),

/***/ "yoyL":
/*!***************************************************!*\
  !*** ./src/app/components/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TeamComponent {
    constructor() {
        this.speakers = [
            {
                id: 1,
                img: "",
                name: "Team Member 1",
                title: "CEO"
            },
            {
                id: 2,
                img: "",
                name: "Team Member 2",
                title: "Developer"
            },
            {
                id: 3,
                img: "",
                name: "Team Member 3",
                title: "Graphic Designer"
            },
            {
                id: 4,
                img: "",
                name: "Team Member 4",
                title: "Developer"
            },
        ];
    }
    ngOnInit() {
        const faders = document.querySelectorAll('.fade-in');
        const sliders = document.querySelectorAll('.slide-in');
        const appearOptions = {
            threshold: 0.5
        };
        const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }
                else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);
        faders.forEach(fader => appearOnScroll.observe(fader));
        sliders.forEach(slider => {
            appearOnScroll.observe(slider);
        });
    }
}
TeamComponent.??fac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
TeamComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 65, vars: 0, consts: [["id", "team", 1, "team-area-v2", "pt-50", "pb-50", "pl-40", "pr-40"], [1, "team-main-item"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "fade-in"], [1, "section-title", "section-title-1", "text-center"], [1, "row"], [1, "col-lg-3", "col-md-6", "col-sm-12"], [1, "team-item", "mt-40"], [1, "team-thumb"], ["src", "../../../assets/images/arthur-2.jpeg", "alt", "Team Member 1", 1, "slide-in", "from-left"], [1, "fade-in"], [1, "fas", "fa-plus", "fade-in"], [1, "fab", "fa-linkedin", "fade-in"], [1, "fab", "fa-twitter", "fade-in"], [1, "fab", "fa-instagram", "fade-in"], [1, "team-content", "text-center", "fade-in"], [1, "title"], ["src", "../../../assets/images/arthur-4.jpeg", "alt", "Team Member 2", 1, "slide-in", "from-right"], ["src", "../../../assets/images/arthur-2.jpeg", "alt", "Team Member 3", 1, "slide-in", "from-left"], ["src", "../../../assets/images/arthur-4.jpeg", "alt", "Team Member 4", 1, "slide-in", "from-right"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "MEET THE TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Team Member 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "CEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Team Member 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Team Member 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Graphic Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " Team Member 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".team-area-v2[_ngcontent-%COMP%] {\n    background-image: linear-gradient(rgb(29, 29, 59), rgb(45, 45, 59)), url('LT_0001_RR-copy.png'), url('LT_0002_L-copy.png');\n\tbackground-size: contain;\n\tbackground-repeat: repeat;\n\tbackground-blend-mode: lighten;\n    text-align: center;\n}\ni[_ngcontent-%COMP%] {\n    margin: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBIQUF3SztDQUMzSyx3QkFBd0I7Q0FDeEIseUJBQXlCO0NBQ3pCLDhCQUE4QjtJQUMzQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVhbS1hcmVhLXYyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDI5LCAyOSwgNTkpLCByZ2IoNDUsIDQ1LCA1OSkpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0xUXzAwMDFfUlItY29weS5wbmdcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvTFRfMDAwMl9MLWNvcHkucG5nXCIpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG5cdGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pIHtcbiAgICBtYXJnaW46IDJweDtcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map