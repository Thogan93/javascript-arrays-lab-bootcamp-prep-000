//const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  var kittens = kittens.push();
  console.log(kittens);
  return name;
}
destructivelyAppendKitten('Ralph');
