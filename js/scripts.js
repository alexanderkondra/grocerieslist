$(document).ready(function(){
  $("form").submit(function(event){
  var allItems = [];
  var itemOne = $("#item1").val();
  allItems.push(itemOne);
  var itemTwo = $("#item2").val();
  allItems.push(itemTwo);
  var itemThree = $("#item3").val();
  allItems.push(itemThree);
  // console.log(itemOne);
  // console.log(itemTwo);
  // console.log(itemThree);
  // console.log(allItems);
  var sortedItems = allItems.sort();
  console.log(sortedItems);

  var upperCase = sortedItems.map(function(item){
    return item.toUpperCase();
  })
  console.log(upperCase);
  $("#hide").hide();

  upperCase.forEach(function(item){
    $("ul").append("<li>"+item+"</li>");

  });
  event.preventDefault();

  });
});

// event.preventDefault();
//     var groceryItems = ["item1", "item2", "item3"];
//
//     var newListOfItems = groceryItems.map(function(groceryItem){
//       var newItem = $("input#" + groceryItem).val();
//       return  newItem.charAt(0).toUpperCase() + newItem.slice(1);
//     });
//     newListOfItems.sort();
//     newListOfItems.forEach(function(item){
//       $("#grocery_list").append("<li>" + item + "</li>");
//     });
//
//     $("#output").show();
//   });
// });
