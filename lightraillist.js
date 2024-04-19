var lrstop = {
  zone1: ["Tuen Mun Ferry Pier 屯門碼頭", "Melody Garden 美樂", "Butterfly 蝴蝶", 
          "Light Rail Depot 輕鐵車廠", "Lung Mun 龍門", "Siu Hei 兆禧",
          "Tuen Mun Swimming Pool 屯門泳池", "Goodview Garden 豐景園", 
          "Siu Lun 兆麟", "Sam Shing 三聖"], 
  zone1data: [1, 10, 15, 20, 30, 240, 250, 260, 265, 920], 
  zone2: ["Tsing Shan Tsuen 青山村"], 
  zone2data: [40]
};
function zonechange() {
  alert("changed");
  var precont = "<option selected="true" disabled="true" value=0>Choose a stop 選擇車站</option>";
  alert(lrstop[currzone + "data"][0]);
  write(precont);
}
function write(cont) {
  document.getElementById("lightrailstop").innerHTML = cont;
}
function addstopdata(apivalue, stopdisplayname) {
  　alert("<option value=" + apivalue + ">" + stopdisplayname + "</option>");
}
