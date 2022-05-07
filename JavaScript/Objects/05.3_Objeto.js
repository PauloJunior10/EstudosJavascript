// Trasnformando um Switch em um objeto
function phoneticLookup(val) {
    let result = "";
  
    // switch(val) {
    //   case "alpha":
    //     result = "Adams";
    //     break;
    //   case "bravo":
    //     result = "Boston";
    //     break;
    //   case "charlie":
    //     result = "Chicago";
    // }
//}

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
      };
        result = lookup[val];
        return result;
}

console.log(phoneticLookup("charlie"))