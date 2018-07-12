function loadHTML(file){
	if (file != null) {
		console.log(file);
		$.ajax({
			type: "POST",
			url: "ajax/"+file+".php",
			success: function(html){
				$(".slide__wrap").html(html);

				$('.button--step-switcher').on('click', function(e){
					var target = $(this).data('step'),
						stepNumber = target.charAt(target.length - 1),
						stepCaption = null;

					loadHTML(target);
					if (stepNumber > 1) {
						$('.slide__aside').removeClass('aside--non-active')
					} else {
						$('.slide__aside').addClass('aside--non-active')
					}
					$('.currentStep').html(stepNumber)

					e.preventDefault();
				})

			},
			error: function (xhr, ajaxOptions, thrownError) {
				alert("loadHTML("+file+"): " + xhr.status + "\n" + thrownError);
			}
		});
	} else {
		console.log('Не указано имя файла! ' + "ajax/"+file+".php")
	}
	return false;
}


$(document).ready(function() {
	loadHTML("step1");
})
