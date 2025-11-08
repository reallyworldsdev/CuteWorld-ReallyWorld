var faction = "%vault_group%";
var hero = "&9HERO";
var titan = "&eTITAN";
var avenger = "&aAVENGER";
var overlord = "&bOVERLORD";
 
function check() {
 
   if (faction === "hero") {
       return hero;
   }
   if (faction === "titan") {
       return titan;
   }
   if (faction === "avenger") {
       return avenger;
   }
   if (faction === "overlord") {
       return overlord;
   }
   else {
       return "%vault_rankprefix%";
   }
}
check();