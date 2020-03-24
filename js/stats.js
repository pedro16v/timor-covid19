(function(){
    'use strict';

    const apiURL = "https://thevirustracker.com/free-api?countryTotal=TL";
    const tatoliURL = '//0.0.0.0:8000/json/tatoli.json';    

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

    function loadNews(countryNews) {
        $("#newslist").html(Handlebars.templates.news_list(countryNews));
        $("#newslist").html($(".notification").get().reverse());
    }

    function loadTatoli(tatoliNews) {
        $("#newslist_tatoli").html(Handlebars.templates.news_list(tatoliNews));
        // $("#newslist_tatoli").html($(".notification").get().reverse());
    }



    function getTatoli() {
        $.ajax({
          url: tatoliURL,
          dataType: 'json',
          success: function(data) {
            loadTatoli(data);
          }
        });

    }

    $.ajax({
      url: apiURL,
      dataType: 'json',
      success: function(data) {
        var countryData = data.countrydata[0];
        var countryNews = data.countrynewsitems[0];

        loadStats(countryData);
        loadNews(countryNews);

        loadTatoli();
      }
    });

}())