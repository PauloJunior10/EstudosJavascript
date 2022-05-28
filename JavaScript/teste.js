function past(h, m, s){
    //#Happy Coding! ^_^
    m = m * 60
    h = h * 3600
    return (h + m + s)*1000;
  }

  console.log( past(0,1,1))