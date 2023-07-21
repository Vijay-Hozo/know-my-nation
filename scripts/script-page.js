window.addEventListener("DOMContentLoaded", () => {
  const queryParams = new URLSearchParams(window.location.search);

  var togglebtn = document.getElementById("toggle");
  var sidebarbtn = document.getElementById("sidebar");

  togglebtn.onclick = function () {
    togglebtn.classList.toggle("active");
    sidebarbtn.classList.toggle("active");
  };
  //Receiving Datas...

  const state_name = queryParams.get("state_name");
  const state_imgs = queryParams.get("state_imgs");
  const freedom_imgs = queryParams.get("freedom_imgs");
  const freedom_names = queryParams.get("freedom_names");

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
  const state_history = queryParams.get("state_history");
  const state_website = queryParams.get("state_website");
  const state_industries = queryParams.get("state_industries");
  const state_festivals = queryParams.get("state_festivals");

  const state_school = queryParams.get("state_school");
  const state_primary = queryParams.get("state_primary");
  const state_upper = queryParams.get("state_upper");
  const state_secondary = queryParams.get("state_secondary");
  const state_higher = queryParams.get("state_higher");

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
  document.getElementById("statehistory").textContent = state_history;
  document.getElementById("websitelink").href = state_website;

  document.getElementById("stateschool").textContent = state_school;
  document.getElementById("stateprimary").textContent = state_primary;
  document.getElementById("stateupper").textContent = state_upper;
  document.getElementById("statesecondary").textContent = state_secondary;
  document.getElementById("statehigher").textContent = state_higher;

  const carouselImage = document.getElementById("carousel-image");
  const carouselImage1 = document.getElementById("carousel1-image");

  const indus_arr = JSON.parse(state_industries);

  const p_container = document.getElementById("indus-card");
  indus_arr.forEach((element) => {
    const ptag = document.createElement("p");
    ptag.innerHTML = element;
    p_container.appendChild(ptag);
  });

  const festi_arr = JSON.parse(state_festivals);

  const p1_container = document.getElementById("festi-card");
  festi_arr.forEach((element) => {
    const ptag1 = document.createElement("p");
    ptag1.innerHTML = element;
    p1_container.appendChild(ptag1);
  });

  const images = JSON.parse(state_imgs);
  let currentIndex = 0;
  function changeImage() {
    carouselImage.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }

  changeImage();

  // Change image every 3 seconds
  setInterval(changeImage, 3000);

  // function toggleopenclose() {

  // }

  const freedomnamesarr = JSON.parse(freedom_names);

  const images1 = JSON.parse(freedom_imgs);
  let currentIndex1 = 0;
  function changeImage1() {
    carouselImage1.src = images1[currentIndex1];
    const freedom_name_container = document.getElementById("freedomfighters");
    freedom_name_container.textContent = freedomnamesarr[currentIndex1];
    [currentIndex1];
    currentIndex1 = (currentIndex1 + 1) % images1.length;
  }

  changeImage1();

  // Change image every 3 seconds
  setInterval(changeImage1, 3000);
});
