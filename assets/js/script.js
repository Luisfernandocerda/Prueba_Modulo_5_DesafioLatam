$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop() + 120;
        var os = $("body>header").offset().top;
        var ht = $("body>header").height();
        if ((scroll) > os + ht) {
            $('.navbar').removeClass('antes');
            $('.navbar').addClass('despues');
        } else {
            $('.navbar').removeClass('despues');
            $('.navbar').addClass('antes');
        };

    });
    $("#navbarSupportedContent").on('show.bs.collapse', function () {
        $('a.nav-link').click(function () {
            $("#navbarSupportedContent").collapse('hide');
        });
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    $("a").click(function(){
        var gato = this.hash

        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top
            },
            2000
        );
    });
    /*     $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        }); */
});