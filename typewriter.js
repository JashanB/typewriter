const sentence = "hello there from lighthouse labs";
const split = sentence.split('');
split.push('\n');
let timer = 0;
for (let char of split) {
  timer += 50;
  setTimeout(() => {
    process.stdout.write(char)
  }, timer);
};

