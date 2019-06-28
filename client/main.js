var socket = io.connect('http://192.168.1.135:3000',  {'forceNew': true});

socket.on('messages', function(data){
    console.log(data);
    render(data);

});

function render(data)
{
    var html = data.map(function(message, index)
    {
        return (`
            <div class="message">
                <strong>${message.nickname}</strong> say:
                <p> ${message.text}</p>
            </div>    
        `);
    }).join(' ');
    document.getElementById('messages').innerHTML = html;
}