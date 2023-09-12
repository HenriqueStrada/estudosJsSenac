function myCallBack(nome){
    console.log(`Olá meu nome é ${nome} `);
}

function saudacao(nome, callback){
    console.log("TESTE");
    callback(nome);
}

saudacao("TESTE", myCallBack);