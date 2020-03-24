const fs = require('fs');
const Nightmare = require('nightmare')
const nightmare = Nightmare({ 
  show: false,
  dock: false
})

const url = 'http://www.tatoli.tl/?s=covid+corona';

nightmare
.goto(url)
.wait('h3.entry-title')
.evaluate(() => {
    var news_list = [];
    
    var blocks = document.querySelectorAll('h3.entry-title');

    blocks.forEach(function(article){
        var re = /\d{4}\/\d{2}\/\d{2}/

        var new_article = {
            "title": article.querySelector('a').innerText,
            "url": article.querySelector('a').getAttribute('href'),
            "time" : ""
        };

        new_article.time = re.exec(new_article);

        news_list.push(new_article);
    });

    return news_list;
})
.end()
.then((news_list) => {
    fs.writeFile("json/tatoli.json", JSON.stringify(news_list), function(){ console.log("File OK.")});
})
.catch(error => {
    console.log(error);
})