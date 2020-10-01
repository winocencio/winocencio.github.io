var loadFile = function(event) {
	var image = document.getElementById('img');
	image.src = URL.createObjectURL(event.target.files[0]);
  var botaoAnalisa = document.getElementById("btn-analisa");
  botaoAnalisa.style.display = "block";
};

var executeAjax = function(){
  $.ajax({
    url:'apiURL',
    success: loadResult(obj)
}); 
}

var loadResult = function(obj){
  var pMsgResult = document.getElementById("msg-result");
  pMsgResult.innerText = obj.msg;
  pMsgResult.style.display = "block";

  var image = document.getElementById('img');
	// image.src = obj.img;

  var botaoAnalisa = document.getElementById("btn-analisa");
  botaoAnalisa.style.display = "none";
}