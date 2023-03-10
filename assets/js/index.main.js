"use strict";
$(document).ready(function () {
  var t = $(".accordion > li > ul").hide();
  $(".accordion > li > a").click(function () {
    var a = $(this).next();
    return (
      a.hasClass("active") ||
        (t.removeClass("active").slideUp(), a.addClass("active").slideDown()),
      !1
    );
  }),
    $(".product-links-wap a").click(function () {
      var t = $(this).children("img").attr("src");
      return $("#product-detail").attr("src", t), !1;
    }),
    $("#btn-minus").click(function () {
      var t = $("#var-value").html();
      return (
        (t = "1" == t ? t : t - 1),
        $("#var-value").html(t),
        $("#product-quanity").val(t),
        !1
      );
    }),
    $("#btn-plus").click(function () {
      var t = $("#var-value").html();
      return t++, $("#var-value").html(t), $("#product-quanity").val(t), !1;
    }),
    $(".btn-size").click(function () {
      var t = $(this).html();
      return (
        $("#product-size").val(t),
        $(".btn-size").removeClass("btn-secondary"),
        $(".btn-size").addClass("btn-success"),
        $(this).removeClass("btn-success"),
        $(this).addClass("btn-secondary"),
        !1
      );
    });
});
