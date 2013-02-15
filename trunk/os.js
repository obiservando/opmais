document.head.appendChild(document.createElement('base'))
document.getElementsByTagName('base')[0].target='_blank'
document.getElementById('header').style.display='none';
document.getElementById('footer').style.display='none';
document.getElementsByTagName('h2')[0].style.display='none';
document.getElementsByTagName('h1')[0].style.display='none';
var d=document.getElementById('wrapper').getElementsByTagName('div'), i=0; for (;i<d.length;){ if(d[i].getAttribute("class")!=null){ var i2 , a=['counts','sidebar','headSingle']; for (i2 in a){ if(d[i].getAttribute("class")==a[i2]){d[i].style.display='none';}}} i++}