  var dropZone = document.getElementById('drop_section');
  //YouTube API variables
  var url = 'http://gdata.youtube.com/feeds/api/videos';
  var result = $('#vidlyrics');
function start (template) {
  $('#recent_info').prepend(template);
}
function DragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    $('#drop_section').addClass('dragover');
}
function FileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.dataTransfer.files; 
    for (var i = 0,f; f = files[i]; i++) {
      var nombre_cancion;
      nombre_cancion = f.name;
    }
      nombre_cancion =  nombre_cancion.replace (/.mp3/g, "");
      nombre_cancion =  nombre_cancion.replace (/.m4a/g, "");
      var query = nombre_cancion;
      var template= '<div class="song" id="song">\
                          <figure class="img_recent margin_top">\
                                 <img src="images/recent.jpg" alt="">\
                          </figure> \
                          <p>' + nombre_cancion+'</p>\
                      </div>';
    $('#titulo').prepend(nombre_cancion);
    $('#drop_section').removeClass('dragover');
    start(template);
    submit(query);
} 
//YouTube API
function submit(query) {
    $.ajax({
        data : {
            alt: 'json',
            q: query,
            'max-results': 1
        },
        url: url
    }).done( callback );
}
function videoTemplate(video) {
    var embed = video.media$group.media$content[0].url.split('?')[0].replace('/v/','/embed/')
    var html = "";
    html += '<article>';
    html += ' <div><iframe src="' + embed + '" frameborder="0" allowfullscreen></iframe></div></article>';
    return html;
}
function callback(res) {
    res = res.feed.entry;
    var html = '';
    for (var i=0; i<res.length; i++) {
        html += videoTemplate(res[i]);
    }
    result.html(html);
}
//Animations
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
      opacity: 0.8,
      transition: '1s all ease'
    };
    $('#mail').css(css)
}

$(document).on('ready',start);
$('#recent_drags').on('click', muestra);
$('#email').on('click', show);
dropZone.addEventListener('dragover', DragOver, false);
dropZone.addEventListener('drop', FileSelect,false);