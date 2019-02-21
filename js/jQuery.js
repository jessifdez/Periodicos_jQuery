$(document).ready(function(){
  $("#periodicos").click(function(){
    var valor=$("#periodicos option:selected").val();
	$("#enlace").attr("href",valor);
	$("#enlace").html("Ir a "+valor);
  });
});