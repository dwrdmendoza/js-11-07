// Given a string, replace every letter with its position in the alphebet.

// if anything in the text isn't a letter, ignore it and don't  return it.

// "a" = 1, "b" = 2, etc.
// aphabetPosition("teh sunset sets at twelve o' clock. ")
// should return
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphaNums = [];

  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++){
    let idx = alphabet.indexOf(text[i]);

    if (idx === -1){
      continue;
    } else {
      alphaNums.push(idx + 1);
    }
  }
  
  return alphaNums.join(" ");
}