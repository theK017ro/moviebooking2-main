let  arr = [];
a=0;




$(".available").click(function () {
    $(this).css("background-color", "#39E75F");
    
        $(this).html("selected");
        a=a+1;
    

})
$("#go").click(function () {
    alert("You booked "+a+" tickets");
})
$(".booked").html("booked");

$(".available").html("available");