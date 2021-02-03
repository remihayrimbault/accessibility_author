var page = 0;

$('.arr-r').click(function() {
    page ++;

    if (page ==1){
        $('.arr-l').css({
            opacity : '100%',
            transition : '1s',
        });
        $('.presentation').css({
            transform : 'translateX(-1200px)',
            transition : '2s ease-in-out',
        });
        $('.romans').css({
            transform : 'translateX(0px)',
            transition : '2s ease-in-out',
        });
        $('.creations').css({
            transform : 'translateX(1300px)',
            transition : '2s ease-in-out',
        });
        $('.arr-r > p').text("Créations");
        $('h2').text("Romans");
        $('h2').transition(5000);
    }

    if (page ==2){
        $('.arr-r').css({
            opacity : '0%',
            transition : '1s',
        });
        $('.presentation').css({
            transform : 'translateX(-2400px)',
            transition : '3s',
        });
        $('.romans').css({
            transform : 'translateX(-1400px)',
            transition : '2s ease-in-out',
        });
        $('.creations').css({
            transform : 'translateX(0px)',
            transition : '2s ease-in-out',
        });
        $('.arr-l > p').text("Romans");
        $('h2').text("Créations");
        $('h2').transition(5000);
    }
});

$('.arr-l').click(function() {
    page = page -1;

    if (page ==1){
        $('.arr-r').css({
            opacity : '100%',
            transition : '1s',
        });
        $('.presentation').css({
            transform : 'translateX(-1200px)',
            transition : '2s ease-in-out',
        });
        $('.romans').css({
            transform : 'translateX(0px)',
            transition : '2s ease-in-out',
        });
        $('.creations').css({
            transform : 'translateX(1300px)',
            transition : '2s ease-in-out',
        });
        $('.arr-l > p').text("Accueil");
        $('.arr-r > p').text("Créations");
        $('h2').text("Romans");
        $('h2').transition(5000);
    }

    if (page ==0){
        $('.arr-l').css({
            opacity : '0%',
            transition : '1s',
        });
        $('.presentation').css({
            transform : 'translateX(0)',
            transition : '2s ease-in-out',
        });
        $('.romans').css({
            transform : 'translateX(1400px)',
            transition : '2s ease-in-out',
        });
        $('.creations').css({
            transform : 'translateX(2600px)',
            transition : '2s ease-in-out',
        });
        $('.arr-r > p').text("Romans");
        $('h2').text("Lloris Jubiste");
        $('h2').transition(5000);
    }
});