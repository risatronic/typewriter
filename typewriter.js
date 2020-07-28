const typewriter = function(sentence){
  let i = 0;

  function print(){
    process.stdout.write(sentence[i]);
    if(i === sentence.length - 1){
      process.stdout.write('\n');
      clearInterval(timer);
    }
    i++;
  }
  print(sentence);
  let timer = setInterval(print, 50);
}

const sentence = "hello there from lighthouse labs";
typewriter(sentence);