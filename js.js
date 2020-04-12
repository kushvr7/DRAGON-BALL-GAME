//<script>
	

	var wid = screen.width;
var hie = screen.height;
let circle = document.querySelector('.circle');
let circ = document.querySelector('.circ');
let enemy = document.querySelector('.enemy');
let eney = document.querySelector('.eney');
let moveBy = 30;
 
window.addEventListener('load', () => {

	 // play();

    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;

      circ.style.position = 'absolute';
    circ.style.left = 0;
    circ.style.top = 0;

      enemy.style.position = 'absolute';
    enemy.style.left = 0;
    enemy.style.top = 0;

        eney.style.position = 'absolute';
    eney.style.left = 0;
    eney.style.top = 0;
    // eney.style.right  = 0;

    // enemy.style.marginLeft = "0px";
    // enemy.style.marginTop = "0px";

});
 
 var g=0;
 var h=0;
 var g = Math.random(100,1330);
 var h = Math.random(160,1300);
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
        pausea();
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
             g = parseInt(circle.style.left);
             powerdown();
            break;
        case 'ArrowRight':
        pausea();
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
             g = parseInt(circle.style.left);
             powerdown();
            break;
        case 'ArrowUp':
        pausea();
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
             h = parseInt(circle.style.top);
             powerdown();
            break;
        case 'ArrowDown':
        pausea();
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
             h = parseInt(circle.style.top);
            powerdown();
            break;
    }
});


function Hvisible(re){

	if(re.key =='O')
	{
		
		circle.style.left = Math.floor(Math.random() * wid) + 1 + 'px';
		circle.style.top =  Math.floor(Math.random() * hie) + 1 + 'px';
       	  teleport();
       	  // powerdown();
		 if(parseInt(circle.style.top) > 400)
		 	  circle.style.top = 350+'px';
		 if(parseInt(circle.style.left) > 1270)
		      	circle.style.left = 1260+'px';

		      g = parseInt(circle.style.left);
		      h = parseInt(circle.style.top);
		      // teleport();
	}

}


// function visibleb(ree){
// window.addEventListener('onkeydown', () => {
// 	if(ree.key =='Z')
// 	{
		
// 		enemy.style.left = Math.floor(Math.random() * wid) + 1 + 'px';
// 		enemy.style.top =  Math.floor(Math.random() * hie) + 1 + 'px';
//        	  teleport();
//        	  // powerdown();
// 		 if(parseInt(enemy.style.top) > 400)
// 		 	  enemy.style.top = 350+'px';
// 		 if(parseInt(enemy.style.left) > 1270)
// 		      	enemy.style.left = 1260+'px';

// 		      ge = parseInt(enemy.style.left);
// 		      he = parseInt(enemy.style.top);
// 		      // teleport();
// 	}

// }



if(g<0)
 circle.style.left = 0+'px';


var f=0;
var p=0; 	
window.addEventListener('keypress', (y) => {
    switch (y.key) {
        case 'K':
            // var g = parseInt(circle.style.left) + 'px';
            circ.style.left = g+100+'px';
            
            circ.style.top = h+50+'px';
            
            circ.style.display="block";
            p = parseInt(circ.style.top);
             f = parseInt(circ.style.left);
             // col();
            // shoot(f,p);
              break;
        default :
          break;     
        
    }
});




window.addEventListener('keypress', (yy) => {
    switch (yy.key) {
        case 'L':
          
           for(var i = f+10;i<=wid;i=i+10)
           {

           	   circ.style.left = i+'px';
           	   
           	   circ.style.left = i -10+'px';
           	   circ.style.left = i +5+'px';
           	   circ.style.left = i +10+'px';
           	   circ.style.left = i -5+'px';
           }
           punch();
           col();
           // checkCol();
           	if(parseInt(circ.style.left) > 	1400)
           		circ.style.display="none";
            // if(parseInt(circ.style.left) > 	1200)
           		// circ.style.display="none";
        // case '0' :
        //     circle.style.left = "10px";
        //     enemy.style.left: "60px";
         case 'F':
               openFullscreen();
               break;
       default :
          break; 

        
    }
});

//-------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------

 var ge=0;
 var he=0;
 let mov = 30;
 var t =0;

window.addEventListener('keyup', (ee) => {
    switch (ee.key) {
        case 'A':
            enemy.style.left = parseInt(enemy.style.left) - mov + 'px';
             ge = parseInt(enemy.style.left);
             powerdown();
             t = ge;
            break;
        case 'D':
            enemy.style.left = parseInt(enemy.style.left) + mov + 'px';
             ge = parseInt(enemy.style.left);
             t=ge;
             powerdown();
            break;
        case 'W':
            enemy.style.top = parseInt(enemy.style.top) - mov + 'px';
             he = parseInt(enemy.style.top);
             powerdown();
            break;
        case 'S':
            enemy.style.top = parseInt(enemy.style.top) + mov + 'px';
             he = parseInt(enemy.style.top);
             powerdown();
            break;
        case 'Z' :
        enemy.style.left = Math.floor(Math.random() * wid) + 200 + 'px';
		enemy.style.top =  Math.floor(Math.random() * hie) + 90 + 'px';
       	  teleport();
       	  // enemy.style.marginLeft = "0px";
       	  //  enemy.style.margintop = "100px";
       	  // powerdown();
		 if(parseInt(enemy.style.top) > 150)
		 	  enemy.style.top = Math.random() * 300+'px';
		 if(parseInt(enemy.style.left) > 630)
		      	enemy.style.left ="-"+130+'px';

		      ge = parseInt(enemy.style.left);
		      he = parseInt(enemy.style.top);
		      powerdown();
		      break;
               
    }
});



