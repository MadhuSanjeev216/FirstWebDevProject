/*$(function(){
    $(".red-box").fadeOut(2000);
    $(".green-box").fadeOut(4000);
    $(".blue-box").toggle();
    $(".blue-box").fadeTo(7000,0.5);
    $(".red-box").fadeIn(12000);
    $("p").animate({
        fontSize: "20px"
    },2000);
});*/
/*$(function () {    
    $(".red-box").fadeTo(1000, 0.5);   
    $(".green-box").delay(1000).fadeTo(1000, 0.5);
    $(".blue-box").delay(2000).fadeTo(1000, 0.5).fadeTo(1000, 1.0).delay(1000).fadeOut();
  });*/

 /* $(function () {

    // Fade out red box over 100 second
    $(".red-box").fadeTo(1000, 0, function() {
  
      // This callback function is executed once outer animation finishes.
      // So the green box starts fading out once the red box finished fading out.
      $(".green-box").fadeTo(1000, 0, function() {
  
        // Similarly, any code inside this function will start executing only once
        // the green box finishes fading out (after 2 seconds)
        $(".blue-box").fadeTo(1000, 0);
      });
    });
  
  });*/

  /*$(function () {

    // Fade in lightbox after half a second
    $(".lightbox").delay(2000).fadeIn(2000);
  
  });*/

/*  $(function () {

    // NOTE: Some of the selectors below overlap. To see the exact effect of one
    // of them, please comment out all others.
  
    // To select elements in jQuery, you can simply use any CSS selector inside
    // the $() function by passing it in as a string.
  
    // // Select all paragraph tags
    // var p = $("p");
    // highlight(p);
  
    // // Select all elements with the class .red-box (only one in this case)
    // var redBoxes = $(".red-box");
    // highlight(redBoxes);
  
    // // Select the unique element with ID "list"
    // var list = $("#list");
    // highlight(list);
  
    // // Select all h2, p, and input tags
    // var elements = $("h2, p, input");
    // highlight(elements);
  
//     // Select only the last <li> on the page
//    var lastItem = $("li:last");
//     highlight(lastItem);
  
    // // Select all even list items on the page (every second list item)
    // var everySecondItem = $("li:even");
    // highlight(everySecondItem);
  
//     // Select all odd list items (every other list item)
//    var everyOtherItem = $("li:odd");
//     highlight(everyOtherItem);
  
    // // Select all input elements that are checked/selected
    // // Checkboxes and radio buttons don't have background-color
    // var selected = $("input:checked");
    // console.log(selected.length);
  
    // Select all input elements of type email
    var emails = $("input[type=email]");
    highlight(emails);
  
  });
  
  // Helper function which highlights the given element with yellow background
  function highlight(element) {
    element.css("background-color", "rgba(180, 180, 30, 0.8)");
  }*/

/*  $(function () {

    // NOTE: Some of the selectors below overlap. To see the exact effect of one
    // of them, please comment out all others.
  
    // // Select the #list and find all <li> tags it contains
    // // This contains even indirect children further down in the hierarchy
    // var items = $("#list").find("li");
    // highlight(items);
    // ``
    // Select the #list and find only <li> that are *direct* children
    // Note that this will still produce a yellow background around the whole list
    // // because the direct children <li> have enough height to contain their children
    // var children = $("#list").children("li");
    // highlight(children);
  
    // // Search for even non-direct parents
    // var body = $("#list").parents("body");
    // highlight(body);
  
    // // Select the (unique) direct parent of an element
    // var content = $("#list").parent();
    //  highlight(content);
  
//     // Search through siblings on the same level in the HTML hierarchy
//    var siblingHeadlines = $("#list").siblings(":header");
//     highlight(siblingHeadlines);
  
    // // Select the previous sibling of a selected element
    // var previous = $("#list").prev();
    // highlight(previous);
  
    // Select the next sibling of a selected element
   var next = $("#list").next();
    highlight(next);  
  });  
  // Helper function which highlights the given element with yellow background
  function highlight(element) {
    element.css("background-color", "rgba(180, 180, 30, 0.8)");
  }*/
/*  $(function () {

    // NOTE: Some of the selectors below overlap. To see the exact effect of one
    // of them, please comment out all others.
  
    // // Select all <li> tags and then filter out all odd ones (keep only even ones)
    // // Same as $("#list > li:even"), using more advanced CSS
    // var everySecondItem = $("#list").children("li").filter(":even");
    // highlight(everySecondItem);
  
    // The filter can even be a function that gets the index of an element and
    // // returns true (to keep the element) or false (to filter it out).
    // // For instance, to select only every third sub list item, we can do this:
    // var everyThirdItem = $("li li").filter(function(index) {
    //   return index % 3 == 0;
    // });
    // highlight(everyThirdItem);
  
    // // Keep only the first item of a selection
    // var first = $("li").first();
    // highlight(first);
  
    // // Keep only the last item of a selection
    // var last = $("li").last();
    // highlight(last);
  
    // Keep only the item at a specific index of a selection
    // // For instance, keep only the 5th item (thus index 4):
    // var fifth = $("li").eq(4);
    // highlight(fifth);
  
    // Keep only the second last item (index -2):
    var secondLast = $("li").eq(-2);
    highlight(secondLast);
  
  });
  
  // Helper function which highlights the given element with yellow background
  function highlight(element) {
    element.css("background-color", "rgba(180, 180, 30, 0.8)");
  }*/

  //============================Manipulating the DOM Elements============================================
  $(function () {

    // To retrieve or set the value of a CSS property, you can use css().
    // This works similar to attr() and prop(): pass one argument to read
    // or two arguments to set a new value.
  
    // For instance, you can achieve the same as with hide() like this:
    $("p:first").css("display", "none");
  
    // Let's read the width property of .red-box:
    var redBox = $(".red-box");
    console.log(redBox.css("width"));  // 80px
    // To get the width or height without unit, you can use width() and height():
    console.log(redBox.width());  // 80
  
    // You can change any CSS property in this simple way.
    redBox.css("background-color", "#AA5500");
    $("p").css("font-size", "20px");
  
    // You can even change the value of a property relative to its previous value
    redBox.css("width", "+=20px");
    redBox.css("height", "-=20px");
  
    // Also, you can retrieve multiple values by passing an array as the argument
    var properties = $("p").css(["font-size", "line-height", "color"]);
    // The result is an object containing all values
    console.log(properties);
    console.log(properties["font-size"]);  // 20px
  
    // In line with jQuery's other function, you can also use a callback function
    // instead of passing in a new value directly.
    // This example also demonstrates that jQuery automatically uses the correct
    // vendor prefix for the CSS property depending on the browser, which is
    // -moz-user-select in this case.
    // You can see that in the Developer Tools (F12 in browser) in the Inspector tab.
   /* redBox.css("user-select", function() {
      // [some logic here...]
      return "none";
    });*/
  
  });