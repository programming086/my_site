if(typeof(stlib)=="undefined"){var stlib={}}var switchTo5x=true;stlib.shareEgg={frameRate:20,createEgg:function(o,h,p){stlib.shareEgg.instances[o]=[0,p,null,stlib.shareEgg.generateAnimationFrames(h,p)];var t=document.getElementById(o);var g="shareEggLeftWrapper";var q="shareEggRightWrapper";var a="shareEggShadow";if(typeof(p)=="undefined"||typeof(p.theme)=="undefined"||p.theme=="shareegg"){}else{stlib.scriptLoader.loadCSS("http://w.sharethis.com/gallery/shareegg/"+p.theme+".css",function(){});g+=" "+g+"-"+p.theme;q+=" "+q+"-"+p.theme;a+=" "+a+"-"+p.theme}var w=55;var c=40;var k=13;var v=10;var m=22;var f=10;var l=w;var j=(l+(c*h.length));t.style.width=(j+k+m+50)+"px";var b=document.createElement("div");b.setAttribute("id",o+"_shareEggLeftWrapper");b.setAttribute("class",g);b.className=g;b.innerHTML="&nbsp;";t.appendChild(b);var n=document.createElement("img");n.setAttribute("id",o+"_shareEggLeftOval");n.setAttribute("class","shareEggLeftOval");n.className="shareEggLeftOval";if(typeof(p)=="undefined"||typeof(p.theme)=="undefined"||p.theme=="shareegg"){n.setAttribute("src","http://w.sharethis.com/gallery/shareegg/oval.png")}else{n.setAttribute("src","http://w.sharethis.com/gallery/shareegg/"+p.theme+"oval.png");n.setAttribute("class","shareEggLeftOval "+p.theme+"Oval");n.className="shareEggLeftOval "+p.theme+"Oval"}t.appendChild(n);var s=document.createElement("div");s.setAttribute("id",o+"_shareEggContent");s.setAttribute("class","shareEggContent");s.className="shareEggContent";for(var u=0;u<h.length;u++){var r=document.createElement("span");r.setAttribute("id",o+"_"+h[u]);r.setAttribute("class","shareEggChiclet st_"+h[u]+"_custom");r.className="shareEggChiclet st_"+h[u]+"_custom";if(typeof(p)!="undefined"&&typeof(p.theme)!="undefined"&&p.theme=="bowtie"){r.setAttribute("class","shareEggChiclet shareEggChiclet2 st_"+h[u]+"_custom");r.className="shareEggChiclet shareEggChiclet2 st_"+h[u]+"_custom"}p.url?r.setAttribute("st_url",p.url):null;p.title?r.setAttribute("st_title",p.title):null;p.summary?r.setAttribute("st_summary",p.summary):null;p.img?r.setAttribute("st_img",p.img):null;r.style.backgroundImage="url(http://w.sharethis.com/images/"+h[u]+"_32.png)";var d=document.createElement("div");d.setAttribute("class",a);d.className=a;r.appendChild(d);s.appendChild(r)}t.appendChild(s);n=document.createElement("img");n.setAttribute("id",o+"_shareEggRightOval");n.setAttribute("class","shareEggRightOval");n.className="shareEggRightOval";if(typeof(p)=="undefined"||typeof(p.theme)=="undefined"||p.theme=="shareegg"){n.setAttribute("src","http://w.sharethis.com/gallery/shareegg/oval.png")}else{n.setAttribute("src","http://w.sharethis.com/gallery/shareegg/"+p.theme+"oval.png");n.setAttribute("class","shareEggRightOval "+p.theme+"Oval");n.className="shareEggRightOval "+p.theme+"Oval"}t.appendChild(n);var e=document.createElement("div");e.setAttribute("id",o+"_shareEggRightWrapper");e.setAttribute("class",q);e.className=q;e.innerHTML="&nbsp;";t.appendChild(e);t.onmouseover=function(){stlib.shareEgg.open(o)};t.onmouseout=function(){stlib.shareEgg.close(o)}},open:function(b){var c=document.getElementById(b);var a=stlib.shareEgg.instances[b];a[1].open=true;if(a[2]==null){a[2]=setInterval('stlib.shareEgg.update("'+b+'")',stlib.shareEgg.frameRate)}},close:function(b){var c=document.getElementById(b);var a=stlib.shareEgg.instances[b];a[1].open=false;if(a[2]==null){a[2]=setInterval('stlib.shareEgg.update("'+b+'")',stlib.shareEgg.frameRate)}},update:function(d){var b=stlib.shareEgg.instances[d];var a=b[1].open?1:-1;var e=b[0]+a;b[0]=e;if(e<0){clearInterval(b[2]);b[2]=null;b[0]=0}else{if(e>=b[3].length){clearInterval(b[2]);b[2]=null;b[0]=b[3].length-1}else{var f=b[3][e];for(place in f){for(realKey in f[place]){var c=document.getElementById(d+place);c.style[f[place][realKey][0]]=f[place][realKey][1]}}}}},generateAnimationFrames:function(q,l){var k=[];var o=10;var s=55;var a=40;var e=13;var p=10;var h=22;var c=10;var g=s;var d=(g+(a*q.length));var j=[];var r=false;while(s<d){var f=(s-g)/d;j=[];j._shareEggRightWrapper=[];j._shareEggRightWrapper.push(["left",s+(h*f)+"px"]);j._shareEggRightOval=[];j._shareEggRightOval.push(["left",(s+(h*f)-(c*f)+3)+"px"]);j._shareEggRightOval.push(["width",(12*f)+"px"]);j._shareEggLeftWrapper=[];j._shareEggLeftWrapper.push(["left",(0-(p*f))+"px"]);j._shareEggLeftOval=[];j._shareEggLeftOval.push(["left",(54-(4*f)-(p*f))+"px"]);j._shareEggLeftOval.push(["width",(10*f)+"px"]);if(typeof(l)!="undefined"&&typeof(l.theme)!="undefined"&&l.theme=="bowtie"){r=true}for(var n=0;n<q.length;n++){var b=(s-55)/q.length;j["_"+q[n]]=[];var m=((n*b)+(e*f)-(10*(1-f)));j["_"+q[n]].push(["left",m+"px"]);if(r){if(m>0){j["_"+q[n]].push(["display","block"])}else{j["_"+q[n]].push(["display","none"])}}}k.push(j);s+=o}return k},instances:{}};