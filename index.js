var katzDeliLine = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`
}

function nowServing() {
  if(katzDeliLine.length >= 1) {
    return katzDeliLine.shift();
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  console.log("The line is currently:");
  if(katzDeliLine.length >= 1) {
    katzDeliLine.forEach(function(item, index){
      console.log(index, item);
    });
  }else{
    console.log("empty");
  }
}