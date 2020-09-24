/*Javascript to download all the files whose links are provided in href attribute of anchor tag*/
/* How to use : 
   On Chrome, Open developers tools -> Console -> paste the below code */
   
var links=document.getElementsByTagName('a'), hrefs = [];
for (var i = 0; i<links.length; i++)
{   
   hrefs.push(links[i].href); 
 
}

for (var i = 0; i < hrefs.length; i++) {
const xhr = new XMLHttpRequest();
xhr.open('GET', hrefs[i], true); xhr.responseType = "blob";
xhr.setRequestHeader("Access-Control-Allow-Origin", "*"); 
xhr.onload=function(){
           if (this.status == 200) { console.log(this.response); var binaryData = []; binaryData.push(this.response);
                 var file = window.URL.createObjectURL(new Blob(binaryData, {type: "application/pdf"})); 
                 var a = document.createElement('a');
                 a.href = file;
                 a.download = "PayStatement.pdf";
                 document.body.appendChild(a);
                 a.click();
                 document.body.removeChild(a);
            }
   };  xhr.send();
}
