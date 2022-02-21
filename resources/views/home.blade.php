<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
		<meta charset="utf-8">
        <meta name="author" content="Jake Oliger">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<!-- Important pre-load scripts -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <title>JakeOliger.com</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet">

        <!-- Styles -->
        <link href="{{ url('style/style.css') }}" rel="stylesheet">
        <link rel="icon" type="image/png" href="{{ url('images/TODO.png') }}">
    </head>
    <body>
        <div id="app-root"></div>
		<div id="gray-cover"></div>

        <!-- React -->
        <script src="{{ asset('js/manifest.js') }}"></script>
        <script src="{{ asset('js/vendor.js') }}"></script>
        <script src="{{ asset('js/app.js') }}"></script>
        <script>
            function closeDrawer(e) {
                $("#drawer-container").animate({
                    width: '0%'
                }, 200);
                var gc = $("#gray-cover");
                gc.animate({
                    opacity: 0
                }, 200, function(e) { gc.css('visibility', 'hidden'); });
            }
            $("#drawer-nav a").on("click", closeDrawer);
            $("#close-drawer, #gray-cover").on("click", closeDrawer);
            $("#open-drawer").on("click", function(e) {
                $("#drawer-container").animate({
                    width: '75%'
                }, 200);
                var gc = $("#gray-cover");
                gc.css('visibility', 'visible');
                gc.animate({
                    opacity: 1
                }, 200);
            });
        </script>
    </body>
</html>
