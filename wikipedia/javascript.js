$( document ).ready(function() {
        console.log( "ready!" );
        function getResults(searchStr) {
  
        $(".searchResults").html('');
        $(".searchResults").append('<div class="resultList well container-fluid"> </div> ');

        $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&namespace=0&format=json&search="+ searchStr +"&callback=?", function(json) {

          for(i=0;i<json[1].length;i++){
        var resultHtml = '<a href=' + json[3][i] + ' target="_blank">';
            resultHtml += '<div class="result container-fluid">';
            resultHtml += '<div class ="resultTitle col-xs-5 text-center">' + json[1][i] + '</div>';
            resultHtml += '<div class ="resultTitle col-xs-7 text-center">' + json[2][i] + '</div>';
            resultHtml += '</div>';
            resultHtml += '</a>';
            $(".resultList").append(resultHtml)
          }
        });
      }

      $("#searchBtn").on("click", function(){
        var searchString = "";
        var tempString = [];
        searchString = $("#searchBox").val();
        tempString = searchString.split(" ");
        searchString = tempString.join("+");
        getResults(searchString);
        });

      $("#searchBox").on('keyup', function (e) {
        if(e.keyCode === 13){
          console.log("Hellooo");

                    var searchString = "";
                    var tempString = [];
                    searchString = $("#searchBox").val();
                    tempString = searchString.split(" ");
                    searchString = tempString.join("+");
                    getResults(searchString);
               }
        });
      });