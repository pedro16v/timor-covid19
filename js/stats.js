(function(){
    'use strict';

    Handlebars.registerHelper('thousands', function (value) {
        return parseInt( value ).toLocaleString();
    });
    Handlebars.registerHelper('timeanddate', function (value){
        return new Date(value).toLocaleDateString();
    });

    var Settings = {
        defaultCountry : "TL",
        hostname : document.location.hostname,
        data : {
            novel : {
                world : {
                    url : "https://corona.lmao.ninja/all",
                    cache: null
                },
                countries : {
                    url : "https://corona.lmao.ninja/countries",
                    sort : "?sort=",
                    options : [],
                    cache : null
                },
                country : {
                    url : "https://corona.lmao.ninja/countries/",
                    options : [],
                    cache : null
                },
                statesUS : {
                    url : "https://corona.lmao.ninja/states",
                    cache : null                    
                }
            },
            jhucsse : {
                provinces : {
                    url : "https://corona.lmao.ninja/v2/jhucsse",
                    cache : null
                },
                historical : {
                    url : "https://corona.lmao.ninja/v2/historical",
                    sort : "/",
                    options : [],
                    cache : null
                }                
            }
        },
        lists : {
            countriesByCode : null,
            countriesByPopulation : null,
            countriesByTemperature : null,
            statesByPopulation : null
        },
        objects : {
            world : function World(cases, deaths, active, recovered, affected, updated) {
                this.cases = cases;
                this.deaths = deaths;
                this.active = active;
                this.recovered = recovered;
                this.affected = affected;
                this.updated = updated;
            },
                "active":4735,
            country : function Country(country, cases, todayCases, deaths, todayDeaths, recovered, active, critical, casesPerOneMillion, flag) {
                this.country = country;
                this.cases = cases;
                this.todayCases = todayCases;
                this.deaths = deaths;
                this.todayDeaths = todayDeaths;
                this.recovered = recovered;
                this.active = active;
                this.critical = critical;
                this.casesPerOneMillion = casesPerOneMillion;
                this.flag = flag;
            },
            fullStats : function FullStats(name, population, cases, deaths, temperature, death_ratio_per_infected, death_ratio_per_population, death_ratio_per_temperature, case_ratio_per_population, flag) {
                this.name = name;
                this.population = population;
                this.cases = cases;
                this.deaths = deaths;
                this.temperature = temperature;
                this.death_ratio_per_infected = death_ratio_per_infected;
                this.death_ratio_per_population = death_ratio_per_population;
                this.death_ratio_per_temperature = death_ratio_per_temperature;
                this.case_ratio_per_population = case_ratio_per_population;
                this.flag = flag;
            },
            USstate : function State(name, population, cases, todayCases, deaths, todayDeaths, recovered, active, death_ratio_per_infected, death_ratio_per_population, case_ratio_per_population) {
                this.name = name;
                this.population = population;
                this.cases = cases;
                this.todayCases = todayCases;
                this.deaths = deaths;
                this.todayDeaths = todayDeaths;
                this.recovered = recovered;
                this.active = active;
                this.death_ratio_per_infected = death_ratio_per_infected, 
                this.death_ratio_per_population = death_ratio_per_population, 
                this.case_ratio_per_population = case_ratio_per_population
            }
        }
    };

    

    const apiURL = "https://thevirustracker.com/free-api?";
    const countryTotalURL = apiURL + "countryTotal=";
    const globalStatsURL = apiURL + "global=stats";
    const allCountryTotalsURL = apiURL + "countryTotals=ALL";

    const tatoliURL = "/json/tatoli.json";
    const countriesURL = "/json/countries.json";

    const statesAPI = "https://corona.lmao.ninja/states";

    var allCountryTotalsData;

    // --- OBJECTS ------------------

    // function TableEntry(title, country_population, total_cases, total_deaths, country_temperature, death_ratio_per_infected, death_ratio_per_population, death_ratio_per_temperature) {
    //     this.title = title;
    //     this.country_population = country_population;
    //     this.total_cases = total_cases;
    //     this.total_deaths = total_deaths;
    //     this.country_temperature = country_temperature;
    //     this.death_ratio_per_infected = death_ratio_per_infected;
    //     this.death_ratio_per_population = death_ratio_per_population;
    //     this.death_ratio_per_temperature = death_ratio_per_temperature;
    // }

    // ------------------------------

    // function loadStats(countryData) {
    //     $("#total_cases").text(countryData.total_cases);
    //     $("#total_active_cases").text(countryData.total_active_cases);
    //     $("#total_serious_cases").text(countryData.total_serious_cases);
    //     $("#total_deaths").text(countryData.total_deaths);
    //     $("#total_recovered").text(countryData.total_recovered);
    //     $("#total_unresolved").text(countryData.total_unresolved);
    //     $("#total_new_cases_today").text(countryData.total_new_cases_today);
    //     $("#total_new_deaths_today").text(countryData.total_new_deaths_today);
    // }

    // function loadingStats(loadingText="loading...") {

    //     $("#total_cases").text(loadingText);
    //     $("#total_active_cases").text(loadingText);
    //     $("#total_serious_cases").text(loadingText);
    //     $("#total_deaths").text(loadingText);
    //     $("#total_recovered").text(loadingText);
    //     $("#total_unresolved").text(loadingText);
    //     $("#total_new_cases_today").text(loadingText);
    //     $("#total_new_deaths_today").text(loadingText);
    // }

    // function loadNews(countryNews) {
    //     $("#newslist").html(Handlebars.templates.news_list(countryNews));
    //     $("#newslist").html($(".notification").get().reverse());
    // }

    // function loadTatoli(tatoliNews) {
    //     $("#newslist_tatoli").html(Handlebars.templates.news_list(tatoliNews));
    //     // $("#newslist_tatoli").html($(".notification").get().reverse());
    // }


    // function getTatoli() {
    //     $.ajax({
    //       url: tatoliURL,
    //       dataType: 'json',
    //       success: function(data) {
    //         loadTatoli(data);
    //       }
    //     });
    // }

    // function loadData(country) {
    //     loadingStats();
        
    //     $.ajax({
    //       url: countryTotalURL + country,
    //       dataType: 'json',
    //       success: function(data) {

    //         loadStats(data.countrydata[0]);

    //         // loadNews(data.countrynewsitems[0]);
    //         // loadTatoli();
    //       }
    //     });
    // }

    // function loadStates(state, data) {

    //     loadingStats();

    //     for (var key of Object.keys(data)) {

    //         if(data[key].state == state) {
    //             $("#total_cases").text(data[key].cases);
    //             $("#total_active_cases").text(data[key].active);
    //             $("#total_serious_cases").text("N/A");
    //             $("#total_deaths").text(data[key].deaths);
    //             $("#total_recovered").text("N/A");
    //             $("#total_unresolved").text("N/A");
    //             $("#total_new_cases_today").text(data[key].todayCases);
    //             $("#total_new_deaths_today").text(data[key].todayDeaths);
    //         }
    //     }
    // }

    // function loadSortedByCases(data) {
    //     data.sort((a, b) => (a.total_cases < b.total_cases) ? 1 : -1);
    //     $("#content").html(Handlebars.templates.table(data));
    //     loadSortingOptions();
    // }

    // function loadSortingOptions() {
    //     var data = allCountryTotalsData;

    //     $(".col-cases").on("click", function(){
    //         loadSortedByCases(data);            
    //     });
    //     $(".col-deaths").on("click", function(){
    //         data.sort((a, b) => (a.total_deaths < b.total_deaths) ? 1 : -1);
    //         $("#content").html(Handlebars.templates.table(data));
    //         loadSortingOptions();
    //     });
    //     $(".col-temperature").on("click", function(){
    //         data.sort((a, b) => (a.country_temperature < b.country_temperature) ? 1 : -1);
    //         $("#content").html(Handlebars.templates.table(data));
    //         loadSortingOptions();
    //     });
    //     $(".col-ratio1").on("click", function(){
    //         data.sort((a, b) => (a.death_ratio_per_infected < b.death_ratio_per_infected) ? 1 : -1);
    //         $("#content").html(Handlebars.templates.table(data));
    //         loadSortingOptions();
    //     });
    //     $(".col-population").on("click", function(){
    //         data.sort((a, b) => (a.country_population < b.country_population) ? 1 : -1);
    //         $("#content").html(Handlebars.templates.table(data));
    //         loadSortingOptions();
    //     });
    //     $(".col-ratio2").on("click", function(){
    //         data.sort((a, b) => (a.death_ratio_per_population < b.death_ratio_per_population) ? 1 : -1);
    //         $("#content").html(Handlebars.templates.table(data));
    //         loadSortingOptions();
    //     });
    //     $(".col-ratio3").on("click", function(){
    //         data.sort((a, b) => (a.death_ratio_per_temperature < b.death_ratio_per_temperature) ? 1 : -1);
    //         $("#content").html(Handlebars.templates.table(data));
    //         loadSortingOptions();
    //     });
    // }

    // function loadPage2(){

    //     $.ajax({
    //       url: allCountryTotalsURL,
    //       dataType: 'json',
    //       success: function(data) {

    //         var data = data.countryitems[0];
    //         var list = [];
            
    //         for (var key of Object.keys(data)) {
    //             var country_title = data[key].title;

    //             // if (country_title in ["Democratic Republic of Congo", "DR Congo"]) {
    //             //     continue;
    //             // }

    //             var total_cases = data[key].total_cases;
    //             var total_deaths = data[key].total_deaths;

    //             // --- ADD death_ratio_per_infected
    //             var death_ratio_per_infected;
                
    //             if (total_deaths > 0 && total_cases > 0) {
    //                 death_ratio_per_infected = parseFloat((total_deaths / total_cases) * 100).toFixed(2);
    //             } else {
    //                 death_ratio_per_infected = 0;
    //             }
                
    //             try {
    //                 data[key]["death_ratio_per_infected"] = Number(death_ratio_per_infected);
    //             } catch(err) {
    //                 console.log(err);
    //             }

    //             // --- ADD POPULATION
    //             var country_code = data[key].code;
    //             var country_name = function(){
    //                 for (var i = 0; i < countriesByCode.length; i++) {
    //                     if (country_code == countriesByCode[i].abbreviation) {
    //                         return countriesByCode[i].country;
    //                     }
    //                 }
    //             }();
                
    //             var country_population = function(){
    //                 for (var i = 0; i < countriesByPopulation.length; i++) {
    //                     if (country_name == countriesByPopulation[i].country) {
    //                         return parseInt(countriesByPopulation[i].population);
    //                     }
    //                 }
    //             }(); 

    //             try {
    //                 data[key]["country_population"] = country_population;
    //             } catch(err) {
    //                 console.log(err);
    //             }

    //             // --- ADD COUNTRY TEMPERATURE RATIO               

    //             var country_temperature = function(){
    //                 for (var i = 0; i < countriesByTemperature.length; i++) {
    //                     if (country_name == countriesByTemperature[i].country) {
    //                         return parseInt(countriesByTemperature[i].temperature);
    //                     }
    //                 }
    //             }();

    //             try {
    //                 data[key]["country_temperature"] = country_temperature;
    //             } catch(err) {
    //                 console.log(err);
    //             }

    //             // --- ADD POPULATION RATIO

    //             var death_ratio_per_population;

    //             if (total_deaths > 0 && country_population > 0) {
    //                 death_ratio_per_population = parseFloat((total_deaths / country_population) * 1000000).toFixed(2);
    //             } else {
    //                 death_ratio_per_population = 0;
    //             }

    //             try {
    //                 data[key]["death_ratio_per_population"] = Number(death_ratio_per_population);
                    
    //             } catch(err) {
    //                 console.log(err);
    //                 console.log(data[key]);
    //             }

    //             // --- ADD TEMPERATURE RATIO

    //             var death_ratio_per_temperature;

    //             if (total_deaths > 0 && country_population > 0) {
    //                 death_ratio_per_temperature = parseInt((total_deaths / country_temperature));
    //             } else {
    //                 death_ratio_per_temperature = 0;
    //             }

    //             try {
    //                 data[key]["death_ratio_per_temperature"] = Number(death_ratio_per_temperature);
    //                 list.push(data[key]);
    //             } catch(err) {
    //                 console.log(err);
    //                 console.log(data[key]);
    //             }

                
    //         }

    //         allCountryTotalsData = list;
    //         loadSortedByCases(allCountryTotalsData);

    //         loadSortingOptions();
            
    //       }
    //     });
    // }

    // function loadPage3(){
    //     $.ajax({
    //     url: statesAPI,
    //     dataType: 'json',
    //     success: function(data) {

    //         var list = [];

    //         for (var key of Object.keys(data)) {

    //             var state_name = data[key].state;
    //             var total_deaths = data[key].deaths;
    //             var total_cases = data[key].cases;
    //             var death_ratio_per_infected = parseFloat((total_deaths / total_cases) * 100).toFixed(2);

    //             var state_population = function(){
    //                 for (var i = 0; i < statesByPopulation.length; i++) {
                        
    //                     if (state_name == statesByPopulation[i].name) {
    //                         return parseInt(statesByPopulation[i].population);
    //                     }
    //                 }
    //             }();

    //             var death_ratio_per_population = parseFloat((total_deaths / state_population) * 1000000).toFixed(0);


    //             var line = new TableEntry(state_name, state_population, total_cases, total_deaths, "N/A", death_ratio_per_infected, death_ratio_per_population, "N/A");

    //             list.push(line);
    //         }

    //         allCountryTotalsData = list;

    //         loadSortedByCases(allCountryTotalsData);
    //         loadSortingOptions();
    //     }
    // });
    // }

    // ----------------------------------------

    // function enableStateDropDown(data) {
    //     $("#state_list").on("change", function(){
    //         var state = $(this).val();

    //         loadStates(state, data);
    //     })
    // }

    // function enableDropDown() {
    //     $("#country_list").on("change", function(){

    //         var country = $(this).val();

    //         if (country == "US"){
    //             $.ajax({
    //                 url: statesAPI,
    //                 dataType: 'json',
    //                 success: function(data) {
    //                     $("#state_list").html(Handlebars.templates.state_list(data));  
    //                     $("#state_list").removeClass("hidden");

    //                     enableStateDropDown(data);
    //                 }
    //             }); 
    //         } else {
    //             $("#state_list").addClass("hidden");
    //             loadData(country);

    //         }
    //     })
    // }

    
    // NG ----------------------------------------------------

    function request(pointer, callback) {

        if(pointer.cache !== null) {
            callback(pointer.cache);
        } else {
            $.ajax({
                url: pointer.url,
                async: true,
                dataType: 'json',
                success: function(data) {
                    pointer.cache = data;
                    callback(data);
                }
            });
        }
    }

    function fetchExtraData() {
        (function() {
            $.ajax({
              url: '/json/country-by-abbreviation.json',
              dataType: 'json',
              success: function(data) {
                Settings.lists.countriesByCode = data;
              }
            });
        }());
        
        (function() {
            $.ajax({
              url: '/json/country-by-population.json',
              dataType: 'json',
              success: function(data) {
                Settings.lists.countriesByPopulation = data;
              }
            });
        }());

        (function() {
            $.ajax({
              url: '/json/country-by-yearly-average-temperature.json',
              dataType: 'json',
              success: function(data) {
                Settings.lists.countriesByTemperature = data;
              }
            });
        }());

        (function() {
            $.ajax({
              url: '/json/states-by-population.json',
              dataType: 'json',
              success: function(data) {
                Settings.lists.statesByPopulation = data;
              }
            });
        }());
    }

    function orderList(data, criteria) {

        return data.sort((a, b) => (a.criteria > b.criteria) ? 1 : -1);
    }

    function loadOrderOptions(data) {

        $(".col-name").on("click", function (){
            data.sort((a, b) => (a.name > b.name) ? 1 : -1);
            $("#content").html(Handlebars.templates.table(data));
            loadOrderOptions(data);
        });
        $(".col-cases").on("click", function (){
            data.sort((a, b) => (a.cases < b.cases) ? 1 : -1);
            $("#content").html(Handlebars.templates.table(data));
            loadOrderOptions(data);
        });
        $(".col-deaths").on("click", function (){
            data.sort((a, b) => (a.deaths < b.deaths) ? 1 : -1);
            $("#content").html(Handlebars.templates.table(data));
            loadOrderOptions(data);
        });
        $(".col-temperature").on("click", function (){
            data.sort((a, b) => (a.temperature < b.temperature) ? 1 : -1);
            $("#content").html(Handlebars.templates.table(data));
            loadOrderOptions(data);
        });
        $(".col-ratio1").on("click", function (){
            data.sort((a, b) => (a.death_ratio_per_infected < b.death_ratio_per_infected) ? 1 : -1);
            $("#content").html(Handlebars.templates.table(data));
            loadOrderOptions(data);
        });
        $(".col-population").on("click", function (){
            data.sort((a, b) => (a.population < b.population) ? 1 : -1);
            $("#content").html(Handlebars.templates.table(data));
            loadOrderOptions(data);
        });
        $(".col-ratio2").on("click", function (){
            data.sort((a, b) => (a.death_ratio_per_population < b.death_ratio_per_population) ? 1 : -1);
            $("#content").html(Handlebars.templates.table(data));
            loadOrderOptions(data);
        });
        $(".col-ratio3").on("click", function (){
            data.sort((a, b) => (a.death_ratio_per_temperature < b.death_ratio_per_temperature) ? 1 : -1);
            $("#content").html(Handlebars.templates.table(data));
            loadOrderOptions(data);
        });
        $(".col-ratio4").on("click", function (){
            data.sort((a, b) => (a.case_ratio_per_population < b.case_ratio_per_population) ? 1 : -1);
            $("#content").html(Handlebars.templates.table(data));
            loadOrderOptions(data);
        });
    }

    function getDeathsByCase(deaths, cases) { 
            
        var death_ratio_per_infected = 0;
        
        if (deaths > 0 && cases > 0) {
            death_ratio_per_infected = parseFloat((deaths / cases) * 100).toFixed(2);
        } 

        return Number(death_ratio_per_infected);
    }

    function getDeathsByPopulation(deaths, population) {

        var death_ratio_per_population = 0;

        if (deaths > 0 && population > 0) {
            death_ratio_per_population = parseFloat((deaths / population) * 1000000).toFixed(2);
        } 

        return Number(death_ratio_per_population);
    }

    function getCasesByPopulation(cases, population) {

        var case_ratio_per_population = 0;

        if (cases > 0 && population > 0) {
            case_ratio_per_population = parseFloat((cases / population) * 1000000).toFixed(2);
        } 

        return Number(case_ratio_per_population);
    }

    function getDeathsByTemperature(deaths, temperature) {
        var death_ratio_per_temperature = 0;

        if (deaths > 0 && temperature > 0) {
            death_ratio_per_temperature = parseInt((deaths / temperature));
        } 

        return Number(death_ratio_per_temperature);
    }

    // PAGINATION --------------------------------------------

    function loadMain() {

        var callback = function(data) {
             var world = new Settings.objects.world(data.cases, data.deaths, data.active, data.recovered, data.affectedCountries, data.updated);
            $("#content").html(Handlebars.templates.global_stats(world));
        };

        request(Settings.data.novel.world, callback);
    }

    function loadPage1(country=Settings.defaultCountry){

        function loadCountryStats(data, countryCode) {

            for (var key of Object.keys(data)) {

                if (data[key].hasOwnProperty("countryInfo") && data[key].countryInfo.hasOwnProperty("iso2") && data[key].countryInfo.iso2 == countryCode) {

                    var country = new Settings.objects.country(
                        data[key].country,
                        data[key].cases,
                        data[key].todayCases,
                        data[key].deaths,
                        data[key].todayDeaths,
                        data[key].recovered,
                        data[key].active,
                        data[key].critical,
                        data[key].casesPerOneMillion,
                        data[key].countryInfo.flag
                    );

                    $("#country_values").html(Handlebars.templates.stats_by_country_boxes(country));

                }
            }
        }

        var callback = function(data) {

            var data = orderList(data, "country");
            data["country"] = Settings.defaultCountry;
            
            $("#content").html(Handlebars.templates.stats_by_country(data));
            $("#country_list").val(country);
            
            $("#country_list").on("change", function (){
                loadPage1($(this).val());
            })

            loadCountryStats(data, country);
        }

        request(Settings.data.novel.countries, callback);
    }

    function loadPage2() {

        var countriesByCode = Settings.lists.countriesByCode;

        function getPopulation(countryCode, countryName) {

            var country_name = function(){
                if (countryCode == null) return countryName;

                for (var i = 0; i < countriesByCode.length; i++) {
                    if (countryCode == countriesByCode[i].abbreviation) {
                        return countriesByCode[i].country;
                    }
                }
            }();
            
            var country_population = 0;
            var countriesByPopulation = Settings.lists.countriesByPopulation;

            for (var i = 0; i < countriesByPopulation.length; i++) {
                if (country_name == countriesByPopulation[i].country) {
                    country_population = parseInt(countriesByPopulation[i].population);
                }
            }

            return isNaN(country_population) ? 0 : country_population;
        }

        function getTemperature(countryCode) {

            var country_name = function(){
                for (var i = 0; i < countriesByCode.length; i++) {
                    if (countryCode == countriesByCode[i].abbreviation) {
                        return countriesByCode[i].country;
                    }
                }
            }();

            var countriesByTemperature = Settings.lists.countriesByTemperature;
            var country_temperature = 0 ;

            for (var i = 0; i < countriesByTemperature.length; i++) {
                if (country_name == countriesByTemperature[i].country) {
                    country_temperature = parseInt(countriesByTemperature[i].temperature);
                }
            }

            return isNaN(country_temperature) ? 0 : country_temperature;
        }        

        var callback = function (data){

            var list = [];

            for (var key of Object.keys(data)) {

                var population = data[key].hasOwnProperty("countryInfo") ? getPopulation(data[key].countryInfo.iso2, data[key].country) : 0;
                var temperature = data[key].hasOwnProperty("countryInfo") ? getTemperature(data[key].countryInfo.iso2, data[key].country) : 0;
                var flag = data[key].hasOwnProperty("countryInfo") ? data[key].countryInfo.flag : null;

                var country = new Settings.objects.fullStats(
                    data[key].country,
                    population,
                    data[key].cases,
                    data[key].deaths,
                    temperature,
                    getDeathsByCase(data[key].deaths, data[key].cases),
                    getDeathsByPopulation(data[key].deaths, population),
                    getDeathsByTemperature(data[key].deaths, temperature),
                    getCasesByPopulation(data[key].cases, population),
                    flag
                );

                list.push(country);
            }

            $("#content").html(Handlebars.templates.table(list));
            loadOrderOptions(list);
        }

        request(Settings.data.novel.countries, callback);
    }

    function loadPage3() {

        function getStatePopulation(state) {

            var state_population = 0;

            for (var i = 0; i < Settings.lists.statesByPopulation.length; i++) {
                
                if (state == Settings.lists.statesByPopulation[i].name) {
                    state_population = parseInt(Settings.lists.statesByPopulation[i].population);
                }
            }

            return Number(state_population);
        }

        var callback = function (data){

            var list = [];

            for (var key of Object.keys(data)) {

                var population = getStatePopulation(data[key].state);
                var state = new Settings.objects.USstate(
                    data[key].state,
                    population,
                    data[key].cases,
                    data[key].todayCases,
                    data[key].deaths,
                    data[key].todayDeaths,
                    data[key].recovered,
                    data[key].active,
                    getDeathsByCase(data[key].deaths, data[key].cases),
                    getDeathsByPopulation(data[key].deaths, population),
                    getCasesByPopulation(data[key].cases, population)
                );

                list.push(state);
            }

            $("#content").html(Handlebars.templates.table(list));
            loadOrderOptions(list);
        }

        request(Settings.data.novel.statesUS, callback);

    }

    function enablePagination() {
        $(".page0").on("click", function(){
            loadMain();
        });
        $(".page1").on("click", function(){
            loadPage1();
        });
        $(".page2").on("click", function(){
            loadPage2();
        });
        $(".page3").on("click", function(){
            loadPage3();
        });
    }

    // START -------------------------------------------------

    fetchExtraData();
    enablePagination();
    loadMain();

}())