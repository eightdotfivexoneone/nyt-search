$(document).ready(function(){
  $("button").on("click", function () {
  console.log($(this));
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "cb909a8eea0945e795839b3d1ea035f0",
    'q': "politics",
  'begin_date': "19910101",
  'end_date': "20010101"
  });
  console.log(url);
  var searchTerm = $("#term").val();
  var numRecords = $("#num-records").val();
  var startYear = $("#start-year").val();
  var endYear = $("#end-year").val();
 
  $.ajax({
    url: url,
    method: "GET"
  }).then(function(response) {
    var results = response.response.docs[0];
    console.log(results);
    $(".results").append(results.headline.main);
    $(".results").append(" " + results.source);
    $(".results").append(" " + results.web_url);
  }).then(function(response) {
    
    var results = response.response.docs;
 
  console.log(results);
 
  $("<div id='results'>").append(results);
 
  for (var i = 0; i < results.length; i++) {
    var rank = results.multimedia.rank;
    var pRank = $("<p></p>").text(rank[i]);
    var title = results.headline.main;
    var pTitle = $("<p></p>").text(title[i]);
    var author = results.multimedia.byline.original;
    var pAutho = $("<p></p>").text(author[i]);
  }
  });
 });
 
 });