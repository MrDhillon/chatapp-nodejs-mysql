$(function(){
  $('button').on('click',function(){
    console.log($('input').val());
    socket.emit('message',$('input').val());
    $('input').val('');
    return false;
  });
});
