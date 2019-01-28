viz.config.set('websocket','https://rpc.viz.lexai.host/'); 
viz.config.set('address_prefix','VIZ');
viz.config.set('chain_id','2040effda178d4fffff5eab7a915d4019879f5205cc5392e4bcced2b6edda0cd');

var BUTT = document.querySelector("a.trans");
BUTT.addEventListener("click", function( event ) {
var  wif= document.getElementById("wif").value;
var  sender= document.getElementById("sender").value.toLocaleLowerCase().trim();
var  pol= document.getElementById("pol").value.toLocaleLowerCase().trim();
var  mone= document.getElementById("mone").value;
var  memo= document.getElementById("memo").value;
var bbb = Math.round(mone*1000)/1000;;
var vvv= bbb.toFixed(3)

viz.broadcast.transfer(wif, sender, pol, vvv + ' VIZ', memo, function(err, result) {
  
   if(result) { 
 console.log(result);
  document.getElementById('urra').innerHTML = "<div class='yeah'><h2>УСПЕШНО!</h2></div>";
   } else{ 
   document.getElementById('urra').innerHTML = "<div class='nono'><h2>ОШИБКА!</h2></div>";
  }
    setTimeout(function(err, result) { 
	   document.getElementById('urra').innerHTML = "<div class='err'></div>";                        
		}, 7000 ); 
});

});

var BUTTS = document.querySelector("a.transs");
BUTTS.addEventListener("click", function( event ) {
var  wifs= document.getElementById("wifs").value;
var  senders= document.getElementById("senders").value.toLocaleLowerCase().trim();
var  pols= document.getElementById("pols").value.toLocaleLowerCase().trim();
var  mones= document.getElementById("mones").value;
var bbb = Math.round(mones*1000)/1000;
var vvv= bbb.toFixed(6)

viz.broadcast.delegateVestingShares(wifs, senders, pols, vvv+' SHARES', function(err, result) {
  console.log(err, result);
   if(result) { 
 
  document.getElementById('urras').innerHTML = "<div class='yeah'><h2>УСПЕШНО!</h2></div>";
   } else{ 
   document.getElementById('urras').innerHTML = "<div class='nono'><h2>ОШИБКА!</h2></div>";
  }
    setTimeout(function(err, result) { 
	   document.getElementById('urras').innerHTML = "<div class='err'></div>";                        
		}, 7000 ); 
});

});


var BUTTSS = document.querySelector("a.transss");
BUTTSS.addEventListener("click", function( event ) {
var  wifss= document.getElementById("wifss").value;
var  senderss= document.getElementById("senderss").value.toLocaleLowerCase().trim();
var  moness= document.getElementById("moness").value;
var bbb = Math.round(moness*1000)/1000;
var vvv= bbb.toFixed(3)

viz.broadcast.transferToVesting(wifss, senderss, senderss, vvv+' VIZ', function(err, result) {
  console.log(err, result);
   if(result) { 
 
  document.getElementById('urrass').innerHTML = "<div class='yeah'><h2>УСПЕШНО!</h2></div>";
   } else{ 
   document.getElementById('urrass').innerHTML = "<div class='nono'><h2>ОШИБКА!</h2></div>";
  }
    setTimeout(function(err, result) { 
	   document.getElementById('urrass').innerHTML = "<div class='err'></div>";                        
		}, 7000 ); 
});

});