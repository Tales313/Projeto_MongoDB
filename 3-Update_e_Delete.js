db.Paciente.updateOne
(
{nome: 'Neymar Jr'},
{$push:{atendimentos: {
    id: 'Ney01',
    data: '01/08/2018',
    funcionario: 
        db.Funcionario.find(
        {nome: 'Galv�o Bueno'},{_id:1}).map(x => x._id)[0]}}}
);

db.Paciente.updateOne
(
{nome: 'Philippe Coutinho'},
{$push:{atendimentos: {
    id: 'Phi01',
    data: '03/08/2018',
    funcionario: 
        db.Funcionario.find(
        {nome:"Luis Roberto"},{_id:1}).map(x => x._id)[0]}}}
);
        
db.Paciente.updateOne
(
{nome: 'Kylian Mbapp�'},
{$push:{atendimentos: {
    id: 'Kyl01',
    data: '05/08/2018',
    funcionario: 
        db.Funcionario.find(
        {nome:"Luis Roberto"},{_id:1}).map(x => x._id)[0]}}}
);
        
db.Paciente.updateOne
(
{nome: 'Kylian Mbapp�'},
{$push:{atendimentos: {
    id: 'Kyl02',
    data: '07/08/2018',
    funcionario: 
        db.Funcionario.find(
        {nome:"Galv�o Bueno"},{_id:1}).map(x => x._id)[0]}}}
);

// REMO��O

db.Funcionario.deleteOne
(
{cpf: '789-456-123-01'} 
);