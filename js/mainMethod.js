window.mainMethod ? "" : window.mainMethod = new MainMethod();

function MainMethod() {
    let that = this;

    this.tabList = function () {
        $(".tabList li").on("click", function () {
            $(this).addClass("current").siblings().removeClass("current");
            $(".header>div").eq($(this).index()).addClass("current").siblings().removeClass("current")
        })
    }
}