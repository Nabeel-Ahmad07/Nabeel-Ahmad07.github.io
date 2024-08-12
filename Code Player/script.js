function outputPanel () {
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style><body>" + $("#htmlPanel").val() + "</body></html>");

    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val())
}

$(".toggleButton").hover(function () {
    $(this).addClass("highlighted");
}, function () {
    $(this).removeClass("highlighted");
});

$(".toggleButton").click(function() {
    $(this).toggleClass("active");
    $(this).removeClass("highlighted");

    var panelId = $(this).attr("id") + "Panel"
    $("#" + panelId).toggleClass("hidden");

    var numberOfActivePanels = 4 - $(".hidden").length;
    $(".panel").width(($(window).width() / numberOfActivePanels) - 15 );
});

$(".panel").height($(window).height() - $("#header").height() - 25);

outputPanel();
$("textarea").on('change keyup paste', function() {
    outputPanel();
});