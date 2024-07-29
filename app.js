function printTable() {
  var tableNumber = parseInt(document.getElementById("tableNumber").value);
  var startFrom = parseInt(document.getElementById("startFrom").value);
  var endAt = parseInt(document.getElementById("endAt").value);

  if (isNaN(tableNumber) || isNaN(startFrom) || isNaN(endAt)) {
    alert("Please enter valid numbers.");
    return;
  }
var output = "";

  for (var i = startFrom; i <= endAt; i++) {
    output += tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>";
  }

  document.write(output);
}