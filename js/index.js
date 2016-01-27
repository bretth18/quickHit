//index.js
//2016 brett henderson

$(function() {
    var userInput = $(".userInput");

    function main() {
        var res = $(".results"),
            link = "http://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=" + $(".userInput").val() + "&limit=20&callback=?",
            i;
        res.html("");
        res.append("<h2 class='searching text-center'>Searching...</h2>");
        $.getJSON(link, function(data) {
            if (data[1].length === 0 && data[2].length === 0 && data[3].length === 0) {
                $(".searching").html("no results found");
            } else {
                $(".searching").remove();
            }
            for (i = 0; i < data[1].length; i++) {
                res.append("<a href='" + data[3][i] + "' target='_blank' class='asd'><div class='art animated fadeInUp'><h3>" + data[1][i] + " <small>" + (i + 1) + "</small></h3><p>" + data[2][i] + "</p></div></a>");
            }
        });
    }
    $("button.search").click(main);
    $("div#a0").click(function() {
        alert("ok");
    });
    userInput.bind("enterKey", main);
    userInput.keyup(function(e) {
        if (e.keyCode == 13) {
            $(this).trigger("enterKey");
        }
    });
});
