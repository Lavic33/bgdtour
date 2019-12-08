window.onload = function(){
    document.querySelector(".toTop").addEventListener("click",backToTop);
    document.querySelector("#posalji").addEventListener("click",provera);
    document.querySelector("#ime").addEventListener("blur",provera);
    document.querySelector("#broj").addEventListener("change",provera);
    document.querySelector("#noPeople").addEventListener("blur",provera);
 
};

   


var ukupnaCenaTure=0;
var simbolValute="&#8364;";

function provera(e){
    e.preventDefault();
    let izabranoIme=document.querySelector("#ime").value;
    let izabranBroj=document.querySelector("#broj").value;
    var regName,regNumber;
    
    regName=/^[A-ZŠĐČĆŽ]([a-zšđžčć\s]{2,12})*$/;

 //Radi vezbe uslov je stavljen samo za pozivne brojeve u nasoj zemlji
    regNumber=/^06[0-9]{7,8}$/;

    if(regName.test(izabranoIme)){
        uspesnaProvera=true;
        document.querySelector("#ime").classList.remove("greska");
        
    }
    else{
        document.querySelector("#ime").classList.add("greska");
        
    }

    if(regNumber.test(izabranBroj)){
        uspesnaProvera=true;
        document.querySelector("#broj").classList.remove("greska");
        
    }
    else{
        document.querySelector("#broj").classList.add("greska");
        
    }

    var izborMesto=document.querySelector("#odaberiTuru").value;
    if(izborMesto!="-1"){
        uspesnaProvera=true;
        document.querySelector("#odaberiTuru").classList.remove("greska");
        
    }
    else{
        document.querySelector("#odaberiTuru").classList.add("greska");
    }
    

    var izborLjudi=document.querySelector("#noPeople").value;
    if(izborLjudi!="0"){
        uspesnaProvera=true;
        document.querySelector("#noPeople").classList.remove("greska");
        
        ukupnaCenaTure+=turaCena[izborMesto]*izborLjudi;
            
        document.getElementById("cena").value=`${ukupnaCenaTure} \u20AC`
        ukupnaCenaTure=0;
      
        
    }
    else{
        document.querySelector("#noPeople").classList.add("greska");
        
    }
  
    var datum=document.querySelector("#datum").value;
    var trenutniDatum=new Date();
    var trenutniDan=trenutniDatum.getDate();
    var trenutniMesec=trenutniDatum.getMonth();
    var trenutnaGodina=trenutniDatum.getFullYear();
    console.log(datum);

   var deodatuma=datum.split("-");
   
   if((deodatuma[0]<trenutnaGodina) || (deodatuma[1]<trenutniMesec) || (deodatuma[2]<trenutniDan)){
    document.querySelector("#noPeople").classList.add("greska");
   }
   else{
    uspesnaProvera=true;
    document.querySelector("#noPeople").classList.remove("greska");
   }
    

    

    


    
    
    

    

    
    
}


//Ispis menija
var stavkeMenija=["Home","Tours","Book","Author"];


for(let i=0;i<stavkeMenija.length;i++){
    document.querySelector("#pcmeni").innerHTML+=`<li><a href="#" id="${stavkeMenija[i]}">${stavkeMenija[i]}</a></li>`;
    document.querySelector("#meniResp").innerHTML+=`<li><a href="#" id="${stavkeMenija[i]}resp">${stavkeMenija[i]}</a></li>`;
}



//Ispis tura
 var turaIme=["Kalemegdan","Skadarlija","NightLife","Usce","Slavija","Terazije","Savski Kej","Knez Mihajlova","Hram Svetog Save"];
 var turaTrajanje=[1,2.5,3,1,0.5,1,2,3,4];
 var turaCena=[10,20,25,5,6,4,7,15,50];
 
 var turaPopust=[10,33,50,40,50,20,15,30,50];
 var turaOpis=["Kalemegdan is the largest park and the most important historical monument in Belgrade.",
 "Skadarlija  is a vintage street, an urban neighborhood and former municipality of Belgrade, the capital of Serbia.",
"Belgrade is city that never sleeps,explore restaurants and popular clubs",
"Usce means confluence,its large beautifull park by the two rivers Sava and Danube",
" The square was previously named Dimitrije Tucović Square after the prominent Serbian socialist.",
"Terazije is the central town square and the surrounding neighborhood of Belgrade, the capital of Serbia.",
"Savski kej is beautifull landscape by the river Sava in part of city-New Belgrade",
"Knez Mihailova Street is the main pedestrian and shopping zone in Belgrade",
"The Church of Saint Sava is a Serbian Orthodox church"];



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
     <img src="img/${i}.jpg" alt="${turaIme[i]}" class="Slika margina"/>
     <p class="margina">Trajanje ture: ${turaTrajanje[i]}h</p>
     <p class="staraCena">${staraCena}&#8364;</p>
     <p class="cena margina">${turaCena[i]} &#8364;</p>
     <button class="readmore stylebtn margina">Read more</button>
     <p class="opis margina">${turaOpis[i]}</p>
     <button class="book stylebtn margina   " >Book</button>
     </div>`;
 }

//Ispis forme
let selectTura=document.querySelector("#odaberiTuru");
selectTura.innerHTML+="<option value='-1'>Choose tour</option>";
    for(let i=0;i<turaIme.length;i++){
        



        selectTura.innerHTML+=`
        <option value="${i}">${turaIme[i]}</option>
        `;
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
    });

    $("#respmeni").click(function(e){
        e.preventDefault;
        $("#mobileMeni").slideToggle("slow",function(){
            
        });
    });



    $(".toTop").hide();
    $(".opis").hide();

    $(".readmore").click(function(){
        var moreLess=$(this).next().is(":visible") ? "Read more" : "Read less";
           $(this).text(moreLess);
        $(this).next(".opis").fadeToggle(1000,function(){
           
        });
    });

    $("#bookNow").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop: $("#ture").offset().top},
            1200);
    });


    $("#Tours").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop:$("#ture").offset().top
        },1200);
    });
    $("#Toursresp").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop:$("#ture").offset().top
        },1200);
    });

    $("#Book").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop:$("#forma").offset().top
        },1200);
    });
    $("#Bookresp").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop:$("#forma").offset().top
        },1200);
    });

    $("#Author").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop:$("#autor").offset().top
        },1200);
    })
    $("#Authorresp").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop:$("#autor").offset().top
        },1200);
    });


    var ime="";
  //klikom na book upisuje se data tura u dropdown listu
    $(".book").click(function(){
        var ime=$(this).parent().find("h2").text();
        for(let i=0;i<turaIme.length;i++){
            if(ime == turaIme[i]){
               
            $("#odaberiTuru").val(i);
            }
        }
        $("html,body").animate({
            scrollTop:$("#forma").offset().top
        },1200);

    });

    
  
   

   



    $(".toTop").click(function(){
      
        $("html,body").animate({scrollTop:0},1000);
    });


    $(".animacijaDveSlike").hover(function(){
        $(this).find("img:eq(1)").stop(true,true).fadeIn();

    },function(){
        $(this).find("img:eq(1)").fadeOut();
    }
    );

  
    //Image animaton

    $(".Slika").hover(function(){
        $(this).css({"border":"3px solid #7d5d3b","opacity":"1"});
    },function(){
        $(this).css({"border":"none","opacity":"0.75"});
    });

   

});