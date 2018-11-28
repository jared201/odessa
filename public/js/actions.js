function submitStock() {
  $('.modal').toggleClass('is-active');
}

$('button').click(function(){
    $('button').toggleClass('active');
    $('.title').toggleClass('active');
    $('nav').toggleClass('active');
});