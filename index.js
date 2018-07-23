var katzDeliLine = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`
}

function nowServing() {
  if(katzDeli.length >= 1) {
    katzDeli.shift();
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  katzDeliLine.forEach()
}