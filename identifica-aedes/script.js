var loadFile = function(event) {
	var image = document.getElementById('img');
	image.src = URL.createObjectURL(event.target.files[0]);
  var botaoAnalisa = document.getElementById("btn-analisa");
  botaoAnalisa.style.display = "block";
};