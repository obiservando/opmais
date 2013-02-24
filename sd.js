$(document).ready(function(){

  if (location.href.length==37){
 
       th = document.getElementById('abc9').parentNode.parentNode.parentNode.parentNode;
        $(th).hide().html('<div></div><div class="text"><p class="metas"><a href="http://www.observadorpolitico.org.br/grupos/tecnologia/forum/topic/opsimple"class="author">Destaque dos Observadores</a>, <span class="data">' + new Date().toLocaleDateString() + ' &agrave;s ' + new Date().toLocaleTimeString() + '</span><a href="http://www.observadorpolitico.org.br/grupos/tecnologia/forum/topic/opsimple"class="comments"title="Destaque dos Observadores"> / vote &bull; opine &bull; ideia &bull; bate-papo</a></p></div><div class="clear"></div></div>');
        $(th.firstChild).load("http://www.observadorpolitico.org.br/grupos/comunicacao/forum/topic/votar-1 .textSingle p:first",
        function(responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                var t = $(th.firstChild).text().split('\n');
                var i;
                $(th.firstChild).html('');
                for (i in t) {
                    $(th.firstChild).append('<div></div>');
                    $(th.firstChild.childNodes[i]).load('http://www.observadorpolitico.org.br/?s=' + encodeURI(t[i]) + ' .post')
                };
                ls = th.firstChild.childNodes;
                a = 0;
                b = 0;
                $(ls).hide();
                $(ls[b]).show();
                try {
                    int = clearInterval(int)
                } catch(err) {}
                si();
                $(ls).mouseover(function() {
                    int = clearInterval(int)
                });
                $(ls).mouseout(function() {
                    si()
                });
                $(th).show();
                function si() {
                    int = setInterval(function() {
                        $(ls[b]).hide();
                        a++;
                        $(ls[a]).fadeIn("slow");
                        b = a;
                        if (a > ls.length - 2) a = -1
                    },
                    5000)
                }
            }
        })

 }
  else {
   $("#abc9").remove();
   $("a[title^='<img id=abc9']").attr("title","Votar"); 
  }
  
});
