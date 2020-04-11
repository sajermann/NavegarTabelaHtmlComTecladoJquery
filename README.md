# NavegarTabelaHtmlComTecladoJquery
## Navegue em tabelas HTML com o seu teclado, essa versão utiliza Jquery.

Já imaginou navegar pela sua tabela HTML apenas com as setas do seu teclado? Agora você pode, e o melhor, você também pode editar determinada célula que desejar.

Funciona com tabelas prontas já criadas quando o DOM estiver montado e funciona também com linhas dinâmicas que podem ser inclusas com o tempo, para simular esse último exemplo citado, basta clicar no botão *Adicionar Linha* e continuar sua navegação normalmente inclusive suas edições.

### Importante

Alguns atributos são necessários existir para que todo ocorra conforme desejar, esses atributos são:

* tabindex
* locked

O atribute *locked* é utilizado para identificar qual célula da tabela estará desbloqueada para edição, fica a critério do desenvolvedor escolher, pode ser todas as células ou alguma específica, imagine por exemplo que você está criando um sistema de edição de pedidos, onde o usuário seleciona um produto pelo código, o usuário pode alterar a célula código, mas não há necessidade de alterar a célula descrição, afinal depois de selecionar o código o sistema já faz a busca e mostra a descrição do mesmo, sendo assim a célula código terá o atribute locked="false" e a célula descrição terá o atribute locked="true".

---

Ferramentas | Descrição
--- | ---
Javascript | Jquery
CSS | Materialize
Back-End | Não Aplicado
Banco Dados | Não Aplicado

[Demo](http://bruno.sajermann.com/)