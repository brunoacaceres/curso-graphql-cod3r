module.exports = {
    precoComDesconto(produto) {
        if(produto.desconto) {
            return produto.preco - (produto.preco * produto.desconto)/100 
        } else {
            return produto.preco
        }
        
    },
    precoVenda(produto) {
        return produto.preco + (produto.preco * produto.precoVenda) / 100
    }

}