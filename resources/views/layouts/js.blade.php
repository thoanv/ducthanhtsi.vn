<script src="{{asset('front-end/vendor/jquery/jquery-3.6.0.min.js')}}"></script>
<script src="{{asset('front-end/vendor/bootstrap/js/bootstrap.min.js')}}"></script>
<script src="{{asset('front-end/vendor/bootstrap/js/bootstrap.bundle.js')}}"></script>
<script src="{{asset('front-end/vendor/OwlCarousel/owl.carousel.min.js')}}"></script>
<script src="{{asset('assets/vendors/select2/select2.min.js')}}"></script>
<script src="{{asset('front-end/js/global.js')}}"></script>
<script>
    $(document).ready(function () {
        if ($("#slide_brands_all").find("div").length > 1) {
            _owlCarousel["all"] = $("#slide_brands_all").owlCarousel({
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                nav: false,
                navSpeed: 500,
                dots: false,
                margin: 55,
                smartSpeed: 1000,
                loop: true,
                items: 4,
                responsive: {
                    0: {items: 2},
                    320: {items: 2},
                    480: {items: 2},
                    640: {items: 2},
                    768: {items: 4},
                    980: {items: 4},
                    1200: {items: 4}
                }
            })
        }
        $('#sortby').on('change', function() {
            let currLoc = $(location).attr('href')
            window.location.href = currLoc;
            alert( currLoc );
        });
    });
</script>

@stack('scripts')
