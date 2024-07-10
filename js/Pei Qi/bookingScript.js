// Setting minimum date for Date entry
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = "0" + dd;
}
if (mm < 10) {
    mm = "0" + mm;
}
var mm2 = mm + 1;
if (mm2 > 12) mm2 -= 12;
var yyyy2 = yyyy;
if (mm2 < mm) {
    yyyy2++;
}
if (mm2 < 10) {
    mm2 = "0" + mm2;
}
var sToday = yyyy + "-" + mm + "-" + dd;
var sOneMonthLater = yyyy2 + "-" + mm2 + "-" + dd;
document.getElementById("iDate").setAttribute("min", sToday);
document.getElementById("iDate").setAttribute("max", sOneMonthLater);

function calculateTotal() {
    event.preventDefault();
    var adultLocal = parseInt(document.getElementById("adult-local").value);
    var childLocal = parseInt(document.getElementById("child-local").value);
    var seniorLocal = parseInt(document.getElementById("senior-local").value);
    var adultForeign = parseInt(document.getElementById("adult-foreign").value);
    var childForeign = parseInt(document.getElementById("child-foreign").value);
    var totalPrice = (adultLocal * 36) + (childLocal * 25.20) + (seniorLocal * 20) + (adultForeign * 40) + (childForeign * 28);
    document.getElementById("total-price").innerHTML = "Total Price: $" + totalPrice;
}

function hideTotal() {
    var divobj = document.getElementById('totalPrice');
    divobj.style.display = 'none';
}

function submitForm() {
    var divObj = document.getElementById("finalMessage");
    divObj.style.display = "block";
    var name = document.getElementById("inputName").value;
    divObj.innerHTML = "Thank you for booking," + " " + name+"!";
}

function resetForm() {
    document.getElementById("total-price").style.display = "none";
    document.getElementById("finalMessage").style.display = "none";
}