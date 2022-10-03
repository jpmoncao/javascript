// DOM: Document Object Model

/*
    • Possibilita que um documento de uma linguagem de
    marcação seja acessado como uma árvore de objetos
    • Exemplo:
        <html>
        <body>
            <table>
                <tr>
                    <th>Cabeçalho - Coluna 01</th>
                </tr>
                <tr>
                    <td>Linha 01 - Coluna 01</td>
                </tr>
                <tr>
                    <td>Linha 02 - Coluna 01</td>
                </tr>
            </table>
        </body>
        </html>

    • No DOM, se transforma nessa estrutura:
        HTML
        |- BODY
         |- TABLE
           |- TR
              |- TH
           |- TR
              |- TD
           |- TR
              |- TD

    • Com esta árvore de objeto do DOM, conseguimos:
        ▪ Selecionar um determinado elemento
        ▪ Alterar seu conteúdo
        ▪ Capturar o valor digitado por um usuário num
        campo input de um formulário

    • Por padrão o browser já traz uma instância do DOM
    preparada para ser utilizada.
        ▪ Conseguimos acessá-la com a palavra chave document.
        ▪ É o elemento raiz de toda a árvore de objetos.
        ▪ É a partir dela que conseguimos utilizar métodos para
        selecionar e manipular os elementos.
*/