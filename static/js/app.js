var dropZone = $('#Dropsection');
function DragOver(e) {
    e.stopPropagation();
    e.preventDefault();
    dropZone.addClass('is-animated')
}
function FileSelect(e) {
    console.log(e)
    var files = dropZone.files;
    var file;
    e.stopPropagation();
    e.preventDefault();
    dropZone.removeClass('is-animated')
    for(var i = 0; i< files.length; i++){
        
        file = files.item(i);
        file = files[i];
        alert(file.name);
    }
} 

//Listeners
dropZone.bind('dragover', DragOver);
dropZone.bind('drop', FileSelect);