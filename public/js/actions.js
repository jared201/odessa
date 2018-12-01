function submitStock() {
  $('.modal').toggleClass('is-active');
}

$(document).ready(() => {
    $('button').click(function(){
        $('button').toggleClass('active');
        $('.title').toggleClass('active');
        $('nav').toggleClass('active');
    });
});
