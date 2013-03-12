if (document.getElementById('abc9')!=null) {
  if ($('.allBlogs').html()!=null){
 
          $(document).ready(function() {
        th = document.getElementById('abc9').parentNode.parentNode.parentNode.parentNode;
        $(th).hide().html('<div></div>');
        $(th.firstChild).load("http://www.observadorpolitico.org.br/grupos/comunicacao/forum/topic/destacando .textSingle p:first",
        function(responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                var t = $(th.firstChild).text().split('\n');
                var i;
                $(th.firstChild).html('');
                for (i in t) {
                  $(th).before($('<div></div>').load('http://www.observadorpolitico.org.br/?s=' + encodeURI(t[i]) + ' .post:last'));
                    
                };
                

                
                
            };
        });
    });
 }
  else {
   $("#abc9").remove();
   $("a[title^='<img id=abc9']").attr("title","Votar"); 
  };
  
};