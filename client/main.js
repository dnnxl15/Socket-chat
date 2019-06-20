var socket = io.connect('http://192.168.1.135:3000',  {'forceNew': true});

socket.on('messages', function(data){
    cpnsole.log(data);

});