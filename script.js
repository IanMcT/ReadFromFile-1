function readFile(input)
{
  var file = input.files[0];
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function(){
    processContents(reader.result);
    reader.close;
  }
  console.log("in function");
}

function processContents(contents){
  var lines = contents.split("\n");
  var output = "";
  var total = 0;
  var runOnce = false;
  for(line of lines){
    var pop = line.split(",");

    console.log(pop[1]);
    if(runOnce){
      if(Number.isInteger(parseInt(pop[1]))){
        total += parseInt(pop[1]);
      }
    }
    runOnce = true;
    alert(pop[0] + " pop: " + pop[1] + " total " + total);
    output += line + "<br />";
  }
  output += "Canada " + total;
  document.getElementById("output").innerHTML = output;
}