function rot13(str) {
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const alphabetLength = alphabet.length;

  return str
    .split("")
    .map((char) => {
      const alphabetIndex = alphabet.indexOf(char);
      
      if (alphabetIndex === -1 || /[\s]/.test(char)) {
        return char;
      }

      const decoder = alphabetIndex + 13 >= alphabetLength
          ? alphabetIndex + 13 - alphabetLength
          : alphabetIndex + 13;

      return alphabet[decoder];
    })
    .join("");
}

console.log(rot13("SERR PBQR PNZC"), "FREE CODE CAMP");
console.log(rot13("SERR CVMMN!"), "FREE PIZZA!");
console.log(rot13("SERR YBIR?"), "FREE LOVE?");
console.log(
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."),
  "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
);
