var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
    block_image_object=Img;
    block_image_object.scaleToWidth(600);
    block_image_object.scaleToHeight(400);
    block_image_object.set({
        top:0,
    left:0
    
    });
    canvas.add(block_image_object);

	
});
}

function playSound(){
	x.play();
}
