window.onload = function(){
    document.querySelector(".toTop").addEventListener("click",backToTop);
    document.querySelector("#posalji").addEventListener("click",provera);
 
}


let izabranoIme=document.querySelector("#ime").value;
console.log(izabranoIme);
 let regName,regNumber;

 regName=/^[A-ZŠĐČĆŽ]([a-zšđžčć\s]{2,12})*$/
 //Radi vezbe uslov je stavljen samo za pozivne brojeve u nasoj zemlji
regNumber=/^\+3816[/d]{7,8} || 06[/d]{6,7}$/
var uspesnaProvera=false;

function provera(){

    if(regName.test(izabranoIme)){
        uspesnaProvera=true;
    }

    
}

//Ispis menija
var stavkeMenija=["Home","About","Author"];


for(let i=0;i<stavkeMenija.length;i++){
    document.querySelector("ul").innerHTML+=`<li><a href="${stavkeMenija[i]}.html">${stavkeMenija[i]}</a></li>`;
    
}



//Ispis tura
 var turaIme=["Kalemegdan","Skadarlija","NightLife","Usce","Slavija","Terazije"];
 var turaTrajanje=[1,2.5,3,1,0.5,1];
 var turaCena=[10,20,25,5,6,4];
 var turaRejting=[4,5,4.4,4.3,3.8,4.8];
 var turaPopust=[10,33,50,40,50,20];
 var turaOpis=["Kalemegdan is the largest park and the most important historical monument in Belgrade.",
 "Skadarlija  is a vintage street, an urban neighborhood and former municipality of Belgrade, the capital of Serbia.",
"Belgrade is city that never sleeps,explore restaurants and popular clubs",
"Usce means confluence,its large beautifull park by the two rivers Sava and Danube",
" The square was previously named Dimitrije Tucović Square after the prominent Serbian socialist.",
"Terazije is the central town square and the surrounding neighborhood of Belgrade, the capital of Serbia."];

//Racunanje popusta

 for(let i=0;i<turaIme.length;i++){
     
  
       
    
    
     var ture=document.querySelector("#ture");
     var opisi=document.querySelectorAll(".opis");
     var staraCena=turaCena[i];
     var imaPopust=false;
     if(turaPopust[i]!=0){
         turaCena[i]=turaCena[i]-(turaCena[i]*turaPopust[i]/100);
         imaPopust=true;

     }
     


     ture.innerHTML+=`<div id="${turaIme[i]}" class="tura">
     <h2 class="naslovTure margina">${turaIme[i]}</h2>
     <img src="img/${turaIme[i]}.jpg" alt="${turaIme[i]}" class="Slika margina"/>
     <p class="margina">Trajanje ture: ${turaTrajanje[i]}h</p>
     <p class="staraCena">${staraCena}&#8364;</p>
     <p class="cena margina">${turaCena[i]} &#8364;</p>
     <button class="readmore stylebtn margina">Read more</button>
     <p class="opis margina">${turaOpis[i]}</p>
     <button class="book stylebtn margina   " >Book</button>
     </div>`
 }

//Ispis forme
let selectTura=document.querySelector("#odaberiTuru");
selectTura.innerHTML+="<option value='0'>Choose tour</option>";
    for(let i=0;i<turaIme.length;i++){
        



        selectTura.innerHTML+=`
        <option value="${turaIme[i]}">${turaIme[i]}</option>
        `
    }




 $(document).ready(function(){
    //Back to Top button
    $(window).scroll(function(){

        if($(this).scrollTop()>80){
            $(".toTop").fadeIn();
        }
        else{
            $(".toTop").fadeOut();
        }
    })


   



    $(".toTop").hide();
    $(".opis").hide();

    $(".readmore").click(function(){
        var moreLess=$(".opis").is(":visible") ? "Read more" : "Read less";
           $(this).text(moreLess);
        $(this).next(".opis").fadeToggle(1000,function(){
           
        });
    })

    $("#bookNow").click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#ture").offset().top},
            1200);
    })

    $("#bookNow").click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#ture").offset().top},
            1200);
    })



    $(".toTop").click(function(){
      
        $('html,body').animate({scrollTop:0},1000);
    })


    $(".animacijaDveSlike").hover(function(){
        $(this).find("img:eq(1)").stop(true,true).fadeIn();

    },function(){
        $(this).find("img:eq(1)").fadeOut();
    }
    )

    //Izracunavanje cene


    let izabranaTura,izabranDatum,izabranBrojLjudi,izabranoVreme;


    //Book


  
    //Image animaton

    $(".Slika").hover(function(){
        $(this).css({"border":"3px solid #7d5d3b","opacity":"1"});
    },function(){
        $(this).css({"border":"none","opacity":"0.75"});
    })

   

});