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
    $("#pop-up-heading").text("Enchanted Airways");
    $("#pop-up-text").text(
      "Enchanted Airways is a popular ride at Universal Studios Singapore, taking visitors on a magical journey through a whimsical fairy-tale world filled with flying dragons and other fantastical creatures. With thrilling twists and turns, the ride provides an unforgettable experience for visitors of all ages and is a must-visit attraction at USS."
    );
  });

  $("#second-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Magic Potion Spin");
    $("#pop-up-text").text(
      "Magic Potion Spin is a family-friendly ride located at Universal Studios Singapore. Visitors board a magical cauldron that spins and twirls, surrounded by a whimsical fairy-tale world filled with colorful creatures and vibrant landscapes. The ride provides a fun and playful experience for all ages and is a popular attraction at USS."
    );
  });

  $("#third-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Donkey Live");
    $("#pop-up-text").text(
      "Donkey Live is a stage show located in the Far Far Away Zone at Universal Studios Singapore. The show features the beloved characters from the franchise, including Donkey, as they perform in a musical production filled with laughter, music, and dance. It's a fun and entertaining experience for families and fans of the movies and is a must-see attraction in the Far Far Away Zone at USS."
    );
  });

  $("#fourth-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Goldilocks");
    $("#pop-up-text").text(
      "Goldilocks is a stage show located at Universal Studios Singapore, featuring the classic fairytale character as she goes on a magical journey filled with music, dance, and adventure. The show brings the timeless story to life with colorful costumes, stunning sets, and lively performances, providing a fun and memorable experience for visitors of all ages. It's a popular attraction at USS, especially for families with children who love classic fairy tales."
    );
  });

  $("#fifth-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Happily Ever After");
    $("#pop-up-text").text(
      "Happily Ever After is a nightly fireworks display at Universal Studios Singapore. The show features a stunning display of pyrotechnics and special effects set to a musical soundtrack that highlights the classic fairy tales and beloved characters of the theme park. It provides a breathtaking finale to a day of fun and adventure at USS, captivating audiences of all ages and making for a memorable experience."
    );
  });

  $("#sixth-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Magic Beans");
    $("#pop-up-text").text(
      "Magic Beans is a retail store located in the Far Far Away Zone at Universal Studios Singapore (USS). The store offers a wide range of merchandise and souvenirs inspired by the popular characters and franchises of the theme park, including Shrek and other fairy-tale favorites. Visitors can browse and purchase a variety of items, from plush toys and clothing to collectibles and other unique items, making Magic Beans a must-visit stop for souvenirs and gifts during a visit to USS."
    );
  });

  $(".container .close").click(function () {
    $(".pop-up").removeClass("open");
  });
});
