"use strict";
$(document).ready(function(a){
    a(function(){
        var e,o,s;
        return a("ul.navbar-nav li a[href*=#]").click(function(){
            var e,o;
            return location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname&&(e=a(this.hash),
            (e=e.length&&e||a("[name="+this.hash.slice(1)+"]")).length)?(o=e.offset().top-98,
            a("html,body").animate({
            scrollTop:o
            },1e3),!1):void 0
        }),
        s=window.location.href.split("#"),
        window.location.href[1]&&(e=a("#"+s[1])).length?(o=e.offset().top-0,
        a("html,body").animate({
            scrollTop:o
        },1e3),!1):void 0
    }),
    a(".slider_intro").slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows:!1,
        fade:!0,
        autoplay:!0,
        autoplaySpeed:4e3
    }),
    a(".slider_intro--about").slick({
        dots:!0,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:!1,fade:!0,
        autoplay:!0,
        autoplaySpeed:4e3
    }),
    a(".slider_about").slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows:!1,
        autoplay:!0,
        eautoplaySpeed:4e3
    }),
    a(document).on("scroll",function(){
        a(document).scrollTop()>50?(a("#header").addClass("navbar_onscroll"),
        a("#header").addClass("fixed-top")):(a("#header").removeClass("navbar_onscroll"),
        a("#header").removeClass("fixed-top"))
    }),
    a(document).on("scroll",function(){
        a(document).scrollTop()>50?a("#logo").addClass("logo_size"):a("#logo").removeClass("logo_size")
    }),
    a("#submit").click(function(){
        var e=a("#name").val(),
            o=a("#email").val(),
            s=/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/,
            l=a("#asunto").val(),
            r=a("#message").val();
        
        if(""!=e&&""!=o&&""!=l&&""!=r){
            a(".message + .error").removeClass("i");
            var t="&name="+e+"&email="+o+"&asunto="+l+"&message="+r;
            return a.ajax({
                method:"Post",
                url:"contact.php",
                dataType:"json",data:t
            }).done(function(e){
                e.success?(a(".alerta p").fadeIn("slow"),
                a(".alerta p").html("Muchas Gracias por contáctarnos, pronto nos estaremos comunicando contigo."),
                a("#name").val(""),
                a("#email").val(""),
                a("#asunto").val(""),
                a("#message").val("")):(a(".alerta p").fadeIn("slow"),
                a(".alerta p").html("Error, intente más tarde por favor."))
            }),!1
        }
        return""==e?(a(".name + .error").addClass("i"),
                    a("#name").focus(),
                    !1):(a(".name + .error").removeClass("i"),
                    ""!=o&&s.test(o)?(a(".email + .error").removeClass("i"),
                    ""==l?(a(".asunto + .error").addClass("i"),
                    a("#asunto").focus(),
                    !1):(a(".asunto + .error").removeClass("i"),
                    ""==r?(a(".message + .error").addClass("i"),
                    a("#message").focus(),
                    !1):void a(".message + .error").removeClass("i"))):(a(".email + .error").addClass("i"),
                    a("#email").focus(),!1))
    })
}),AOS.init();
//# sourceMappingURL=custom.js.map
