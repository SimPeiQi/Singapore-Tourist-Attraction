// JavaScript source code

// Setting minimum date for Date entry
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
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

var attractions = new Array();
attractions["skypark"] = 20;
attractions["artscience"] = 9.8;
attractions["sampan"] = 10;

function attractionPrices() {
    var attractionPrice = 0;
    var theForm = document.forms["bookingform"];
    var attraction = theForm.elements["attraction"];
    for (var i = 0; i < attraction.length; i++) {
        if (attraction[i].checked) {
            attractionPrice = attractions[attraction[i].value];
            break;
        }
    }
    return attractionPrice;
}

function calculateTotal() {
    var attraction = attractionPrices();
    var qty = document.getElementById("quantity").value;
    var attractionPrice = (attraction) * qty;

    var divObj = document.getElementById("totalPrice");
    divObj.style.display = "block";
    divObj.innerHTML = "Total price for your order is $" + attractionPrice;
}

function hideTotal() {
    var divobj = document.getElementById('totalPrice');
    divobj.style.display = 'none';
}

function submitForm() {
    var divObj = document.getElementById("finalMessage");
    divObj.style.display = "block";
    divObj.innerHTML = "Thank you for choosing us";
}

function resetForm() {
    document.getElementById("bookingform").reset();
    hideTotal();
    divobj = document.getElementById("finalMessage");
    divobj.style.display = 'none';
}