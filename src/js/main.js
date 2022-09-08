import $ from "./lib/lib";

// $(".active").toggle().toggle();

// $(".active").on("click", seyHello);
// $(".active").off("click", seyHello);

$("button").on("click", function () {
	$(this).toggleClass("active");
});
