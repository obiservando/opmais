document.head.appendChild(document.createElement('base'))
document.getElementsByTagName('base')[0].target='_blank'
document.getElementById('header').style.display='none';
document.getElementById('footer').style.display='none';
document.getElementsByTagName('h2')[0].style.display='none';
document.getElementsByTagName('h1')[0].style.display='none';
var d=document.getElementById('wrapper').getElementsByTagName('div'), i=0; for (;i<d.length;){ if(d[i].getAttribute("class")!=null){ var i2 , a=['counts','sidebar','headSingle']; for (i2 in a){ if(d[i].getAttribute("class")==a[i2]){d[i].style.display='none';}}} i++}

function listagem(this) {
this.contentWindow.document.getElementById('wrapper').onclick=function(){ int=setInterval(function(){var d=this.contentWindow.document.getElementById('wrapper').getElementsByTagName('img'), i=0; for (;i<d.length;){ if(d[i].getAttribute("class")!=null){ if(d[i].getAttribute("class").indexOf ('user-7268')!=-1){d[i].parentNode.parentNode.style.display='none';}} i++}},1000); int2=setTimeout(function(){int=clearInterval(int);},10000);}

this.contentWindow.document.head.appendChild(document.createElement('base'));
this.contentWindow.document.getElementsByTagName('base')[0].target='_blank'
this.contentWindow.document.getElementById('header').style.display='none';
this.contentWindow.document.getElementById('footer').style.display='none';
this.contentWindow.document.getElementsByTagName('h2')[0].style.display='none';
this.contentWindow.document.getElementsByTagName('h1')[0].style.display='none';
var d=this.contentWindow.document.getElementById('wrapper').getElementsByTagName('div'), i=0; for (;i<d.length;){ if(d[i].getAttribute("class")!=null){ var i2 , a=['counts','sidebar']; for (i2 in a){ if(d[i].getAttribute("class")==a[i2]){d[i].style.display='none';}}} i++}

}