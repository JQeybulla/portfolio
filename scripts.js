function mobile_nav(){

    var obj = document.getElementById('mobile-nav');

    console.log(obj.style.display)

    if (obj.style.display != 'block'){
        obj.style.display = 'block';
    }else{
        obj.style.display = 'none';
    }
    console.log("worked")
}

var obj1 = document.getElementById('mobile-nav');
var obj2 = document.getElementById('fas');
// obj2.style.backgroundColor = 'red';

// modal 
var modal = document.getElementById("myModal");
var btn = document.getElementById('project_about');
var span = document.getElementsByClassName("close")[0];

btn.onclick = function (){
    modal.style.display = 'block';
}

span.onclick = function(){
    modal.style.display = 'none';
}

window.onclick = function (event){
    if(event.target == modal){
        modal.style.display = 'none';
    }
    if((event.target != obj1) && (event.target != obj2)){
        obj1.style.display = 'none';
    }
}