var firstOpen=true;
$('#reservetime').timepicker({ 
    defaultTime: false,
}).on("show.timepicker", function(){ 
    if (firstOpen==true) {
        $(this).timepicker('setTime','07:00 PM');
        firstOpen=false;
    }
});


var numGuests = 0;
var section = " ";
var reserveDate=document.getElementById('reservedate');
var reserveTime=document.getElementById('reservetime');
$("input:radio[name=guests]").click(function() {
    numGuests = $(this).val();
});

$('.sectionName input[type=radio]').on('change', function() {
    section = $(this).val();
});
    
bootstrap_alert = function(message) {
    $('#alert_placeholder').html('<div class="alert alert-success"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
}

bootstrap_alert('close',function() {
    window.location.reload();
});

$('#reserve-form').on('submit',function() {
    bootstrap_alert('You have reserved a table for ' + numGuests + ' guests on ' + reserveDate.value + ' at ' + reserveTime.value);
    return false;
}); 

bootstrap_alert_modal = function(message) {
    $('#alert_placeholder_modal').html('<div class="alert alert-success"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
}

$('#reserve-form-modal').on('submit',function() {
    bootstrap_alert_modal('You have reserved a table in the ' + section + ' section, for ' + numGuests + ' guests on ' + reserveDate.value + ' at ' + reserveTime.value);
    return false;
}); 
    

$(document).ready(function(){
    $(".btn").first().button("toggle");
    $("#mycarousel").carousel({interval: 2000});
    $("#carousel-button").click(function() {
        if($("#carousel-button").children("span").hasClass('fa-pause')) 
            {
                $("#mycarousel").carousel('pause');
                $("#carousel-button").children("span").removeClass('fa-pause')
                $("#carousel-button").children("span").addClass('fa-play')
            }
        else 
            {
                $("#mycarousel").carousel('cycle');                               
                $("#carousel-button").children("span").removeClass('fa-play')
                $("#carousel-button").children("span").addClass('fa-pause') 
            }
        });
    });    