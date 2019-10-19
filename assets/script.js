function buildQueryURL() {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=9Wd4T3TPAP92lIhIMSV6mVjMrAAelkFt";
    
}
buildQueryURL()
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=9Wd4T3TPAP92lIhIMSV6mVjMrAAelkFt";

$.ajax({
    url: queryURL,
    method: "GET"
    })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);
    });