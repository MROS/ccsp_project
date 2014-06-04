var myString = function(){/*
	<!-- Fixed navbar -->
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/views/index.html">決戰百里侯</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a href="#">首頁</a></li>
                    <li><a href="/views/info.html">各里長介紹</a></li>
                    <!-- <li><a href="#about">里長戰力</a></li> -->
                    <li><a href="/views/graph.html">各里經費圖</a></li>
                </ul>
            </div>
        </div>
    </div>
*/}.toString().slice(14,-3);

$('#myNavbar').append(myString);