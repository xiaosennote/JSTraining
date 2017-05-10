        var con = document.getElementsByClassName("con")[0];

        var pic = document.getElementsByClassName("pic-co")[0];
        var pic_list = pic.getElementsByTagName("li");

        var point = document.getElementsByClassName("focus-point")[0];

        var left = document.getElementById("left");
        var right = document.getElementById("right");

        for (var i = 0; i < pic_list.length; i++) {
            var creli = document.createElement("li");
            point.appendChild(creli);
        }
        var point_list = point.getElementsByTagName("li");
        point_list[0].className = "on";

        var num = 0;
        var a = null;
        function autoPlay(){
            a = setInterval(function(){
                num++;
                if(num >= pic_list.length){
                    num = 0;
                }
                play(num);
            },2000);
        }
        function play(num){
            for (var i = 0; i < pic_list.length; i++) {
                pic_list[i].className = "";
                point_list[i].className = "";
            }
            pic_list[num].className = "on";
            point_list[num].className = "on";
        }

        //点击左右切换
        left.addEventListener("click",function(){
            num -= 1;
            if(num < 0){
                num=pic_list.length-1;
            }
            play(num);
        });
        right.addEventListener("click",function(){
            num++;
            if(num >= pic_list.length){
                num = 0;
            }
            play(num);
        });
        //鼠标移入移出
        con.addEventListener("mouseover",function(){
            clearInterval(a);
        });
        con.addEventListener("mouseout",function(){
            autoPlay();
        });
        //鼠标移入焦点，切换到对应图片
        for(let i=0,n=point_list.length;i<n;i++){
            point_list[i].addEventListener("mouseover",function(){
                num = i;
                play(i);
            });
        }
        (function(){
            autoPlay();
        });