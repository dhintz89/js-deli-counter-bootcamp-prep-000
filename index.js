var katzDeliLine = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length >= 1) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
    if(katzDeliLine.length >= 2) {

        for(var i=0; i<katzDeliLine.length; i++) {
            return `${i+1}. ${katzDeliLine[i]}`;
        }
    }else{
        return 'The line is currently empty.';
    }
}