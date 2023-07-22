function showstate(stateId) {
  fetch("states-2.json")
    .then((response) => response.json())
    .then((data) => {
      const statefilter = data.find((item) => item.stateId === stateId);

      document.getElementById("statename-index").innerHTML =
        statefilter.basic_information.name;
    });
}

function filterData(stateId) {
  fetch("states-2.json")
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.find((item) => item.stateId === stateId);

      const queryParams = new URLSearchParams();

      // Sending Data...

      queryParams.set("state_name", filteredData.basic_information.name);
      queryParams.set("state_imgs", JSON.stringify(filteredData.images));
      queryParams.set(
        "tourist_imgs",
        JSON.stringify(filteredData.tourist_image)
      );
      queryParams.set(
        "tourist_names",
        JSON.stringify(filteredData.touristImageNames)
      );
      queryParams.set("state_maplink", filteredData.statemapurl);

      queryParams.set("state_capital", filteredData.basic_information.capital);
      queryParams.set(
        "state_cm",
        filteredData.basic_information.chief_minister
      );
      queryParams.set(
        "state_governor",
        filteredData.basic_information.governor
      );
      queryParams.set("state_districts", filteredData.demographics.districts);
      queryParams.set(
        "state_populations",
        filteredData.demographics.population
      );
      queryParams.set("state_area", filteredData.demographics.area);

      queryParams.set(
        "state_literacy",
        filteredData.demographics.literacy_rate
      );
      queryParams.set("state_gdp", filteredData.economy.gdp);
      queryParams.set(
        "state_symbol",
        filteredData.culture_and_symbols.state_symbols.emblem
      );
      queryParams.set(
        "state_animal",
        filteredData.culture_and_symbols.state_animal
      );
      queryParams.set(
        "state_bird",
        filteredData.culture_and_symbols.state_bird
      );
      queryParams.set(
        "state_flower",
        filteredData.culture_and_symbols.state_flower
      );

      queryParams.set("state_motto", filteredData.culture_and_symbols.motto);
      queryParams.set(
        "state_song",
        filteredData.culture_and_symbols.state_song
      );

      queryParams.set(
        "state_festivals",
        JSON.stringify(filteredData.culture_and_symbols.major_festivals)
      );

      queryParams.set(
        "state_history",
        filteredData.culture_and_symbols.historical_significance
      );

      queryParams.set("state_website", filteredData.websiteurl);

      queryParams.set(
        "state_industries",
        JSON.stringify(filteredData.economy.major_industries)
      );

      queryParams.set(
        "state_school",
        filteredData.culture_and_symbols.state_school
      );

      queryParams.set(
        "state_primary",
        filteredData.culture_and_symbols.state_primary
      );

      queryParams.set(
        "state_upper",
        filteredData.culture_and_symbols.state_upper
      );

      queryParams.set(
        "state_secondary",
        filteredData.culture_and_symbols.state_secondary
      );

      queryParams.set(
        "state_higher",
        filteredData.culture_and_symbols.state_higher
      );

      // Sending Data Ends...
      const url = "/Pages/page.html?" + queryParams.toString();
      window.location.href = url;
    })
    .catch((error) => console.error("Error", error));
}
