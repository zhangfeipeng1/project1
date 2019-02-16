$(function () {
    /**** **** 点击图片实现动态显示 **** ***/
    $(".fwa2  .animated").click(function () {
        var i = $(this).index();
        var deleteDiv = $(".classHiddenDiv"); 
        deleteDiv.show(500);
        $(".titleDivH1>h1").eq(i).slideDown().siblings().hide(500);
        $(".flex_div>div").eq(i).slideDown().siblings().hide(500);
        /******** 点击左箭头实现动态显示 *******/
        $(".boxLeftDiv").click(function () {
            if(i>=1) {
                i--;
                $(".titleDivH1>h1").eq(i).show(500).siblings().hide(500);
                $(".flex_div>div").eq(i).show(500).siblings().hide(500);
            }
        })
        /******** 点击右箭头实现动态显示 *******/
        $(".boxRightDiv").click(function () {
            if(i<=8) {
                i++;
                $(".titleDivH1>h1").eq(i).show(500).siblings().hide(500);
                $(".flex_div>div").eq(i).show(500).siblings().hide(500);
            }
        })
        /******** 点击X退出 *******/
        $(".boxDeleteDiv").click(function(){
            deleteDiv.hide(500);
        })
        $("html,body").animate({
            scrollTop:40+"px"
        });
    })
})