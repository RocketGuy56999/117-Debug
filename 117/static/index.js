//Create date variable
var date=new Date()
var display_date="Date"+date.toLocaleDateString()



//Load HTML DOM
$(document).ready(function(){
    $("#display_date").html(display_date)
})
//Define variable to store predicted emotion

var predicted_emotions

//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        //AJAX call
        var inputData={
            "text":$("#text").val()
        }
        console.log(inputData)
        $.ajax({
            type:"POST",
            url:"/predict-emotions",
            data:JSON.stringify(inputData),
            dataType:"json",
            contentType:"application/json",
            success:function(result){
                
                // Result Received From Flask ----->JavaScript
                predicted_emotions=result.data.predicted_emotions
                emo_url=result.data.predicted_emotions_img_url
                // Display Result Using JavaScript----->HTML
                $("#prediction").html(predicted_emotions)
                $("#prediction").css("display","block")
                $("#emo_img_url").attr("src",emo_url)
                $("#emo_img_url").css("display","block")
            },
            //Error function
            error:function(result){
                alert(result.responseJSON.message)
            }
        });
    });
})

