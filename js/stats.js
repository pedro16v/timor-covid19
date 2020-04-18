(function(){
    'use strict';

    var Settings = {
        defaultCountry : {
            code : "TL",
            name : "Timor-Lest"
        },
        hostname : document.location.hostname,
        data : {
            novel : {
                world : {
                    url : "https://corona.lmao.ninja/v2/all",
                    cache: null
                },
                countries : {
                    url : "https://corona.lmao.ninja/v2/countries",
                    sort : "?sort=",
                    options : [],
                    cache : null
                },
                country : {
                    url : "https://corona.lmao.ninja/v2/countries/",
                    options : [],
                    cache : null
                },
                statesUS : {
                    url : "https://corona.lmao.ninja/v2/states",
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
            StateStats : function StateStats(name, population, cases, todayCases, deaths, todayDeaths, recovered, active, death_ratio_per_infected, death_ratio_per_population, case_ratio_per_population) {
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
            },
            USprovince : function USprovince(name) {
                this.name = name;
                this.cities = {};
                

            },
            UScity : function UScity(name, updated, confirmed, deaths, recovered) {
                this.name = name;
                this.updated = updated;
                this.confirmed = confirmed;
                this.deaths = deaths;
                this.recovered = recovered;
            },



        }
    };
    
    // FETCH DATA---------------------------------------------

    function request(pointer, callback) {

        console.log(pointer);

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

    function registerHelpers() {
        Handlebars.registerHelper('thousands', function (value) {
            return parseInt( value ).toLocaleString();
        });
        Handlebars.registerHelper('timeanddate', function (value){
            return new Date(value).toLocaleDateString();
        });
    };

    // HANDLE DATA -------------------------------------------

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

    function loadPage1(country=Settings.defaultCountry.code){

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

        function loadStates() {
            
        }

        function loadHistoricalData(countryCode) {

            console.log(countryCode);

            var callback2 = function(data) {
                console.log("------");
                console.log(data);

                $("#historical").html(Handlebars.templates.historical_table(data.timeline));
            };

            //Load historical data
            var countriesByCode = Settings.lists.countriesByCode;
            var country_name = function(){
                for (var i = 0; i < countriesByCode.length; i++) {
                    if (countryCode == countriesByCode[i].abbreviation) {
                        return countriesByCode[i].country;
                    }
                }
            }();

            console.log(country_name);

            var url = Settings.data.jhucsse.historical.url + Settings.data.jhucsse.historical.sort + country_name;
            console.log(url);
            

            $.ajax({
                url: url,
                async: true,
                dataType: 'json',
                success: function(data) {
                    callback2(data);
                }
            });
        }

        var callback1 = function(data) {

            data.sort((a, b) => (a.country > b.country) ? 1 : -1);
            data["country"] = Settings.defaultCountry.code;
            
            $("#content").html(Handlebars.templates.stats_by_country(data));
            $("#country_list").val(country);
            
            $("#country_list").on("change", function (){

                var value = $(this).val();

                if (value == "US") {
                    loadStates();
                } else {
                    loadPage1(value);
                }                
            });

            loadCountryStats(data, country);
            loadHistoricalData(country);

        };

        request(Settings.data.novel.countries, callback1);
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
                var state = new Settings.objects.StateStats(
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
    registerHelpers();
    enablePagination();
    loadMain();

}())