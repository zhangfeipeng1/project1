$(function () {
    /**** **** 点击图片实现动态显示 **** ***/
    $(".listDivD  .animated").click(function () {
        var i = $(this).index(); 
        var deleteDiv = $(".classHiddenDiv");
        deleteDiv.show(500);
        $(".titleDivH1>h1").eq(i).slideDown().siblings().stop(true).hide(500);
        $(".flex_div>div").eq(i).slideDown().siblings().stop(true).hide(500);
        /******** 点击左箭头实现动态显示 *******/
        $(".boxLeftDiv").click(function () {
            if(i>=1) {
                i--;
                $(".titleDivH1>h1").eq(i).show(500).siblings().stop(true).hide(500);
                $(".flex_div>div").eq(i).show(500).siblings().stop(true).hide(500);
            }
        })
        /******** 点击右箭头实现动态显示 *******/
        $(".boxRightDiv").click(function () {
            if(i<=8) {
                i++;
                $(".titleDivH1>h1").eq(i).show(500).siblings().stop(true).hide(500);
                $(".flex_div>div").eq(i).show(500).siblings().stop(true).hide(500);
            }
        })
        /******** 点击X退出 *******/
        $(".boxDeleteDiv").click(function(){
            deleteDiv.hide(500);
        })
        var xx1 = $(".header").outerHeight();
        var xx2 = $("#carousel-example-generic").outerHeight();
        $("html,body").animate({
            scrollTop:xx1+xx2+"px"
        });
    })
    
    /**** *** ***** 实现数字的滚动 *** ** ** **** ***/
    window.onload = function (){
    }; 
    /**************** 固定部分 ***********************/
    $(".abtn1").click(function(){
        $(".kDiv").css("right",-63+'%');
        $("#p1>a").click(function(){
            $(".kDiv").css("right",-609+'%')
        })
    })
    $(".abtn2").click(function(){
        $("html,body").animate({
            scrollTop:0+"px"
        })
    })
    $(".abtn3").click(function(e){
        var divnone = $(".fixed>ul>li .ibtn").css("display");
        if(divnone=='none'){
            $(".fixed>ul>li .ibtn").show(300);
        }else{
            $(".fixed>ul>li .ibtn").hide(300);
        }
    })
    $(".fixed .abtn0").click(function(){
        $(".xiaoyuandian").css("display",'none');
        $(".tanDiv .xDiv").show(300);
        $(".xDivSpan a").click(function(e){
            e.preventDefault();
            $(".tanDiv .xDiv").hide(300);
            $(".xiaoyuandian").css("display",'block');
        })
    })



    /* *********** 实现滚动到指定位置执行 **** ** *** * ****/
    $(".fuwuziti").show(700);
    // console.log($(".fuwuziti"));
    var s = 0 ;
    /***************插件**************** */
    var s = 0 ;
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        var ii = 250;
        var yy = $(".fwa2").outerHeight();
        console.log(yy+"_"+top);
        console.log(600-420);
        /*服务*/
        if(top>=0){
            $(".listDivD").show(800);
            $(".listDivD>div:eq(0)").addClass("slideInUp");
            $(".listDivD>div:eq(1)").addClass("slideInUp");
            $(".listDivD>div:eq(2)").addClass("slideInUp");
            $(".listDivD>div:eq(3)").addClass("slideInUp");
            $(".listDivD>div:eq(4)").addClass("slideInUp");
            $(".listDivD>div:eq(5)").addClass("slideInUp");
            $(".listDivD>div:eq(6)").addClass("slideInUp");
            $(".listDivD>div:eq(7)").addClass("slideInUp");
            $(".listDivD>div:eq(8)").addClass("slideInUp");
        }
        /*项目*/
        if(top>=359 || top>=346){
            $(".listProText").show();
            $(".listProText>div").addClass("bounceInUp");
            $(".listProText>ul").addClass("bounceInUp");
        }
        if(top>=455){
            $(".listProPicText").show();
            $(".listProPicText>div:eq(0)").addClass("fadeInUpBig");
            $(".listProPicText>div:eq(1)").addClass("fadeInUpBig");
            $(".listProPicText>div:eq(2)").addClass("fadeInUpBig");
            $(".listProPicText>div:eq(3)").addClass("fadeInUpBig");
            
            $(".listProPicText>div:eq(4)").addClass("fadeInUpBig");
            $(".listProPicText>div:eq(5)").addClass("fadeInUpBig");
            $(".listProPicText>div:eq(6)").addClass("fadeInUpBig");
            $(".listProPicText>div:eq(7)").addClass("fadeInUpBig");
        }
        /**关于我们* */
        if(top>=1545 || top>=872 || top>=851){
            $(".GuanYuDiv").show();
            $(".GuanYuDiv>div:eq(0)").addClass("slideInLeft");
            $(".GuanYuDiv>div:eq(1)").addClass("slideInRight");
        }
        /**数字 */
        if(top>=2047  || top>=1306 || top>=1285){
            $(".GuanYuShuZi").show();
            $(".GuanYuShuZi>div:eq(0)").addClass("bounceInUp");
            $(".GuanYuShuZi>div:eq(1)").addClass("bounceInUp");
            $(".GuanYuShuZi>div:eq(2)").addClass("bounceInUp");
            $(".GuanYuShuZi>div:eq(3)").addClass("bounceInUp");
            if(s<=1){
            var html1=parseInt($(".numberde1").html());
            var i=0;
            var timer=setInterval(function() {
                i+=4;
                $(".numberde1").html(i);
                if (i == html1) {
                    clearInterval(timer);
                }
            },1);
            var html2=parseInt($(".numberde2").html());
            var l = 0;
            var timer1=setInterval(function() {
                l+=1;
                $(".numberde2").html(l);
                if (l == html2) {
                    clearInterval(timer1);
                }
            },7);
            var html3=parseInt($(".numberde3").html());
            var n = 0;
            var timer2=setInterval(function() {
                n+=3;
                $(".numberde3").html(n);
                if (n == html3) {
                    clearInterval(timer2);
                }
            },6);
            var html4=parseInt($(".numberde4").html());
            var m = 0;
            var timer3=setInterval(function() {
                m+=12;
                $(".numberde4").html(m);
                if (m == html4) {
                    clearInterval(timer3);
                }
            },11);
        
          }
          s++;
        }
        /**团队精英* */
        if(top>=2329 || top>=1800 || top>=1755){
            $(".TuanDuiDiv").show();
            $(".TuanDuiDiv>div").addClass("bounceInUp");
        }
        if(top>=2465 || top>=1806){
            $(".TuanDuiTitle").show();
            $(".TuanDuiTitle>div:eq(0)").addClass("bounceInUp");
            $(".TuanDuiTitle>div:eq(1)").addClass("bounceInUp");
            $(".TuanDuiTitle>div:eq(2)").addClass("bounceInUp");
            $(".TuanDuiTitle>div:eq(3)").addClass("bounceInUp");
            
            $(".TuanDuiTitle>div:eq(4)").addClass("bounceInUp");
            $(".TuanDuiTitle>div:eq(5)").addClass("bounceInUp");
            $(".TuanDuiTitle>div:eq(6)").addClass("bounceInUp");
            $(".TuanDuiTitle>div:eq(7)").addClass("bounceInUp");
        }
        /**新闻 */
        if(top>=3093 || top>=3001 || top>=1891){
            $(".NewsDiv").show();
            $(".NewsUl").show();
            $(".NewsDiv>div").addClass("bounceInUp");
            $(".NewsUl>ul").addClass("bounceInUp");
        }
        if(top>=3203 || top>=3105){
            $(".NewsPicDiv").show();
            $(".NewsPicDiv>div:eq(0)").addClass("bounceInUp");
            $(".NewsPicDiv>div:eq(1)").addClass("bounceInUp");
            $(".NewsPicDiv>div:eq(2)").addClass("bounceInUp");
            $(".NewsPicDiv>div:eq(3)").addClass("bounceInUp");
            $(".NewsPicDiv>div:eq(4)").addClass("bounceInUp");
            $(".NewsPicDiv>div:eq(5)").addClass("bounceInUp");
        }
        /**合作伙伴* */
        if(top>=3795 || top>=3640){
            $(".HeZuoDiv").show();
            $(".HeZuoDiv>div").addClass("bounceInUp");
        }
        if(top>=3900 || top>=3743){
            $(".HeZuoTitle1").show();
            $(".HeZuoTitle1>div:eq(0)").addClass("bounceInUp");
            $(".HeZuoTitle1>div:eq(1)").addClass("bounceInUp");
            $(".HeZuoTitle1>div:eq(2)").addClass("bounceInUp");
            $(".HeZuoTitle1>div:eq(3)").addClass("bounceInUp");
            $(".HeZuoTitle1>div:eq(4)").addClass("bounceInUp");
            $(".HeZuoTitle1>div:eq(5)").addClass("bounceInUp");
        }
        if(top>=4282 || top>=4074){
            $(".HeZuoTitle2").show();
            $(".HeZuoTitle2>div:eq(0)").addClass("bounceInUp");
            $(".HeZuoTitle2>div:eq(1)").addClass("bounceInUp");
            $(".HeZuoTitle2>div:eq(2)").addClass("bounceInUp");
            $(".HeZuoTitle2>div:eq(3)").addClass("bounceInUp");
            $(".HeZuoTitle2>div:eq(4)").addClass("bounceInUp");
            $(".HeZuoTitle2>div:eq(5)").addClass("bounceInUp");
        }
        /*联系我们* */
        if(top>=4664 || top>=4405){
            $(".LianXiWoMen").show();
            $(".LianXiWoMen>div:eq(0)").addClass("bounceInUp");
            $(".LianXiWoMen>div:eq(1)").addClass("fadeInLeftBig");
            $(".LianXiWoMen>div:eq(2)").addClass("fadeInRightBig");
        }
    })
})