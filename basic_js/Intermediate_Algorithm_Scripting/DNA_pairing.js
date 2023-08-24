function pairElement(str) {
  return str.split("").map((el) => {
    switch (el) {
      case "G":
        return [el, "C"];
        break;
      case "C":
        return [el, "G"];
        break;
      case "A":
        return [el, "T"];
        break;
      case "T":
        return [el, "A"];
        break;
    }
  });
}

console.log(pairElement("GCG")); // [["G", "C"], ["C","G"], ["G", "C"]]
console.log(pairElement("ATCGA")); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
