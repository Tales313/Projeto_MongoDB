db.Funcionario.insertMany
([
{
    nome: 'Galvão Bueno',
    data_nasc: '11-10-1998',
    cpf: '123-456-789-10',
    email: 'bueno123@gmail.com',
    telefones: ['99660-6329', '98826-4158'],
    categoria: {nome: 'Gerente', salario: 5000.00}
},
{
    nome: 'Cleber Machado',
    data_nasc: '19-05-1990',
    cpf: '789-456-123-01',
    email: 'clebmach@gmail.com',
    telefones: ['91234-5678', '97415-2946'],
    categoria: {nome: 'Bioquimico', salario: 2250.00}
},
{
    nome: 'Luis Roberto',
    data_nasc: '01-12-1960',
    cpf: '112-691-295-09',
    telefones: ['91045-1048', '94635-0967'],
    categoria: {nome: 'Biomédico', salario: 2500.00}
}
]);