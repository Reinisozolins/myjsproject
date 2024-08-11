// js script who add records in invTable



document.getElementById("submit").onclick = function () {
  document.getElementById("invTable").style.display = "block";

  var table = document.getElementById("invTable");
  var row = table.insertRow(-1);
  var date = row.insertCell(0);
  var invNo = row.insertCell(1);
  var amount = row.insertCell(2);
  var descr = row.insertCell(3);
  date.innerHTML = document.getElementById("date").value;
  invNo.innerHTML = document.getElementById("invoiceNo").value;
  amount.innerHTML = document.getElementById("amount").value;
  descr.innerHTML = document.getElementById("description").value;

  return false;
};
