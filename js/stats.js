(function(){
    'use strict';

    const defaultCoutry = "TL"
    const hostname = document.location.hostname;

    var countriesByCode;
    (function() {
        $.ajax({
          url: '/json/country-by-abbreviation.json',
          dataType: 'json',
          success: function(data) {
            countriesByCode = data;
          }
        });
    }());
    
    var countriesByPopulation;
    (function() {
        $.ajax({
          url: '/json/country-by-population.json',
          dataType: 'json',
          success: function(data) {
            countriesByPopulation = data;
          }
        });
    }());

    var countriesByTemperature;
    (function() {
        $.ajax({
          url: '/json/country-by-yearly-average-temperature.json',
          dataType: 'json',
          success: function(data) {
            countriesByTemperature = data;
          }
        });
    }());

    var statesByPopulation;
    (function() {
        $.ajax({
          url: '/json/states-by-population.json',
          dataType: 'json',
          success: function(data) {
            statesByPopulation = data;
          }
        });
    }());

    const apiURL = "https://thevirustracker.com/free-api?";
    const countryTotalURL = apiURL + "countryTotal=";
    const globalStatsURL = apiURL + "global=stats";
    const allCountryTotalsURL = apiURL + "countryTotals=ALL";

    const tatoliURL = "/json/tatoli.json";
    const countriesURL = "/json/countries.json";

    const statesAPI = "https://corona.lmao.ninja/states";

    var allCountryTotalsData;

    // --- OBJECTS ------------------

    function TableEntry(title, country_population, total_cases, total_deaths, country_temperature, death_ratio_per_infected, death_ratio_per_population, death_ratio_per_temperature) {
        this.title = title;
        this.country_population = country_population;
        this.total_cases = total_cases;
        this.total_deaths = total_deaths;
        this.country_temperature = country_temperature;
        this.death_ratio_per_infected = death_ratio_per_infected;
        this.death_ratio_per_population = death_ratio_per_population;
        this.death_ratio_per_temperature = death_ratio_per_temperature;
    }

    // ------------------------------

    function loadStats(countryData) {
        $("#total_cases").text(countryData.total_cases);
        $("#total_active_cases").text(countryData.total_active_cases);
        $("#total_serious_cases").text(countryData.total_serious_cases);
        $("#total_deaths").text(countryData.total_deaths);
        $("#total_recovered").text(countryData.total_recovered);
        $("#total_unresolved").text(countryData.total_unresolved);
        $("#total_new_cases_today").text(countryData.total_new_cases_today);
        $("#total_new_deaths_today").text(countryData.total_new_deaths_today);
    }

    function loadingStats(loadingText="loading...") {

        $("#total_cases").text(loadingText);
        $("#total_active_cases").text(loadingText);
        $("#total_serious_cases").text(loadingText);
        $("#total_deaths").text(loadingText);
        $("#total_recovered").text(loadingText);
        $("#total_unresolved").text(loadingText);
        $("#total_new_cases_today").text(loadingText);
        $("#total_new_deaths_today").text(loadingText);
    }

    function loadNews(countryNews) {
        $("#newslist").html(Handlebars.templates.news_list(countryNews));
        $("#newslist").html($(".notification").get().reverse());
    }

    // function loadTatoli(tatoliNews) {
    //     $("#newslist_tatoli").html(Handlebars.templates.news_list(tatoliNews));
    //     // $("#newslist_tatoli").html($(".notification").get().reverse());
    // }


    function getTatoli() {
        $.ajax({
          url: tatoliURL,
          dataType: 'json',
          success: function(data) {
            loadTatoli(data);
          }
        });
    }

    function loadData(country) {
        loadingStats();
        
        $.ajax({
          url: countryTotalURL + country,
          dataType: 'json',
          success: function(data) {

            loadStats(data.countrydata[0]);

            // loadNews(data.countrynewsitems[0]);
            // loadTatoli();
          }
        });
    }

    function loadStates(state, data) {

        loadingStats();

        for (var key of Object.keys(data)) {

            if(data[key].state == state) {
                $("#total_cases").text(data[key].cases);
                $("#total_active_cases").text(data[key].active);
                $("#total_serious_cases").text("N/A");
                $("#total_deaths").text(data[key].deaths);
                $("#total_recovered").text("N/A");
                $("#total_unresolved").text("N/A");
                $("#total_new_cases_today").text(data[key].todayCases);
                $("#total_new_deaths_today").text(data[key].todayDeaths);
            }
        }



    }

    function loadSortedByCases(data) {
        data.sort((a, b) => (a.total_cases < b.total_cases) ? 1 : -1);
        $("#content").html(Handlebars.templates.table(data));
        loadSortingOptions();
    }

    function loadSortingOptions() {
        var data = allCountryTotalsData;

        $(".col-cases").on("click", function(){
            loadSortedByCases(data);            
        });
        $(".col-deaths").on("click", function(){
            data.sort((a, b) => (a.total_deaths < b.total_deaths) ? 1 : -1);
            $("#content").html(Handlebars.templates.table(data));
            loadSortingOptions();
        });
        $(".col-temperature").on("click", function(){
            data.sort((a, b) => (a.country_temperature < b.country_temperature) ? 1 : -1);
            $("#content").html(Handlebars.templates.table(data));
            loadSortingOptions();
        });
        $(".col-ratio1").on("click", function(){
            data.sort((a, b) => (a.death_ratio_per_infected < b.death_ratio_per_infected) ? 1 : -1);
            $("#content").html(Handlebars.templates.table(data));
            loadSortingOptions();
        });
        $(".col-population").on("click", function(){
            data.sort((a, b) => (a.country_population < b.country_population) ? 1 : -1);
            $("#content").html(Handlebars.templates.table(data));
            loadSortingOptions();
        });
        $(".col-ratio2").on("click", function(){
            data.sort((a, b) => (a.death_ratio_per_population < b.death_ratio_per_population) ? 1 : -1);
            $("#content").html(Handlebars.templates.table(data));
            loadSortingOptions();
        });
        $(".col-ratio3").on("click", function(){
            data.sort((a, b) => (a.death_ratio_per_temperature < b.death_ratio_per_temperature) ? 1 : -1);
            $("#content").html(Handlebars.templates.table(data));
            loadSortingOptions();
        });
    }

    function loadPage2(){

        $.ajax({
          url: allCountryTotalsURL,
          dataType: 'json',
          success: function(data) {

            var data = data.countryitems[0];
            var list = [];
            
            for (var key of Object.keys(data)) {
                var country_title = data[key].title;

                // if (country_title in ["Democratic Republic of Congo", "DR Congo"]) {
                //     continue;
                // }

                var total_cases = data[key].total_cases;
                var total_deaths = data[key].total_deaths;

                // --- ADD death_ratio_per_infected
                var death_ratio_per_infected;
                
                if (total_deaths > 0 && total_cases > 0) {
                    death_ratio_per_infected = parseFloat((total_deaths / total_cases) * 100).toFixed(2);
                } else {
                    death_ratio_per_infected = 0;
                }
                
                try {
                    data[key]["death_ratio_per_infected"] = Number(death_ratio_per_infected);
                } catch(err) {
                    console.log(err);
                }

                // --- ADD POPULATION
                var country_code = data[key].code;
                var country_name = function(){
                    for (var i = 0; i < countriesByCode.length; i++) {
                        if (country_code == countriesByCode[i].abbreviation) {
                            return countriesByCode[i].country;
                        }
                    }
                }();
                
                var country_population = function(){
                    for (var i = 0; i < countriesByPopulation.length; i++) {
                        if (country_name == countriesByPopulation[i].country) {
                            return parseInt(countriesByPopulation[i].population);
                        }
                    }
                }(); 

                try {
                    data[key]["country_population"] = country_population;
                } catch(err) {
                    console.log(err);
                }

                // --- ADD COUNTRY TEMPERATURE RATIO               

                var country_temperature = function(){
                    for (var i = 0; i < countriesByTemperature.length; i++) {
                        if (country_name == countriesByTemperature[i].country) {
                            return parseInt(countriesByTemperature[i].temperature);
                        }
                    }
                }();

                try {
                    data[key]["country_temperature"] = country_temperature;
                } catch(err) {
                    console.log(err);
                }

                // --- ADD POPULATION RATIO

                var death_ratio_per_population;

                if (total_deaths > 0 && country_population > 0) {
                    death_ratio_per_population = parseFloat((total_deaths / country_population) * 1000000).toFixed(2);
                } else {
                    death_ratio_per_population = 0;
                }

                try {
                    data[key]["death_ratio_per_population"] = Number(death_ratio_per_population);
                    
                } catch(err) {
                    console.log(err);
                    console.log(data[key]);
                }

                // --- ADD TEMPERATURE RATIO

                var death_ratio_per_temperature;

                if (total_deaths > 0 && country_population > 0) {
                    death_ratio_per_temperature = parseInt((total_deaths / country_temperature));
                } else {
                    death_ratio_per_temperature = 0;
                }

                try {
                    data[key]["death_ratio_per_temperature"] = Number(death_ratio_per_temperature);
                    list.push(data[key]);
                } catch(err) {
                    console.log(err);
                    console.log(data[key]);
                }

                
            }

            allCountryTotalsData = list;
            loadSortedByCases(allCountryTotalsData);

            loadSortingOptions();
            
          }
        });
    }

    function loadPage3(){
        $.ajax({
        url: statesAPI,
        dataType: 'json',
        success: function(data) {

            var list = [];

            for (var key of Object.keys(data)) {

                var state_name = data[key].state;
                var total_deaths = data[key].deaths;
                var total_cases = data[key].cases;
                var death_ratio_per_infected = parseFloat((total_deaths / total_cases) * 100).toFixed(2);

                var state_population = function(){
                    for (var i = 0; i < statesByPopulation.length; i++) {
                        
                        if (state_name == statesByPopulation[i].name) {
                            return parseInt(statesByPopulation[i].population);
                        }
                    }
                }();

                var death_ratio_per_population = parseFloat((total_deaths / state_population) * 1000000).toFixed(0);


                var line = new TableEntry(state_name, state_population, total_cases, total_deaths, "N/A", death_ratio_per_infected, death_ratio_per_population, "N/A");

                list.push(line);
            }

            allCountryTotalsData = list;

            loadSortedByCases(allCountryTotalsData);
            loadSortingOptions();
        }
    });
    }

    // ----------------------------------------

    function enableStateDropDown(data) {
        $("#state_list").on("change", function(){
            var state = $(this).val();

            loadStates(state, data);
        })
    }

    function enableDropDown() {
        $("#country_list").on("change", function(){

            var country = $(this).val();

            if (country == "US"){
                $.ajax({
                    url: statesAPI,
                    dataType: 'json',
                    success: function(data) {
                        $("#state_list").html(Handlebars.templates.state_list(data));  
                        $("#state_list").removeClass("hidden");

                        enableStateDropDown(data);
                    }
                }); 
            } else {
                $("#state_list").addClass("hidden");
                loadData(country);

            }
        })
    }

    function enablePagination() {
        $(".page1").on("click", function(){
            location.reload();
        });
        $(".page2").on("click", function(){
            loadPage2();
        });
        $(".page3").on("click", function(){
            loadPage3();
        });
    }

    // ----------------------------------------

    $.ajax({
        url: countriesURL,
        dataType: 'json',
        success: function(data) {
            $("#country_list").html(Handlebars.templates.country_list(data));
            $("#country_list").val(defaultCoutry);

            enablePagination();
            enableDropDown();
            loadData(defaultCoutry);
            // loadPage2();


        }
    });    

}())