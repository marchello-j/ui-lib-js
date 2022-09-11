import $ from "./lib/lib";

$("#first").on("click", () => {
	$("div").eq(1).fadeToggle(800);
});
$("[data-count='second']").on("click", () => {
	$("div").eq(2).fadeToggle(800);
});

$("button")
	.eq(2)
	.on("click", () => {
		$(".w-500").fadeToggle(800);
	});

$(".wrap").html(
	`<div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" id="dropDownMenuButton">Dropdown button</button>
      <div class="dropdown-menu" data-toggle-id="dropDownMenuButton">
          <a href="#" class="dropdown-item">Action</a>
          <a href="#" class="dropdown-item">About</a>
          <a href="#" class="dropdown-item">Lining</a>
      </div>
  </div>`
);

$(".dropdown-toggle").dropdown();

$("#trigger").click(() =>
	$("#trigger").createModal({
		text: {
			title: "Modal title",
			body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quibusdam sunt blanditiis0",
		},
		btns: {
			count: 3,
			settings: [
				["Close", ["btn-danger", "mr-10"], true],
				[
					"Save changes",
					["btn-success"],
					false,
					() => {
						alert("Данные сохранены");
					},
				],
				[
					"Another btn",
					["btn-warning", "ml-10"],
					false,
					() => {
						alert("Hello World");
					},
				],
			],
		},
	})
);
