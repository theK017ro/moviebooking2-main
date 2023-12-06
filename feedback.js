b=0;
$(".stars").click(function(){
    $(this).text("⭐");
    b=b+1;
    
})
$(".submit").click(function(){
    if(b>3){
    alert("Thanks for rating us "+b+" stars");}
    else if(b===0){
        alert("please contact us and tell us what we need to change")
    }
    else{
        alert("Next time we give you our best");
    }
})

    
