//const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  var kittens = kittens.push('Ralph');
  console.log(kittens);
  return kittens;
}
destructivelyAppendKitten();
