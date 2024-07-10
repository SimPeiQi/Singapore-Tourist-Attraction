// JavaScript source code
$(document).ready(function () {
  $(".container-box").click(function (e) {
    e.preventDefault();
    $(".pop-up").addClass("open");
    $(".pop-up").css({
      display: "block",
      top: $(this).offset().top + $(this).outerHeight(),
    });
  });

  $("#first-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Revenge of the Mummy");
    $("#pop-up-text").text(
      "Revenge of the Mummy is an indoor roller coaster ride located at Universal Studios Singapore. The ride takes visitors on a thrilling journey through ancient Egyptian tombs and pyramids, featuring high-speed twists, turns, and drops in complete darkness, as well as stunning special effects and realistic sets. With its unique combination of thrills, excitement, and immersive storytelling, Revenge of the Mummy is a standout attraction at USS, offering an unforgettable experience for adventurous theme park visitors."
    );
  });

  $("#second-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Treasure Hunters");
    $("#pop-up-text").text(
      "Treasure Hunters is an interactive dark ride located at Universal Studios Singapore (USS). The ride takes visitors on a journey through an enchanted jungle, filled with hidden treasures and obstacles, as they search for treasure with the help of special tools and weapons. The ride combines cutting-edge technology, intricate sets, and thrilling special effects to create a one-of-a-kind experience, making Treasure Hunters a must-visit attraction for visitors seeking an immersive and interactive adventure at USS."
    );
  });

  $("#third-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Cairo Market");
    $("#pop-up-text").text(
      "Cairo Market is a themed retail area located at Universal Studios Singapore (USS). The area is inspired by the markets of ancient Egypt and features a variety of shops selling souvenirs, gifts, and other merchandise related to popular franchises and attractions at the theme park. Visitors can browse and purchase items such as clothing, toys, jewelry, and collectibles, making Cairo Market a must-visit destination for souvenirs and gifts during a visit to USS."
    );
  });

  $("#fourth-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Oasis Spice Caf�");
    $("#pop-up-text").text(
      "Oasis Spice Caf� is a themed dining venue located at Universal Studios Singapore (USS). The caf� offers a range of dishes and snacks inspired by the flavors and spices of the Middle East, creating an immersive dining experience for visitors. With a lively and colorful atmosphere, the caf� is a great place to stop for a bite to eat or a refreshing drink during a day of exploring and adventure at USS."
    );
  });

  $(".container .close").click(function () {
    $(".pop-up").removeClass("open");
  });
});
