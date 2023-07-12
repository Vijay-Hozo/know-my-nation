window.addEventListener("DOMContentLoaded", () => {
  const queryParams = new URLSearchParams(window.location.search);

  //Receiving Datas...

  const state_name = queryParams.get("state_name");
  const state_imgs = queryParams.get("state_imgs");

  const state_maplink = queryParams.get("state_maplink");

  const state_capital = queryParams.get("state_capital");
  const state_cm = queryParams.get("state_cm");
  const state_governor = queryParams.get("state_governor");
  const state_districts = queryParams.get("state_districts");
  const state_populations = queryParams.get("state_populations");
  const state_area = queryParams.get("state_area");

  const state_literacy = queryParams.get("state_literacy");
  const state_gdp = queryParams.get("state_gdp");
  const state_symbol = queryParams.get("state_symbol");
  const state_animal = queryParams.get("state_animal");
  const state_bird = queryParams.get("state_bird");
  const state_flower = queryParams.get("state_flower");
  const state_motto = queryParams.get("state_motto");
  const state_song = queryParams.get("state_song");
  const state_climate = queryParams.get("state_climate");
  const state_history = queryParams.get("state_history");
  const state_website = queryParams.get("state_website");

  const state_festivals = queryParams.get("state_festivals");

  var card_festival = document.getElementById("festival-card");
  var list_festival = document.getElementById("festival-list");
  /*.forEach(function (item) {
    var listitem_festival = document.createElement("li");

    listitem_festival.textContent = item;
    listitem_festival.appendChild(listitem_festival);
  });

  card_festival.appendChild(listitem_festival);*/

  //...Receiving Data Ends

  document.title = state_name;
  document.getElementById("statename").textContent = state_name;
  document.getElementById("statemaplink").href = state_maplink;

  document.getElementById("statecapital").textContent = state_capital;
  document.getElementById("statecm").textContent = state_cm;
  document.getElementById("stategovernor").textContent = state_governor;
  document.getElementById("statedistricts").textContent = state_districts;
  document.getElementById("statepopulation").textContent = state_populations;
  document.getElementById("statearea").textContent = state_area;
  document.getElementById("stateliteracy").textContent = state_literacy;
  document.getElementById("stategdp").textContent = state_gdp;
  document.getElementById("statesymbol").textContent = state_symbol;
  document.getElementById("stateanimal").textContent = state_animal;
  document.getElementById("statebird").textContent = state_bird;
  document.getElementById("stateflower").textContent = state_flower;
  document.getElementById("motto").textContent = state_motto;
  document.getElementById("statesong").textContent = state_song;
  document.getElementById("stateclimate").textContent = state_climate;
  document.getElementById("statehistory").textContent = state_history;
  //document.getElementById("festival-list").textContent = state_festivals;
  document.getElementById("websitelink").href = state_website;

  const carouselImage = document.getElementById("carousel-image");

  const images = JSON.parse(state_imgs);
  let currentIndex = 0;
  function changeImage() {
    carouselImage.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }

  changeImage();

  // Change image every 3 seconds
  setInterval(changeImage, 3000);
});
