x = 0;
y = 0;
draw_circle=""
draw_rectangle = ""
var Sr = window.webkitSpeechRecognition;
var rec = new Sr;
function start(){
    document.getElementById('status').innerHTML = "System is listening please speak";
    rec.start();
}
rec.onresult = function(event){
    console.log(event);
    myspeech = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = 'Speech has been recognized'+myspeech;
    if(myspeech == 'circle'){
        x = Math.floor(Math.random()*800);
        y = Math.floor(Math.random()*500);
        document.getElementById("status").innerHTML = "drawing started";
        draw_circle = "set";
    }
    if(myspeech == 'rectangle'){
        x = Math.floor(Math.random()*800);
        y = Math.floor(Math.random()*500);
        document.getElementById("status").innerHTML = "drawing started";
        draw_rectangle = "set";
    }
}
function setup(){
    canvas = createCanvas(900, 600);
}
function draw(){
    if(draw_circle == "set"){
        r = Math.floor(Math.random()*100);
        circle(x, y, r);
        document.getElementById("status").innerHTML = "circle completed";
        draw_circle = "";
    }
    if(draw_rectangle == "set"){
        h = Math.floor(Math.random()*100);
        w = Math.floor(Math.random()*100);
        rect(x, y, w, h);
        document.getElementById("status").innerHTML = "rectangle completed";
        draw_rectangle = "";
    }
}