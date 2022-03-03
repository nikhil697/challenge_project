// var p1,p3,p4;
// const p2=2
// var a=(math.random())*3;
// if(a<1){
//     p1=1;
//     p3=3;
//     p4=4;
// }
// else if(a>2){
//     p1=4;
//     p3=1;
//     p4=3;
// }
// else{
//     p1=3;
//     p3=4;
//     p4=1;
// }
var s1=0,s2=0,s3=0,s4=0;
function hello(){
    const p2=2
    var a=(Math.random())*3;
    console.log(a)
    var image1=document.getElementById("p1");
    var image3=document.getElementById("p3");
    var image4=document.getElementById("p4");
    if(a<1){
        s1+=1000;
        s2+=800;
        s3+=0;
        s4 += 500;
        image1.setAttribute("src","./raja1.jpeg");
        image3.setAttribute("src","./Chor 1.jpg"); 
        image4.setAttribute("src","./SIPAHI1.jpg"); 
        document.getElementById("s1").innerHTML=s1
        document.getElementById("s2").innerHTML=s2
        document.getElementById("s3").innerHTML=s3
        document.getElementById("s4").innerHTML=s4
    }
    else if(a>2){
        s1+=0;
        s2+=800;
        s3+=500;
        s4+=1000;
        image4.setAttribute("src","./raja1.jpeg");
        image1.setAttribute("src","./Chor 1.jpg"); 
        image3.setAttribute("src","./SIPAHI1.jpg");
        document.getElementById("s1").innerHTML=s1
        document.getElementById("s2").innerHTML=s2
        document.getElementById("s3").innerHTML=s3
        document.getElementById("s4").innerHTML=s4
    }
    else{
        s1+=500;
        s2+=800;
        s3+=1000;
        s4+=0;
        image3.setAttribute("src","./raja1.jpeg");
        image4.setAttribute("src","./Chor 1.jpg"); 
        image1.setAttribute("src","./SIPAHI1.jpg");
        document.getElementById("s1").innerHTML=s1
        document.getElementById("s2").innerHTML=s2
        document.getElementById("s3").innerHTML=s3
        document.getElementById("s4").innerHTML=s4
    }
}

function tryagain(){
    var image1=document.getElementById("p1");
    var image3=document.getElementById("p3");
    var image4=document.getElementById("p4");
    image1.setAttribute("src","./istockphoto-692814410-170667a.jpg");
    image3.setAttribute("src","./istockphoto-692814410-170667a.jpg"); 
    image4.setAttribute("src","./istockphoto-692814410-170667a.jpg"); 
}
