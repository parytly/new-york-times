function buildQueryURL() {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=9Wd4T3TPAP92lIhIMSV6mVjMrAAelkFt";
    console.log(queryURL)
}
buildQueryURL()

function articlesearch() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=9Wd4T3TPAP92lIhIMSV6mVjMrAAelkFt";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#search-term").text(JSON.stringify(response));
    });
    console.log(queryURL);
};
articlesearch ();