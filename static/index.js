const socketio = io()

//los agrego en la lista y siempre queda afuera del evento click
socketio.on('message', function(data){
    $('#resultado').append('<li>'+ data.nombre + ': ' + data.chat + '</li>');
});

//desde el boton genero la acción
$('#envio').on('click', function(){

    //obtengo lo ingresado
    let nombre = $('#nombre').val();
    let chat = $('#chat').val();
    //transformo los datos en un JSON   
    let data = {
        nombre: $('#nombre').val(),
        chat: $('#chat').val()
    };
    //los envio al servidor
    socketio.emit('message', data)

    //limpio los input
    $('#nombre').val('');
    $('#chat').val('');
    
});
