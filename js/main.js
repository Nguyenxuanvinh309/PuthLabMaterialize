$(document).ready(function(){
  InitMaterialize();
  ScrollBlock();
});

function InitMaterialize() {
  if($('.sidenav').length > 0) $('.sidenav').sidenav();
  if($('.parallax').length > 0) $('.parallax').parallax();
  if($('.modal').length > 0) $('.modal').modal();
}

function ScrollBlock() {
	$('.link-block').click(function(){
		var blockId = $(this).attr('href');
		$('html,body').animate({
   		scrollTop: $(blockId).offset().top
  	});
	});
}