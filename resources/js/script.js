/*jslint browser: true*/
/*global $, window, location */

function handlePageLoaded() {
    'use strict';
    $(window).on("load", function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({
            'overflow': 'visible'
        });
        // setScrollBehavior();
    });
}

function setScrollBehavior() {
    'use strict';
    $("html").niceScroll({
        cursorcolor: "#f74d65",
        scrollspeed: "100",
        cursorborder: "1px solid #f74d65",
        horizrailenabled: "false",
        cursorborderradius: "0px"
    });
}

function handleLinkClick() {
    'use strict';
    $('a[href*="#"]:not([href="#"])').on("click", function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}


// Used by includes to keep placeholder
function unWrapPlaceholder() {
    'use strict';
    $(window).contents().unwrap();
}

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
});

function init() {
    'use strict';
    handlePageLoaded();
    handleLinkClick();
}

// function  loc_url_eng(){
//     var p=window.location.pathname.split('/'); 
//     var page_1 = p[p.length-1].split('.');
//     var page_2 = p[p.length-2].split('.');
//     page_1[0]=page_2[0]+"_de/"+page_1[0]+".html";

//     location.href="../"+page_1[0];


// }

function loc_url_eng() {
    var p = window.location.pathname.split('/');
    var page = p[p.length - 1].split('.');
    var f = "../views_de/";
    page[0] = f + page[0] + ".html";
    
    if (p==",index.html") {
        f= '';
        page[0]="index.de.html";
    }
     alert(page[0]);
    location.href = page[0];

}

function loc_url_de() {
    var p = window.location.pathname.split('/');
    var page = p[p.length - 1].split('.');
    var f = "../views/";
    page[0] = f + page[0] + ".html";

    if (p==",index.de.html") {
        f= '';
        page[0]="index.html";
    }
    alert(page[0]);
    location.href =   page[0];

}



function load_page_eng() {
    let language = window.navigator.language;
    var k = window.location.pathname.split('/');
    var page = k[k.length - 1].split('.');
    var v = "../views/";
    
    if (loc_url_de) {
      
    }else if (language != 'de' && k != ",resources,views," + page[0] + ".html") {
        if (k == ",index.de.html") {
            v = " ";
            location.href = v + page[0] + ".html";
        }
        location.href = v + page[0] + ".html";
    }
}

function load_page_de() {
    let language = window.navigator.language;
    var k = window.location.pathname.split('/');
    var page = k[k.length - 1].split('.');
    var v = "../views_de/";

    if (loc_url_eng) {
      
    }else if (language == 'de' && k != ",resources,views_de," + page[0] + ".html") {
        if (k == ",index.html") {
            v = " ";
            location.href = v + page[0] + ".html";
        }
        location.href = v + page[0] + ".html";
    }
}


// let languageFistTwo = language.substr(0,2); // To only keep the first 2 characters.
// let currentLocation = document.getElementsByTagName('html')[0].getAttribute('lang-js')




init();