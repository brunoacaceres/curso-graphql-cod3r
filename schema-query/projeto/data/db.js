const usuarios = 
[
    {
        id: 1,
        nome: 'João Silva',
        email: 'jsilva@email.com',
        idade: 29,
        perfil_id: 1
        
    },
    {
        id: 2,
        nome: 'Rafael Junior',
        email: 'rjunior@email.com',
        idade: 31,
        perfil_id: 2
    },
    {
        id: 3,
        nome: 'Daniela Smith',
        email: 'dsmith@email.com',
        idade: 24,
        perfil_id: 1
    }
]

const perfis = 
[
    { id: 1, nome: 'Comum' },
    { id: 2, nome: 'Administrador' }
]

module.exports = { usuarios, perfis }