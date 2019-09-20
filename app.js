$(document).ready(function(){
$("#search").on("click", function(event){
    event.preventDefault();
    // put the search term in a variable called search
    var searchQuery = $("#searchInput").val();
    var searchQueryEle = $("#searchInput");
    console.log(searchQuery);
    console.log(searchQueryEle);
    var startYear = $("#startYearInput").val();
    console.log(startYear);
    var endYear = $("#endYearInput").val();
    console.log(endYear);

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchQuery + "&api-key=i63ijSd7E9NHLGXZDaoS5HKElOPNl3ZX"
    if (startYear) {
        queryURL += "&begin_date:" + startYear + "0101";
    }
    if (endYear) {
        queryURL += "&end_date:" + endYear + "0101";
    }
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        methos: "GET"
    }).then(function(response) {
        console.log(response);
        for(var i = 0; i < 5; i++) {
            var articleCard = $("<div>");
            var p = $("<p>");
            $(p).html("<h4>" + response.response.docs[i].headline.main + "</h4>");
            $(articleCard).append(p);
            $("#results").append(articleCard);

        }
    });


});
});