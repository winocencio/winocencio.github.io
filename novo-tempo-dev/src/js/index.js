var apresentarErros = function(erros){
    erros.forEach(function(erro){
        M.toast({html: erro});
    });
};

var limparCampos = function(){
    document.querySelectorAll('input, select, textarea').forEach(function(e){
        e.value = "";
    });
};

var enviarInformacoes = function(obj){
    fecharToast();

    var erros = validarInformacoes(obj);
    console.log(erros);
    if(erros.length != 0){
        apresentarErros(erros);
        return;
    }
    
    //REQUEST DE MENTIRA
    M.toast({
            html: '<span>Formulário enviado!</span><button data-funcao=\'fecharToast\' class=\'btn-flat toast-action\'>OK</button>',
            classes: 'toast',
            displayLength: 60000
        });

    limparCampos();
};

var validarInformacoes = function(obj){
    
    var erros = [];

    if(!obj.nome.trim())
        erros.push("Nome é obrigatório");
    
    if(!obj.email.trim())
        erros.push("E-mail é obrigatório");

    if(!obj.materia.trim())
        erros.push("Matéria é obrigatória");

    if(!obj.duvida.trim())
        erros.push("Dúvida é obrigatória");

    return erros;
}

var enviar = function(){
    var formulario = {
        nome : document.getElementById('nome').value,
        email : document.getElementById('email').value,
        materia : document.getElementById('materia').value,
        duvida : document.getElementById('duvida').value
    };

    enviarInformacoes(formulario);
};

var fecharToast = function(){
    M.Toast.dismissAll();
}

var funcoes = {
    'enviar' : enviar,
    'fecharToast': fecharToast
}

document.querySelector('body').addEventListener('click',function(e){
    e = e.target;
    var funcao = funcoes[e.dataset.funcao];
    if(funcao)
        funcao();
});