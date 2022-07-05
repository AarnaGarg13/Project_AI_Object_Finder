status = "";
function preload()
{

}
function setup()
{
    canvas = createCanvas(500 , 400)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}
function draw()
{
    image(video , 0 , 0 , 500 , 400)
}
function start()
{
    cocossd_model = ml5.objectDetector('cocossd' , modelLoaded)
    document.getElementById("status_result").innerHTML = "Detecting Objects"
    objects_name_input = document.getElementById("obj_name").value
}
function modelLoaded()
{
    console.log("THE COCOSSD MODEL HAS BEEN INITIALIZED")
    status = true;
}