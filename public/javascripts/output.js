for(var clicks=document.querySelectorAll(".click"),i=0;i<clicks.length;i++)clicks[i].addEventListener("click",function(){var t=this,e={};e.state=this.childNodes[1].getAttribute("alt"),e.interestId=this.parentNode.childNodes[1].innerHTML;var s=JSON.stringify(e),i=new XMLHttpRequest;i.open("PUT","https://team04.hackardennes.com/api/interest",!0),i.setRequestHeader("Content-type","application/json; charset=utf-8"),i.onload=function(){var e=JSON.parse(i.responseText);4==i.readyState&&"200"==i.status?(t.childNodes[0].textContent=t.parentNode.getAttribute("class").toLowerCase(),t.childNodes[1].setAttribute("alt",t.parentNode.getAttribute("class")),t.childNodes[1].setAttribute("src","images/"+t.parentNode.getAttribute("class").toLowerCase()+".png"),t.parentNode.setAttribute("class",e.state)):console.log(e)},i.send(s)});function interestClicked(title){alert(title);}
