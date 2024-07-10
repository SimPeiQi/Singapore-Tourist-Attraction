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
    $("#pop-up-heading").text("Canopy Flyer");
    $("#pop-up-text").text(
      "The Canopy Flyer is a thrilling ride at Universal Studios Singapore (USS). It takes riders on a high-speed journey through the park's lush tropical forest, offering stunning views of the surrounding area. The ride features a suspended roller coaster design and is one of the most popular attractions at USS. With its combination of speed, excitement, and breathtaking scenery, the Canopy Flyer is a must-visit for thrill-seekers visiting the park."
    );
  });

  $("#second-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Dino Soarin");
    $("#pop-up-text").text(
      "Dino-Soarin' is an exciting ride at Universal Studios Singapore (USS) that takes riders on a journey through the prehistoric world of dinosaurs. The ride features a suspended theater design, where riders are lifted into the air on seats that mimic the motion of a pterodactyl soaring through the skies. With its combination of high-tech special effects, realistic dino animations, and breathtaking views, Dino-Soarin' is a thrilling experience that is sure to delight visitors of all ages. Whether you're a fan of dinosaurs or just looking for a fun ride, Dino-Soarin' is definitely worth checking out during your visit to USS."
    );
  });

  $("#third-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Water World");
    $("#pop-up-text").text(
      "Waterworld is a popular live action stunt show at Universal Studios Singapore (USS). Based on the iconic movie of the same name, the show features an epic battle between the good guys and the bad guys in a post-apocalyptic world covered by water. The action-packed performance features high-flying stunts, intense pyrotechnics, and special effects that will keep you on the edge of your seat. With its thrilling storyline, talented cast, and pulse-pounding stunts, Waterworld is a must-see for any visitor to USS who loves live action shows and edge-of-your-seat excitement. Whether you're a fan of the original movie or just looking for a fun and exciting experience, Waterworld is sure to deliver."
    );
  });

  $("#fourth-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Raptor Encounter");
    $("#pop-up-text").text(
      "The Raptor Encounter is an interactive experience at Universal Studios Singapore (USS) that allows visitors to come face-to-face with the iconic Velociraptors from the Jurassic Park franchise. During the encounter, guests have the opportunity to meet and interact with a lifelike Velociraptor, all while learning about the fascinating world of dinosaurs. The encounter is led by a knowledgeable guide who provides insight into the biology and behavior of these fascinating creatures. With its lifelike animatronic raptors, educational content, and thrilling atmosphere, the Raptor Encounter is a must-visit for anyone who loves dinosaurs and wants to learn more about these incredible creatures. Whether you're a fan of the Jurassic Park franchise or just looking for a unique and interactive experience, the Raptor Encounter is sure to be a highlight of your visit to USS."
    );
  });

  $("#fifth-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Fossil Fuel");
    $("#pop-up-text").text(
      "Fossil Fuel is a themed restaurant located in The Lost World Zone at Universal Studios Singapore (USS). The restaurant is inspired by the prehistoric world of dinosaurs and features a unique and exciting atmosphere that is perfect for families and visitors of all ages. With its menu of delicious and nutritious food options, Fossil Fuel is a great place to stop for a bite to eat during your visit to USS. Whether you're looking for a quick snack or a full meal, Fossil Fuel offers a range of options to suit any appetite and dietary need. Whether you're a fan of dinosaurs or just looking for a fun and exciting dining experience, Fossil Fuel is sure to deliver."
    );
  });

  $("#sixth-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Food Court");
    $("#pop-up-text").text(
      "The Lost World Food Court is a food court located in The Lost World Zone at Universal Studios Singapore (USS). The food court offers a variety of delicious and convenient dining options to visitors, including a range of local and international dishes. With its diverse menu, fast and friendly service, and comfortable seating, the Lost World Food Court is the perfect place to grab a bite to eat and recharge during your visit to USS. Whether you're looking for a quick snack or a full meal, the food court has something to suit every taste and budget. Whether you're a fan of fast food, street food, or sit-down dining, the Lost World Food Court has you covered."
    );
  });

  $(".container .close").click(function () {
    $(".pop-up").removeClass("open");
  });
});
