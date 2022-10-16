var onmouseover = document.getElementById("onmouseover");
        var onmousedownimiz =  document.getElementById("onmousedown");
        var onclick = document.getElementById("onclick");
        var resim = document.getElementsByTagName("img")[0];

        var input = document.getElementsByTagName("input")[0];


        onmouseover.onmouseover = function(){
            onmouseover.innerHTML = "Mouse over!"
        };

        
        onmouseover.onmouseout = function(){
            onmouseover.innerHTML = "Mouse out!";
        };

        
        onmousedownimiz.onmousedown = function(){
            onmousedownimiz.innerHTML = "Mouse down!";
        };
        onmousedownimiz.onmouseup = function(){
            onmousedownimiz.innerHTML = "Mouse up!";
        };
            

        input.onchange = function(){
            input.value = input.value.toUpperCase();
        };

        
        input.onkeyup = function(){
            input.value = input.value.toUpperCase();
        };

        
        
        input.onblur = function(){
            input.value = "On blur";
        }

        input.onfocus = function(){
            input.value = "Focused";

        };
        
        
        onclick.onclick = function(){
            onclick.innerHTML = "DIV clicked";
        };
        resim.onclick = function(){
            resim.src = "img/2.jpg";
        };
        
        

