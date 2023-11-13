  
function preload() {

}

function setup() {
    canvas= createCanvas(740,550)
    canvas.position(395,300)
    video = createCapture(VIDEO)
    video.hide()
    tint_colour = ""
}

function draw() {
    image(video,0,0,740,550)
    tint(tint_colour)
}

function tint_img() {
    if (tint_colour == "poo"){
        tint_colour = "brown"
    } 
    else if (tint_colour == "wee") {
        tint_colour = "yellow"
       
    }
    else {
        tint_colour = document.getElementById("colour_input").value 

    }
    document.getElementById("colour_input").value = ""
}

function take_snapshot() {
    save("img.png")

}
