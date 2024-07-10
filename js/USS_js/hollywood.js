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
    $("#pop-up-heading").text("Gru & the minions");
    $("#pop-up-text").text(
      "Gru & The Minions is a themed area at Universal Studios Singapore (USS) based on the popular Despicable Me animated film franchise. In this zone, visitors can step into the world of Gru and the mischievous Minions and experience a range of exciting attractions and interactive experiences. Whether you're a fan of the films or just looking for a fun and exciting day out, Gru & The Minions has something to offer for everyone. Visitors can enjoy interactive attractions such as the Minion Mayhem ride, where they join Gru and the Minions on a wild and wacky adventure. There are also character meet-and-greet opportunities and themed shops selling merchandise inspired by the films. Whether you're young or young at heart, Gru & The Minions is sure to bring a smile to your face and create memories that will last a lifetime."
    );
  });

  $("#second-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Madagascar");
    $("#pop-up-text").text(
      "Madagascar is a themed area at Universal Studios Singapore (USS) based on the popular Madagascar animated film franchise. In this zone, visitors can immerse themselves in the world of the film's lovable animal characters and experience a range of exciting attractions and interactive experiences. Whether you're a fan of the films or just looking for a fun and exciting day out, Madagascar has something to offer for everyone. Visitors can enjoy interactive attractions such as the Madagascar: A Crate Adventure ride, where they join Alex the Lion, Marty the Zebra, and their friends on a wild and wacky adventure through the jungles of Madagascar. There are also character meet-and-greet opportunities and themed shops selling merchandise inspired by the films. Whether you're young or young at heart, Madagascar is sure to bring a smile to your face and create memories that will last a lifetime."
    );
  });

  $("#third-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Po & Master Tigress");
    $("#pop-up-text").text(
      "Po & Master Tigress is a themed area at Universal Studios Singapore (USS) based on the popular Kung Fu Panda animated film franchise. In this zone, visitors can immerse themselves in the world of Po, the bumbling but lovable panda, and the skilled warrior, Master Tigress. Visitors can experience a range of exciting attractions and interactive experiences that bring the world of the films to life. Whether you're a fan of the films or just looking for a fun and exciting day out, Po & Master Tigress has something to offer for everyone. Visitors can enjoy interactive attractions such as the Kung Fu Panda Academy, where they can learn the art of kung fu alongside Po and Master Tigress. There are also character meet-and-greet opportunities and themed shops selling merchandise inspired by the films."
    );
  });

  $("#fourth-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Minion Mart");
    $("#pop-up-text").text(
      "Minion Mart is a themed store located in the Gru & The Minions area at Universal Studios Singapore (USS). As its name suggests, the store specializes in merchandise inspired by the popular Despicable Me animated film franchise and its lovable Minions characters. Visitors to Minion Mart can browse a wide range of products, from t-shirts and toys to mugs and key chains, all featuring the iconic Minions. Whether you're a fan of the films or just looking for a unique and fun souvenir to take home, Minion Mart has something to suit every taste and budget."
    );
  });

  $("#fifth-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Mel's Drive-In");
    $("#pop-up-text").text(
      "Mel's Drive-In is a themed restaurant located in the Hollywood area of Universal Studios Singapore (USS). This retro-style diner is inspired by classic American drive-ins and offers a fun and unique dining experience for visitors to the park. The restaurant is decked out in vintage decor, complete with vintage cars and a classic jukebox, creating an atmosphere that transports diners back to the 1950s. The menu features a range of classic American diner favorites, such as burgers, hot dogs, and milkshakes, as well as a selection of snacks and desserts. Whether you're looking for a quick bite to eat or a sit-down meal, Mel's Drive-In has something to offer for everyone. With its fun and nostalgic atmosphere, tasty food, and friendly service, Mel's Drive-In is the perfect place to refuel and recharge during your day at USS."
    );
  });

  $("#sixth-ride").click(function (e) {
    e.preventDefault();
    $("#pop-up-heading").text("Our Store");
    $("#pop-up-text").text(
      "Singapore's USS (Universal Studios Singapore) has opened a store in New York Zone, offering a wide range of merchandise and souvenirs inspired by popular attractions and franchises in the theme park. Visitors can now take a piece of the exciting experience home with them."
    );
  });

  $(".container .close").click(function () {
    $(".pop-up").removeClass("open");
  });
});
