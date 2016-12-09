$( document ).ready(function() {

$.ajax({
    url: '/friend',
    type: "get",
    dataType: "json",

    success: function(data, textStatus, jqXHR) {
        // since we are using jQuery, you don't need to parse response
        drawTable(data);
    }
});


});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);

    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#friend123").append(row);
    row.append($("<td><img src='" + rowData.user.avatar  + "'/>&nbsp;&nbsp;&nbsp;" + rowData.user.displayName +"</td>"));

    row.append($("<td>" + rowData.user.averageDailySteps + "</td>"));
    row.append($("<td><button type=\"submit\" class=\"btn btn-primary\">Challenge</button></td>"));

}
