//const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(a) {
  var kittens = kittens.push(a);
  console.log(kittens);
  return a;
}
destructivelyAppendKitten('Ralph');
