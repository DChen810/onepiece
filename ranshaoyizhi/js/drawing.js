function appendToHistory(card, imgsrc)
{
    if (card.rank >= 4)
    {
        var selector = "#" + (card.type=="servant" ? "servant" : "craft_essence")
                        + "_" + (card.rank==4 ? "sr" : "ssr") + "_list";
        var content = "<img src='" + imgsrc + "' />";
        $(selector).append(content);
    }
}

function drawOnce(card)
{
    var c = $("canvas#cards-canvas")[0];
    var ctx = c.getContext("2d");
    ctx.drawImage(imgBg, 0, 0);

    var img = new Image();
    var type = card.type=="servant" ? "servant" : "equip";
   
    img.src = (card.type=="servant") ? 
         "img/kachi/" + card.id + ".jpg" :
        "img/kachi/" + card.id + ".jpg" ;

    img.onload = function(){
        ctx.drawImage(img, 450, 220);
    };

    appendToHistory(card, img.src);
}

function drawCombo(card, x, y)
{
    var c = $("canvas#cards-canvas")[0];
    var ctx = c.getContext("2d");
    // var imgBg = $('img#background')[0];
    ctx.drawImage(imgBg, 0, 0);

    var img = new Image();
    img.src =(card.type=="servant") ? 
          "img/kachi/" + card.id + ".jpg" :
        "img/kachi/" + card.id + ".jpg" ;

    img.onload = function(){
        ctx.drawImage(img, 65 + x * 178, 140 + y * 172);
    };

    appendToHistory(card, img.src);
}


