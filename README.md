# Calculadora de Média

Esta é uma simples aplicação web para calcular a média das notas de um aluno do curso de pós e determinar se ele foi aprovado ou não em uma disciplina da Uniassalvi.

## Funcionalidades

- Calcula a média considerando pesos diferentes para cada avaliação.
- Informa ao usuário quantos pontos são necessários para ser aprovado na disciplina.

## Como usar

1. Abra o link [`suamedia`](https://calculo-media-uniasselvi-pos.vercel.app/) em seu navegador.
2. Insira as notas correspondentes nos campos de entrada:
   - Nota da Avaliação I (Av I)
   - Nota da Avaliação II (Av II)
   - Nota da Avaliação Final (Av Final)
   - Nota da Avaliação Objetiva (Av Objetiva)
3. Clique no botão "Calcular Média" para obter o resultado.
4. O resultado será exibido abaixo dos campos de entrada, indicando a média do aluno e se ele foi aprovado na disciplina.

## Lógica de Cálculo da Média

A média é calculada utilizando a seguinte fórmula:

```
((Nota da Av I * 2) + (Nota da Av II * 2) + (Nota da Av Final * 2) + (Nota da Av Objetiva * 4)) / 10
```

Para ser aprovado na disciplina, o aluno precisa obter uma média igual ou superior a 7.

## Exemplo

Por exemplo, considerando as seguintes notas:

- Av I: 8
- Av II: 10
- Av Final: 9
- Av Objetiva: -

A média será calculada da seguinte forma:

```
((8 * 2) + (10 * 2) + (9 * 2) + (- * 4)) / 10 = Resultado
```

## Autor

Desenvolvido por Jeice Santos &copy; 2024
