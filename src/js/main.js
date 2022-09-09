import $ from "./lib/lib";

// $(".active").toggle().toggle();

// $(".active").on("click", seyHello);
// $(".active").off("click", seyHello);

$("button").on("click", function () {
	$("div").eq(2).toggleClass("active");
});

$("div").click(function () {
	console.log($(this).index());
});

// console.log($("div").eq(2).find(".some"));

console.log($(".some").closest(".findme"));
