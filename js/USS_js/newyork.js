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
    $("#pop-up-heading").text("Spaghetti Space Chase");
    $("#pop-up-text").text(
      "Spaghetti Space Chase is a family-friendly ride at Universal Studios Singapore (USS) located in the Sci-Fi City Zone. The ride is a junior roller coaster that takes guests on a fun and exciting journey through a futuristic world of aliens and space travel. With its playful storyline, engaging animations, and high-tech special effects, Spaghetti Space Chase is a must-visit for families and visitors of all ages. Whether you're a fan of sci-fi and space-themed rides or just looking for a fun and exciting experience, Spaghetti Space Chase is sure to deliver. With its combination of thrills, excitement, and lighthearted fun, this ride is a true crowd-pleaser and a highlight of USS."
    );
  });

  $("#second-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Lights, Camera, Action!");
    $("#pop-up-text").text(
      "Lights, Camera, Action! is a thrilling and educational show at Universal Studios Singapore (USS) that takes visitors behind the scenes of the movie-making process. The show is hosted by legendary Hollywood director Steven Spielberg and features a live demonstration of how special effects are used to create some of the most memorable moments in film. With its exciting demonstrations, informative commentary, and use of real special effects, Lights, Camera, Action! is a must-see for anyone who loves movies and wants to learn more about the art of filmmaking. Whether you're a fan of Spielberg's movies or just curious about the magic of filmmaking, this show is sure to be a highlight of your visit to USS."
    );
  });

  $("#third-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Sesame Street");
    $("#pop-up-text").text(
      "Sesame Street is a beloved and iconic children's television show that has been entertaining and educating children for over 50 years. At Universal Studios Singapore (USS), visitors can step into the colorful world of Sesame Street and interact with their favorite characters, including Big Bird, Elmo, and Cookie Monster. With its interactive attractions, educational activities, and entertaining shows, Sesame Street is a must-visit for families with young children. Whether you're a fan of the show or just looking for a fun and educational experience, Sesame Street is sure to be a highlight of your visit to USS. Whether you're young or young at heart, this zone is sure to bring a smile to your face and create memories that will last a lifetime."
    );
  });

  $("#fourth-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Big Bird's Emporium");
    $("#pop-up-text").text(
      "Big Bird's Emporium is a themed store located in the Sesame Street Zone at Universal Studios Singapore (USS). The store offers a wide selection of merchandise inspired by the beloved characters of Sesame Street, including toys, games, clothing, and accessories. With its bright colors, fun decor, and wide selection of products, Big Bird's Emporium is a must-visit for families and visitors of all ages. Whether you're a fan of the Sesame Street gang or just looking for a unique and memorable shopping experience, Big Bird's Emporium is sure to deliver. Whether you're shopping for a gift or just for yourself, you're sure to find something special at this fun and friendly store."
    );
  });

  $("#fifth-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("KT's Grill");
    $("#pop-up-text").text(
      "KT's Grill is a quick service restaurant located in the New York Zone at Universal Studios Singapore (USS). The restaurant offers a menu of delicious American-style food, including burgers, hot dogs, and fries, as well as a selection of refreshing drinks. With its classic diner decor, casual atmosphere, and fast and friendly service, KT's Grill is the perfect place to stop for a bite to eat during your visit to USS. Whether you're looking for a quick snack or a full meal, KT's Grill has something to suit every taste and budget. Whether you're a fan of American-style food or just looking for a quick and convenient dining option, KT's Grill is the perfect place to grab a bite while exploring the New York Zone at USS."
    );
  });

  $("#sixth-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Loui's NY Pizza Palor");
    $("#pop-up-text").text(
      "Yes, Luigi's NY Pizza Parlor is a quick service restaurant located in the New York Zone at Universal Studios Singapore (USS). The restaurant serves a menu of delicious New York-style pizza, including classic toppings like pepperoni, sausage, and mushroom, as well as salads and soft drinks. With its classic New York decor, casual atmosphere, and fast and friendly service, Luigi's NY Pizza Parlor is the perfect place to stop for a bite to eat during your visit to USS. Whether you're looking for a quick snack or a full meal, Luigi's NY Pizza Parlor has something to suit every taste and budget. Whether you're a fan of pizza or just looking for a quick and convenient dining option, Luigi's NY Pizza Parlor is the perfect place to grab a slice while exploring the New York Zone at USS."
    );
  });

  $(".container .close").click(function () {
    $(".pop-up").removeClass("open");
  });
});