var fe=0;
var pe=0;
var flag=0;
window.addEventListener('keypress', (ye) => {
    switch (ye.key) {
        case 'Q':
            // var g = parseInt(circle.style.left) + 'px';
            eney.style.left = ge-100+'px';
            // eney.style.right = parseInt(eney.style.left);
            eney.style.top = he+90+'px';
            
            eney.style.display="block";
            p = parseInt(eney.style.top);
             f = parseInt(eney.style.left);
             flag = 1;
            // shoot(f,p);
           
              break;
        default :
          break;     
        
    }
});



window.addEventListener('keypress', (yye) => {
    switch (yye.key) {
        case 'E':
        if(flag == 1)
         { 
         	Ecol();
         	flag=0;
            punch();
         }
         
         eney.style.display ="none";
           // for(var i = fe+10;i<=wid;i=i+10)
           // {
           	   // eney.style.right = 1+'px';
           // 	   eney.style.right = i -10+'px';
           // 	   eney.style.right = i +5+'px';
           // 	   eney.style.right = i +10+'px';
           // 	   eney.style.right = i -5+'px';
           // }
           	
            
        default :
          break;     
        
    }
});




document.onkeydown = powerdown;
document.onkeyup = Hvisible;
// document.onkeyup =  ;
function powerdown(we){
          if(we.key == 'P' || we.key == 'ArrowDown'|| we.key == 'ArrowUp'|| we.key == 'ArrowLeft'|| we.key == 'ArrowRight'||we.key == 'O')
          {
          	circ.style.display="none";
          	// eney.style.display="none";
          }
          if(we.key == 'R' || we.key == 'W'|| we.key == 'A'|| we.key == 'S'|| we.key == 'D'|| we.key == 'Z')
           {
          	// circ.style.display="none";
          	eney.style.display="none";
          }

         }	
var hit =0;
// var Cl = parseInt(circle.style.top) - 100;
// var Crightedge = parseInt(circle.style.left) + 30;
// var El = parseInt(enemy.style.top) - 300;
// var Erightedge = parseInt(enemy.style.left) + 100;

     function col(){
    
       // if( parseInt(circle.style.top) == parseInt(enemy.style.top) )
         // {
         	   // if(Math.abs(parseInt(circ.style.top) - parseInt(enemy.style.top)) == 210)
         	  
         	   // if(Cl == El)
         	    if( parseInt(circle.style.top) == parseInt(enemy.style.top) || Math.abs( Math.abs(parseInt(circle.style.top)) - Math.abs(parseInt(enemy.style.top)) < 70 )     )
         	   {
         	   	     hit++;
         	   	     document.getElementById("hita").innerHTML = hit;
               }
               if(hit > 5)
               	circle.style.backgroundImage = "url('gok4.png')"; 
         }
    
  var hiti =0;

      function Ecol(){
    
       // if( parseInt(circle.style.top) == parseInt(enemy.style.top) )
         // {
         	   // if(Math.abs(parseInt(circ.style.top) - parseInt(enemy.style.top)) == 210)
         	  
         	   // if(Cl == El)
         	    if( parseInt(circle.style.top) == parseInt(enemy.style.top) || Math.abs( Math.abs(parseInt(circle.style.top)) - Math.abs(parseInt(enemy.style.top)) < 70 ) )
         	   {
         	   	     hiti++;
         	   	     document.getElementById("hitb").innerHTML = hiti;
               }
              if( hiti > 4)
               enemy.style.backgroundImage = "url('en6.png')";    	
         }   

 var mus = document.getElementById("enter");
  var telep = document.getElementById("tele");
   var pun = document.getElementById("enterb");
  
  function playa() {
    mus.play();
     }


     function pausea() {
    mus.pause();
     }

  window.onload = function() {
    playa();
}

// teleport and punch sound

  function teleport() {
    telep.play();
    // return;
     }


    //  function teleporta() {
    // teleporta.pause();
    //  }

     function punch() {
    pun.play();
    // return;
     }



  var elem = document.documentElement;

/* Function to open fullscreen mode */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem = window.top.document.body; //To break out of frame in IE
    elem.msRequestFullscreen();
  }
}





    //  function puncha() {
    // punch.pause();
    //  }
    // </script>
