// Author : Ankur Loriya <ankur.loriya@gmail.com><about.me/ankurloriya>

var constants = {
    id: {
        stageImage: "stage-img"
    }
}

$(document).ready(function () {

});

function loadImage(e) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var f = e.target.files[0];

        //Validate file format (file extenation)
        var extenation = f.name.split('.').pop().toLowerCase();
        if (extenation !== "jpg" && extenation !== "jpeg" && extenation !== "png" && extenation !== "gif") {
            alert("Not valid file");
            return;
        }

        // Read File
        if (f) {
            var r = new FileReader();
            r.onload = function (e1) { //Load file content as URL Data
                var contents = e1.target.result;
                var img = new Image(); //Make image 
                img.onload = function () {

                    //Set size of div
                    var $stageImage = $("#" + constants.id.stageImage).css({
                        "width": this.width + "px",
                        "height": this.height + "px"
                    });
                    $stageImage.addClass("border")
                        //alert(this.width + " " + this.height);
                };
                img.src = contents;

                $("#" + constants.id.stageImage).css({
                    "background-image": "url(" + contents + ")"
                });
            }
            r.readAsDataURL(f);
        } else {
            alert('The File APIs are not fully supported by your browser.');
        }
    }
}