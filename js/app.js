  var dropZone = document.getElementById('drop_section');
  dropZone.addEventListener('dragover', DragOver, false);
  dropZone.addEventListener('drop', FileSelect, false);
  $('#recent_drags').on('click', muestra);
  $('#email').on('click', show);
  
  function DragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    $('#drop_section').addClass('dragover');
  }
  function FileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; 
   
    console.log(files)
    for (var i = 0,f; f = files[i]; i++) {
      var nombre_cancion = f.name;
       console.log(f)
    }
      nombre_cancion = nombre_cancion.replace (/.mp3/g, "");
      nombre_cancion = nombre_cancion.replace (/.m4a/g, "");
      
      var template = '<div class="song" id="song">\
                          <figure class="img_recent margin_top">\
                                 <img src="images/recent.jpg" alt="">\
                          </figure> \
                          <p>' +nombre_cancion+'</p>\
                      </div>';
     $('.titulo').append(nombre_cancion);
     $('#recent_info').prepend(template)
    $('#drop_section').removeClass('dragover');
  } 
 
  function muestra () {
    var song_length = $('#song').length;
    if(song_length == 0){
      alert('No haz drageado ninguna canción aun')
    }else{
      $('#recent_info').slideToggle();
    }
  }
  function show () {
    var css={
      opacity: 1
    };
    $('.mail').css(css)
  }