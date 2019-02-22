function shout(string) {
  // returns string in all uppercase
  return string.toUpperCase();
}

function whisper(string) {
  // returns string in all lowercase
  return string.toLowerCase();
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  if string === whisper(string) {
    return "I can't hear you!";
  }
}
