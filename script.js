function removeFirstAndLast(arr){
    arr = arr.split(',');
    
    if (arr.length < 3) {
      return null;
    }
  
    return arr.slice(1, arr.length - 1).join(' ');
  }
  console.log('1. feladat:')
  console.log(removeFirstAndLast(''))
  console.log(removeFirstAndLast('1'))
  console.log(removeFirstAndLast('A1,B2'))
  console.log(removeFirstAndLast('1,2,3'))
  console.log(removeFirstAndLast('1,2,3,4'))
  console.log(removeFirstAndLast('A1,B2,C3,D4,E5'))
  console.log(removeFirstAndLast('A,1,23,456,78,9,Z'))


console.log("2. feladat: Complementary DNA")
function dnaStrand(dna){
    var result= "";
            for(var i =0; i<dna.length; i++) 
            {
          if (dna[i]==="A") 
         {
          result +="T";
         }
          else if (dna[i]==="T") 
         {
          result += "A";
          }
          else if (dna[i]==="C")
          {
          result +="G";
          }
          else if (dna[i]==="G")
          {
          result += "C";
          }
          else {
          result +=dna[i];
          }
           }
       return result;
      }
      console.log('\n2. feladat:')
      console.log(dnaStrand("AAAA"))
      console.log(dnaStrand("ATTGC"))
      console.log(dnaStrand("GTAT"))
      console.log(dnaStrand("TAGACAT"))
      console.log(dnaStrand(""))

function deEmojify(deemojifyg){
        if (!deemojifyg) return '';
    
        const emojis = {
            ':)': 0,
            ':D': 1,
            '>:(': 2,
            '>:C': 3,
            ':/': 4,
            ':|': 5,
            ':O': 6,
            ';)': 7,
            '^.^': 8,
            ':(': 9
        };
    
    
        return deemojifyg.split('  ')
            .map(str => str.split(' '))
            .map(arr => arr.map(str => emojis[str]).join(''))
            .map(num => String.fromCodePoint(num))
            .join('');
};
console.log('\n3. feladat:')
console.log(deEmojify(":D :) :/  :D :) :|"))
console.log(deEmojify(";) >(  :D :) :D  :D :) ^.^  :D :) ^.^  :D :D :D  >:C >(  :D :D :(  :D :D :D  :D :D :/  :D :) ^.^  :D :) :)  >:C >:C"))
console.log(deEmojify(":)"))
console.log(deEmojify(""))


console.log('--------------------------------------------------------')
console.log('Értékelés:')
let pont = 0
pont += removeFirstAndLast('') === null
pont += removeFirstAndLast('1') === null
pont += removeFirstAndLast('A1,B2') === null
pont += removeFirstAndLast('1,2,3') === '2'
pont += removeFirstAndLast('1,2,3,4') === '2 3'
pont += removeFirstAndLast('A1,B2,C3,D4,E5') === 'B2 C3 D4'
pont += removeFirstAndLast('A,1,23,456,78,9,Z') === '1 23 456 78 9'
pont += dnaStrand("AAAA") === "TTTT"
pont += dnaStrand("ATTGC") === "TAACG"
pont += dnaStrand("GTAT") === "CATA"
pont += dnaStrand("TAGACAT") === "ATCTGTA"
pont += dnaStrand("") === ""
pont += deEmojify(":D :) :/  :D :) :|") === "hi"
pont += deEmojify(";) >(  :D :) :D  :D :) ^.^  :D :) ^.^  :D :D :D  >:C >(  :D :D :(  :D :D :D  :D :D :/  :D :) ^.^  :D :) :)  >:C >:C") === "Hello world!"
pont += deEmojify(":)") === "\x00"
pont += deEmojify("") === ""
console.log(`Elért pont: ${pont}, százalék: ${pont/16*100}`)