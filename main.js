var content = document.getElementById("faq-answercontent");
var button  = document.getElementById("show-more");

button.onclick = function(){
    
    if(content.className == "open"){
        //shrink the box
        content.className="";
        button.innerHTML=''<img src="images/more.jpg">'';
        
    }
    else{
        //expand the box
        content.classNmae = "open";
        button.innerHTML = '<img src="images/less.jpg">'
    }
    
}