const db = require('../config/db')

// Exemplo01
// db('perfis')
    // Modo01
    // .then(res => console.log(res))

    //Modo 02
    // .then(res => res.map(p => p.nome))
    // .then(nomes => console.log(nomes))

    //Modo 03 - Funcionalidade do KNEX
    // .map(p => p.nome)
    // .then(nomes => console.log(nomes))
    
    // .finally(() => db.destroy())

// Exemplo02
// db('perfis').select('nome', 'id')
//     .then(res => console.log(res))
//     .finally(() => db.destroy())

// Exemplo03
// db.select('nome', 'id')
//     .from('perfis')
//     .limit(4)
//     .offset(2)
//     .then(res => console.log(res))
//     .finally(() => db.destroy())

// Exemplo04
db('perfis')
    // .where({ id: 2 })
    // .where('id', '=', 2 )
    // .where('nome', 'like', '%st%' )
    // .whereNot({ id: 2 })
    .whereIn('id', [1,2,3])
    // .first()
    .then(res => console.log(res))
    .finally(() => db.destroy())

