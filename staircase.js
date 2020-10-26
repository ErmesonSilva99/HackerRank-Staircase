function space (s) {
  let spaces = "";
  
  for ( let i = 1; i <= s; i++ ) {
    spaces += " ";
  }
  
  return spaces;
}

function staircase(n) {
  let hash = "";
  let spaces = "";
  
  for ( let i = 1; i <= n; i++ ) {
    spaces = space(n-i);
    hash += "#";
    let ss = spaces + "" + hash;
    
    console.log(ss);
  }
}
