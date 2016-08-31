// Author : Ankur Loriya <ankur.loriya@gmail.com><about.me/ankurloriya>

var constants = {
    id: {
        stageImage: "stage-img"
    }
}

$(document).ready(function () {

});

function loadImage(e) {
    debugger;
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var f = e.target.files[0];

        if (f) {
            var r = new FileReader();
            r.onload = function (e1) {
                var contents = e1.target.result;
                //alert("Got the file.n" + "name: " + f.name + "n" + "type: " + f.type + "n" + "size: " + f.size + " bytesn" + "starts with: " + contents.substr(1, contents.indexOf("n")));
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

function loadImageInDom(imgPath, domElement) {


}

function validateImage() {

}