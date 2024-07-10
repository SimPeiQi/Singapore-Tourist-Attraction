// JavaScript source code
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
let mm2 = mm;
if (mm2 > 12) mm2 -= 12;
let yyyy2 = yyyy + 1;
if (mm2 < mm) {
  yyyy2++;
}
if (mm2 < 10) {
  mm2 = "0" + mm2;
}
let sToday = yyyy + "-" + mm + "-" + dd;
let sOneYearLater = yyyy2 + "-" + mm + "-" + dd;
document.getElementById("date").setAttribute("min", sToday);
document.getElementById("date").setAttribute("max", sOneYearLater);

$(document).ready(function () {
  let selectedPackageType,
    formFields = $(
      "#booking-form input, #booking-form textarea, #booking-form select"
    ),
    packageTypes = [
      { name: "", adult: 0, child: 0 },
      { name: "Standard Package", adult: 50, child: 25 },
      { name: "Premium Package", adult: 100, child: 50 },
      { name: "Child Package", adult: 70, child: 10 },
    ];

  $("#submit").click(function (e) {
    e.preventDefault();
    let firstname = $("#first-name").val(),
      lastname = $("#last-name").val(),
      email = $("#email").val(),
      phone = $("#phone").val(),
      package = $("#package-type").val(),
      date = $("#date").val(),
      adults = $("#adults").val(),
      childrens = $("#childrens").val(),
      address = $("#billing-address").val(),
      form = $("#booking-form"),
      formValid = true;
    // validations

    formFields.each(function () {
      if (
        !$(this).val() ||
        ($(this).prop("tagName") == "SELECT" && $(this).val() == "")
      ) {
        formValid = false;
        return false;
      }
    });

    if (!formValid) {
      alert("Please fill in all input fields correctly");
    } else {
      let totalPrice =
        selectedPackageType.adult * adults +
        selectedPackageType.child * childrens;
      $("#after-name").html(`${firstname} ${lastname}`);
      $("#package-selected").html(`${package}`);
      $("#date-selected").html(`${date}`);
      $("#adult-selected").html(`${adults}`);
      $("#child-selected").html(`${childrens}`);
      $("#selected-billing").html(`${address}`);
      $("#total-price").html(`${totalPrice.toString()}`);
      form.fadeOut(2500);
      $("#after-text-container").fadeIn(2500);
      form[0].reset();
      $("#adult-price").html("0");
      $("#child-price").html("0");
    }
  });

  $("#package-type").change(function (e) {
    e.preventDefault();
    selectedPackageType = packageTypes.find(
      (packageType) => packageType.name === $(this).val()
    );
    if ($(this).val() == "Child Package") {
      $("#childrens").attr({
        min: "1",
        value: "1",
      });
    } else {
      $("#childrens").attr({
        min: "0",
        value: "0",
      });
    }
    $("#adult-price").html(`${selectedPackageType.adult.toString()}`);
    $("#child-price").html(`${selectedPackageType.child.toString()}`);
  });
});
