db.Funcionario.find();
db.Paciente.find();
// Trazendo todos os funcionários ou pacientes

db.Paciente.count();
// Contando quantos pacientes estão cadastrados

db.Paciente.find({nome:{$in:['Neymar Jr', 'Edinson Cavani']}});
// Pesquisando dois pacientes especificos 

db.Funcionario.find({'categoria.salario': {$gt: 2500}});
// Pesquisando funcionários que tenham salario maior que 2500

db.Paciente.find({'endereco.bairro': 'Valentina'});
// Pesquisando pacientes que moram em Valentina

db.Paciente.find({cpf: /^1/}, {nome:1});
// Pesquisando o nome dos pacientes que tenham cpf iniciado por 1

db.Funcionario.find({email:{$exists: false}},{nome:1,telefone:1});
// Pesquisando nome e telefone dos funcionarios sem email

db.Funcionario.find({telefone: '91045-1048'},{nome:1,telefone:1});
// Pesquisando nome e telefone do dono desse telefones especifico

db.Paciente.find({nome:/(ma)/},{nome:1,email:1});
// Procurando pacientes que tenham a sílaba 'ma' no nome

db.Paciente.find({atendimentos:{$exists:true}},{_id:0,nome:1,'atendimentos.data': 1})
    .map(x => ({nome:x.nome, primeiroAtendimento: x.atendimentos[0].data}));
// Acessando a data do primeiro atendimento dos pacientes

db.Paciente.find({atendimentos:{$exists:false}}).count();
// Quantos pacientes cadastrados mas ainda sem nenhum atendimento

db.Funcionario.aggregate([{
$group: {_id:null, media:{$avg:'$categoria.salario'}}
}]);
// Vendo a média salarial dos funcionários

db.Paciente.distinct('endereco.bairro');
// Vendo por quais bairros estão distribuidos os pacientes
