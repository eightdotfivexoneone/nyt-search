$(document).ready(function(){
  $("#search-button").on("click", function () {
  console.log($(this));
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  var searchTerm = $("#search-term").val();
  var numRecords = $("#num-records").val();
  var startYear = $("#start-year").val();
  var endYear = $("#end-year").val();
  url += '?' + $.param({
    'api-key': "cb909a8eea0945e795839b3d1ea035f0",
    'q': searchTerm,
  'begin_date': startYear,
  'end_date': endYear
  });
  console.log(url);

 
  $.ajax({
    url: url,
    method: "GET"
  }).then(function(response) {

    for (i = 0; i < numRecords; i++) {
    var results = response.response.docs[i];
    console.log(results);
    console.log(searchTerm);
    console.log(startYear);
    console.log(endYear);
    console.log(numRecords);
    $("#results-1").append("<h2>" + results.headline.main + "</h2>" + "<br>" + results.source + "<a href='" + results.web_url + "'>" + "<br>" + results.web_url + "</a>" + "<br><br>" + "<HR COLOR='white' WIDTH='100%'>");

    }
  });
 });
 $("#clear-button").on("click", function () {
  $(".results").html(" ");
 });
 });

