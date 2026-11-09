# Observatório da prova técnica em propriedade industrial no TJRS

Painel interativo sobre a prova técnica (perícia) em litígios de propriedade industrial no Tribunal de Justiça do Rio Grande do Sul. Reúne três fontes, cada uma em um painel próprio:

- **Processos judiciais** — 44 julgamentos de apelação da 5ª e 6ª Câmaras Cíveis (2020–2025), da planilha *Dados Processuais TJRS – Perícias PI* (aba DECISÕES). Para os 13 processos com dados do 1º grau: pedido e admissão da perícia, nomeação do perito, contraditório técnico, segunda perícia e normas citadas, honorários (proposto e fixado), peso da prova técnica e acolhimento do laudo na sentença e no acórdão.
- **Visão dos peritos** — 14 questionários respondidos por peritos.
- **Visão dos magistrados** — 11 questionários respondidos por magistrados de 1º e 2º graus.

Eventos processuais e percepções declaradas nos questionários nunca são somados no mesmo indicador.

## Como usar

- Os menus suspensos filtram cada painel.
- Clicar em uma barra, item de legenda, segmento ou célula filtra os demais gráficos do painel. Cada seleção aparece como etiqueta e pode ser removida no “×”.
- Ao passar o mouse sobre um dado, aparece o que ele significa.
- No painel de processos, “Exportar CSV” baixa a tabela filtrada.

## Fontes e regras de leitura

| Painel | Fonte | Unidade |
|---|---|---|
| Processos judiciais | Dados Processuais TJRS – Perícias PI (Google Sheets), aba DECISÕES | julgamento de apelação |
| Visão dos peritos | Questionarios_Peritos_Consolidados.xlsx | questionário |
| Visão dos magistrados | Questionarios_Magistrados_Consolidados.xlsx | questionário |

- Contagens são exibidas com o denominador (`n de N`). Respostas ausentes, “não sei” e “não se aplica” não são convertidas em “não” ou em zero.
- Em múltipla escolha, conta-se cada respondente uma vez por alternativa; os percentuais podem somar mais de 100%.
- Perguntas que dependem da anterior (por exemplo, prazo de pagamento pelo Tribunal) contam só quem respondeu “Sim” na pergunta de contexto.
- Escalas de 1 a 5 aparecem com os rótulos do questionário (Nunca, Raramente, Às vezes, Frequentemente, Sempre) e com a mediana.
- Honorários são valores nominais, sem correção monetária: valor proposto pelo perito e valor fixado pelo juízo, como registrados na planilha. Na planilha, “-” é lido como “não se aplica”.
- Os questionários 09 e 10 de magistrados têm respostas idênticas; o filtro “Amostra” permite contar apenas um.
- Contatos e uma contribuição livre com dado identificável não foram incluídos.
- As amostras são pequenas e não representam todo o TJRS; associações não indicam causalidade.

## Estrutura

```
index.html   página
app.js       dados, regras de cálculo e interface (sem dependências externas)
```

O site é estático e funciona no GitHub Pages. Os dados dos questionários estão embutidos em `app.js` (`PQ`, `MQ`). O painel de processos traz um retrato da planilha (`PROC_RAW`) e, ao abrir, tenta ler a aba DECISÕES diretamente do Google Sheets; se a planilha estiver compartilhada como “qualquer pessoa com o link pode ver”, os números refletem a versão atual dela. Caso contrário, vale o retrato.
