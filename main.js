document.addEventListener("animationstart", insertDivContent, false);

if (document.readyState ==='complete'){
}



function insertDivContent(){
  alert("HELLO");
  table = document.querySelectorAll("table.CG_list.searchList")[0];
  div = table.getElementsByClassName("sectionExpandColumn");
  alert(div.length);
  
  var button = document.createElement("a");
  button.setAttribute("class", "sectionExpand collapsibleCriteria");
  button.innerHTML = "Discussion";

  for (var i=0; i<div.length; i++){
    div[i].appendChild(button.cloneNode(true));
  }
}