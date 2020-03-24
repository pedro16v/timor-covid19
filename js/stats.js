(function(){
    'use strict';

    const defaultCoutry = "TL"
    const hostname = document.location.hostname;
    const apiURL = "https://thevirustracker.com/free-api?countryTotal=";
    const tatoliURL = "/json/tatoli.json";
    const countriesURL = "/json/countries.json";


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
          url: apiURL + country,
          dataType: 'json',
          success: function(data) {
            var countryData = data.countrydata[0];
            var countryNews = data.countrynewsitems[0];

            loadStats(countryData);
            loadNews(countryNews);

            // loadTatoli();
          }
        });
    }

    function enableDropDown() {
        $("#country_list").on("change", function(){
            loadData($(this).val());
        })
    }

    $.ajax({
        url: countriesURL,
        dataType: 'json',
        success: function(data) {
            $("#country_list").html(Handlebars.templates.country_list(data));
            $("#country_list").val(defaultCoutry);

            enableDropDown();
            loadData(defaultCoutry);
        }
    });    

}())