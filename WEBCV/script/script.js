// event saat link di klik
$('.JQuery-scroll').on('click', function (e) {

    //ambil isi href
    var tujuan = $(this).attr('href');

    //tangkap elemen nya
    var elemenTujuan = $(tujuan);

    // console.log(elemenTujuan.offset().top);

    $('body, html').animate({
        scrollTop: elemenTujuan.offset().top - 80
    }, 1000, 'easeInOutExpo');

    e.preventDefault();

});

