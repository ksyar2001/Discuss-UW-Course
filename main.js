document.addEventListener("animationstart", insertDivContent, false);
var disqus_shortname = 'uwcourse';
var disqus_identifier;
var disqus_url;
var reload = 0;


if (document.readyState ==='complete'){
}




function insertDivContent(){
  alert("HELLO");
  //insertdisqus();
  table = document.querySelectorAll("table.CG_list.searchList")[0];
  div = table.getElementsByClassName("sectionExpandColumn");
  alert(div.length);
  
  var button = document.createElement("a");
  button.setAttribute("class", "sectionExpand hide collapsibleCriteria enabled");
  button.setAttribute("id", "diqus");
  //button.setAttribute("onClick", "loaddisqus()");
  button.innerHTML = "Discussion";
  button.addEventListener('click', loaddisqus);

  for (var i=0; i<div.length; i++){
    var clone = button.cloneNode(true);
    clone.addEventListener('click', loaddisqus);
    div[i].appendChild(clone);
  }
}

function insertdisqus(){
  var dsq = document.createElement('script'); 
  dsq.type = 'text/javascript'; 
  dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  $('head').append(dsq);
}

function loaddisqus(e){
  parent_element = $(this).parent().parent();
  next_element = parent_element.next();
  console.log(next_element.attr('data-subjectcode'));
  console.log(next_element.attr('data-catalognumber'));
  
  subjectcode = next_element.attr('data-subjectcode');
  catalogcode = next_element.attr('data-catalognumber');
  
  if (window.DISQUS) {
    // Horrible, but jQuery wasn't removing the div elements fully
    $( ".comments-load" ).each(function() {
      var len = this.childNodes.length;
      for(var i = 0; i < len; i++)
      {  
        if (this.childNodes[i].tagName == "DIV") {
          this.removeChild(this.childNodes[i]);
        } 
      }
    });
    
    DISQUS.reset({
      reload: true,
      config: function () { 
        //important to convert it to string
        this.page.identifier = subjectcode.toString();    
        this.page.url = disqus_url;
      }
    });}
    
  else {
    $('tr[id=disqus]').remove();
    next_element.after('<tr id="disqus"><td colspan="8"><div id="disqus_thread"></div></td></tr>');
    disqus_identifier = catalogcode;
    disqus_url = window.location.origin + '/#!' + subjectcode;
    console.log(disqus_identifier);
    console.log(disqus_url);
    
    //var dsq = document.createElement('script'); 
    //dsq.type = 'text/javascript'; 
    //dsq.async = true;
    //dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    //$('head').append(dsq);
    //var disqus_config = function () {
    //    this.page.url = disqus_url;  // Replace PAGE_URL with your page's canonical URL variable
    //    this.page.identifier = catalogcode; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    //};
    (function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
        var d = document, s = d.createElement('script');
        
        s.src = '//uwcourse.disqus.com/embed.js';  // IMPORTANT: Replace EXAMPLE with your forum shortname!
        
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
  }
}