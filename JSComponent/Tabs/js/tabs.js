
    var item = document.getElementsByClassName("item");
    var pan = document.getElementsByClassName("pan");
    var len = item.length;

    function changeitem(i){
        for(let i=0;i<len;i++){
            item[i].className = "item";
            pan[i].className = "pan";
        }
        item[i].className = "item on";
        pan[i].className = "pan pan-on";
    }

    for(let i=0;i<len;i++){
        item[i].addEventListener("click",function(){
            changeitem(i);
        });
    }