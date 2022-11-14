testingArrow = {
    name: 'Escola de JavaScript',
    normalFunction: function() {
        console.log(this.name)
    },
    arrowFunction: () => {
        console.log(this.name)
    }
}

testingArrow.normalFunction() // 'Escola de JavaScript'
testingArrow.arrowFunction()  // empty (A => function pega o 'name' do contexto que foi criado, assim o 'this' não funciona)