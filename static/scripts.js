$('#step1Yes').on('click', (evt) => {
  evt.preventDefault();
  $('#step1').slideUp("slow");
  $('#step2').fadeIn("slow");
  $('#progress').css("width", "16%")
})

$('#step2Relationships').on('click', (evt) => {
  evt.preventDefault();
  $('#step2').slideUp("slow");
  $('#step3').fadeIn("slow");
  $('#progress').css("width", "24%")
})

$('#step3Family').on('click', (evt) => {
  evt.preventDefault();
  $('#step3').slideUp("slow");
  $('#step4').fadeIn("slow");
  $('#progress').css("width", "32%")

})

$('#step4Weekly').on('click', (evt) => {
  evt.preventDefault();
  $('#step4').slideUp("slow");
  $('#step5').fadeIn("slow");
  $('#progress').css("width", "40%")

})

$('#step5Free').on('click', (evt) => {
  evt.preventDefault();
  $('#step5').slideUp("slow");
  $('#step6').fadeIn("slow");
  $('#progress').css("width", "48%")

})

$('#step6Weekly').on('click', (evt) => {
  evt.preventDefault();
  $('#step6').slideUp("slow");
  $('#step7').fadeIn("slow");
  $('#progress').css("width", "56%")

})

$('#step7Mend').on('click', (evt) => {
  evt.preventDefault();
  $('#questions').slideUp("slow");
  $('#results').fadeIn("slow");
  $('#progress').css("width", "64%")

})
