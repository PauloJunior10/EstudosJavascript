# Grid: Alinhamento
---
Existem 6 propriedades para alinhamento:
`justify-content`
`align-content`
`justify-itens`
`align-items`
`justify-self`
`align-self`

Vamos separá-los em 2 grupos
1. `justify` e `align`
2. `content`, `items` e `self`

---

## Justify e Align

Sabendo que o grid é bidimensional, nós temos o eixo x e o y.
O **eixo x** é o posicionamento horizontal, da esquerda para a direita.
O **eixo y** é o posicionamento vertical, de cima para baixo.

---

## Content, Items e Self
Juntando o ``justify
, ou `align`, com esses elementos: `content`, `items` e `self`; nós observamos nossas propriedades

---

### Content
`justify-content` e `align-content` nos permite alinhar o próprio grid, relativo ao espaço fora do grid.

O uso dessas propriedades são raras, pois só é aplicado caso o grid seja menor que a área definida.
(Por exemplo, quando usamos em px o tamanho do grid, poderemos terminar com um grid pequeno, para o tamanho da área do grid )

Podemos usar **7 valores**
1.start
2. end
3. center
4. strech
5. space-between
6. space-around
7. space evenly

---
## Items

`justify-items` e `align-items` vai permitir alinhar os items do nosso grid, em qualquer espaço disponível, na célula que ele habitar.

Podemos usar **4 valores**:
1. start
2. end
3. center
4. stretch

---
### Self

`justify-items` e `align-items` vai permitir alinhar o item em si.

faz a mesma coisa que o `justify-items` e `align-items`, porém, aplicado diretamente no item de um grid.