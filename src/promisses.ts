// const minhaPromessa = new Promise((resolve, reject) => {
//     // chamar a api de finanças
//     const success = true

//     if (success) {
//         setTimeout(() => {
//             resolve('deu certo')
//         }, 1000)
//     } else {
//         reject('deu erro')
//     }
// })

const minhaPromessa = new Promise((resolve, reject) => {
        resolve('deu certo')
        // reject('deu erro')
    })


async function MinhaFunçãoAssíncrona () {
    try {
        const dados = await minhaPromessa
        
        console.log(dados)
    } catch (error) {
        console.log(error)
    }

    console.log('oioi')

}

console.log('oi')

MinhaFunçãoAssíncrona()
