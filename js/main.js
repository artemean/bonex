/*-- Popup --*/
$('.btn_js').click(function () {
	$('.overlay').fadeIn(300);
	$('#pop1').fadeIn(300);
});
$('.callback').click(function () {
	$('.overlay').fadeIn(300);
	$('#pop2').fadeIn(300);
});
$('.overlay').click(function(){
	$('.popup, .overlay').fadeOut(300);
});
/*-- End of Popup --*/

$(".explain").hide();
$( ".icon" ).hover(function() {
  $(this).siblings(".explain, .tx").toggle();
});