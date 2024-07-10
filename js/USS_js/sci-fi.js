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
    $("#pop-up-heading").text("Battle Galactia: Human VS. Cylon");
    $("#pop-up-text").text(
      "Battle Galactica: Human vs. Cylon is a science fiction themed event held in USS Singapore, featuring an epic showdown between the human race and the Cylons, a race of sentient robots in the Battlestar Galactica universe. Visitors to the event will experience a thrilling live action battle between the two opposing forces, with stunning special effects, advanced props, and talented actors bringing the conflict to life."
    );
  });

  $("#second-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("The Ultimate 3D Battle");
    $("#pop-up-text").text(
      "The Ultimate 3D Battle is an electrifying attraction at Universal Studios Singapore, offering visitors a cutting-edge, fully immersive experience. This 3D extravaganza features state-of-the-art special effects, advanced technology, and high-energy performances, bringing the thrill of a massive battle to life."
    );
  });

  $("#third-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Voices Of Cybertron");
    $("#pop-up-text").text(
      "Voices of Cybertron is a thrilling live show experience held at Universal Studios Singapore. This high-energy production features talented actors and state-of-the-art technology, bringing the world of Cybertron, the home planet of the Transformers, to life. The audience will be transported to the heart of a fierce battle between the heroic Autobots and the evil Decepticons as they use their powerful voices to sing and act their way through this epic struggle. With stunning special effects and a pulse-pounding musical score, Voices of Cybertron is an unforgettable experience that will leave fans of the Transformers franchise on the edge of their seats."
    );
  });

  $("#fourth-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Transformers Supply Vault");
    $("#pop-up-text").text(
      "Transformers Supply Vault is a must-visit for fans of the Transformers franchise visiting Universal Studios Singapore. This interactive experience takes visitors on a journey through Cybertron, the home planet of the Transformers, as they explore a vast array of rare and iconic items from the series. From vintage collectible toys and comics, to one-of-a-kind props and costumes used in the films, Transformers Supply Vault is a treasure trove of memorabilia that will delight fans of all ages. With knowledgeable guides on hand to answer questions and provide behind-the-scenes insights, this is an experience that no Transformers fan should miss."
    );
  });

  $("#fifth-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Frozen Fuel");
    $("#pop-up-text").text(
      "Frozen Fuel is an exciting new attraction at Universal Studios Singapore, inspired by the popular animated film franchise Frozen. This indoor, immersive experience takes visitors on a journey through the magical kingdom of Arendelle, where they will encounter their favorite characters, such as Elsa, Anna, Kristoff and Olaf, and be transported to a world of ice and snow. Guests will be amazed by the lifelike special effects, stunning ice sculptures, and colorful displays, all of which combine to create a truly unforgettable experience. Whether you're a fan of the films or simply looking for a unique and captivating adventure, Frozen Fuel is a must-visit attraction at Universal Studios Singapore."
    );
  });

  $("#sixth-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Sci-Fi Games");
    $("#pop-up-text").text(
      "Sci-Fi Games is a cutting-edge gaming experience for sci-fi fans visiting Universal Studios Singapore. This high-tech arena features a range of virtual reality and interactive games, each inspired by classic science fiction franchises and futuristic technology. Players can suit up in VR headsets and immerse themselves in thrilling virtual battles, or challenge friends to fast-paced competitions in the latest gaming technology. With advanced graphics, motion sensing controls, and an exciting sci-fi theme, Sci-Fi Games offers a truly next-level gaming experience for players of all ages and skill levels. Whether you're a seasoned gamer or a newcomer to virtual reality, this exciting attraction is sure to be a highlight of your visit to Universal Studios Singapore."
    );
  });

  $(".container .close").click(function () {
    $(".pop-up").removeClass("open");
  });
});
