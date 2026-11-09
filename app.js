/* Observatório da prova técnica em propriedade industrial no TJRS
   Versão web estática, gerada a partir do painel aprovado. Sem dependências externas. */
(function () {
'use strict';
const st = {};
let agendado = false;
const set = (o) => { Object.assign(st, o); if (!agendado) { agendado = true; requestAnimationFrame(() => { agendado = false; render(); }); } };

function renderVals() {
// Processos: planilha "Dados Processuais TJRS - Pericias PI" (Google Drive), aba DECISÕES. Só as colunas usadas pelo painel.
// Na versão web, se a planilha puder ser lida diretamente, window.__PROC_RAW substitui este retrato.
const PROC_FONTE = 'Dados Processuais TJRS – Perícias PI · aba DECISÕES';
const PROC_LIDA = '09/11/2026';
const PROC_RAW = [
  ["Nº PROCESSO", "DATA JULGAMENTO", "ANO", "CÂMARA", "ATIVO DE PI", "PERÍCIA", "PERITO", "NÚMERO DE PERITOS", "VALOR INICIAL DOS HONORÁRIOS PERICIAIS", "VALOR FINAL DOS HONORÁRIOS PERICIAIS", "HOUVE ASSISTENTE TECNICO?", "ACOLHIMENTO DO LAUDO PERICIAL NO 1º GRAU", "ACOLHIMENTO DO LAUDO PERICIAL NO 2º GRAU", "PESO PROVA TÉCNICA", "REQUERIMENTO DE PERICIA", "QUEM REQUEREU A PERÍCIA?", "RESULTADO ADMISSIBILIDADE DE PERÍCIA?", "FUNDAMENTO DO INDEFERIMENTO DE PERÍCIA", "FORMA DE ESCOLHA DO PERITO", "IMPUGNACAO DA NOMEACAO DO PERITO", "FUNDAMENTO DA IMPUGNAÇÃO", "SUBSTITUICAO PERITO", "INDEFERIMENTO DE QUESITOS", "FUNDAMENTO DO INDEFERIMENTO", "QUESITOS SUPLEMENTARES?", "QUEM INDICOU O ASSITENTE TÉCNICO?", "PARECER DIVERGENTE?", "REQUERIMENTO SEGUNDA PERICIA", "FOI REALIZADA SEGUNDA PERICIA?", "HOUVE MENÇÃO DO ART. 479?", "INVOCAÇÃO DO ART. 480", "HOUVE REFERENCIA AO ATO 045/2022P?", "HOUVE REFERENCIA AO ATO CNJ 232/2016?", "RELATORIA", "PALAVRAS-CHAVE INDEXADORAS", "EMENTA", "RESUMO DO CASO E DA ESSÊNCIA DA DECISÃO", "PROCESSO - 1º GRAU", "VARA DE ORIGEM", "FORMAÇÕES DO PERITO"],
  ["70018200212 (Nº CNJ: 0000544-71.2006.8.21.7000)", "3/30/2023", "2023", "Sexta Câmara Cível", "Modelo de utilidade", "SIM", "1ª perícia: Carlos Caetano Pettinelli — Engenheiro Civil, Tecnologia Mecânica, Instalações Industriais, CREA-RS 10619 (timbre do laudo) | 2ª perícia: Bruno W. Schramm e Paulo Jacobus Alves (engenheiro) — formações não identificadas nos arquivos; a ré os chama de 'peritos, engenheiros mecânicos'", "2", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "SIM", "PARCIAL", "REJEITADA", "DETERMINANTE", "SIM", "AMBAS", "MULTIPLAS_DECISOES", "Pedido da ré de nova perícia indeferido na cautelar (fl. 37, doc. 46); fundamento não consta dos arquivos. O indeferimento foi revertido pelo TJRS (agravo retido acolhido em 31/05/2007), seguindo-se a segunda perícia", "NÃO IDENTIFICADO", "NÃO", "-", "NÃO", "NÃO", "-", "SIM", "RÉU", "SIM", "SIM", "SIM", "SIM", "NÃO", "NÃO", "NÃO", "Dr. Felipe Keunecke de Oliveira", "contrafação; patente de modelo de utilidade; nulidade de patente; Justiça Federal; fato superveniente; perícia realizada; perícia complementar; cerceamento de defesa; lucros cessantes; sentença reformada", "AÇÃO ORDINÁRIA. CONTRAFAÇÃO. VIOLAÇÃO DE REGISTRO DE PATENTE. Santantônio MODULADO e para-choques de impulsão. ACESSÓRIOS AUTOMOTIVOS. OFENSA AOS DIREITOS DA PROPRIEDADE INDUSTRIAL. REGISTRO DE PATENTES ANULADAS EM AÇÃO JUDICIAL. INPI. OFENSA NÃO EVIDENCIADA POR AUSÊNCIA DE PRIVILÉGIO E PROTEÇÃO AO DITEITO DE INVENÇÃO. SENTENÇA REFORMADA. HONORÁRIOS ADVOCATÍCIOS INVERTIDOS.\n 1. Alegada contrafação por produção e comercialização de produtos e acessórios automotivos com características idênticas àqueles protegidos por registros de patentes junto ao INPI.\n \n 2. No caso concreto, a autora era titular das patente MU 7701499-5 e MU 7701480-4, registradas no INPI. Em ação indenizatória, o feito foi julgado parcialmente procedente pelo juízo da Origem.\n 3. Em ação judicial de nulidade e extinção das patentes, perante a Justiça Federal, promovida pela ora ré, sobreveio pedido procedente com decisão transitada em julgado.\n 4. A controvérsia tem natureza eminentemente de fato, insto porque depende de ato administrativo para análise do privilégio e direito quanto aos registros dos objetos MU 7701499-5 e MU 7701480-4, o que de fato não há em razão da nulidade das patentes por decisão judicial.\n DADO PROVIMENTO AO RECURSO DA RÉ E NEGADO PROVMENTO AO RECURSO DA AUTORA.", "Apelações cruzadas em ação cautelar e ação ordinária de contrafação cumulada com indenização, ajuizadas por Keko Acessórios Ltda. contra Instaladora São Marcos Ltda. A autora alegava que a ré fabricava e comercializava santantônios, para-choques de impulsão e estribos que reproduziam objetos de suas patentes de modelo de utilidade MU 7701499-5 e MU 7701480-4. A sentença julgou a ação ordinária parcialmente procedente, com condenação em perdas e danos, lucros cessantes, busca e apreensão e abstenção, e a cautelar procedente; negou danos morais. No Tribunal, o fundamento determinante foi fato superveniente: a Justiça Federal do Rio de Janeiro declarou a nulidade das duas patentes em ação movida pela ré, com trânsito em julgado após o AREsp 1666830/RJ. Sem privilégio válido, não há ofensa à propriedade industrial a indenizar. A Câmara rejeitou as preliminares, deu provimento à apelação da ré e negou provimento à da autora, reformando a sentença e invertendo a sucumbência (honorários de 20% sobre o valor atualizado da causa em favor dos patronos da ré). Decisão unânime. Propriedade industrial: sim — patentes de modelo de utilidade, contrafação e efeitos da nulidade judicial das patentes (Lei 9.279/96).", "5000021-94.2004.8.21.0128 (com a cautelar 5000010-65.2004.8.21.0128, julgadas na mesma data)", "Vara Judicial da Comarca de São Marcos", "1ª perícia: Carlos Caetano Pettinelli — Engenheiro Civil, Tecnologia Mecânica, Instalações Industriais, CREA-RS 10619 (timbre do laudo) | 2ª perícia: Bruno W. Schramm e Paulo Jacobus Alves (engenheiro) — formações não identificadas nos arquivos; a ré os chama de 'peritos, engenheiros mecânicos'"],
  ["70079865317 (Nº CNJ: 0351743-39.2018.8.21.7000)", "3/29/2023", "2023", "Quinta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des.ª Lusmary Fatima Turelly da Silva", "marca; licença de uso de marca; caducidade de registro; uso indevido de marca; concorrência desleal; fato superveniente; titularidade da marca; ônus da prova; ação anulatória de ato administrativo; apelação provida", "APELAÇÃO CÍVEL E RECURSO ADESIVO. PROPRIEDADE INDUSTRIAL E INTELECTUAL. AÇÃO DE ABSTENÇÃO DE USO DE MARCA E DE INDENIZAÇÃO. AUSÊNCIA DE COMPROVAÇÃO PELA PARTE AUTORA DA TITULARIDADE DA MARCA. CADUCIDADE RECONHECIDA PELO INSTITUTO NACIONAL DE PROPRIEDADE INDUSTRIAL E CONFIRMADA PELA JUSTIÇA FEDERAL. USO INDEVIDO DE MARCA E CONCORRÊNCIA DESLEAL NÃO CONFIGURADAS.\n 1. Cuida-se de ação de abstenção de uso de marca e de indenização por alegado uso indevido da marca, bem como pelos supostos atos de concorrência desleal realizados pelo réu por conta da utilização indevida da marca da parte autora.\n 2. A propriedade da marca, segundo dispõe o art. 129 da Lei n° 9.279/96, é obtida com o seu registro, que garante ao titular seu uso exclusivo. No caso, conforme certificado de registro de marca juntado aos autos, a empresa CAMAQUÃ ALIMENTOS S.A. registrou, junto ao INPI, processo nº 816387974, a marca “OURO O LEGÍTIMO”, sem direito ao uso exclusivo da expressão “O LEGÍTIMO”, com natureza de produto, o qual foi concedido em 29/06/1993, tendo firmado a parte autora e a empresa CAMAQUÃ ALIMENTOS S.A. um contrato de uso de marca, no qual esta licenciou àquela o direito de utilizar a aludida marca.\n \n 3. Ocorre que, configurando fato superveniente à propositura da demanda – o que deve ser aceito por conta do previsto no artigo 493 do CPC - restou reconhecida a caducidade do aludido registro, o que levou à sua extinção, fulcro no artigo 143, inciso II, da Lei de Propriedade Industrial. Há referir que o INPI pontuou que a marca licenciada pela parte autora deixou de ser utilizada tal como concedida, levando a alterações significativas, as quais não podem ser desconsideradas. Tal decisão, inclusive, foi confirmada pela Justiça Federal, em ação de anulação de ato administrativo ajuizada pela aqui autora em face do INPI\n \n 4. E, fins de análise do direito autoral concernente ao presente feito, tem-se que, na prática, a aludida desfiguração da marca registrada, de propriedade da CAMAQUÃ ALIMENTOS S.A. e licenciada à autora, leva à improcedência da demanda, especialmente porque a demandante não demonstra nos presentes autos a titularidade da marca que aduz estar sendo indevidamente utilizada pela ré.\n 5. Ao que se infere da análise das marcas registrada e efetivamente utilizada, constata-se evidente diferenças entre elas. E, não tendo sido demonstrado nos autos a titularidade pela demandante (seja através de registro próprio ou por meio de licença de uso) da marca vendida, ônus que lhe incumbia (artigo 373, inciso I, do Código de Processo Civil), a improcedência da demanda é medida que se impõe. \n \n 6. Inversão do ônus sucumbencial.\n \n APELAÇÃO DA PARTE RÉ PROVIDA. RECURSO ADESIVO DA PARTE AUTORA PREJUDICADO.", "Apelação de Arroz Grão Cristal Ltda. e recurso adesivo de AC Vita Comércio de Alimentos Ltda. contra sentença de parcial procedência em ação inibitória e ressarcitória. A autora, licenciada exclusiva da marca 'OURO O LEGÍTIMO' (registro INPI nº 816387974, titularidade de Camaquã Alimentos S.A.), acusava a ré de vender arroz com a expressão 'OURO' e embalagens semelhantes, alegando uso indevido de marca e concorrência desleal. Como fato superveniente (art. 493 do CPC), o INPI declarou a caducidade do registro (art. 143, II, da LPI), porque a marca deixou de ser usada tal como concedida. A decisão foi confirmada pela Justiça Federal em ação anulatória proposta pela autora contra o INPI. A Câmara concluiu que a marca efetivamente usada difere da registrada e que a autora não provou a titularidade, própria ou por licença, do sinal que dizia violado (art. 373, I, do CPC). Afastou também a concorrência desleal. Deu provimento à apelação da ré para julgar a ação improcedente, declarou prejudicado o recurso adesivo e inverteu a sucumbência, com honorários de 10% sobre o valor atualizado da causa. Unânime. Propriedade industrial: sim — marca, licença de uso, caducidade de registro e concorrência desleal.", "SOLICITAR PROCESSO", "", ""],
  ["70082479247 (Nº CNJ: 0219833-49.2019.8.21.7000)", "9/29/2021", "2021", "Quinta Câmara Cível", "Modelo de utilidade", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des.ª Lusmary Fatima Turelly da Silva", "ação de cobrança; contrato de parceria comercial; propriedade intelectual; pacto sucessório; prescrição; inovação recursal; onerosidade excessiva; adimplemento substancial; apelação desprovida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL E INTELECTUAL. AÇÃO DE COBRANÇA. PREFACIAL DE NULIDADE DA SENTENÇA ARGUIDA EM MEMORIAIS E NA SUSTENTAÇÃO ORAL EM SESSÃO DE JULGAMENTO. NÃO CONHECIMENTO. PRELIMINARES DE inépcia da inicial, impossibilidade jurídica do pedido, ausência de interesse de agir e prescrição afastadas. contrato de parceria comercial. evidenciado o desatendimento às cláusulas contratuais. adimplemento a menor praticado pela ré. \n 1. Não é de ser conhecida a prefacial de nulidade de sentença, eis que se trata de inovação recursal que afronta os princípios da não surpresa, amplo contraditório e o não cerceamento de defesa, além de implicar em supressão de instância.\n \n 2. No que toca à preliminar recursal de inépcia da inicial pela impossibilidade jurídica do pedido e ausência de interesse de agir, baseada na alegação de que os demandantes não são detentores ou proprietários dos direitos que buscam nesta ação, tem-se que não comporta acolhimento, uma vez que existente, em tese, no plano abstrato, a partir da leitura da exordial, a viabilidade da tutela pleiteada de cobrança, cabível o seu prosseguimento. Ademais, ainda que se analise as argumentações trazidas pela parte ré sob o viés da (i)legitimidade ativa ou da ausência de interesse de agir, entende-se que não lhe assiste razão, haja vista que há expressa previsão de que, no caso de falecimento do parceiro, as parcelas de lucros ajustadas contratualmente serão repassadas aos seus herdeiros – que ora figuram no polo ativo.\n \n 3. Concernente à preliminar arguida pela demandada baseada na alegação de impossibilidade jurídica do pedido por conta da proibição de pacto sucessório, da mesma forma, tem-se que deve ser afastada, eis que se entende que tal proibitivo não restou configurado no caso em análise.\n 4. Em relação à preliminar de prescrição da pretensão de cobrança, melhor sorte não assiste ao recorrente, eis que não há falar em incidência do prazo disposto no art. 206, §3º, II, do Código Civil. A pretensão autoral não envolve recebimento de prestações vencidas de rendas, limitando-se, em verdade, à cobrança de valores a título de “comissão” contratualmente prevista em contrato de parceria comercial e em decorrência de propriedade intelectual.\n 5. No mérito, cuidam os autos de ação de cobrança atinente a parcelas alegadamente pagas a menor em favor dos demandantes após o falecimento de seu pai e marido, ocorrido em 24/09/2012, o qual firmou, no ano de 2002, contrato de parceria comercial com a demandada. Alegam os autores que o de cujus, criador dos conjuntos e peças de “distribuidor de fertilizantes acoplável em semeadoras, adubadoras e/ou distribuidores de corretivos de solo e sua evolução tecnológica”, firmou contrato de parceria com a ré, a fim de, em conjunto, desenvolverem, produzirem e comercializarem a criação acima referida e de propriedade do falecido. Nesse sentido, pontuam que restou acordado o pagamento de verbas a título de “comissões” mensais em seu favor, as quais foram regularmente adimplidas quando em vida. Contudo, após seu falecimento, sinalam que a demandada passou a descumprir com a cláusula do contrato que prevê o recebimento pelos seus herdeiros de parcela mensal, pagando-lhe valores a menor.\n 6. Verifica-se que o caso ora em análise é revestido de peculiaridades, as quais autorizaram a manutenção da procedência da demanda, em especial por conta do evidente descumprimento contratual praticado pela demandada, a qual, de fato, não tem repassado os valores corretos a título de distribuição de lucros previstos no instrumento contratual firmado entre as partes.\n 7. Em atenção às teses da defesa, há referir que não resta evidenciada a noticiada onerosidade excessiva contratual, eis que o de cujus satisfatoriamente cumpriu o acordado, entregando a criação a que se comprometeu. De igual forma, não há falar em teoria do adimplemento substancial, visto que a incidência da referida teoria não tem espaço no presente caso, haja vista que os demandantes não pretendem a resolução contratual. Muito pelo contrário, o que se quer é o adimplemento de forma satisfatória e em estrito cumprimento às cláusulas contratuais.\n 8. Deve ser observada cláusula taxativamente prevista no contrato acerca da forma de cálculo dos valores devidos, a qual, diante do deslinde dado ao feito, confessadamente não foi aplicada pela demandada.\n \n 9. Entende-se que despiciendas maiores digressões acerca da alegada fraude fiscal neste processo, especialmente porque, ainda que se cogitasse (o que, sinala-se, não se mostrou nos autos) acerca da sua ocorrência, o direito perquirido na petição inicial não encontra óbice na aludida irregularidade, a qual, se assim for, deve ser tratada pela via adequada. Ademais, a empresa que lançou as notas fiscais impugnadas sequer figura em algum dos polos desta ação, sendo, portanto, incabível o pedido da demandada.\n 10. No tocante à pretensão de juntada do contrato em sua via original, resta evidenciada a desnecessidade da providência pretendida, especialmente porque acostado ao feito respectiva cópia autenticada em Tabelionato.\n \n 11. Assim, a manutenção da sentença é medida que se impõe. Com fulcro no artigo 85, § 11, do CPC, restam majorados os honorários advocatícios devidos aos procuradores da parte autora.\n NÃO CONHECIDA A PRELIMINAR ARGUIDA EM SUSTENTAÇÃO ORAL. REJEITADAS AS DEMAIS PREFACIAIS E, NO MÉRITO, APELAÇÃO DESPROVIDA.", "Apelação de Agromac Indústria e Comércio de Equipamentos Agrícolas Ltda. contra sentença de procedência em ação de cobrança movida pelos herdeiros de Prudent Pieters. Em 2002, ele firmou com a ré contrato de parceria comercial para desenvolver, produzir e comercializar um distribuidor de fertilizantes acoplável em semeadoras, criação de sua propriedade, mediante 'comissões' calculadas sobre o faturamento bruto deduzido de impostos, com repasse aos herdeiros após sua morte. Os autores alegaram pagamento a menor depois do falecimento. A Câmara não conheceu da nulidade da sentença suscitada só em memoriais e na sustentação oral, por inovação recursal. Rejeitou as preliminares de inépcia, impossibilidade jurídica (inclusive por suposto pacto sucessório), falta de interesse e prescrição, afastando o art. 206, §3º, II, do CC por não se tratar de rendas vencidas. No mérito, reconheceu o descumprimento contratual: a própria ré admitiu ter calculado as parcelas sobre o lucro líquido, contrariando a cláusula expressa. Afastou onerosidade excessiva, adimplemento substancial, a alegada fraude fiscal e a exigência de via original do contrato. Negou provimento à apelação e majorou os honorários para 17% da condenação. Unânime. Propriedade industrial: sim, em caráter contratual — remuneração pela exploração de invenção de equipamento agrícola (referência a depósito de patente), sem discussão sobre validade ou violação do direito.", "SOLICITAR PROCESSO", "", ""],
  ["70082558206 (Nº CNJ: 0227729-46.2019.8.21.7000)", "11/25/2020", "2020", "Quinta Câmara Cível", "Desenho industrial; Modelo de utilidade", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des.ª Lusmary Fatima Turelly da Silva", "desenho industrial; modelo de utilidade; concorrência desleal; embalagem plástica; inovação recursal; nulidade de registro; competência da Justiça Federal; dano moral in re ipsa; dano material; prova testemunhal", "APELAÇÕES CÍVEIS. PROPRIEDADE INDUSTRIAL E INTELECTUAL. registro de desenho industrial. INOVAÇÃO RECURSAL relativa ao pleito de nulidade do registro de desenho. embalagem plástica com dupla abertura. concorrência desleal. danos materiais a serem apurados em liquidação de sentença a contar da data do depósito do registro. danos morais configurados. majoração do valor arbitrado relativamente ao dano extrapatrimonial. \n \n 1. Pleito de nulidade do registro de desenho industrial não conhecido, pois se trata de inovação recursal. Ademais, a tese de nulidade do registro de desenho industrial suscitada pela autora/reconvinda, em suas razões recursais, é de competência da Justiça Federal, sendo obrigatória a participação do INPI. Inteligência do art. 175, da Lei 9.279/96.\n 2. Cuida-se de ação ordinária com pedido de abstenção da prática de atos de concorrência desleal e reparação por perdas e danos, em razão da fabricação e comercialização de embalagem cujas melhorias foram realizadas pela autora, bem como foi concedido o registro do desenho industrial junto ao INPI.\n \n 3. A prova coligida aos autos dá conta de que o aperfeiçoamento da embalagem foi realizado pela parte autora/reconvinda, e que a ré/reconvinte, ao tomar conhecimento do molde, passou a replicá-lo.\n \n 4. Ademais, o registro do desenho industrial foi concedido por primeiro à autora/reconvinda, em 08/08/2017 (fl. 343). Para a parte ré/reconvinte, a concessão ocorreu em 06/03/2018 (fl. 369), restando, porém, suspensa em razão de processo administrativo de nulidade instaurado por requerimento de terceiros. \n \n 5. Nessa senda, verificado o ato ilícito e a responsabilidade da demandada, configurado o dever de reparar os danos causados à demandante.\n 6. Danos patrimoniais ocasionados à parte autora devem ser levantados a contar da data do depósito do pedido de registro de desenho industrial BR 30 2016 003284-0, qual seja, 01/08/2016, tendo em vista que o período de vigência do registro inicia na data do depósito, consoante o disposto no art. 108 da LPI.\n 7. Hipótese que configura dano moral na modalidade in re ipsa, dispensando a apresentação de provas acerca do efetivo abalo do ofendido, pois presumido diante da situação posta.\n 8. Na valoração do dano imaterial, alguns elementos devem ser observados, quais sejam: a gravidade da conduta ilícita, a intensidade/extensão do dano e a duração das consequências, a condição sócio econômica das partes e o dúplice caráter da medida (pedagógico e compensatório), além dos postulados da proporcionalidade e da razoabilidade. A par de tais elementos e considerando as particularidades do caso em comento, impõe-se a majoração do valor da condenação a título de indenização por danos morais, não para o valor pleiteado pela autora, e sim para a quantia de R$ 15.000,00 (quinze mil reais), com correção monetária pelo IGP-M a contar do arbitramento (súmula 362 do e. STJ) e acrescido de juros moratórios de 1% ao mês, a partir do evento danoso, observada a súmula 54 do e. STJ, importância que, além de atender aos critérios acima estabelecidos, mostra-se adequada aos parâmetros e precedentes desta colenda Câmara Cível.\n \n 9. Honorários sucumbenciais devidos aos procuradores da parte autora majorados, em atenção ao preconizado pelo artigo 85, § 11, do Código de Processo Civil.\n \n APELAÇÃO DA PARTE RÉ DESPROVIDA. APELAÇÃO DA PARTE AUTORA PARCIALMENTE PROVIDA, NA PARTE CONHECIDA.", "Apelações de Ari A. Roman Embalagens Plásticas (autora/reconvinda) e de S.B.C. Embalagens Ltda. (ré/reconvinte) contra sentença em ação de abstenção de concorrência desleal cumulada com perdas e danos. A sentença julgou parcialmente procedente a ação de Ari A. Roman: determinou que a ré se abstivesse de fabricar e comercializar a embalagem plástica de dupla abertura objeto do desenho industrial BR 30 2016 003284-0 e do modelo de utilidade BR 20 2016 020608-7, condenou-a em danos materiais a liquidar e em R$ 5.000,00 de danos morais, e julgou improcedente a reconvenção. A Câmara não conheceu do pedido de nulidade do registro deduzido na apelação da autora, por inovação recursal e por ser da competência da Justiça Federal (art. 175 da LPI). No mérito, a prova mostrou que a autora aperfeiçoou a embalagem e que a ré passou a replicá-la. Negou provimento à apelação da ré. Deu parcial provimento à da autora, na parte conhecida, para fixar o termo inicial dos danos materiais no depósito do registro (01/08/2016, art. 108 da LPI) e elevar os danos morais in re ipsa para R$ 15.000,00, com honorários de 15%. Unânime. Propriedade industrial: sim — desenho industrial, modelo de utilidade e concorrência desleal.", "SOLICITAR PROCESSO", "", ""],
  ["70082631755 (Nº CNJ: 0235084-10.2019.8.21.7000)", "4/30/2020", "2020", "Sexta Câmara Cível", "Marca", "SIM", "-", "0", "-", "-", "NÃO", "-", "-", "INDETERMINÁVEL", "SIM", "AMBAS", "NÃO IDENTIFICADO", "-", "-", "-", "-", "-", "NÃO", "-", "SIM", "-", "-", "NÃO", "NÃO", "NÃO", "NÃO", "-", "NÃO", "Des. Luís Augusto Coelho Braga", "marca; contrafação; concorrência desleal; navalha para chanfrar couro; busca e apreensão; ônus da prova; perícia requerida; desistência da prova; dano material; apelação desprovida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL E INTELECTUAL. NAVALHAS PARA MÁQUINAS DE CHANFRAR COUROS. CONTRAFAÇÃO. CONCORRÊNCIA DESLEAL. AUSÊNCIA DE PROVA DE QUE A RÉ FABRIQUE, ADULTERE, VENDA OU MANTENHA EM ESTOQUE OS PRODUTOS OBJETOS DA DEMANDA. DANOS MATERIAIS. INOCORRÊNCIA. ÔNUS DA PARTE AUTORA. ART. 373, I, CPC. À UNANIMIDADE, NEGARAM PROVIMENTO AO APELO.", "Apelação de Plínio Fleck S.A. Indústria e Comércio e Fleecksteel Indústria de Artefatos Metálicos Ltda. contra sentença que julgou improcedente a ação cominatória cumulada com perdas e danos, com busca e apreensão liminar, movida contra Pelecouro Componentes para Calçados Ltda. As autoras alegavam que a ré vendia, expunha e mantinha em estoque navalhas para chanfrar couro falsificadas, com a marca registrada 'Flecksteel' e embalagens idênticas às originais, o que caracterizaria violação de marca e concorrência desleal. Na apreensão foram localizadas 28 navalhas no estabelecimento da ré. A ré afirmou tê-las adquirido de terceiro (Anderson Naves de Carvalho Ltda.) como originais. A Câmara entendeu que não há prova de que a ré tenha fabricado, adulterado ou vendido os produtos, nem de que fossem falsificados, ônus que cabia às autoras (art. 373, I, do CPC). Invocou orientação do STJ de que a falsificação e a concorrência desleal exigem prova técnica pericial, afastando a configuração das condutas do art. 195 da LPI e os danos materiais. Negou provimento ao apelo, mantendo a improcedência. Unânime. Propriedade industrial: sim — alegada contrafação de marca e concorrência desleal (Lei 9.279/96).", "5000415-54.2009.8.21.0087 (físico 087/1.09.0004704-1; AI 70033390675)", "2ª Vara Cível da Comarca de Campo Bom", "-"],
  ["70082643529 (Nº CNJ: 0236261-09.2019.8.21.7000)", "5/25/2022", "2022", "Quinta Câmara Cível", "Cultivares", "SIM", "NÃO IDENTIFICADO", "1", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "INTEGRAL", "INTEGRAL", "CONCORRENTE", "SIM", "NÃO IDENTIFICADO", "DEFERIDA", "-", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO", "Não houve indeferimento de quesitos; o juízo indeferiu a impugnação da ré aos quesitos da autora (fl. 901), decisão mantida pela conversão do agravo em retido. Fundamentos não disponíveis", "SIM", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO", "NÃO", "NÃO", "NÃO", "NÃO IDENTIFICADO", "NÃO", "Des. Jorge André Pereira Gailhard", "proteção de cultivar; Lei 9.456/97; ação cautelar inominada; busca e apreensão; vistoria; laudo de constatação; perícia realizada; homologação de laudo; produção antecipada de prova; apelação desprovida", "AÇÃO CAUTELAR INOMinADA. PROPRIEDADE INDUSTRIAL. LEI DE PROTEÇÃO DE CULTIVARES. BUSCA E APREENSÃO. LAUDO PERICIAL. HOMOLOGAÇÃO. HONORÁRIOS RECURSAIS.\n \n I. Preliminar contrarrecursal. Razões dissociadas. Não merece guarida a prefacial suscitada pela autora em sede de contrarrazões, no sentido de que a ré não teria atacado os fundamentos da sentença em seu apelo. Acontece que a sentença julgou procedente a demanda, confirmando as tutelas cautelares e homologando o laudo pericial, enquanto que as razões recursais apresentadas se opõem justamente às provas produzidas durante o curso do feito, pois a apelante refere a ausência de violação à Lei nº 9.456/97, sendo descabido o acolhimento da prefacial. Preliminar rejeitada.\n II. Trata-se de ação cautelar inominada em que a parte autora pretende o deferimento da medida de vistoria e busca e apreensão nas sedes da requerida, com fundamento no art. 839 e art. 846, ambos do CPC/1973, vigente ao tempo do ajuizamento da lide, tendo em vista a possível prática de armazenamento/comercialização indevida de cultivares da empresa autora. Postula, também, a elaboração de laudo pericial nas amostras de sementes colhidas no local.\n III. O direito de propriedade industrial está constitucionalmente protegido. Inteligência do art. 5º, inciso XXIX, da Constituição Federal. No caso, a lide trata sobre produção de cultivares, de acordo com os ditames da Lei nº 9.456/97, a qual objetiva, precipuamente, a proteção dos direitos inerentes à propriedade intelectual de cultivares, sendo necessário, para a sua garantia, a concessão de Certificado de Proteção de Cultivar. Inteligência do art. 2º, da Lei nº 9.456/97.\n IV. Hipótese em que a autora, ora apelada, possui o direito exclusivo à reprodução comercial de diversas sementes de arroz, através dos Certificados de Proteção de Cultivar, emitidos pelo Serviço Nacional de Proteção de Cultivares, do Ministério da Agricultura, Pecuária e Abastecimento. Outrossim, considerando os documentos que instruem a inicial, há suspeita da autora de uma possível prática de armazenamento de sementes do tipo Ônix pela ré, sem a sua autorização.\n \n V. Dessa forma, havendo indícios da violação ao art. 9º c/c o art. 37, da Lei nº 9.456/97, estão preenchidos os requisitos para o procedimento cautelar, previstos no art. 796 e seguintes, do CPC/1973, descabendo a análise do mérito nesta ação cautelar, o que deverá ocorrer em eventual ação principal.\n VI. De outro lado, imperiosa a condenação da demandada nos ônus da sucumbência, pois houve manifesta insurgência quanto à pretensão inicial, através da contestação por ela apresentada. Precedentes desta Corte.\n VII. De acordo com o art. 85, § 11, do CPC, ao julgar recurso, o Tribunal deve majorar os honorários fixados anteriormente ao advogado vencedor, observados os limites estabelecidos nos §§ 2º e 3º para a fase de conhecimento. \n \n PRELIMINAR CONTRARRECURSAL REJEITADA.\n \n APELAÇÃO DESPROVIDA.", "Apelação de CR Carra Comércio e Representações Ltda. contra sentença que julgou procedente a ação cautelar inominada movida por OR Melhoramento de Sementes Ltda. A sentença tornou definitiva a liminar de vistoria nos estabelecimentos da ré e de apreensão de sementes, homologou o laudo pericial e fixou honorários de R$ 1.000,00. A autora é titular de certificados de proteção de cultivares de arroz e suspeitava do armazenamento e comercialização não autorizados de sementes da cultivar Ônix. A apelante sustentou que os grãos pertenciam a agricultores, como reserva de colheita permitida pela Lei 9.456/97, e que não houve perícia comprovando a origem. A Câmara rejeitou a preliminar contrarrecursal de razões dissociadas. No mérito, entendeu que os indícios de violação aos arts. 9º e 37 da Lei de Proteção de Cultivares bastam para os requisitos da cautelar (arts. 796 e seguintes do CPC/73), reservando o exame do mérito da violação para eventual ação principal. Manteve a sucumbência da ré, que resistiu à pretensão, negou provimento à apelação e majorou os honorários para R$ 1.300,00. Unânime. Propriedade industrial: sim, em sentido amplo — proteção de cultivares (Lei 9.456/97), tratada no acórdão como propriedade industrial/intelectual.", "5002908-11.2023.8.21.0120 (cumprimento da ação cominatória 5000065-35.2007.8.21.0120, julgada com a ação 120/1.09.0000675-0)", "Vara Judicial da Comarca de Sananduva", "NÃO IDENTIFICADO"],
  ["70082714676 (Nº CNJ: 0243376-81.2019.8.21.7000)", "4/15/2020", "2020", "Quinta Câmara Cível", "Software", "SIM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "NÃO", "", "", "NÃO", "Des.ª Lusmary Fatima Turelly da Silva", "programa de computador; direito autoral; contrafação; prescrição trienal; produção antecipada de prova; perícia realizada em ação cautelar; licença de uso; ônus da prova; indenização de dez vezes o valor de mercado; apelação parcialmente provida", "APELAÇÕES CÍVEIS. PROPRIEDADE INDUSTRIAL E INTELECTUAL. PROGRAMA DE COMPUTADOR. AÇÃO DE INDENIZAÇÃO CUMULADA COM ABSTENÇÃO DE PRÁTICA DE ATO. PRESCRIÇÃO TRIENAL NÃO CONFIGURADA. CONTRAFAÇÃO COMPROVADA. DEVER DE INDENIZAR. REPARAÇÃO EQUIVALENTE AO VALOR DE MERCADO DO SOFTWARE ACRESCIDA DE INDENIZAÇÃO. PREQUESTIONAMENTO. \n \n 1. Cuida-se de ação de indenização por utilização sem a devida licença pela empresa ré de softwares da empresa Microsoft. \n 2. A pretensão de reparação civil por violação de direito autoral prescreve em três anos, conforme previsão do artigo 206, §3º, inciso V, do Código Civil. Havendo a propositura de ação cautelar para a produção de provas, o marco inicial da contagem do prazo prescricional é a data do trânsito em julgado. No caso, inocorrente o transcurso do prazo trienal, tendo em vista que o trânsito em julgado da ação cautelar se deu em 15/08/2014 (fl. 457), ao passo que a presente demanda fora proposta em 16/02/2017 (fl. 02). \n \n 3. É proibido o uso de programa de computador sem contrato de licença ou, na falta deste, de nota fiscal relativa à aquisição ou ao licenciamento de cópia, nos termos do artigo 9º da Lei nº 9.609/98. \n 4. A prova pericial apurou quais programas de computador e quantidades instalados nas máquinas constantes nas dependências da ré, ao passo que incumbia a esta o ônus da prova quanto à regularidade do uso. No entanto, não se desincumbiu de seu ônus probatório (artigo 333, inciso II, do CPC, restando, assim, evidenciada a contrafação. \n \n 5. Quanto ao pleito recursal de condenação da ré também ao pagamento de indenização, mostra-se cabível, pois o mero pagamento do valor da licença de uso seria um estímulo à contrafação, já que somente restitui o valor que já seria devido no caso de uso lícito do software. \n 6. Destarte, na esteira da jurisprudência do e. STJ e desta Corte, impõe-se a condenação da parte ré ao pagamento de indenização relativa a dez vezes o valor de mercado dos programas de computador. \n \n 7. A tese de ausência de sucumbência mínima da autora, com pedido de redistribuição do ônus de sucumbência, não merece acolhida, diante do deslinde dado ao feito. \n \n 8. Para fins de prequestionamento, consideram-se incluídos no acórdão os elementos suscitados pela parte.\n APELAÇÃO DA PARTE RÉ DESPROVIDA. \n \n APELAÇÃO DA PARTE AUTORA PARCIALMENTE PROVIDA.", "Apelações de Microsoft Corporation e de Delaminas Comércio e Exportação Ltda. contra sentença de parcial procedência em ação indenizatória cumulada com abstenção de uso. Vistoria em cautelar prévia constatou 81 cópias de sete programas da autora instaladas nos computadores da ré. A Câmara afastou a prescrição trienal (art. 206, §3º, V, do CC): o prazo conta do trânsito em julgado da cautelar de produção de provas (15/08/2014), e a ação foi proposta em 16/02/2017. No mérito, entendeu que o uso de programa de computador exige contrato de licença ou nota fiscal (art. 9º da Lei 9.609/98). A perícia identificou os programas instalados e a ré não provou a regularidade do uso, o que configura contrafação. Acolhendo o recurso da autora, considerou que o mero pagamento da licença estimularia a contrafação e fixou indenização de dez vezes o valor de mercado dos programas usados sem licença, na linha do STJ. Negou provimento à apelação da ré e deu parcial provimento à da autora. Unânime. Propriedade industrial: não em sentido estrito — trata-se de direito autoral sobre software (Lei 9.609/98), classificado no acórdão como 'propriedade industrial e intelectual'.", "BAIXAR O OUTRO PROCESSO", "", ""],
  ["70082848599 (Nº CNJ: 0256768-88.2019.8.21.7000)", "4/24/2020", "2020", "Sexta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des.ª Eliziana da Silveira Perez", "marca; colidência de marcas; uso exclusivo; concorrência desleal; marca evocativa; nulidade de registro pelo INPI; dano material in re ipsa; liquidação de sentença; abstenção de uso; apelação provida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL E INTELECTUAL. REGISTRO DE MARCA. DIREITO DE EXCLUSIVIDADE NA UTILIZAÇÃO. DANOS MATERIAIS CONFIGURADOS. INDeNIZAÇÃO DEVIDA.\n 1) Trata-se de ação proposta por JPLP que detém a titularidade da marca MAMMA MIA, restaurante e galeteria local e pretende a tutela inibitória e indenização em face da ré, que se utiliza da marca MAMA MIA PIZZARIA, sem registro válido, julgada improcedente na origem.\n 2) No caso telado, a manutenção da improcedência da demanda e, de conseguinte, a permissão judicial para que a ré continue a utilizar a marca já indeferida pelo próprio INPI, coloca em risco não só a higidez do Sistema Marcário, mas, sobretudo, a relação de consumo, de tal sorte que viabiliza e fomenta confusão entre os consumidores. Contudo, sem embargo, modo respeitoso, mas o provimento recursal é medida impositiva mormente como decorrência da apuração do ato ilícito e da concorrência desleal que restaram comprovados nos autos e não desmentida pelas rés.\n \n 3) Assim, considerando que a autora exibe e comprova o registro da marca que reivindica, perante o Órgão competente evidencia, com isso, que detém a titularidade dessa marca registrada e, por conta disso, tem assegurado o direito de exclusividade do uso da marca, impedindo-se o seu emprego por qualquer outra empresa ou pessoa, por acarretar prejuízo à sua legítima detentora, como também aos consumidores que ficam sujeitos à confusão em face da identidade de marcas.\n \n 4) Ademais, flagrada a existência de concorrência desleal e o ilícito perpetrados pela ré, de continuar utilizando a marca da autora, é caso, sem dúvida, de reconhecimento de dano material. Nessa temática, contudo, a orientação jurisprudencial do egrégio STJ, milita monoliticamente na proteção da marca registrada, inclusive reconhecendo o direito a danos materiais ao detentor da marca, senão diretamente apurado nos autos, no mínimo, a ser quantificado em liquidação de sentença.\n \n 5) Portanto, o exercício da concorrência desleal e a violação marcaria geram dano material in re ipsa , forte nas disposições dos arts. 209 e 210 da LPI, valores que devem ser apurados em fase de liquidação. Sentença reformada.\n APELAÇÃO PROVIDA", "Apelação de JPLP Empreendimentos Ltda., titular da marca registrada 'Mamma Mia' (restaurante e galeteria em Gramado), contra sentença que julgou improcedente sua ação inibitória e indenizatória contra Drammis Piveta Ltda.-ME, que usava 'Mama Mia Pizzaria' sem registro válido. O INPI havia indeferido o pedido da ré na classe 43 e anulado seu registro na classe 35, reconhecendo risco de confusão. A Relatora votou por negar provimento, entendendo que a marca da autora não tem originalidade suficiente para impor abstenção, com mitigação da exclusividade. Prevaleceu a divergência do Redator: o registro assegura uso exclusivo, e permitir que a ré continue usando sinal indeferido pelo INPI fomenta confusão do consumidor, estando comprovados o ilícito e a concorrência desleal. Por maioria, vencida a Relatora, a apelação foi provida para julgar a ação procedente. A ré deve abster-se de usar 'Mamma Mia/Mama Mia' por qualquer meio, inclusive domínio e redes sociais, sob multa diária de R$ 3.000,00 limitada a R$ 50.000,00, e suspender em 30 dias o domínio 'mammamiadelivery'. Os danos materiais in re ipsa (arts. 209 e 210 da LPI) serão apurados em liquidação. Propriedade industrial: sim — marca registrada, colidência, concorrência desleal.", "SOLICITAR PROCESSO", "", ""],
  ["70082909664 (Nº CNJ: 0262875-51.2019.8.21.7000)", "4/30/2020", "2020", "Sexta Câmara Cível", "Modelo de utilidade", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des. Luís Augusto Coelho Braga", "modelo de utilidade; cessão de direitos; INPI; nota promissória; ação anulatória de título de crédito; sustação de protesto; exceção de contrato não cumprido; causa debendi; ônus da prova; apelação desprovida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL. AÇÃO ANULATÓRIA DE TÍTULOS DE CRÉDITO. SUSTAÇÃO DE PROTESTOS. ANÁLISE DA RELAÇÃO NEGOCIAL SUBJACENTE. CESSÃO E TRANSFERÊNCIA DE DIREITOS E OBRIGAÇÕES SOBRE MODELO DE UTILIDADE COM PEDIDO DE DEPÓSITO JUNTO AO INPI. ALEGAÇÃO DE INADIMPLEMENTO CONTRATUAL POR PARTE DO RÉU. PROVA CONSTANTE DOS AUTOS QUE EVIDENCIA INEXECUÇÃO POR PARTE DA AUTORA. INAPLICABILIDADE DO ART. 476, CC. INCIDÊNCIA DO ART. 373, II, CPC. AUSÊNCIA DE VÍCIO NA CAUSA DEBENDI. EXIGIBILIDADE DO VALOR INADIMPLIDO. REGULARIDADE DOS PROTESTOS DECORRENTES. À UNANIMIDADE, NEGARAM PROVIMENTO AO APELO.", "Apelação de Ibrava Indústria Brasileira de Veículos Automotores Ltda. contra sentença que julgou improcedentes sua ação anulatória de títulos de crédito e a cautelar de sustação de protestos contra Agenor Luiz Boff. As notas promissórias protestadas estavam vinculadas a instrumento particular de confissão de dívida pelo qual a apelante adquiriu direitos e obrigações sobre um modelo de utilidade com pedido de depósito no INPI. A apelante sustentava que o réu se recusara a transferir a propriedade da patente, invocando a exceção de contrato não cumprido (art. 476 do CC), e que os títulos seriam inexigíveis por dependerem de notificação prévia. A Câmara examinou a relação negocial subjacente e concluiu que a prova dos autos evidencia inexecução por parte da própria autora, o que afasta o art. 476 do CC. Como a autora não demonstrou fato impeditivo do direito do réu (art. 373, II, do CPC), não há vício na causa debendi: o valor inadimplido é exigível e os protestos são regulares. Negou provimento ao apelo e majorou os honorários para R$ 3.500,00. Unânime. Propriedade industrial: sim, em caráter contratual — cessão de direitos sobre modelo de utilidade depositado no INPI; a controvérsia central é a exigibilidade dos títulos.", "SOLICITAR PROCESSO", "", ""],
  ["70083372003 (Nº CNJ: 0309109-91.2019.8.21.7000)", "6/25/2020", "2020", "Sexta Câmara Cível", "Direito Autoral", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des. Luís Augusto Coelho Braga", "direito autoral; plágio; monografia; trabalho de conclusão de curso; ausência de indicação de autoria; Lei 9.610/98; dano moral; ônus da prova; redução do quantum indenizatório; apelação parcialmente provida", "Apelação cível. Propriedade intelectual. DIREITO AUTORAL. plágio de monografia. autoria não referida. ônus probatório cumprido. art. 373, i, cpc. aplicação do art. 108 da Lei 9.610/98. ilícito que enseja o DEVER DE INDENIZAR. MINORAÇÃO do quantum indenizatório arbitrado. À UNANIMIDADE, deram parcial PROVIMENTO AO APELO.", "Apelação de Claudiene Reis dos Santos contra sentença que, em ação indenizatória movida por Isabel Medeiros de Castro, reconheceu plágio. A autora defendeu em 2012 trabalho de conclusão de curso sobre aspectos legais da psicopatia e publicou artigo derivado no site da PUCRS. Artigos assinados pela ré e publicados por outras instituições reproduziam, com reescrita, diversas partes desse trabalho. A sentença condenou a ré a pagar R$ 12.000,00 por dano moral e a citar a autora como autora dos trechos nas obras publicadas e futuras, além de impor obrigações às demais rés publicadoras. A apelante alegava descontextualização de trechos isolados, liberdade de expressão, inexistência de ato ilícito e de dano moral e, subsidiariamente, a redução do valor, por ser desempregada e assistida pela Defensoria Pública. A Câmara entendeu que a autora cumpriu seu ônus probatório (art. 373, I, do CPC). A reprodução sem indicação de autoria configura ilícito que gera o dever de indenizar (art. 108 da Lei 9.610/98). Considerando a condição das partes e a extensão do dano, reduziu a indenização para R$ 6.000,00, mantidos juros e correção. Parcial provimento, unânime. Propriedade industrial: não — direito autoral (Lei 9.610/98), classificado no acórdão como propriedade intelectual.", "SOLICITAR PROCESSO", "", ""],
  ["70083402438 (Nº CNJ: 0312152-36.2019.8.21.7000)", "3/31/2021", "2021", "Quinta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des. Jorge Luiz Lopes do Canto", "marca; uso indevido de marca; contrafação; busca e apreensão; dano moral in re ipsa; lucro cessante; liquidação por arbitramento; apelação provida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL E INTELECTUAL. AÇÃO COMINATÓRIA CUMULADA COM INDENIZAÇÃO. USO INDEVIDO DE MARCA. CONTRAFAÇÃO. DANOS MORAIS. OCORRÊNCIA. DANOS MATERIAIS. APURAÇÃO EM LIQUIDAÇÃO DE SENTENÇA. \n 1.\n A propriedade industrial tem proteção constitucional, visando estimular o progresso técnico e científico, considerando o interesse social e econômico do país. A par disso, em vista de uma maior proteção ao autor da criação industrial, bem como a especificação e desenvolvimento da matéria, foi editada a Lei nº 9.279 de 1996, conhecida como Lei de Propriedade Industrial, na qual é limitado o âmbito de atuação da proteção aos direitos relativos à propriedade industrial.\n \n 2.\n A parte postulante comprovou a comercialização de produtos com a sua marca sem a devida autorização, inclusive com preço bem inferior àquele constante de produtos licenciados, podendo ocasionar danos à imagem da autora.\n 3.\n Danos morais. No que tange à prova do dano moral, por se tratar de lesão imaterial, desnecessária a demonstração do prejuízo, na medida em que possui natureza compensatória, minimizando de forma indireta as consequências da conduta da ré, decorrendo aquele do próprio fato. Conduta ilícita da demandada que faz presumir os prejuízos alegados pela parte autora, é o denominado dano moral puro. \n \n 4.\n A entidade desportiva autora, possuindo estabelecimento comercial, cuja preservação dos requisitos que constituem a esta universalidade de bens e direitos é essencial para manutenção de sua prática comercial usual. Portanto, a utilização por outra empresa da mesma marca gera prejuízos de monta, em especial, quanto ao nome comercial e a imagem, na medida em que a preservação do nome junto aos clientes é de suma importância.\n \n 5.\n O valor a ser arbitrado a título de indenização por dano imaterial deve levar em conta o princípio da proporcionalidade, bem como as condições da ofendida, a capacidade econômica do ofensor, além da reprovabilidade da conduta ilícita praticada. Por fim, há que se ter presente que o ressarcimento do dano não se transforme em ganho desmesurado, importando em enriquecimento ilícito.\n \n 6.\n Danos materiais. Releva ponderar, ainda, que, quando da ocorrência de um dano material, duas subespécies de prejuízos exsurgem desta situação, os danos emergentes, ou seja, aquele efetivamente causado, decorrente da diminuição patrimonial sofrida pela vítima; e os lucros cessantes, o que esta deixou de ganhar em razão do ato ilícito.\n \n 7.\n Deste modo, diante do reconhecimento da utilização indevida pela parte ré de marca de propriedade da parte autora, é perfeitamente cabível a condenação daquela ao pagamento de lucros cessantes, que deverão ser apurados em sede de liquidação de sentença por arbitramento.\n Dado provimento ao apelo", "Apelação do Sport Club Internacional contra sentença de parcial procedência em ação cominatória cumulada com indenização movida contra Nelso Rodrigues Bazar. A sentença apenas determinou que o réu se abstivesse de comercializar, estocar ou expor à venda produtos contrafeitos, sob multa de R$ 1.000,00. A Câmara reconheceu que o autor comprovou a comercialização não autorizada de produtos com sua marca, a preços bem inferiores aos licenciados, com potencial de dano à sua imagem. Com base na Lei 9.279/96, considerou o dano moral in re ipsa: a conduta ilícita faz presumir o prejuízo, sobretudo pela importância do nome e da imagem da entidade desportiva, que também mantém atividade comercial. Quanto aos danos materiais, reconhecido o uso indevido da marca, entendeu cabíveis lucros cessantes, a apurar em liquidação por arbitramento com base no auto de busca e apreensão. Deu provimento ao apelo para julgar procedentes os pedidos, condenando o réu a R$ 6.000,00 por danos morais, aos lucros cessantes, às custas proporcionais e a honorários de 15% da condenação. Unânime. Propriedade industrial: sim — uso indevido de marca e contrafação.", "SOLICITAR PROCESSO", "", ""],
  ["70083604116 (Nº CNJ: 0332320-59.2019.8.21.7000)", "2/20/2020", "2020", "Sexta Câmara Cível", "Marca", "VERIFICAR NO PROCESSO", "-", "0", "-", "-", "NÃO", "-", "-", "INDETERMINÁVEL", "NÃO", "-", "-", "-", "-", "-", "-", "-", "-", "-", "NÃO", "-", "-", "NÃO SE APLICA", "NÃO SE APLICA", "NÃO", "NÃO SE APLICA", "-", "NÃO", "Des. Niwton Carpes da Silva", "marca; contrafação; produto falsificado; concorrência desleal; busca e apreensão; dano material; dano moral; lucros cessantes; liquidação de sentença; apelação desprovida", "apelação cível. direito da propriedade industrial, intelectual e direito autoral. concorrência desleal. contrafação e produtos falsificados. indenização. danos materiais e morais. lucros cessantes não comprovados.\n 1) Trata-se de ação de obrigação de não fazer consistente na imputação de venda de produtos contrafeitos e falsificados, com pedido de indenização por danos materiais, danos morais e lucros cessantes, julgada parcialmente procedente na origem.\n 2) As razões recursais são genéricas e inespecíficas, pois limitam-se a postulação dos danos materiais e danos morais, quando, na verdade, a sentença fustigada contemplou o autor-apelante com os danos materiais postulados, justamente na medida do pedido, apenas que açambarcando nos danos materiais também o pedido de lucros cessantes, a serem apurados em liquidação de sentença nos termos do art.210 da Lei Federal n.9279/96, exatamente como postulado.\n 3) De resto, a r. sentença contemplou o autor com os pedidos, nos exatos termos em que formulados, por isso o decisum vai mantido por seus próprios e jurídicos fundamentos.\n APELAÇÃO DESPROVIDA", "Apelação do Sport Club Internacional contra sentença de parcial procedência em ação de obrigação de não fazer cumulada com indenização movida contra Maserpel Comércio de Alimentos Ltda., acusada de vender produtos falsificados com nomes, símbolos, logotipos e marcas do clube. Na busca e apreensão liminar foram apreendidas três cuias de chimarrão. A sentença determinou a abstenção, sob multa diária de R$ 300,00. Condenou a ré em danos materiais a liquidar, limitados à diferença entre o valor da mercadoria apreendida e o do original correspondente, e em R$ 3.000,00 de danos morais, com sucumbência recíproca de 50%. O autor pedia na apelação danos materiais, morais e lucros cessantes. A Câmara considerou as razões genéricas e inespecíficas: a sentença já concedera os danos materiais na medida do pedido, abrangendo os lucros cessantes, a apurar em liquidação nos termos do art. 210 da Lei 9.279/96, e também os danos morais. Manteve a sentença por seus próprios fundamentos, inclusive a sucumbência, e negou provimento à apelação. Unânime. Propriedade industrial: sim — marca, contrafação e concorrência desleal.", "5003068-32.2016.8.21.0039 (físico 039/1.16.0008711-4; CNJ antigo 0020581-98.2016.8.21.0039; apelação 70083604116; cumprimento 5011887-74.2024)", "2ª Vara Cível da Comarca de Viamão", "-"],
  ["70083605006 (Nº CNJ: 0332409-82.2019.8.21.7000)", "4/2/2020", "2020", "Quinta Câmara Cível", "Desenho industrial", "VERIFICAR NO PROCESSO", "Laudos emprestados: Elio Grossman (Doutor em Ciências, Mestre em Engenharia de Produção, Designer Industrial — 13ª VF/RJ) e Gabriele Sarmento da Silva (especialista em propriedade intelectual, engenheira — VF de Bento Gonçalves)", "0", "-", "-", "NÃO", "-", "-", "INDETERMINÁVEL", "SIM", "AUTOR", "NÃO IDENTIFICADO", "-", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "-", "-", "-", "SIM", "-", "-", "NÃO", "NÃO", "NÃO", "NÃO", "-", "NÃO", "Des. Jorge Luiz Lopes do Canto", "desenho industrial; nulidade de registro; efeito ex tunc; fato superveniente; contrafação; concorrência desleal; INPI; honorários recursais; apelação desprovida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL E INTELECTUAL. indenização por danos IMATERIAIS e MATERIAIS. uso indevido de desenho industrial. REGISTRO DECLARADO NULO. contrafação. inocorrência. \n \n 1.\n No caso em tela a parte autora pretende ser ressarcida dos danos materiais e morais experimentados em razão da utilização indevida pelos réus do desenho industrial DI7005115-1 (configuração aplicada em perfil) de titularidade da demandante.\n \n 2.\n A propriedade industrial tem proteção constitucional, visando estimular o progresso técnico e científico, considerando o interesse social e econômico do país. A par disso, em vista de uma maior proteção ao autor da criação industrial, bem como a especificação e desenvolvimento da matéria, foi editada a Lei nº 9.279 de 1996, conhecida como Lei de Propriedade Industrial, na qual é limitado o âmbito de atuação da proteção aos direitos relativos à propriedade industrial.\n 3.\n A Lei de Propriedade Industrial estabelece que desenho industrial é a forma plástica ornamental de um objeto ou o conjunto ornamental de linhas e cores que possa ser aplicado a um produto, proporcionando resultado visual novo e original na sua configuração externa e que possa servir de tipo de fabricação industrial.\n 4.\n Ressalta-se que a propriedade do desenho industrial se adquire pelo registro validamente expedido, o qual garante ao titular o seu uso exclusivo em todo o território nacional, nos termos do artigo 109 da Lei nº 9.279/96.\n \n 5.\n No caso em exame verifica-se que, embora tivesse a parte autora registro do desenho industrial DI 7005115-1 (configuração aplicada em perfil), este foi declarado nulo em 26/12/2017, consoante se verifica de consulta ao site do Instituto Nacional de Propriedade Intelectual.\n \n 6.\n Ocorre que, configurando fato superveniente à propositura da demanda – o que deve ser considerado em função do disposto no artigo 493 do CPC -, restou reconhecida a nulidade do aludido registro.\n 7.\n Ressalte-se que os efeitos da decisão que reconhece a nulidade do registro de desenho industrial são ex tunc, ou seja, retroagem a data do depósito do pedido do registro, de forma que o desenho industrial da demandante perde a proteção que era conferida pelo registro, uma vez que aquele havia sido concedido em desacordo com as disposições da Lei da Propriedade Industrial, não produzindo, portanto, efeitos. Precedente do Superior Tribunal de Justiça.\n \n 8.\n Assim, não demonstrada a existência do registro válido e eficaz, ônus que impunha à parte autora e do qual não se desincumbiu, a teor do que estabelece o art. 373, inciso I, da novel legislação processual, inexiste dever de indenizar.\n \n 9.\n A empresa demandada não praticou qualquer das condutas tipificadas como concorrência desleal, haja vista que o registro do desenho industrial da demandante foi declarado nulo.\n 10.\n Ressalte-se, ainda, que a concorrência desleal pressupõe a prática ilícita para obtenção de clientela atuando em evidente prejuízo dos concorrentes, sendo que aquela se caracteriza em função dos meios empregados que, no caso dos autos, seria a utilização do desenho industrial da parte autora pelos demandados.\n \n 11.\n Por conseguinte, sem esta condição essencial para caracterização do meio desleal empregado, isto é, o registro do desenho industrial válido e eficaz, descaracterizado está a alegada concorrência desleal.\n 12.\n Dessa forma, não merece prosperar a pretensão da parte autora, devendo ser mantida a sentença de primeiro grau.\n 13.\n Os honorários advocatícios deverão ser majorados quando a parte recorrente não lograr êxito neste grau de jurisdição, independente de pedido a esse respeito, devido ao trabalho adicional nesta instância, de acordo com os limites fixados em lei. Inteligência do art. 85 e seus parágrafos do novel CPC. \n \n Negado provimento ao recurso.", "Apelação de Torralba Indústria e Comércio Ltda. e Alberto Avetti contra sentença de improcedência em ação de abstenção de ato ilícito cumulada com indenização por danos morais e materiais movida contra Zen Acessórios para Móveis Ltda. e Cleber Luiz da Ré. Os autores alegavam uso indevido pelos réus do desenho industrial DI 7005115-1 (configuração aplicada em perfil), de sua titularidade, e concorrência desleal. A Câmara lembrou que a propriedade do desenho industrial se adquire pelo registro validamente expedido, que assegura uso exclusivo (art. 109 da LPI). Como fato superveniente à propositura da ação (art. 493 do CPC), constatou em consulta ao INPI que o registro foi declarado nulo em 26/12/2017. A nulidade tem efeitos ex tunc, retroagindo ao depósito, conforme precedente do STJ. Sem registro válido e eficaz, ônus que cabia aos autores (art. 373, I, do CPC), não há contrafação nem dever de indenizar. Também não há concorrência desleal, pois o meio desleal imputado seria justamente o uso do desenho protegido. Negou provimento ao recurso, mantendo a sentença, e fixou honorários recursais de 10% sobre o valor atualizado da causa. Unânime. Propriedade industrial: sim — desenho industrial, nulidade do registro com efeitos ex tunc e concorrência desleal.", "5000068-21.2014.8.21.0095 (físico 095/1.14.0002947-9; CNJ antigo 0005186-63.2014.8.21.0095; apelação 70064111321)", "1ª Vara Judicial da Comarca de Estância Velha", "Laudos emprestados: Elio Grossman (Doutor em Ciências, Mestre em Engenharia de Produção, Designer Industrial — 13ª VF/RJ) e Gabriele Sarmento da Silva (especialista em propriedade intelectual, engenheira — VF de Bento Gonçalves)"],
  ["70083606756 (Nº CNJ: 0332584-76.2019.8.21.7000)", "5/27/2020", "2020", "Quinta Câmara Cível", "Desenho industrial", "SIM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des. Jorge André Pereira Gailhard", "desenho industrial; concorrência desleal; perícia realizada; cerceamento de defesa; quesito de esclarecimento; dano moral in re ipsa; dano material; liquidação de sentença; apelação parcialmente provida", "AÇÃO DE OBRIGAÇÃO DE NÃO FAZER CUMULADA COM INDENIZAÇÃO POR DANOS MATERIAIS E MORAIS. DESENHO INDUSTRIAL. SAPATILHA. CONCORRÊNCIA DESLEAL. COMPROVAÇÃO. DANOS MATERIAIS. LIQUIDAÇÃO DE SENTENÇA. DANOS MORAIS. OCORRÊNCIA.\n I. Preliminar. Impossibilidade jurídica do pedido. Primeiramente, diga-se que a parte autora pretende que a requerida se abstenha de fabricar e comercializar qualquer calçado que copie e imite o modelo “Melissa Campana Fitas”, bem como a condenação da demandada ao pagamento de indenização por danos materiais e morais, não havendo falar em ocorrência da alegada hipótese prevista no art. 295, III, do CPC/1973, vigente à época do ajuizamento da ação. De outro lado, não há óbice para o ajuizamento da presente ação sem a prévia notificação acerca da alegada concorrência desleal praticada pela requerida, especialmente considerando o direito de ação previsto ao prejudicado no art. 207, da Lei nº 9.279/96. \n II. Preliminar. Cerceamento de defesa. Ausência de intimação da ré para participar da prova técnica. De igual forma, não prospera a preliminar arguida, uma vez que o conjunto probatório atesta, realmente, que a perita judicial sempre possibilitou às partes e inclusive aos respectivos assistentes técnicos o acompanhamento da diligência. Tal fato percebe-se claramente através da troca de e-mails, nos quais resta incontroverso que a parte requerida informa que nenhum de seus representantes poderá comparecer na diligência agendada, por conta de dificuldades financeiras. Outrossim, a perita judicial informou nos autos a possibilidade das partes encaminharem quaisquer materiais relevantes para a análise quando da elaboração do laudo, momento em que a demandada não apresentou nenhuma manifestação. \n III. Preliminar. Cerceamento de defesa. Indevido indeferimento dos quesitos de esclarecimentos da parte ré. Efetivamente, nos termos do art. 477, § 2º, I, do CPC, o perito judicial tem o dever de esclarecer os pontos de dúvida de qualquer uma das partes. No entanto, os mencionados quesitos foram indeferidos naquele momento por serem idênticos àqueles apresentados anteriormente. E, diga-se que houve a resposta, de forma satisfatória, dos mencionados quesitos de esclarecimentos, nos termos da manifestação da perita judicial. Na verdade, a irresignação da demandada é efetivamente relacionada com o resultado da lide, não havendo motivos para a desconstituição da sentença.\n IV. No caso, não restam dúvidas de que a autora possui o registro do desenho industrial BR 30 2013 002390 7, referente a configurações aplicadas em sapatilhas, com concessão em 03/06/2014.\n V. Por certo, o direito de propriedade industrial está protegido pela Constituição Federal e pela Lei de Propriedade Industrial. Inteligência do art. 5º, inciso XXIX, da Carta Magna e do art. 2º, e 95, da Lei nº 9.279/96 (Lei da Propriedade Industrial). \n VI. E, no caso concreto, durante a instrução processual, foi efetuada perícia judicial, na qual a perita entendeu pela ocorrência da violação do referido desenho industrial, mormente levando em consideração que a sapatilha das requeridas foi desenvolvida com características visuais e ornamentais presentes no registro protegido da autora (a partir do design das originais – Melissa Campana). Inclusive, conforme a perita judicial, a semelhança entre os produz claramente induz os consumidores à associação indevida destes, sendo caracterizada a concorrência desleal. \n VII. Nestas circunstâncias, a autora comprovou, suficientemente, os fatos constitutivos de seu direito, a teor do art. 373, I, do CPC, restando caracterizada a concorrência desleal, tendo em vista a violação do desenho industrial. \n VIII. Em relação aos danos materiais, é certo que a violação aos desenhos industriais causou prejuízo à parte autora, devendo a questão ser resolvida mediante liquidação de sentença, em conformidade com o art. 208 e seguintes, da Lei nº 9.279/96.\n IX. De outro lado, a hipótese dos autos reflete o dano moral in re ipsa ou dano moral puro, em razão da violação do desenho industrial à parte autora, o que caracteriza a concorrência desleal, conferindo o direito à reparação sem a necessidade de produção de outras provas. \n X. Fixação da indenização, tendo em vista o potencial econômico das partes, a gravidade do fato, o caráter punitivo-pedagógico da reparação e os parâmetros adotados por esta Câmara em casos semelhantes. A correção monetária pelo IGP-M incide a partir do presente arbitramento, na forma da Súmula 362, do STJ. Os juros moratórios de 1% ao mês contam-se a partir do evento danoso, por se tratar de relação extracontratual, observada a Súmula 54, do STJ.\n XI. No mais, assiste razão à requerida no que concerne ao afastamento da obrigação de fazer no sentido de retirar os produtos já comercializados e colocados no mercado, sob pena de multa diária, uma vez que tal determinação, além de desproporcional, não é possível de ser cumprida, especialmente considerando que tais sapatilhas não se encontram mais em posse da ré. \n XII. Os artigos de lei suscitados pelas partes consideram-se incluídos no acórdão para fins de prequestionamento, a teor do art. 1.025, do CPC, sendo desnecessária a referência expressa a todos os dispositivos aventados.\n PRELIMINARES REJEITADAS.\n APELAÇÕES PARCIALMENTE PROVIDAS.", "Apelações de Grendene S.A. (autora) e de Indústria de Calçados Via Beach Ltda. (ré) contra sentença de parcial procedência em ação de obrigação de não fazer cumulada com indenização. A sentença proibiu a ré de fabricar e vender sapatilhas que imitam o modelo 'Melissa Campana Fitas', registrado como desenho industrial BR 30 2013 002390 7, ordenou o recolhimento dos produtos já comercializados, sob multa, e condenou a ré em danos materiais a liquidar (arts. 208 e 210 da LPI). Negou, porém, os danos morais. A Câmara rejeitou as preliminares da ré de impossibilidade jurídica do pedido, falta de notificação prévia (art. 207 da LPI) e cerceamento de defesa, pois a ré teve oportunidade de acompanhar a perícia e seus quesitos foram respondidos. No mérito, a perícia constatou que a sapatilha da ré reproduz as características ornamentais do desenho registrado e induz o consumidor à associação indevida, configurando violação e concorrência desleal. Deu parcial provimento ao apelo da autora para fixar danos morais in re ipsa de R$ 15.000,00, redimensionando a sucumbência. Deu parcial provimento ao da ré apenas para afastar a ordem de retirada dos produtos já colocados no mercado, por ser desproporcional e inexequível. Unânime. Propriedade industrial: sim — desenho industrial e concorrência desleal.", "PROCESSO DE CONHECIMENTO NÃO LOCALIZADO", "", ""],
  ["70083653774 (Nº CNJ: 0003736-21.2020.8.21.7000)", "7/30/2020", "2020", "Sexta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des. Luís Augusto Coelho Braga", "marca; abstenção de uso de marca; colidência de marcas; competência da Justiça Federal; nulidade de registro; INPI; reconvenção; perícia contábil; perícia realizada; extinção sem resolução de mérito", "Apelação cível. Propriedade industrial. Ação de abstenção de uso de marca. Processual civil. Impossibilidade de análise do pedido na Justiça Estadual, sob pena de ofensa ao art. 109, I, da CF/88. Regra de Competência absoluta. Aplicação do REsp 1527232/SP, submetido ao rito dos julgamentos repetitivos. A determinação de abstenção de uso de marca devidamente registrada no INPI, autarquia federal, demanda eventual declaração de nulidade do ato administrativo que concedeu o registro, circunstância que atrai a incidência do art. 175 da LPI. Competência privativa da Justiça Federal. À unanimidade, acolhida a preliminar contrarrecursal, julgaram extinta a ação sem análise de mérito.", "Apelação de Gang Comércio do Vestuário Ltda. e recurso adesivo de Mar Quente Confecções Ltda. contra sentença que julgou improcedentes a ação de abstenção de uso de marca cumulada com indenização e a reconvenção. A autora, titular da marca 'GANG' em diversas classes, alegava que a ré, que confeccionara para ela produtos com essa marca desde 2006, passou a usar a marca 'GANGSTER' destacando o radical 'GANG' para confundir o consumidor. Pedia abstenção e danos materiais e morais. O recurso adesivo pedia apenas a majoração dos honorários. A Câmara acolheu a preliminar contrarrecursal de incompetência absoluta da Justiça Estadual. A ré é titular de registros da marca 'GANGSTER' concedidos pelo INPI, que reconheceu distintividade entre os sinais. Assim, a abstenção pretendida pressupõe a anulação desses registros, o que atrai o art. 175 da LPI e a competência da Justiça Federal, com participação do INPI (art. 109, I, da CF), conforme o REsp repetitivo 1.527.232/SP. Julgou extinto o processo sem resolução do mérito (art. 485, IV, do CPC) e condenou a autora em custas e honorários de R$ 5.000,00, fixados por equidade (art. 85, §8º). Unânime. Propriedade industrial: sim — marca registrada, colidência entre registros e competência da Justiça Federal.", "SOLICITAR PROCESSO", "", ""],
  ["70083916585 (Nº CNJ: 0030017-14.2020.8.21.7000)", "12/10/2020", "2020", "Sexta Câmara Cível", "Desenho industrial", "SIM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des. Luís Augusto Coelho Braga", "desenho industrial; contrafação; peça de união para rodaforro; perícia realizada; similaridade; forma plástica ornamental; ônus da prova; dano moral; sentença mantida; apelação desprovida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL. AÇÃO COMINATÓRIA CUMULADA COM PLEITO INDENIZATÓRIO. CONTRAFAÇÃO DE DESENHO INDUSTRIAL. INOCORRÊNCIA. AUSÊNCIA DE ELEMENTOS PROBANTES. ÔNUS DA PARTE AUTORA. ART. 373, I, CPC. A simples similaridade não revela conduta inadmitida pela lei 9.279/96. SENTENÇA MANTIDA. À UNANIMIDADE, NEGARAM PROVIMENTO AO APELO.", "Apelação de Bianchini Indústria de Plásticos Ltda. contra sentença que julgou improcedente sua ação de obrigação de não fazer cumulada com indenização por danos materiais e morais contra Nichelepast Indústria e Comércio. A autora, titular de registro de desenho industrial de configuração aplicada em peça de união para rodaforro, comercializada em kits desde 2009, acusava a ré de vender produto similar em contrafação. A ré sustentou que apenas revende peças adquiridas de terceiro, que há diferenças relevantes entre os produtos e que o registro da autora ainda era objeto de recurso no INPI. A sentença fixou honorários de R$ 10.000,00, diante do valor irrisório atribuído à causa (R$ 1.268,00). Na apelação, a autora invocou o art. 95 da LPI e a conclusão pericial de que as peças têm o mesmo formato, embora com métodos de encaixe diferentes, e pediu danos morais. A Câmara entendeu não haver prova cabal de contrafação, ônus da autora (art. 373, I, do CPC): a simples similaridade entre os produtos não configura conduta vedada pela Lei 9.279/96. Negou provimento ao apelo e majorou os honorários para R$ 12.000,00. Unânime. Propriedade industrial: sim — desenho industrial e alegada contrafação.", "PROCESSO DE CONHECIMENTO NÃO LOCALIZADO", "", ""],
  ["70083918292 (Nº CNJ: 0030188-68.2020.8.21.7000)", "7/30/2020", "2020", "Sexta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des.ª Denise Oliveira Cezar", "marca; nome empresarial; sociedade de advogados; patronímico; concorrência desleal; coisa julgada; Estatuto da Advocacia; reconvenção; apelação desprovida", "APELAÇÃO. PROPRIEDADE INTELECTUAL. AÇÃO DE OBRIGAÇÃO DE NÃO FAZER. KOCH ADVOGADOS ASSOCIADOS S/S KOCH & KOCH, PUGINA ADVOGADOS ASSOCIADOS S/S. ABSTENÇÃO DO USO DE MARCA. CONFLITO ENTRE MARCA E DENOMINAÇÃO SOCIAL DE SOCIEDADE DE ADVOGADOS. ELEMENTOS DIFERENCIADORES. AUSÊNCIA DE CONFUSÃO E CONCORRÊNCIA DESLEAL.\n \n A concorrência torna-se desleal quando um empreendedor, utilizando-se do princípio da livre concorrência, vale-se de práticas violadoras dos princípios da boa-fé e da lealdade, que podem criar dúvidas e confusão entre estabelecimentos comerciais, industriais ou de prestadores de serviço, ou entre produtos e serviços, com o propósito de seduzir a clientela do seu concorrente de mercado.\n \n Uma das práticas que geram essa confusão é a assemelhação indevida de marca representativa de um mesmo produto ou serviço, seja de imagem, de nome ou de outro elemento distintivo que impossibilite a distinção natural pelos consumidores. Arts. 5º, inciso XXIX, e 170 170, da CRFB. Arts. 2º e 129 da Lei nº 9.279/96. \n Não há como impedir que os sócios de sociedade de advogados utilizem o seu patronímico em parte da sua razão social.\n \n O art. 124, XV, da Lei de Propriedade Industrial define expressamente como não registráveis como marca “nome civil ou sua assinatura, nome de família ou patronímico e imagem de terceiros, salvo com consentimento do titular, herdeiros ou sucessores”.\n \n O detentor do patronímico, nome de família e/ou nome civil mantém os seus direitos da personalidade na esfera cível. Direitos da personalidade, regulados pelo Código Civil.\n \n O registro e controle das denominações sociais das sociedades de advogados é de competência exclusiva da Ordem dos Advogados do Brasil, sendo vedado seu registro em qualquer outro órgão \n \n A nomenclatura da sociedade ré atende às exigências dos artigos 15, § 3º e 16, §§ 1º e 3º da Lei nº 8.906/1994 (Estatuto da Advocacia e a OAB): “Não são admitidas a registro, nem podem funcionar, as sociedades de advogados que apresentem forma ou características mercantis, que adotem denominação de fantasia, que realizem atividades estranhas à advocacia, que incluam sócio não inscrito como advogado ou totalmente proibido de advogar.” “A razão social deve ter, obrigatoriamente, o nome de, pelo menos, um advogado responsável pela sociedade, podendo permanecer o de sócio falecido, desde que prevista tal possibilidade no ato constitutivo”.\n \n Diferentemente da sociedade mercantil, em que inexiste óbice à adoção de denominação social diversa do sobrenome dos sócios, na sociedade de advogados a denominação deve conter, obrigatoriamente, o nome de pelo menos um advogado, visando possibilitar que terceiros possam identificar os componentes da sociedade. \n “O direito de marca da embargada não pode impedir que se utilize a expressão KOCH na razão social de uma sociedade de advogados, pois é o patronímico de seus sócios e o fator essencial para o livre e responsável exercício de sua atividade profissional” Recurso Especial nº 954.272, de relatoria da e. Ministra Nancy Andrighi).\n A repetição do sobrenome KOCH aliada ao sobrenome PUGINA são elementos diferenciadores suficientes a impedir a confusão com a denominação KOCH ADVOGADOS ASSOCIADOS S/S, não havendo necessidade, para tal diferenciação, de exclusão da palavra KOCH do início do nome, e muito menos da expressão “Advogados Associados”, utilizada amplamente, quase como padrão, pelos escritórios de advocacia, como sugere a apelante.\n \n O nome utilizado pela sociedade ré, além de atender às exigências do Estatuto da Advocacia, a fim de bem identificá-la no mercado, contém elementos que bem o diferencia do nome da autora-apelante, inexistindo a hipótese de utilização indevida para a prática de concorrência desleal, já que ambas sociedades são prestadoras de serviços atuantes em um mesmo mercado. Sentença de improcedência mantida. Fixação de honorários recusais.\n \n APELAÇÃO DESPROVIDA. UNÂNIME.", "Apelação de Koch Advogados Associados S/S, cujos sócios são titulares da marca 'KOCH' no INPI, contra sentença que julgou improcedente sua ação cominatória cumulada com perdas e danos contra Koch & Koch, Pugina Advogados Associados S/S. A sociedade ré é formada por advogados de sobrenome Koch, e a autora alegava concorrência desleal e descumprimento do decidido pelo STJ no REsp 954.272. Pedia a exclusão de 'KOCH' do início do nome da ré e da expressão 'Advogados Associados' ou, alternativamente, a inclusão de outros elementos distintivos. A Câmara destacou que o Estatuto da Advocacia (arts. 15 e 16 da Lei 8.906/94) exige que a razão social da sociedade de advogados contenha o nome de ao menos um advogado. Destacou ainda que o registro dessas denominações compete exclusivamente à OAB e que o patronímico não é registrável como marca sem consentimento (art. 124, XV, da LPI). Seguindo o STJ, entendeu que a marca não impede os sócios de usar o próprio sobrenome. A repetição de 'Koch' somada a 'Pugina' diferencia suficientemente as denominações, sem confusão nem concorrência desleal. Apelação desprovida e honorários majorados para R$ 5.000,00. Unânime. Propriedade industrial: sim — conflito entre marca registrada e denominação de sociedade de advogados, concorrência desleal.", "SOLICITAR PROCESSO", "", ""],
  ["70083951632 (Nº CNJ: 0033522-13.2020.8.21.7000)", "4/29/2020", "2020", "Quinta Câmara Cível", "Modelo de utilidade", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des.ª Lusmary Fatima Turelly da Silva", "modelo de utilidade; contrafação; perícia não realizada; dano moral; quantum indenizatório; juros de mora; Súmula 54 do STJ; responsabilidade extracontratual; apelação provida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL. UTILIZAÇÃO INDEVIDA DE MODELO DE UTILIDADE DESENVOLVIDO E REGISTRADO PELO AUTOR. RECURSO QUE OBJETIVA A MAJORAÇÃO DO VALOR ARBITRADO A TÍTULO DE DANOS MORAIS. QUANTUM INDENIZATÓRIO MAJORADO. juros de mora. termo inicial. SÚMULA Nº 54 DO SUPERIOR TRIBUNAL DE JUSTIÇA.\n \n 1. Demonstrada a utilização indevida, pela ré, de modelo de utilidade desenvolvido e devidamente registrado pelo autor, conforme delineado em sentença, a inconformidade do autor cinge-se à majoração do valor arbitrado a título de indenização por danos morais em razão de tal ilícito e à modificação do termo inicial de incidência dos juros moratórios, pugnando pela aplicabilidade da Súmula nº 54 do e. STJ.\n 2. O quantum indenizatório deve observar os princípios da proporcionalidade e da razoabilidade, assim como os demais elementos que devem ser considerados na quantificação dos danos morais, tais como: a gravidade da conduta ilícita, a intensidade e a duração das consequências, a condição econômica das partes e o dúplice caráter da medida (pedagógico e compensatório). O montante deve compensar o ofendido, mas não pode se constituir em uma fonte de enriquecimento ilícito para a parte.\n 3. Nesse contexto, bem como atentando-se para os princípios da razoabilidade e da proporcionalidade, majora-se o valor da indenização por danos morais para o montante de R$ 10.000,00 (dez mil reais), corrigido pelo IGP-M a partir do arbitramento e acrescido de juros de 01% ao mês a contar evento danoso, a teor da súmula 54 do e. STJ, restando alterada a r.sentença no ponto.\n APELAÇÃO PROVIDA.", "Apelação de Luiz Antonio Macedo Ramos contra sentença que julgou procedente sua ação de cessação de contrafação cumulada com perdas e danos contra Hidro Didática Equipamentos Educacionais Ltda. O autor, físico e inventor, é titular de patente de modelo de utilidade ('Disposição Construtiva Introduzida no Colchão Linear Carboneira', carta expedida em 2008) e acusava a ré de comercializar o produto patenteado e reproduzir trechos de sua obra científica. A sentença determinou a busca e apreensão e a proibição de uso e venda dos equipamentos e condenou a ré em R$ 3.000,00 por danos morais, com juros desde a citação, além de indenização material. Como a utilização indevida ficou demonstrada e não foi objeto de recurso da ré, o apelo do autor restringiu-se ao valor dos danos morais e ao termo inicial dos juros. A Câmara, atenta à gravidade da conduta, à condição das partes e ao caráter pedagógico e compensatório, majorou a indenização para R$ 10.000,00, corrigida pelo IGP-M desde o arbitramento. Por se tratar de responsabilidade extracontratual (Súmula 54 do STJ), fixou os juros a partir do evento danoso, marcado pelas atas notariais de 11/09/2012. Apelação provida, sucumbência inalterada. Unânime. Propriedade industrial: sim — patente de modelo de utilidade e contrafação.", "SOLICITAR PROCESSO", "", ""],
  ["70083952168 (Nº CNJ: 0033575-91.2020.8.21.7000)", "5/27/2020", "2020", "Quinta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des.ª Isabel Dias Almeida", "marca; abstenção de uso de marca; contrato de franquia; reconvenção; litispendência; extinção sem resolução do mérito; litigância de má-fé; apelação desprovida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL. AÇÃO DE ABSTENÇÃO C/C INDENIZAÇÃO. VIOLAÇÃO DE MARCA. LITISPENDÊNCIA RECONHECIDA. PROCESSO EXTINTO.\n \n 1. Litispendência. O anterior ajuizamento de reconvenção pelo ora autor contra o réu pleiteando a abstenção do uso de marca de sua titularidade e indenização por utilização indevida do sinal ante a rescisão do contrato de franquia implica na ocorrência da litispendência. Inteligência do dos arts. 337, §§2º e 3º e 485, V, ambos do CPC. Sentença mantida.\n \n 2. Litigância de má-fé da parte recorrente. Conduta que não se reconhece. Ausência dos pressupostos autorizadores. \n \n RECURSO DESPROVIDO.", "Apelação de Valdyr Moraes ME contra sentença que extinguiu sem resolução do mérito, por litispendência (arts. 337, §§2º e 3º, e 485, V, do CPC), sua ação de abstenção de uso de marca cumulada com indenização movida contra Rodrigo dos Santos Marques Restaurante-ME. O apelante sustentava que não há identidade com a reconvenção que ajuizara anteriormente (processo 001/1.16.0119462-6). Nesta ação, a causa de pedir seria o registro da marca e a indenização pelo uso indevido (art. 130 da LPI). Na reconvenção, o fundamento seria o contrato de franquia e o pedido, o pagamento de royalties (Lei 8.955/94). Acrescentou que as teses de defesa do réu seriam opostas nos dois feitos. A Câmara entendeu que a reconvenção anterior já pleiteava a abstenção do uso da marca de titularidade do autor e indenização pela utilização indevida do sinal após a rescisão do contrato de franquia. Reconheceu, assim, a identidade de partes, pedidos e causa de pedir, mantendo a extinção. Rejeitou o pedido do apelado de condenação por litigância de má-fé, por ausência de seus pressupostos. Recurso desprovido e honorários majorados de 10% para 12% sobre o valor da causa. Unânime. Propriedade industrial: sim — abstenção de uso de marca, decidida em caráter processual (litispendência).", "SOLICITAR PROCESSO", "", ""],
  ["70084011436 (Nº CNJ: 0039502-38.2020.8.21.7000)", "4/30/2020", "2020", "Sexta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des.ª Eliziana da Silveira Perez", "marca; uso indevido de marca; colidência de marca; concorrência desleal; dano moral in re ipsa; lucros cessantes; liquidação por arbitramento; perícia contábil requerida; prescrição quinquenal; apelação parcialmente provida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL E INTELECTUAL. AÇÃO CONDENATÓRIA. ABSTENÇÃO DE USO DE MARCA, DANOS MORAIS E DANOS MATERIAIS. CONSTATADA A VIOLAÇÃO DO DIREITO ASSEGURADO AO DETENTOR DE REGISTRO VALIDAMENTE EXPEDIDO, DE USO EXCLUSIVO DA MARCA EM TERRITÓRIO NACIONAL.\n \n 1) Em que pese a diferença na acentuação do nome da marca do autor e do réu (Carijo e Carijó), resta clara a confusão que os produtos idênticos (Erva-Mate), com nomes praticamente iguais, causam no consumidor, o que caracteriza a violação do direito assegurado ao detentor do registro validamente expedido, de uso exclusivo da marca em território nacional.\n 2) Malgrado a parte ré, juntamente com o nome Carijó, precedentemente, inclua o termo Erva Mate, este não tem o condão de torná-la suficientemente distinta da marca da parte autora, na medida em que se tratam de termos descritivos do produto comercializado por ambas, o que corrobora que as marcas em questão não podem coexistir sem ocasionar prejuízo aos consumidores, que certamente pensarão estar adquirindo os produtos de uma ao adquirir de outra, levando ao desvio fraudulento da clientela. \n 3) Em razão de todos os anos em que a parte ré utilizou-se indevidamente da marca registrada da parte demandante, o que ocorreu mesmo após sua notificação extrajudicial, no ano de 2014, resta configurado o direito do autor de haver perdas e danos em ressarcimento de prejuízos causados por atos de violação de direito de propriedade industrial e atos de concorrência desleal tendentes a criar confusão entre produtos e serviços postos no comércio.\n 4) Segundo a jurisprudência do Superior Tribunal de Justiça, o dano moral por uso indevido de marca é aferível in re ipsa, de forma que sua configuração decorre da mera comprovação da prática de conduta ilícita, mostrando-se despicienda a demonstração de prejuízos concretos ou a comprovação probatória do efetivo abalo moral. O valor arbitrado na origem, na monta de R$ 100.000,00 (cem mil reais) mostra-se exacerbado, merecendo redução para R$ 15.000,00 (quinze mil reais), quantia esta que se mostra adequada e justa para reparar o dano em evidência, parâmetro utilizado em casos similares pela jurisprudência.\n 5) Com relação ao pedido de danos materiais, nos termos do artigo 208 da Lei nº 9.279/1996, a indenização será determinada pelos benefícios que o prejudicado teria auferido se a violação não tivesse ocorrido, de forma que é cabível a condenação da ré ao pagamento de lucros cessantes, os quais deverão ser apurados em sede de liquidação de sentença por arbitramento, na forma do inciso II do artigo 210 da Lei nº 9.279/1996.\n 6) O valor encontrado a título de lucros cessantes deverá ser atualizado monetariamente pelo IGP-M e acrescidos de juros de mora de 1% ao mês, ambos a contar de cada faturamento dos produtos comercializado indevidamente com o uso da marca de propriedade da parte autora.\n 7) O prazo prescricional em demandas relacionadas ao direito marcário, seja de reparação de danos ou abstenção de uso indevido de marca, é de 05 anos, nos termos do artigo 225 da Lei nº 9.279/1996, de forma que a condenação imposta a título de lucros cessantes deverá respeitar a prescrição quinquenal.\n \n DERAM PARCIAL PROVIMENTO À APELAÇÃO DE AMBAS AS PARTES.", "Apelações de Ailton Silva de Vargas-ME (autor), titular da marca registrada 'Carijo' para erva-mate, e de Sementes Crestani Ltda. (ré) contra sentença de parcial procedência. A sentença proibiu a ré de usar a expressão 'Carijó' em qualquer manifestação, inclusive na internet, e fixou danos morais de R$ 100.000,00, rejeitando os danos materiais. A ré alegava convivência pacífica das marcas por mais de uma década, esforço para substituí-la pela marca 'Crestani' e desproporção do valor diante de seu capital social. O autor insistia nos danos materiais, citando notas fiscais de vendas com uso indevido. A Câmara reconheceu a violação: apesar da diferença de acento, os nomes praticamente idênticos, aplicados ao mesmo produto, causam confusão e desvio de clientela, e o acréscimo 'Erva Mate' é meramente descritivo. O uso persistiu mesmo após notificação extrajudicial em 2014. Acolhendo em parte o recurso da ré, reduziu os danos morais in re ipsa para R$ 15.000,00. Acolhendo em parte o do autor, reconheceu os lucros cessantes (art. 208 da LPI), a liquidar por arbitramento (art. 210, II), com prescrição quinquenal (art. 225). Redimensionou a sucumbência, imputando-a integralmente à ré, com honorários de 12%. Unânime. Propriedade industrial: sim — marca registrada, colidência e concorrência desleal.", "SOLICITAR PROCESSO", "", ""],
  ["70084070283 (Nº CNJ: 0045387-33.2020.8.21.7000)", "5/27/2020", "2020", "Quinta Câmara Cível", "Direito Autoral", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des.ª Isabel Dias Almeida", "direito autoral; hino; expressão imortal tricolor; originalidade; nome e título isolado; perícia indeferida; ação cautelar de exibição; apelação desprovida", "APELAÇÃO CÍVEL. PROPRIEDADE INTELECTUAL. DIREITOS AUTORAIS. AÇÃO DE INDENIZAÇÃO. USO DE EXPRESSÃO “IMORTAL TRICOLOR” CONTIDA NO “HINO DO GRÊMIO”. AUSÊNCIA DE TITULARIDADE E ORIGINALIDADE. \n \n 1. Considerando que a proteção ao direito autoral sobre o Hino do Grêmio não pode recair sobre palavras isoladas, e sim sobre a obra como um todo ou parte dela a que se reconheça expressão do espírito do seu autor, conforme o art. 7º, V da Lei nº 9.610/98, descabe a pretensão da parte recorrente ao direito de uso e marca sobre a expressão ‘Imortal Tricolor’. \n 2. Expressão que remete ao jogador Eurico Lara, muito antes da criação do hino, nada tendo de original, servindo de homenagem ao seu grande ídolo. \n 3. Expressão, ademais, reconhecidamente utilizada para representar o próprio Clube, sem associação necessária com o hino. Inteligência do art. 8º, VI da Lei 9.610/98.\n APELAÇÃO DESPROVIDA.", "Apelação do Espaço Cultural Lupicínio Rodrigues e de Lupicínio Jorge Quevedo Rodrigues contra sentença que julgou improcedente a ação indenizatória com pedido de abstenção de uso movida contra Credeal Manufatura de Papéis Ltda.. Os autores, alegando titularidade dos direitos patrimoniais sobre o 'Hino do Grêmio', composto por Lupicínio Rodrigues, afirmavam que a ré vendia cadernos escolares com a expressão 'Imortal Tricolor', e até com a íntegra do hino, sem autorização. Sustentavam a originalidade da expressão e a proteção autoral inclusive de pequenos trechos. A Câmara entendeu que a proteção autoral recai sobre a obra como um todo ou partes que expressem o espírito criador do autor, e não sobre palavras isoladas (art. 7º da Lei 9.610/98). Registrou que a expressão 'Imortal Tricolor' remete ao goleiro Eurico Lara, é anterior ao hino e carece de originalidade. Além disso, é notoriamente usada para designar o próprio clube, independentemente do hino (art. 8º, VI). Os autores não têm, portanto, direito de uso ou de marca sobre ela. Negou provimento ao apelo e majorou os honorários para R$ 2.200,00. Unânime. Propriedade industrial: não — direito autoral (Lei 9.610/98), com pedido acessório de abstenção de uso de expressão como marca.", "SOLICITAR PROCESSO", "", ""],
  ["70084877927 (Nº CNJ: 0001345-59.2021.8.21.7000)", "10/21/2021", "2021", "Sexta Câmara Cível", "Modelo de utilidade", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des.ª Denise Oliveira Cezar", "propriedade industrial; exploração indevida de produto; ausência de registro no INPI; patente; direito de exclusividade; registro em tabelionato; dever de indenizar; improcedência; sentença mantida; apelação desprovida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL. alegação de exploração indevida do produto intitulado “cardaflex”. ausência de registro no Instituto Nacional da Propriedade Industrial (INPI). requisito imprenscindível. art. 44, lei 9.279/1996. direito de exclusividade não reconhecido. dever de indenizar não configurado. improcedência dos pedidos. sentença mantida. À UNANIMIDADE, NEGARAM PROVIMENTO AO APELO.", "Apelação de Almir Pereira da Silva contra sentença que julgou improcedente sua ação indenizatória contra Paquetá Calçados S.A., com honorários de R$ 10.000,00 de exigibilidade suspensa. O autor alegava ter idealizado o projeto 'Cardaflex/Cadarflex', um cadarço para calçados e vestuário, registrado em tabelionato, e que a ré explorava o mesmo produto sob o nome 'estica e puxa'. Pedia a retirada do produto de circulação, ou o lançamento de linha 'by Almir', e indenização. Sustentava que a proteção não deveria depender do registro no INPI, diante de sua condição financeira. A Câmara entendeu que o produto tem natureza de propriedade industrial, e não de direito autoral. O direito de exploração exclusiva depende de registro no INPI (art. 44 da Lei 9.279/96), que o autor não possui. Segundo a tabeliã, houve apenas reconhecimento de firma no documento, e o registro em tabelionato, de todo modo, não confere direito algum sobre o produto. Sem direito de exclusividade, não há dever de indenizar. Negou provimento ao apelo, mantendo a improcedência. Unânime. Propriedade industrial: sim — alegada invenção/produto sem registro no INPI e inexistência de direito de exclusividade.", "SOLICITAR PROCESSO", "", ""],
  ["70084880095 (Nº CNJ: 0001562-05.2021.8.21.7000)", "9/30/2021", "2021", "Sexta Câmara Cível", "Software", "SIM", "Engenharia Eletrônica, com especialização em Engenharia de Segurança do Trabalho (Eduardo Jorge Fernandes, CREA-RJ). Os dois peritos da cautelar de 2011 não são identificados", "1", "R$ 10.820,00", "R$ 9.020,00", "NÃO IDENTIFICADO", "INTEGRAL", "INTEGRAL", "DETERMINANTE", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "DEFERIDA", "-", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "-", "NÃO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO", "SIM (nova vistoria na ação principal após a perícia da cautelar)", "NÃO", "NÃO", "NÃO", "NÃO", "Des.ª Denise Oliveira Cezar", "programa de computador; software; contrafação; licença de uso; produção antecipada de prova; perícia realizada; nova perícia; ausência de impugnação ao laudo; nota fiscal; apelação desprovida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL E INTELECTUAL. AÇÃO CAUTELAR DE PRODUÇÃO ANTECIPADA DE PROVA. UTILIZAÇÃO DE SOFTWARE SEM LICENCIAMENTO. nova perícia nos equipamentos da ré. verificação de ausência de ilegalidade nos programas utilizados. apresentação de notas fiscais. conclusão do perito no sentido de que inexistia à época da primeira perícia softwares piratas. ausência de impugnação ao laudo pericial apresentado na fase de instrução probatória. valoração e ponderação dos elementos probatório. sentença mantida. recurso desprovido.", "Apelação de Microsoft Corporation e Corel Corporation contra sentença que julgou improcedente a ação indenizatória cumulada com abstenção movida contra Aeko Industrial Ltda. por uso de software sem licença, com honorários de 10% do valor da causa. As apelantes sustentavam que a produção antecipada de provas constatou 121 cópias de 18 programas em 82 computadores, com 45 licenças faltantes. Afirmavam que a segunda perícia só mostrou a regularização posterior e que a regularidade exige contrato de licença ou nota fiscal (art. 9º da Lei 9.609/98). Alegavam ainda notas ilegíveis ou posteriores à vistoria e pediam indenização de dez vezes o valor de cada cópia. A Câmara dispensou a preliminar contrarrecursal (art. 282, §2º, do CPC) e entendeu que a ré provou fato extintivo do direito das autoras (art. 373, II). O laudo, complementado e não impugnado pelas autoras durante a instrução, concluiu que as licenças e notas fiscais eram as mesmas da primeira vistoria, sem softwares 'piratas', e as notas juntadas corroboram a defesa. Negou provimento ao apelo e majorou os honorários para 12%. Unânime. Observação: na fonte, o voto aparece antes do relatório. Propriedade industrial: não em sentido estrito — direito autoral sobre software, classificado no acórdão como 'propriedade industrial e intelectual'.", "5012474-72.2022.8.21.0005 (cumprimento da ação 0009531-22.2012.8.21.0005 / 005/1.12.0003176-4; cautelar 005/1.11.0001597-0; AC 70084880095; ED 70085421105)", "3ª Vara Cível da Comarca de Bento Gonçalves", "Engenharia Eletrônica, com especialização em Engenharia de Segurança do Trabalho (Eduardo Jorge Fernandes, CREA-RJ). Os dois peritos da cautelar de 2011 não são identificados"],
  ["70084966092 (Nº CNJ: 0010162-15.2021.8.21.7000)", "6/30/2021", "2021", "Quinta Câmara Cível", "Desenho industrial", "SIM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des. Jorge Luiz Lopes do Canto", "desenho industrial; contrafação; concorrência desleal; estado da técnica; competência da Justiça Federal; perícia realizada; perícia contábil; lucros cessantes; dano moral; apelação desprovida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL E INTELECTUAL. indenização por danos IMATERIAIS e MATERIAIS. uso indevido de desenho industrial. manutenção da sentença de procedência.\n Do afastamento da preliminar de não conhecimento do recurso\n \n 1.\n No que tange à preliminar de não conhecimento da apelação interposta, aduzida pela apelada nas contrarrazões, sob o argumento de que houve ofensa ao artigo 1.010 da lei processual civil, pois a parte apelante não atacou todos os fundamentos utilizados na sentença, rejeito a referida prefacial, uma vez que o recorrente abordou no recurso questões de direito, demonstrando especificamente a sua inconformidade com a decisão.\n \n 2.\n Ademais, as razões antes explicitadas atenderam aos pressupostos processuais intrínsecos e extrínsecos do recurso em questão, estando este devidamente fundamentado, impugnando os pontos da sentença que julgou inadequados ao caso concreto. Nada há, portanto, nas razões de apelação que leve o recurso a não ser conhecido.\n Da preliminar de extinção da ação sem julgamento de mérito\n \n 3.\n A recorrente sustenta, preliminarmente, a necessidade de extinção da ação sem julgamento de mérito, haja vista a impossibilidade jurídica do pedido em virtude de o desenho industrial nº DI 6800245-9 estar compreendido no estado da técnica.\n \n 4.\n Entretanto, verifica-se que os argumentos utilizados para fundamentar a arguição da referida preliminar se confundem com o mérito do presente recurso, razão pela qual passo a apreciá-los conjuntamente com este, pois na hipótese de serem reconhecidos, aqueles importarão na reforma da sentença prolatada.\n Mérito do recurso em exame\n \n 5.\n No caso em tela a parte autora busca a abstenção de uso de desenho industrial e indenização por danos morais e materiais, em razão da prática de contrafação pela empresa ré, uma vez que esta teria se utilizado de desenho industrial de propriedade da parte autora, conforme registro DI 6800245-9.\n \n 6.\n A propriedade industrial tem proteção constitucional, visando estimular o progresso técnico e científico, considerando o interesse social e econômico do país. A par disso, em vista de uma maior proteção ao autor da criação industrial, bem como a especificação e desenvolvimento da matéria, foi editada a Lei nº 9.279 de 1996, conhecida como Lei de Propriedade Industrial, na qual é limitado o âmbito de atuação da proteção aos direitos relativos à propriedade industrial.\n 7.\n A Lei de Propriedade Industrial estabelece que desenho industrial é a forma plástica ornamental de um objeto ou o conjunto ornamental de linhas e cores que possa ser aplicado a um produto, proporcionando resultado visual novo e original na sua configuração externa e que possa servir de tipo de fabricação industrial.\n \n 8.\n Ressalta-se que a propriedade do desenho industrial se adquire pelo registro validamente expedido, o qual garante ao titular o seu uso exclusivo em todo o território nacional, nos termos do artigo 109 da Lei nº 9.279/96.\n \n 9.\n No caso em exame verifica-se que a parte autora é titular perante o Instituto Nacional de Propriedade Industrial – INPI do registro de Desenho Industrial nº DI 6800245-9, de sorte que a exploração do desenho industrial devidamente registrado importa em ofensa ao disposto no art. 109 da Lei n. 9.279 de 14 de maio de 1996.\n \n 10.\n Ressalta-se que a recorrente, em sua defesa, limita-se a argumentar que o desenho industrial de propriedade da autora estaria compreendido no estado da técnica, o que levaria à improcedência dos pedidos da parte autora. Entretanto, verifica-se que a parte autora demonstrou a existência do registro do desenho industrial ora em discussão, sendo que eventual pretensão de nulidade de registro só pode ser levada a efeito em demanda de competência da Justiça Federal, com a intervenção obrigatória do INPI, consoante disposto no art. 175 da Lei de Propriedade Industrial (Lei 9.279 de 1996), não sendo este o objeto da demanda, nem ao menos podendo a demandada formular pedido, em sede de contestação, que não guarda relação com a causa de pedir e objeto da lide, o qual deveria ser pleiteado em ação própria.\n \n 11.\n Destaca-se ademais que não obstante sustente a recorrente que a existência de ação de nulidade de registro de desenho industrial autuada sob o nº 5005094-20.2014.4.04.7107, verifica-se que aquela tinha por objeto apenas os registros de desenho industrial protocolados sob os números DI 6800223-8, DI 6800228-9 e DI 6800229-7, e não o registro ora em discussão, qual seja, DI 6800245-9, o qual pelas informações constantes nos autos permanece válido.\n \n 12.\n Ainda, cumpre salientar que a perícia produzida no feito atestou a similitude entre o produto comercializado pelo réu e aquele objeto do desenho industrial de propriedade da autora.\n 13.\n No caso em análise, portanto, restou evidenciado uso indevido de desenho industrial da apelada de forma que não merece prosperar o recurso interposto.\n 14.\n Danos materiais. Releva ponderar, ainda, que, quando da ocorrência de um dano material, duas subespécies de prejuízos exsurgem desta situação, os danos emergentes, ou seja, aquele efetivamente causado, decorrente da diminuição patrimonial sofrida pela vítima; e os lucros cessantes, o que esta deixou de ganhar em razão do ato ilícito.\n \n 15.\n Desta forma, diante do reconhecimento da utilização indevida pela parte ré do desenho industrial de propriedade da parte autora, tenho que cabível a condenação daquela ao pagamento de lucros cessantes, que deverão ser apurados em sede de liquidação de sentença, mantida a sentença no que tange ao tema.\n 16.\n Danos morais. No que tange à prova do dano moral, por se tratar de lesão imaterial, desnecessária a demonstração do prejuízo, na medida em que possui natureza compensatória, minimizando de forma indireta as consequências da conduta da ré, decorrendo aquele do próprio fato. Conduta ilícita da demandada que faz presumir os prejuízos alegados pela parte autora, é o denominado dano moral puro. \n \n 17.\n O valor a ser arbitrado a título de indenização por dano imaterial deve levar em conta o princípio da proporcionalidade, bem como as condições da ofendida, a capacidade econômica do ofensor, além da reprovabilidade da conduta ilícita praticada. Por fim, há que se ter presente que o ressarcimento do dano não se transforme em ganho desmesurado, importando em enriquecimento ilícito. Quantum mantido.\n \n 18.\n Os honorários advocatícios deverão ser majorados quando a parte recorrente não lograr êxito neste grau de jurisdição, independente de pedido a esse respeito, devido ao trabalho adicional nesta instância, de acordo com os limites fixados em lei. Inteligência do art. 85 e seus parágrafos do novel CPC. \n \n Afastada a preliminar suscitada e negado provimento ao recurso.", "Apelação da ré, identificada na fonte apenas pelas iniciais C.M.L., contra sentença de procedência em ação de abstenção de ato ilícito cumulada com indenização movida por P.M.L. A sentença confirmou a tutela que proibia a ré de produzir, vender ou estocar modelos idênticos ou semelhantes ao protegido pelo desenho industrial DI 6800245-9. Condenou-a ainda em lucros cessantes, correspondentes ao lucro obtido com o produto contrafeito e apurados por perícia contábil em liquidação, e em danos morais. A Câmara rejeitou a preliminar contrarrecursal de não conhecimento (art. 1.010 do CPC). Examinou com o mérito a alegada impossibilidade jurídica do pedido, fundada na tese de que o desenho estaria compreendido no estado da técnica. Entendeu que o registro validamente expedido assegura uso exclusivo (art. 109 da LPI) e que eventual nulidade só pode ser discutida em ação própria na Justiça Federal, com o INPI (art. 175), não em contestação. A ação de nulidade mencionada pela ré referia-se a outros registros, e o DI 6800245-9 permanece válido. A perícia atestou a similitude dos produtos. Manteve os lucros cessantes, o dano moral in re ipsa e o quantum. Afastou a preliminar e negou provimento ao apelo, com honorários recursais de 5%. Unânime. Propriedade industrial: sim — desenho industrial e contrafação.", "PROCESSO DE CONHECIMENTO NÃO LOCALIZADO", "", ""],
  ["70085111177 (Nº CNJ: 0024670-63.2021.8.21.7000)", "8/19/2021", "2021", "Sexta Câmara Cível", "Direito Autoral", "VERIFICAR NO PROCESSO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "NÃO", "", "", "NÃO", "Des. Niwton Carpes da Silva", "direito autoral; catálogo de produto; concorrência desleal; parecer técnico; julgamento antecipado; dano moral; dano material; liquidação de sentença; apelação desprovida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL E INTELECTUAL. IMPLEMENTOS AGRÍCOLAS. catálogo de produtos. DIREITO DE EXCLUSIVIDADE NA UTILIZAÇÃO. DANOS morais e MATERIAIS CONFIGURADOS. INDeNIZAÇÃO DEVIDA.\n \n 1) Trata-se de ação inibitória combinada com indenizatória, através da qual a parte autora busca que a ré abstenha-se de praticar atos de concorrência desleal e de utilizar a linha editorial e o padrão de comunicação dos catálogos de produto da autora, bem como a condenação da ré ao pagamento de indenização por dano moral e material, julgada parcialmente procedente na origem.\n \n 2) No caso telado, da análise dos documentos das fls. 39/40, frente e verso e 42/43, frente e verso, em conjunto com o Parecer Técnico comparativo das fls. 45/79, infere-se que o catálogo do produto “Plaina Niveladora Multilâminas”, linha Megga, da empresa ré, possui o mesmo formato, a mesma ordem de disposição das informações, o mesmo conteúdo (textos e expressões de propaganda), o mesmo tipo de figuras do produto e realça as mesmas figuras que o catálogo do produto “Plaina Niveladora Multilâminas”, linha Robust e NSA, de autoria da empresa autora.\n \n 3) Em que pese as alegações da requerida, no que diz respeito ao fato de que se tratava de mero erro gráfico, o fato é que a requerida não nega a autoria da impressão indevida de catálogos que, comprovadamente se constituem numa reprodução clara e irretorquível do catálogo da autora, tratando-se, portanto, de fato incontroverso a violação do direito autoral da empresa autora, ensejando o dever de indenizar, nos termos do artigo 102 da Lei n. 9.279/96. Ato ilícito presente e comprovado.\n 4) Quanto aos danos materiais, por falta de elemento probatório confiável e suficiente, é de ser mantida a sentença que submeteu a apuração dos danos materiais à liquidação de sentença, onde, pode, inclusive, ser realizada perícia técnica especializada para arbitrar o dano material pelo uso fraudulento do catálogo de produtos, tendo como parâmetro o inciso II do artigo 210 da Lei n. 9.279/96, ou seja, 20% sobre o faturamento obtido pela ré com a comercialização do produto divulgado por meio do catálogo indevidamente utilizado, conforme fixado na pelo magistrado de origem.\n \n 5) Valorando-se as peculiaridades da hipótese concreta, bem como os parâmetros adotados normalmente pela jurisprudência para a fixação de indenização em hipóteses símiles, tenho que o quantum fixado na sentença a título de indenização por danos morais em R$ 20.000,00 (...) merece ser mantido, porquanto atende o princípio da razoabilidade e proporcionalidade.\n \n APELAÇÃO DESPROVIDA", "Apelação de King Implementos Ltda.-EPP contra sentença de parcial procedência em ação inibitória cumulada com indenizatória movida por Agrimec Agroindustrial e Mecânica Ltda. A autora alegava que o catálogo da 'Plaina Megga' da ré reproduzia a linha editorial e o padrão de comunicação do catálogo de sua 'Plaina Niveladora Multilâminas', configurando violação de direito autoral e concorrência desleal e parasitária. A sentença impôs abstenção, fixou danos morais de R$ 20.000,00 e danos materiais de 20% do faturamento obtido com o produto divulgado pelo catálogo copiado, a apurar em liquidação. A ré alegou mero erro gráfico em 50 catálogos, recolhidos e entregues à autora, e que plainas niveladoras são de domínio público. A Câmara, com base no parecer técnico comparativo, verificou que o catálogo da ré tem o mesmo formato, ordem de informações, textos, expressões e figuras do da autora. Considerou incontroversa a autoria da impressão e reconheceu a violação e o dever de indenizar. Manteve a liquidação dos danos materiais, com possibilidade de perícia e parâmetro do art. 210, II, da LPI, e os danos morais de R$ 20.000,00. Negou provimento ao apelo e majorou os honorários para 12%. Unânime. Propriedade industrial: sim, em parte — concorrência desleal e critérios da LPI, com núcleo em direito autoral sobre catálogo.", "NÃO LOCALIZADO", "", ""],
  ["70085127330 (Nº CNJ: 0026286-73.2021.8.21.7000)", "5/25/2022", "2022", "Quinta Câmara Cível", "Direito Autoral", "SIM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des.ª Isabel Dias Almeida", "direito autoral; projeto arquitetônico; contrafação; perícia realizada; nulidade do laudo pericial; substituição do perito; assistente técnico; inépcia da inicial; ilegitimidade passiva; recurso desprovido", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL E INTELECTUAL. AÇÃO INDENIZATÓRIA POR DANOS MORAIS C/C OBRIGAÇÃO DE FAZER. direitos autorais. projeto arquitetônico de praça municipal. ausência de comprovação. indenização indevida. honorários advocatícios.\n \n 1. Preliminar de inépcia da inicial afastada. A autora expôs claramente a causa de pedir e formulou pedido de pagamento de indenização e de obrigação de fazer, instruindo a inicial com documentação pertinente, preenchendo, portanto, os requisitos dos arts. 319 e 320 do CPC.\n 2. Preliminar de ilegitimidade passiva desacolhida. Na esteira da teoria da asserção, as condições da ação devem ser analisadas em abstrato, tomando as alegações da inicial como verdadeiras. Hipótese em que a ré Nívea Braido atua no escritório de arquitetura responsável pelo projeto, além de ter sido divulgada como uma das idealizadoras da obra.\n \n 3. Preliminar de nulidade do laudo pericial rejeitada. Caso em que o laudo pericial demonstrou de forma suficiente os motivos que levaram ao resultado da perícia, estando devidamente fundamentado, restando ausentes razões para decretação de nulidade.\n 4. A reprodução de projeto arquitetônico de titularidade do autor sem a respectiva autorização implica no reconhecimento do ilícito da contrafação. Inteligência do art. 5º, XXVII, da CF e da Lei n. 9.610/1998.\n \n 5. Caso em que o conjunto probatório reunido aos autos permite concluir pela inocorrência de apropriação e alteração indevida do projeto arquitetônico elaborado pela parte autora para a praça do Município de Itaara. Prova pericial que indica que houve a elaboração de novo projeto com a utilização de elementos diversos.\n \n 6. Não tendo a parte autora logrado comprovar o fato constitutivo do direito alegado, ônus que lhe incumbia, a manutenção do julgamento de improcedência da ação é medida que se impõe. Art. 373, I, do CPC.\n \n 7. Honorários advocatícios. Manutenção, sob pena de aviltamento da atividade do profissional.\n \n 8. Prequestionamento da legislação invocada conforme estabelecido pelas razões de decidir, seguindo compreensão do disposto no art. 1.025 do CPC.\n PRELIMINARES DESACOLHIDAS. RECURSO DESPROVIDO.", "Apelação de Débora Mori Marcuzzo contra sentença que julgou improcedente a ação indenizatória por danos morais cumulada com obrigação de fazer movida contra o Município de Itaara e as arquitetas Mariele Brisola, Iohana Scremin Stangarlin, Priscila Nunes Soares e Nívia da Silva Braido. A autora alegava que seu projeto arquitetônico para uma praça municipal foi alterado e executado em parte (cerca de 20%) sem seu consentimento e sem crédito de coautoria. A Câmara afastou as preliminares das rés: a inicial não era inepta e Nívia Braido tinha legitimidade pela teoria da asserção. Rejeitou também a nulidade do laudo pericial arguida pela autora, por atraso do perito, falta de intimação dos assistentes e questionamento pessoal ao expert, pois o laudo estava suficientemente fundamentado. No mérito, reconheceu que a reprodução não autorizada de projeto arquitetônico configura contrafação (art. 5º, XXVII, da CF e Lei 9.610/98). A prova pericial, porém, indicou que foi elaborado novo projeto com elementos diversos, sem apropriação ou alteração indevida. Como a autora não provou o fato constitutivo (art. 373, I, do CPC), manteve a improcedência. Preliminares desacolhidas e recurso desprovido, com honorários majorados para 12%. Unânime. Propriedade industrial: não — direito autoral sobre projeto arquitetônico.", "PROCESSO DE CONHECIMENTO NÃO LOCALIZADO", "", ""],
  ["70085142560 (Nº CNJ: 0027809-23.2021.8.21.7000)", "5/25/2022", "2022", "Quinta Câmara Cível", "Software", "SIM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des. Jorge André Pereira Gailhard", "programa de computador; direito autoral; contrafação; produção antecipada de prova; perícia em ação cautelar; licença de uso; prescrição; preclusão; indenização; apelação desprovida", "AÇÃO DE INDENIZAÇÃO CUMULADA COM ABSTENÇÃO DE PRÁTICA DE ATO. PROPRIEDADE INTELECTUAL. PRESCRIÇÃO. PRECLUSÃO. PROGRAMAS DE COMPUTADOR. SOFTWARE. AUSÊNCIA DE COMPROVAÇÃO DA LICENÇA DE USO DOS PROGRAMAS. INDENIZAÇÃO DEVIDA. HONORÁRIOS ADVOCATÍCIOS. MANUTENÇÃO. HONORÁRIOS RECURSAIS. \n I. Prescrição. Primeiramente, no que concerne à alegada prescrição, ressalta-se que a mesma já foi rejeitada pelo juízo singular em despacho saneador, contra o qual foi interposto agravo de instrumento pela ora apelante, devidamente desprovido por esta colenda Câmara e com o respectivo trânsito em julgado. Sendo assim, a aludida questão encontra-se coberta pela preclusão, sendo descabida qualquer discussão a respeito, na forma do art. 507, do CPC. \n \n II. No caso concreto, é incontroverso, por ser fato público e notório, que a autora é titular dos diversos programas de computador discutido nos autos. Nessa linha, conforme o art. 9º, da Lei nº 9.609/98, a utilização de programa de computador no país será objeto de contrato de licença, ou, na falta do respectivo contrato, do documento fiscal relativo à aquisição ou licenciamento de cópia poderá servir para comprovação da regularidade do seu uso. \n \n III. De outro lado, não houve nenhuma prova acerca da licença conferida para o uso dos programas referidos, ônus que cabia à ré, nos termos do art. 373, II, do CPC. Portanto, tendo em vista que é proibido o uso ilegal de programas de computador, resta configurada a contrafação, nos termos dos arts. 5º, inciso VII, e 7º, XII, da Lei nº 9.610/98. \n \n IV. No que se refere ao valor da indenização devida, de acordo com o entendimento consolidado pelo egrégio STJ, a pena pecuniária imposta ao infrator não se encontra restrita ao valor de mercado dos programas apreendidos, uma vez que a interpretação do art. 102, da Lei n° 9.610/98, evidencia a intenção do legislador de que seja aplicada indenização com o escopo de inibir novas práticas semelhantes. Manutenção da indenização imposta na sentença, correspondida em dez (10) vezes o valor de cada software utilizado sem a devida licença, a ser apurada em liquidação de sentença. \n V. E, no caso, a correção monetária pelo IGP-M e os juros moratórios de 1% ao mês, tanto da condenação ao pagamento do preço dos programas, como da condenação ao pagamento da indenização (dez vezes o valor de cada software), deverão ser contados da data da vistoria da ação cautelar, tudo conforme bem salientado pelo juízo de origem. \n \n VI. Manutenção dos honorários advocatícios do procurador da autora em 15% sobre o valor atualizado da condenação, observados os limites do art. 85, § 2º do CPC.\n VII. De acordo com o art. 85, § 11, do CPC, ao julgar recurso, o Tribunal deve majorar os honorários fixados anteriormente ao advogado vencedor, observados os limites estabelecidos nos §§ 2º e 3º para a fase de conhecimento. \n APELAÇÃO DESPROVIDA.", "Apelação de Redolfi & Cia. Ltda. contra sentença que julgou procedente a ação de indenização cumulada com abstenção movida por Microsoft Corporation por uso de programas de computador sem licença, constatado em vistoria de ação cautelar. A sentença determinou a abstenção, sob multa diária de 20 salários mínimos, e condenou a ré ao pagamento do valor das cópias sem licença e a indenização de dez vezes o valor de cada software, a liquidar. A apelante alegava prescrição trienal (art. 206, §3º, do CC), ausência de prova da autoria das cópias e do valor dos programas e excesso da indenização. A Câmara considerou a prescrição preclusa (art. 507 do CPC), pois já fora rejeitada no saneador, em decisão mantida em agravo com trânsito em julgado. No mérito, a titularidade da autora é notória, e o uso exige licença ou documento fiscal (art. 9º da Lei 9.609/98), que a ré não apresentou (art. 373, II, do CPC), configurando contrafação. Seguindo o STJ, manteve a indenização de dez vezes o valor de cada software (art. 102 da Lei 9.610/98), com correção e juros desde a vistoria. Negou provimento à apelação e majorou os honorários para 17%. Unânime. Propriedade industrial: não em sentido estrito — direito autoral sobre software.", "PROCESSO DE CONHECIMENTO NÃO LOCALIZADO", "", ""],
  ["70085145977 (Nº CNJ: 0028150-49.2021.8.21.7000)", "4/27/2022", "2022", "Quinta Câmara Cível", "Desenho industrial", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des. Jorge André Pereira Gailhard", "marca; desenho industrial; contrafação; réplica de veículo; prova emprestada; inquérito policial; perícia desnecessária; royalties; dano moral in re ipsa; responsabilidade solidária", "AÇÃO DE ABSTENÇÃO DE USO CUMULADA COM INDENIZAÇÃO POR DANOS MATERIAIS E MORAIS. PROPRIEDADE INDUSTRIAL E INTELECTUAL. MARCA. DESENHO INDUSTRIAL. CONCORRÊNCIA DESLEGAL. COMPROVAÇÃO. DANOS MATERIAIS. ROYALTIES. DANOS MORAIS. OCORRÊNCIA. QUANTUM INDENIZATÓRIO. MANUTENÇÃO. CONDENAÇÃO SOLIDÁRIA. HONORÁRIOS ADVOCATÍCIOS. MANUTENÇÃO. HONORÁRIOS RECURSAIS. \n I. PRELIMINAR RECURSAL DOS RÉUS CRISTIANO GOMES DE MATTOS, MONIQUE ACOSTA PEREIRA ME, CR LINE PROTÓTIPOS LTDA. E EXCUSTOMS PERSONALIZAÇÃO DE CARROS LTDA. ME. ALEGAÇÃO DE NULIDADE DA SENTENÇA EM RAZÃO DA UTILIZAÇÃO DE PROVA EMPRESTADA. \n Efetivamente, é sabido que, em sede de Inquérito Policial, a regra geral é a inexistência de ampla defesa ou contraditório, sendo necessária a repetição de determinadas provas durante a fase processual, em observação aos mencionados princípios e ao devido processo legal. No entanto, tal previsão diz respeito exclusivamente ao processo penal. E, para o depoimento prestado no Inquérito Policial ser valorado no processo civil, é necessário oportunizar às partes o direito de manifestação, fins de observar o contraditório (ainda que postergado) e a ampla defesa, sob pena de incorrer efetivamente em eventual nulidade ou cerceamento de defesa. No mais, houve a devida intimação dos réus para manifestação da prova até então produzida nos autos, o que, por consequência, engloba os documentos do Inquérito Policial. Aliás, a teor do art. 278, do CPC, a nulidade dos atos deve ser alegada na primeira oportunidade em que couber à parte falar nos autos, sob pena de preclusão. Ademais, diga-se que todas as provas dos autos estão sendo analisadas conjuntamente, fins de assegurar uma melhor prestação jurisdicional. Preliminar rejeitada.\n \n II. Apelação da autora. Pretensão de reconhecimento da legitimidade passiva da demandada MinasMáquinas S.A. \n 1. Defende a requerente, em resumo, a responsabilidade da ré MinasMáquinas S.A., pois, apesar de não fabricar as réplicas, comercializava os produtos ao financiar a aquisição por terceiros, bem como de que a ré possuía plena ciência acerca da divulgação feita no site da ré CR Line sobre a parceria para financiamento dos carros piratas. \n 2. No entanto, eventual participação da corré MinasMáquinas S.A. seria apenas no sentido de financiar veículos a clientes, conduta esta que não é considerada como ilícita. Aliás, diante da atividade da corré, isto é, prestar financiamento e consórcio, não caberia a esta solicitar e diligenciar acerca de eventual licença da CR Line e demais corréus para fabricar determinado veículo, o que, novamente, ressalta-se constituir, a princípio, ato totalmente legal. \n \n 3. De outro lado, também se constata que não houve a comprovação de nenhuma venda de veículo com a participação e auxílio da corré MinasMáquinas, podendo ser reconhecido que esta não obteve nenhum benefício econômico com a atitude dos demais corréus. Neste particular, diga-se que tal comprovação cabia exclusivamente à autora Ferrari S.P.A., o que inocorreu no caso concreto. \n \n 4. Então, a par das discussões de divulgação de parceria no site da corré CR Line, participação de funcionário em exposição de veículos, bem como eventual existência de grupo econômico entre MinasMáquinas S.A. e MinasMáquinas Administradora de Consórcios Ltda., o reconhecimento da ilegitimidade passiva fundamenta-se exclusivamente no fato de que a corré em questão jamais teve qualquer participação na produção de protótipos sem autorização da autora. E, mais, sequer houve demonstração de que a corré MinasMáquinas S.A. se beneficiou com a alegada “parceria” para a venda dos veículos, a qual inclusive se mostra até mesmo duvidosa nos autos. \n \n 5. Assim, não há como impor qualquer responsabilidade à corré MinasMáquinas S.A. simplesmente por ofertar serviços considerados lícitos no mercado, tais como financiamentos e consórcios, não podendo ser penalizada por eventual ausência de licença dos corréus para produzir os veículos em questão. Manutenção do reconhecimento da ilegitimidade passiva da MinasMáquinas S.A.\n \n III. Apelação dos réus Cristiano Gomes de Mattos, Monique Acosta Pereira – ME, CR Line Protótipos Ltda e Excustoms Personalização de Carros Ltda. – ME.\n 1. Em resumo, afirmam os demandados a ausência de demonstração de violação de Desenho Industrial e da Marca da autora, uma vez que inexistente perícia nos autos, bem como que eventual condenação imposta não pode ser considerada de forma solidária. Ainda, defendem que não há base para o reconhecimento de royalties no percentual de 20% sobre o faturamento e que os danos morais devem ser afastados ou, no mínimo, minorado o quantum indenizatório. \n 2. O direito de propriedade industrial está constitucionalmente protegido, conforme redação do art. 5º, inciso XXIX, da Carta Magna. Além disso, a Lei nº 9.279/96, que regulamenta o disposto na Constituição Federal acerca da matéria, dispõe sobre a proteção aos direitos da propriedade industrial, bem como da marca e desenho industrial. \n \n 3. No caso concreto, cumpre destacar, primeiramente, a inexistência de dúvidas de que a autora é titular da marca “Ferrari”, a qual é mundialmente conhecida e renomada, gozando de credibilidade e prestígio perante os admiradores da indústria automobilística. Ainda, inconteste também a titularidade pela empresa italiana de desenho industrial atinente às configurações aplicadas em automóvel. \n \n 4. E, consoante se depreende do site da parte ré, constava a informação de que “além de Ferraris e Lamborghinis, podemos fabricar qualquer modelo Top de Linha, conhecidos mundialmente sob encomenda. São mais de duzentas réplicas já entregues, dos mais variados modelos, tendo atingido o mais alto grau de satisfação entre nossos clientes e parceiros”. De igual forma, há a menção de que os veículos, “além de muito seguros, são exatamente idênticos quanto às medidas dos modelos originais”. Ainda, em suposto contrato de venda, é garantido que o bem entregue é 90% idêntico ao original. \n \n 5. Efetuadas tais considerações, nos casos que envolvam violações a desenhos industriais e marcas, em que pese ser oportuna a realização de perícia técnica, por óbvio que desnecessária no caso concreto. Ora, além da marca da autora ser mundialmente conhecida, o próprio site dos demandados informava a realização de protótipos praticamente idênticos aos originais. Em razão disso, cumpre asseverar que cabia unicamente aos réus-apelantes a demonstração de que contavam com a autorização do titular da marca e do desenho industrial para produzirem as réplicas dos veículos, a teor do art. 373, II, do CPC, o que inocorreu no caso concreto. Portanto, uma vez que não comprovada a referida autorização, resta configurado o dever de indenizar os prejuízos causados. \n \n 6. Em relação aos danos materiais, cabe referir que a demandante pretende a condenação dos réus, de forma solidária, ao pagamento de royalties no percentual de 20% sobre o preço bruto de cada réplica vendida, o que foi acolhido na sentença prolatada pelo juízo de origem. E, sendo considerado o depoimento do representante legal no Inquérito Policial, possível depreender que foram vendidas, ao menos, cinco réplicas da Ferrari, até mesmo levando em consideração a inexistência de qualquer produção probatória pelos demandados. \n \n 7. Além disso, o patamar de 20% sobre o preço bruto de cada réplica comercializada deve ser mantido. Isso porque, apesar da atual insurgência recursal, a autora postulou tal valor desde a petição inicial, razão pela qual os requeridos poderiam e deveriam ter combatido tal pretensão na contestação, conforme dispõe o art. 341, caput, do CPC. \n \n 8. No caso concreto, a hipótese dos autos reflete o dano moral in re ipsa ou dano moral puro, uma vez que os prejuízos causados pela fabricação e comercialização dos protótipos em análise sem a devida autorização do proprietário das marcas e desenhos industriais são presumidos, conferindo o direito à reparação sem a necessidade de produção de outras provas. Vale dizer que o próprio fato já configura o dano. Assim, por certo que o ato ilícito dos demandados causou transtorno e prejuízo à honra objetiva da parte autora.\n \n 9. Manutenção do quantum indenizatório, tendo em vista o potencial econômico das partes e condição econômica, a gravidade do fato, o caráter punitivo-pedagógico da reparação e os parâmetros adotados por esta Câmara em casos semelhantes. Neste particular, diga-se que até mesmo houve a realização de evento para levar os veículos fabricados à exposição, o que demonstra a gravidade do fato, até mesmo porque os protótipos eram comercializados com preço consideravelmente inferior aos da empresa autora. \n 10. O valor deverá ser acrescido de correção monetária pelo IGP-M, a contar do arbitramento, na forma da Súmula 362, do STJ.\n \n 11. No entanto, os juros moratórios de 1% ao mês devem ser contados a partir do evento danoso, por se tratar de relação extracontratual, observada a Súmula 54, do STJ. Tratando-se de matéria de ordem pública, o termo inicial da correção monetária e dos juros moratórios, considerados pedidos implícitos, pode ser alterado de ofício, independentemente de pedido, sem implicar em reformatio in pejus ou em decisão extra petita. Precedentes do STJ. \n 12. Ainda, cumpre asseverar que, em se tratando de violação do direito de outrem, quando tiver mais de um responsável pela ofensa em questão, todos deverão responder de maneira solidária pela reparação, a teor do art. 942, do Código Civil.\n IV. APELAÇÃO DA CORRÉ MINASMÁQUINAS S.A. \n \n No que atina aos honorários sucumbenciais, nos termos do art. 85, § 2º, do CPC, devem ser fixados entre 10% e 20% sobre o valor da condenação, do proveito econômico obtido ou, não sendo possível mensurá-lo, sobre o valor atualizado da causa. Manutenção dos honorários advocatícios da corré em 10% sobre o valor atualizado da causa, eis que a fixação sobre o proveito econômico obtido importaria em reformatio in pejus, no caso concreto. \n V. HONORÁRIOS RECURSAIS.\n \n De acordo com o art. 85, § 11, do CPC, ao julgar recurso, o Tribunal deve majorar os honorários fixados anteriormente ao advogado vencedor, observados os limites estabelecidos nos §§ 2º e 3º para a fase de conhecimento. \n PRELIMINAR RECURSAL DOS RÉUS REJEITADA.\n \n APELAÇÕES DESPROVIDAS.", "Apelações de Ferrari S.p.A., de Cristiano Gomes de Mattos, Monique Acosta Pereira-ME, CR Line Protótipos Ltda. e Excustoms Personalização de Carros Ltda.-ME, e de MinasMáquinas S.A. contra sentença em ação de abstenção de uso cumulada com indenização. A sentença extinguiu o processo quanto à MinasMáquinas, por ilegitimidade passiva. Condenou os demais réus, solidariamente, a deixar de usar marcas e desenhos industriais da Ferrari registrados no INPI, a pagar R$ 227.200,00 em royalties de 20% sobre o preço bruto das réplicas vendidas e a pagar R$ 100.000,00 por danos morais. A Câmara rejeitou a nulidade por uso de prova emprestada de inquérito policial, por contraditório diferido e preclusão. Manteve a ilegitimidade da MinasMáquinas: financiar veículos é atividade lícita e não se provou sua participação nem benefício. Quanto aos fabricantes, o próprio site anunciava réplicas 'exatamente idênticas' às originais, dispensando perícia, e cabia a eles provar autorização (art. 373, II, do CPC). Manteve os royalties, com ao menos cinco réplicas vendidas e percentual não impugnado na contestação, bem como os danos morais in re ipsa e a solidariedade (art. 942 do CC). De ofício, fixou os juros desde o evento danoso (Súmula 54 do STJ). Preliminar rejeitada e apelações desprovidas. Unânime. Propriedade industrial: sim — marca, desenho industrial, contrafação e concorrência desleal.", "", "", ""],
  ["70085182319 (Nº CNJ: 0031784-53.2021.8.21.7000)", "11/24/2021", "2021", "Quinta Câmara Cível", "Patente nº 8705074 (IDENTIFICAR A PATENTE)", "SIM", "Juliano André Pavan — Técnico em Contabilidade, Bacharel e Mestre em Ciências Contábeis; contador CRC-RS 070346/O-0; CNPC 492. [Conhecimento: perito engenheiro, nome não identificado nas cópias]", "1", "?", "?", "SIM", "PARCIAL", "PARCIAL", "DETERMINANTE", "SIM", "AUTOR", "MULTIPLAS_DECISOES", "-", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO", "-", "SIM", "RÉU", "SIM", "SIM", "SIM", "NÃO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO", "Des.ª Isabel Dias Almeida", "exceção de suspeição de perito; perito judicial; cautelar inominada; patente; recurso cabível; decisão interlocutória; erro inescusável; princípio da fungibilidade; apelação não conhecida", "apelação cível. PROPRIEDADE INDUSTRIAL. EXCEÇÃO DE SUSPEIÇÃO DE PERITO. recurso cabível.\n 1. O pronunciamento judicial que julga a exceção de suspeição de perito não implica a extinção do processo originário (cautelar inominada), razão pela qual descabido o manejo de apelação. Inteligência do art. 203, § 1º, do CPC.\n 2. Inviável a aplicação do princípio da fungibilidade, caracterizando-se erro inescusável a interposição de apelação.\n 3. Possibilidade de reexame da controvérsia em preliminar de apelação ou nas contrarrazões, em sede da ação originária, nos moldes do art. 1.009, §1º, do CPC.\n RECURSO NÃO CONHECIDO.", "Apelação de Semeato S.A. Indústria e Comércio contra sentença que julgou improcedente a exceção de suspeição do perito Gelson Luis Baldi, oposta nos autos de cautelar inominada contra Imasa – Indústria de Máquinas Agrícolas Fuchs Ltda., Industrial Agrícola Fortaleza (SFIL) e Marchesan Implementos e Máquinas Agrícolas Tatu S.A. A cautelar está ligada à discussão sobre violação da patente 8705074 ('mecanismo de flutuação adaptável aos facões de sistemas de distribuição de adubo das plantadoras em geral'). A apelante alegava que o perito reproduziu argumentação do assistente técnico de uma das rés, que carecia de conhecimento técnico e tinha interesse no resultado (arts. 145, 148, 467 e 468 do CPC). Acrescentava que algumas rés já reconheceram a validade da patente e o uso indevido. A Câmara não conheceu do recurso. O pronunciamento que julga a exceção de suspeição de perito não extingue o processo originário e, por isso, não é sentença apelável (art. 203, §1º, do CPC). A interposição de apelação configura erro inescusável, que afasta a fungibilidade, e a questão pode ser reexaminada em preliminar de apelação ou nas contrarrazões (art. 1.009, §1º). Sem honorários recursais. Unânime. Propriedade industrial: sim — prova pericial em litígio sobre violação de patente; decisão processual.", "5004974-82.2014.8.21.0021", "1º Juízo da 3ª Vara Cível da Comarca de Passo Fundo", "Juliano André Pavan — Técnico em Contabilidade, Bacharel e Mestre em Ciências Contábeis; contador CRC-RS 070346/O-0; CNPC 492. [Conhecimento: perito engenheiro, nome não identificado nas cópias]"],
  ["70085194561 (Nº CNJ: 0033009-11.2021.8.21.7000)", "8/26/2021", "2021", "Sexta Câmara Cível", "Software", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des.ª Eliziana da Silveira Perez", "programa de computador; software; contrafação; direito autoral; licença; caráter punitivo da indenização; fator de multiplicação; juros de mora; evento danoso; apelação parcialmente provida", "APELAÇÃO CÍVEL. PROPRIEDADE INTELECTUAL E INDUSTRIAL. PROGRAMA DE COMPUTADOR. CONTRAFAÇÃO. DEVER DE INDENIZAR. TERMO INICIAL DOS JUROS DE MORA.\n 1. Os programas de computador constituem obras intelectuais sujeitas à proteção legal, devendo ser objeto de contrato de licença, cuja violação sujeita o infrator ao pagamento de indenização (Leis nº 9.609/98 e 9.610/98).\n \n 2. Sendo incontroversa a utilização indevida do software, mister equacionar o valor indenizatório, que deve ser dimensionado de forma a possibilitar a reparação do dano bem como inibir condutas assemelhadas (caráter compensatório e punitivo da indenização), de modo que o quantum não está adstrito ao valor do software contrafeito. \n \n 3. Considerando a capacidade econômico-financeira da empresa, o valor do programa de computador e a extensão do dano causado pela sua violação, é fixado o fator de multiplicação em 2(duas) vezes o valor do produto, com o escopo de contemplar o caráter punitivo da indenização.\n \n 4. Os juros de mora fluem desde o evento danoso, conforme verbete sumular nº 54 da jurisprudência do STJ, uma vez que se trata de responsabilidade civil extracontratual. \n DERAM PARCIAL PROVIMENTO À APELAÇÃO.", "Apelação de Siemens Product Lifecycle Management Software Inc. contra sentença que julgou procedente sua ação indenizatória contra Brutt Indústria Metalúrgica Ltda. pelo uso indevido de programa de computador de sua titularidade. A sentença fixou a indenização em R$ 23.510,99, correspondente ao valor do software, com juros desde a citação e honorários de 10%. A apelante sustentava que, sendo incontroverso o uso indevido, a indenização deveria ter também caráter punitivo (art. 102 da Lei 9.610/98), em dez vezes o valor do produto, sob pena de tornar a pirataria uma violação segura. Pedia ainda juros desde o evento danoso. A Câmara reconheceu que programas de computador são obras protegidas, cujo uso exige licença (Leis 9.609/98 e 9.610/98). Entendeu que a indenização não se limita ao valor do software contrafeito, devendo ter caráter compensatório e punitivo. Considerando a capacidade econômica da ré, o valor do programa e a extensão do dano, fixou o fator multiplicador em duas vezes o valor do software. Determinou juros desde o evento danoso (Súmula 54 do STJ), por se tratar de responsabilidade extracontratual. Parcial provimento. Unânime. Propriedade industrial: não em sentido estrito — direito autoral sobre software, sob a rubrica 'propriedade intelectual e industrial'.", "SOLICITAR PROCESSO", "", ""],
  ["70085200780 (Nº CNJ: 0033631-90.2021.8.21.7000)", "8/19/2021", "2021", "Sexta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des. Gelson Rolim Stocker", "marca; contrafação; busca e apreensão; dano moral; dano moral in re ipsa; pessoa jurídica; lucro cessante; apelação provida", "APELAÇÃO CIVEL. PROPRIEDADE INDUSTRIAL. AÇÃO DE OBRIGAÇÃO DE FAZER C/C INDENIZAÇÃO POR DANO MATERIAL E MORAL. DANO MORAL. CABIMENTO.\n \n - É cabível a compensação por danos morais experimentados por pessoa jurídica titular de marca alvo de contrafação, os quais decorrem de ofensa à sua imagem, identidade ou credibilidade.\n - Por sua vez, o dano moral por uso indevido da marca é aferível in re ipsa. \n \n RECURSO PROVIDO. UNÂNIME", "Apelação de 54th Street Holdings S.à r.l. contra sentença de parcial procedência em ação de obrigação de não fazer cumulada com indenização, ajuizada com DC Shoes, Inc., titulares das marcas 'DC' e 'Quiksilver', contra comerciantes que vendiam produtos contrafeitos. Houve acordo com os demais réus, e o feito prosseguiu apenas contra Luciana da Silva Ferreira (Bazar e Locadora Master Vídeo). A sentença determinou que a ré se abstivesse de comercializar produtos contrafeitos com as marcas da autora e fixou indenização material, mas não reconheceu dano moral. A apelante sustentava que a contrafação comprovada gera dano moral, com base na LPI e nos arts. 186 e 927 do Código Civil. A Câmara entendeu que a pessoa jurídica titular de marca contrafeita sofre dano moral pela ofensa à sua imagem, identidade e credibilidade, e que esse dano, no uso indevido de marca, é presumido (in re ipsa). Considerando que a ré é pessoa jurídica de pequeno porte e os parâmetros do colegiado, fixou a indenização em R$ 3.000,00 e atribuiu à ré as custas e honorários de 15% da condenação, já incluídos os recursais. Recurso provido. Unânime. Propriedade industrial: sim — marca, contrafação e dano moral à pessoa jurídica.", "SOLICITAR PROCESSO", "", ""],
  ["70085217081 (Nº CNJ: 0035261-84.2021.8.21.7000)", "12/15/2021", "2021", "Quinta Câmara Cível", "Desenho industrial", "SIM", "Marcio Lavies Bonder — Contador (CRC-RS 71.633; CNPC/CFC nº 287); Bacharel em Ciências Jurídicas e Sociais; pós-graduado em Perícia Contábil e em Gestão Tributária; sócio de LB Perícias (Marcio Lavies Bonder Perícias SS). [Processo originário, apenas em cópia: Adriano Boff, engenheiro mecânico, CREA 140381]", "1", "R$ 64.089,41", "R$ 64.089,41", "SIM", "-", "-", "INDETERMINÁVEL", "SIM", "AUTOR", "DEFERIDA", "-", "NÃO IDENTIFICADO", "SIM", "Pedido de destituição posterior à nomeação (Autora, Ev. 128): desídia, atraso, laudo que deixou 81% dos quesitos sem resposta, quebra de confiança (arts. 157 e 468 CPC; NBC TP 01). Indeferido (Ev. 131): perito 'preenche todos os requisitos' e é 'profissional da confiança do Juízo'.", "NÃO", "SIM", "Quesitos complementares da Ré (Ev. 193) já respondidos nos laudos anteriores (Ev. 195); deferidos apenas três pontos remanescentes", "SIM", "AUTOR E RÉU", "SIM", "SIM", "NÃO", "NÃO", "SIM", "NÃO IDENTIFICADO", "NÃO", "Des.ª Isabel Dias Almeida", "desenho industrial; contrafação; garrafa térmica; perícia realizada; suspeição do perito; nulidade de registro; prejudicialidade externa; competência da Justiça Federal; dano moral; apelação parcialmente provida", "APELAÇÕES CÍVEIS. PROPRIEDADE INDUSTRIAL. AÇÃO INDENIZATÓRIA POR DANOS MATERIAIS E MORAIS C/C ABSTENÇÃO DA PRÁTICA DE ATO ILÍCITO. DESENHO INDUSTRIAL. PRÁTICA DE CONTRAFAÇÃO. COMPROVAÇÃO DOS FATOS CONSTITUTIVOS. DEVER DE INDENIZAR EVIDENCIADO.\n \n 1. Preliminar de nulidade da sentença por ausência de fundamentação afastada. Tendo a matéria posta sido decidida pelo juízo de origem de forma integral e fundamentada, não há falar em nulidade da sentença. Exegese do art. 93, IX, da CF, art. 489 e o art. 1.013 do CPC.\n 2. Preliminar de prejudicialidade externa afastada. Descabe o pedido de suspensão com base no art. 313, V, “a”, do CPC quando a questão dita prejudicial é posterior ao processo que se pretende suspender, caso dos autos. \n \n 3. O direito de propriedade industrial está protegido pela Constituição Federal e pela Lei de Propriedade Industrial. Inteligência do art. 5º, inciso XXIX, da Carta Magna e do art. 2º, incisos II e V, da Lei nº 9.279/96.\n 4. A proteção conferida pelo registro validamente expedido de Desenho Industrial se limita à forma plástica ornamental, sem qualquer análise quanto aos aspectos funcionais. Exegese do art. 95 e do art. 109 da Lei nº 9.279/96.\n 5. Hipótese em que a parte autora logrou em comprovar a identidade da forma plástica ornamental das garrafas térmicas a amparar a pretensão inibitória e indenizatória, em razão da evidente contrafação praticada pela ré ao DI 5900541-6, validamente concedido pelo órgão competente, nos termos do que preceitua o art. 373, I, do CPC. Laudo pericial demonstrando que a garrafa térmica fabricada e comercializada pela ré possui identidade com o DI 59000541-6 de titularidade da autora.\n \n 6. Evidenciado o ilícito da contrafação, deve ser mantida a sentença, para condenar a ré ao pagamento de danos materiais, conforme autoriza o art. 208 da Lei nº 9.279/96, a ser apurado em liquidação de sentença, assim como a abstenção da prática dos atos ilícitos.\n 7. Não configurada qualquer das hipóteses previstas no art. 145 do CPC, aplicável aos auxiliares da justiça, consoante art. 148 do CPC, afasta-se a alegada suspeição do perito, mostrando-se plenamente hígida a prova pericial.\n 8. A tese de nulidade do registro do desenho industrial deve ser arguida em ação própria, com participação do INPI e processamento perante a Justiça Federal, o que se verifica na hipótese. Entendimento conforme Recurso Especial Repetitivo nº 1.527.232/SP. \n 9. Ainda que se admita a arguição de nulidade incidental, nos termos do §1º do art. 56 da Lei nº 6.279/96, não há nos autos elementos suficientes para tal comprovação, até mesmo porque o laudo pericial é superficial quanto ao exame dos requisitos de nulidade do DI 59000541-6.\n \n 10. O prejuízo moral, uma vez comprovada contrafação, prescinde de comprovação decorrendo do próprio ato ilícito. \n 11. Valor fixado em R$15.000,00, considerando o caráter repressivo e pedagógico da indenização e, também, que não se revela elevado o bastante a configurar enriquecimento sem causa da parte autora.\n \n 12. Juros moratórios de 1% ao mês devidos a partir do evento danoso (Súmula 54 do STJ) e correção monetário pelo IGP-M a contar do arbitramento (Súmula 362 do STJ).\n \n 13. Determinação de abstenção de produção e comercialização da garrafa térmica pela ré, sob pena de incidência de multa para o caso de descumprimento, que se mostra suficiente, descabendo a determinação de destruição dos moldes e ferramentas destinadas à fabricação do produto.\n 14. Manutenção do quantum arbitrado a título de honorários advocatícios, considerando os critérios previstos no art. 85, §2º, do CPC.\n PRELIMINARES AFASTADAS. RECURSO DA RÉ DESPROVIDO E RECURSO DA AUTORA PARCIALMENTE PROVIDO.", "Apelações de Soprano Eletrometalúrgica e Hidráulica Ltda. (ré) e de Termolar S.A. (autora) contra sentença de parcial procedência em ação indenizatória cumulada com abstenção. A sentença, integrada por embargos, proibiu a ré de produzir e comercializar produtos que imitem o desenho industrial DI 5900541-6 (garrafa térmica) da autora, sob multa de R$ 10.000,00, e a condenou em danos materiais a liquidar. A Câmara afastou as preliminares da ré de nulidade por falta de fundamentação e de suspensão por prejudicialidade externa, pois as ações de nulidade na Justiça Federal são posteriores. Afastou também a suspeição do perito. No mérito, o laudo demonstrou identidade entre a forma plástica ornamental da garrafa da ré e o desenho registrado, configurando contrafação (arts. 95, 109 e 208 da LPI). A nulidade do registro deve ser discutida na Justiça Federal com o INPI (REsp repetitivo 1.527.232/SP) e, de todo modo, não foi comprovada. Acolhendo em parte o recurso da autora, reconheceu dano moral in re ipsa de R$ 15.000,00, com juros desde o evento danoso e correção desde o arbitramento. Negou a destruição dos moldes, por ser suficiente a abstenção com multa, e manteve os honorários. Recurso da ré desprovido e da autora parcialmente provido. Unânime. Propriedade industrial: sim — desenho industrial e contrafação.", "5007738-76.2022.8.21.0048", "1ª Vara Cível da Comarca de Farroupilha", "Marcio Lavies Bonder — Contador (CRC-RS 71.633; CNPC/CFC nº 287); Bacharel em Ciências Jurídicas e Sociais; pós-graduado em Perícia Contábil e em Gestão Tributária; sócio de LB Perícias (Marcio Lavies Bonder Perícias SS). [Processo originário, apenas em cópia: Adriano Boff, engenheiro mecânico, CREA 140381]"],
  ["70085219194 (Nº CNJ: 0035472-23.2021.8.21.7000)", "12/16/2021", "2021", "Sexta Câmara Cível", "Patente (identificar tipo)", "SIM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "NÃO", "", "", "", "", "", "", "NÃO", "", "", "NÃO", "Des. Gelson Rolim Stocker", "patente; contrafação; pulverizador; ilegitimidade passiva; responsabilidade do comerciante; ação indenizatória; sentença desconstituída; apelo provido", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL. ação indenizatória por contrafação. responsabilidade de terceiro. ilegitimidade passiva afastada. SENTENÇA DESCONSTITUÍDA.\n \n - Trata-se de ação indenizatória por contrafação, em que a parte autora pleiteia a condenação da ré ao pagamento de indenização por danos materiais e morais, em razão da comercialização de produto idêntico ao patenteado pelo requerente.\n \n - Em sua defesa, a ré suscitou a preliminar de ilegitimidade passiva que foi acolhida na origem, culminando na extinção do feito.\n - Entretanto, o conjunto fático-probatório revela que a parte ré, além de ter conhecimento acerca da existência da patente restrita ao autor, também contratou uma empresa terceirizada para montagem daquele modelo de pulverizador, assim como obteve lucro com a comercialização do produto. Assim, deve ser reconhecida a legitimidade passiva da ré. Apelo provido para desconstituir a sentença viabilizando o regular prosseguimento da ação.\n APELO PROVIDO. SENTENÇA DESCONSTITUÍDA. UNÂNIME.", "Apelação de Gentil Sétimo Battistin contra sentença que acolheu a preliminar de ilegitimidade passiva e extinguiu a ação indenizatória por contrafação movida contra Miguel de Antoni – Distribuidora EPP. O autor alegava que a ré comercializava pulverizador de turbina giratória idêntico ao produto por ele patenteado, pedindo danos materiais e morais. A sentença considerou a ré mera comerciante, pois a nota fiscal mostrava a compra do pulverizador da fabricante Superti & Perin Ltda. e sua revenda a terceiro. Em contrarrazões, a ré sustentou boa-fé, ausência de concorrência com o autor, que é fabricante, e contrafação praticada por terceiro. A Câmara entendeu que o conjunto probatório revela que a ré conhecia a existência da patente do autor, contratou empresa terceirizada para montar o modelo de pulverizador e lucrou com sua comercialização. Isso basta para reconhecer sua legitimidade passiva na ação por contrafação. Deu provimento ao apelo para desconstituir a sentença e determinar o regular prosseguimento da ação na origem, sem exame do mérito da contrafação. Unânime. Propriedade industrial: sim — patente e contrafação; decisão sobre legitimidade passiva do comerciante.", "NÃO LOCALIZADO -", "", ""],
  ["70085227817 (Nº CNJ: 0036334-91.2021.8.21.7000)", "8/25/2021", "2021", "Quinta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des. Jorge Luiz Lopes do Canto", "marca; clube de futebol; Lei Pelé; contrafação; busca e apreensão; revelia; dano moral in re ipsa; apelação parcialmente provida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL E INTELECTUAL. abstenção de uso de marca de clube de futebol cumulada com indenização por danos morais e materiais. uso indevido de marca de clube protegida pela lei pelé. danos imateriais. sentença reformada.\n 1.\n A propriedade industrial tem proteção constitucional, visando estimular o progresso técnico e científico, considerando o interesse social e econômico do país. A par disso, em vista de uma maior proteção ao autor da criação industrial, bem como a especificação e desenvolvimento da matéria, foi editada a Lei nº 9.279 de 1996, conhecida como Lei de Propriedade Industrial, na qual é limitado o âmbito de atuação da proteção aos direitos relativos à propriedade industrial.\n \n 2.\n Em vista de uma maior proteção aos direitos de imagem dos clubes de futebol, o art. 87 da Lei n.º 9.615/98, conhecida como Lei Pelé define que a denominação e os símbolos de entidade de administração do desporto ou prática desportiva, bem como o nome ou apelido desportivo do atleta profissional são de propriedade exclusiva dos mesmos, contando com a proteção legal, válida para todo o território nacional, por tempo indeterminado, sem necessidade de registro ou averbação no órgão competente.\n 3.\n No caso em exame a parte autora assevera na inicial que seus produtos vêm sendo objeto de contrafação pelas rés. Tal fato já restou reconhecido na decisão singular, postulando a parte autora, tão somente, a condenação das rés ao pagamento de indenização por danos morais, visto que os danos materiais já restaram reconhecidos na decisão prolatada.\n 4.\n Danos morais. No que tange à prova do dano moral, por se tratar de lesão imaterial, desnecessária a demonstração do prejuízo, na medida em que possui natureza compensatória, minimizando de forma indireta as consequências da conduta da ré, decorrendo aquele do próprio fato. Conduta ilícita da demandada que faz presumir os prejuízos alegados pela parte autora, é o denominado dano moral puro. \n \n 5.\n Diante da utilização indevida de marca própria, ocasionando confusão nos consumidores e prejuízos comerciais, com a consequente vulgarização do produto e a desvalorização da reputação comercial do titular da marca já constituem elementos suficientes a causar dano à pessoa jurídica, pois nesta hipótese existe uma denominação, marca e imagem a ser preservada.\n 6.\n O valor a ser arbitrado a título de indenização por dano imaterial deve levar em conta o princípio da proporcionalidade, bem como as condições da ofendida, a capacidade econômica do ofensor, além da reprovabilidade da conduta ilícita praticada. Por fim, há que se ter presente que o ressarcimento do dano não se transforme em ganho desmesurado, importando em enriquecimento ilícito. Quantum arbitrado de acordo com os parâmetros precitados.\n \n 7.\n Ônus de sucumbência mantido, considerando que, em primeiro grau de jurisdição, as rés foram condenadas a arcar com a integralidade das custas processuais e com os honorários advocatícios aos procuradores da autora, levando em conta o êxito obtido na demanda.\n \n Dado parcial provimento ao apelo.", "Apelação do Sport Club Internacional em ação de obrigação de não fazer cumulada com indenização movida contra Cristina Dolair Bergoli, Vera Lúcia dos Santos Teixeira, Antílio da Silva Mesquita, Mauro Mendes de Mello Júnior e Zborowski e Zborowski Ltda., por comercialização de produtos contrafeitos com a marca do clube. A sentença já reconhecera a contrafação e os danos materiais, e o recurso limitou-se ao pedido de danos morais. A Câmara lembrou que o art. 87 da Lei 9.615/98 (Lei Pelé) protege a denominação e os símbolos das entidades desportivas em todo o território nacional, independentemente de registro, ao lado da proteção da Lei 9.279/96. Entendeu que o uso indevido da marca, com confusão do consumidor, vulgarização do produto e desvalorização da reputação do titular, gera dano moral in re ipsa à pessoa jurídica. Fixou a indenização em R$ 3.000,00, a ser suportada individualmente por cada réu, com juros desde o evento danoso e correção desde o arbitramento, mantida a sentença quanto ao mais, inclusive a sucumbência. Unânime. Observação: o voto e a ementa registram parcial provimento, enquanto a súmula transcrita na fonte registra 'deram provimento ao recurso'. Propriedade industrial: sim — marca e símbolos de clube de futebol e contrafação.", "SOLICITAR PROCESSO", "", ""],
  ["5000587-18.2018.8.21.0010/RS", "10/29/2025", "2025", "Quinta Câmara Cível", "Desenho industrial; Modelo de utilidade", "NÃO", "sem perícia de pi", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Juiza de Direito GIOVANA FARENZENA", "modelo de utilidade; desenho industrial; nulidade de registro pelo INPI; contrafação; concorrência desleal; perícia requerida; desistência da prova pericial; ônus da prova; recurso desprovido", "DIREITO CIVIL. APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL. DESCASCADOR DE PINHÃO. ALEGAÇÃO DE CONTRAFAÇÃO E CONCORRÊNCIA DESLEAL. AUSÊNCIA DE PROVA. IMPROCEDÊNCIA MANTIDA.\n \n I. CASO EM EXAME:\n \n II. QUESTÃO EM DISCUSSÃO:\n 1. Há duas questões em discussão: (i) a existência de contrafação e concorrência desleal praticadas pelas apeladas em relação ao produto \"descascador de pinhão\"; (ii) a validade dos direitos de propriedade industrial invocados pela apelante.\n \n III. RAZÕES DE DECIDIR:\n 1. O Registro de Desenho Industrial nº BR30.2017.002541-2 invocado pela apelante foi declarado nulo pelo próprio INPI, sob o fundamento de que o produto já era divulgado e comercializado desde 2011, seis anos antes do pedido.\n 2. A declaração de nulidade de um desenho industrial retroage à data do depósito do pedido de registro, produzindo efeitos ex tunc, o que afasta a proteção ou violação de direitos com base neste registro.\n 3. Quanto à Patente de Modelo de Utilidade nº BR20.2017.013363-5, concedida em 26/07/2022, a alegação de contrafação e concorrência desleal exige a comprovação de que o produto fabricado pelas apeladas constitui violação dos direitos conferidos pela patente.\n 4. A apelante, embora tenha requerido a produção de prova pericial, posteriormente desistiu da mesma por falta de pagamento dos honorários, não se desincumbindo do ônus probatório que lhe competia, nos termos do art. 373, I, do CPC.\n 5. A existência de pedido administrativo de nulidade da patente junto ao INPI, protocolizado pela apelada, reforça a controvérsia sobre a validade da patente e a necessidade de prova robusta da contrafação, a qual não foi produzida nos autos.\n \n Recurso desprovido.", "Apelação cível em ação de obrigação de fazer e indenizatória ajuizada por Metalúrgica Scain Ltda. contra ST2 Indústria e Comércio Ltda. e Tao Comercial Distribuidora Ltda., relativa ao produto \"descascador de pinhão\". A autora invocava o registro de desenho industrial BR30.2017.002541-2 e o título BR20.2017.013363-5, alegando fabricação e venda de produtos idênticos pelas rés. A sentença julgou improcedente a ação, com honorários de 15%. A apelante sustentava que a demanda se baseava também na patente de modelo de utilidade BR20.2017.013363-5, concedida em 2022, que o pedido administrativo de nulidade não tinha efeito suspensivo e que a sentença considerara indevidamente patente de terceiro de 2003 e pedia abstenção, indenização por concorrência desleal e condenação por litigância de má-fé. A Câmara entendeu que o desenho industrial foi declarado nulo pelo INPI por falta de novidade, com efeitos ex tunc, e que, quanto ao modelo de utilidade, a contrafação não foi provada, pois a autora desistiu da perícia por não pagar os honorários, ônus que lhe cabia (art. 373, I, CPC). Recurso desprovido, honorários majorados para 17%. Decisão unânime. Propriedade industrial: sim — desenho industrial anulado pelo INPI e patente de modelo de utilidade, contrafação e concorrência desleal (Lei 9.279/96).", "", "", ""],
  ["5018859-26.2019.8.21.0010/RS", "6/26/2024", "2024", "Quinta Câmara Cível", "Marca", "NÃO", "sem perícia de pi", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des. Niwton Carpes da Silva", "marca; uso indevido de marca; licença de uso de marca; ausência de licenciamento; tratativa pré-contratual; tutela inibitória; multa diária consolidada; dano moral in re ipsa; liquidação de sentença; apelação desprovida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL E INTELECTUAL. ação de abstenção de uso de marca cumulada com indenizatória por danos materiais e morais. direito de exclusividade. ausência de licenciamento. danos materiais e morais configurados. descumprimento da tutela inibitória. multa diária consolidada.\n \n 1) Trata-se de ação através da qual pretende a parte autora a abstenção do uso de marca por parte da ré, bem como indenização por danos materiais e morais, julgada procedente na origem.\n \n 2) A marca ou sinal encontra proteção Constitucional no art.5º, inc. XXIX da CF e na Lei Federal n. 9279/96, especialmente nos arts.122 e seguintes.\n \n 3) Demonstração de existência de pedido autoral de registro da marca na classe motores elétricos, o qual foi efetivamente concedido pelo INPI, conforme certificado de registro de marca juntado aos autos.\n \n 4) Ao depositante é garantido o direito de zelar pela integridade material ou reputação da marca, nos termos do art. 130, III, da Lei 9.279/96 e da jurisprudência consolidada do STJ.\n \n 5) Incontroverso é que não há contrato de licenciamento de uso de marca firmado entre as partes. Decisão de deferimento do arrendamento temporário da UPI Motores à empresa demandada que não comprova que a marca fazia parte do conjunto de bens objeto do arrendamento. Tratativas realizadas na fase pré-contratual, que não redundaram na perfectibilização do contrato de licenciamento da marca, não se podendo concluir, portanto, que a utilização da marca ocorreu com o consentimento da empresa autora, estando evidenciado o dano material deste fato decorrente, que, tal como concluiu o juízo de origem, deve ser apurado em fase de liquidação de sentença, nos termos dos arts. 208, 209 e 210 da LPI, não vingando a pretensão de quantificação prévia.\n \n 6) Descumprimento da tutela inibitória demonstrado, não sendo o caso de reformar a sentença, em qualquer aspecto, em relação à multa fixada e consolidada.\n \n 7) Em razão da utilização indevida da marca, o dano moral é passível de reparação, porquanto é aferível in re ipsa, ou seja, sua configuração decorre da mera comprovação da prática de conduta ilícita, revelando-se despicienda a demonstração de prejuízos concretos ou a comprovação probatória do efetivo abalo moral.\n \n 8) Sentença mantida. Honorários advocatícios majorados.\n \n APELAÇÃO DESPROVIDA.", "Apelação cível interposta por Mercosul Indústria de Motores Ltda. em ação de obrigação de não fazer cumulada com indenização ajuizada por Mundial S.A. Produtos de Consumo, titular da marca \"Eberle\", usada pela ré como nome fantasia, em site e em motores elétricos após adquirir a UPI Motores na recuperação judicial do grupo Voges. A sentença impôs abstenção, multa consolidada em R$ 800.000,00, danos materiais a liquidar pelo art. 210 da LPI e danos morais de R$ 50.000,00. A apelante sustentava ter autorização de uso decorrente da UPI e de contrato de licença com a Metalcorte/Voges, que cumprira a tutela e que inexistia dano moral; subsidiariamente, pedia afastamento da multa e royalties conforme proposta por e-mail. A Câmara entendeu que não havia contrato de licença entre as partes, apenas tratativas pré-contratuais, que o arrendamento da UPI não abrangia a marca, que o descumprimento da tutela estava demonstrado, justificando a multa, e que o dano moral por uso indevido de marca é in re ipsa. Apelo desprovido, honorários majorados para 15% sobre a condenação. Decisão unânime. Propriedade industrial: sim — marca (uso indevido e ausência de licença, arts. 129, 130 e 139 da Lei 9.279/96).", "", "", ""],
  ["5001186-67.2017.8.21.0017/RS", "3/31/2022", "2022", "Sexta Câmara Cível", "Direito Autoral", "NÃO", "sem perícia de pi", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des. Niwton Carpes da Silva", "direito autoral; projeto arquitetônico; desenho de casa popular; uso indevido de obra intelectual; ausência de indicação de autoria; dano material; liquidação de sentença; dano moral; Lei 9.610/98; apelação parcialmente provida", "APELAÇÃO CÍVEL. DIREITO DA PROPRIEDADE INDUSTRIAL, INTELECTUAL E DIREITO AUTORAL. USO INDEVIDO DE DESENHO. CASA POPULAR. ILÍCITO. INDENIZAÇÃO DEVIDA. DANOS MATERIAIS. RECONHECIDO. ARBITRAMENTO EM LIQUIDAÇÃO DE SENTENÇA. DANOS MORAIS. MAJORAÇÃO. DESCABIMENTO.\n \n Trata-se de ação de indenização por danos morais e materiais por violação a direito autoral, julgada parcialmente procedente na origem.\n \n É fato incontroverso nos autos que o autor é desenhista autônomo e que elaborou o projeto de uma casa popular (fls. 28 a 37), dele constando seus direitos autorais, apontando que a ré, sem qualquer autorização prévia de sua parte, ou pagamento pela contraprestação, divulgou em seu sítio eletrônico as fotos do referido projeto como se seu fosse (fls. 38 a 42)\n \n A utilização de obra intelectual alheia, sem autorização, não pode ficar sem consequência patrimonial, data vênia, até por questão de respeito ao autor intelectual e, no caso concreto ao profissional que desenhou o projeto da casa popular e viu seu projeto utilizado nas redes sociais da ré, como se dela fosse, sem qualquer menção à autoria do projeto.\n \n A indenização deve ser fixada em termos razoáveis, não se justificando que a reparação venha a constituir-se em enriquecimento sem causa, com manifestos abusos e exageros, devendo o arbitramento operar-se com moderação, orientando-se o juiz pelos critérios sugeridos pela doutrina e pela jurisprudência, com razoabilidade, valendo-se de sua experiência e do bom senso, atento à realidade da vida e às peculiaridades de cada caso.\n \n Por falta de elemento probatório confiável e suficiente, o feito deve ser submetido a apuração dos danos materiais à liquidação de sentença, onde pode (se houver necessidade) inclusive, ser realizada perícia técnica especializada para arbitrar o dano material pelo uso fraudulento do desenho de autoria do requerente, tendo como patamar máximo o Parágrafo Único do art.103 da Lei de Regência e levando em consideração o princípio da proporcionalidade da divulgação.\n \n De igual sorte, a jurisprudência do STJ firmou-se no sentido de entender cabível a compensação por danos morais experimentados por pessoa jurídica titular de marca alvo de contrafação, os quais podem decorrer de ofensa à sua imagem, identidade ou credibilidade. Por sua vez, o dano moral por uso indevido da marca é aferível in re ipsa, ou seja, sua configuração decorre da mera comprovação da prática de conduta ilícita, revelando-se despicienda a demonstração de prejuízos concretos ou a comprovação probatória do efetivo abalo moral. O arbitramento do quantum do dano moral varia de caso a caso e não pode ser irrisório de modo a estimular a prática do ilícito, como também não pode ser exagerado para não se transformar em fonte de enriquecimento de quem padece, por isso, levando em conta a situação do caso concreto, o valor arbitrado em R$ 30.000,00(...) se mostra adequado, razoável e proporcional ao fato, considerando-se, também a jurisprudência em casos análogos.\n \n APELAÇÃO PARCIALMENTE PROVIDA", "Apelação cível interposta por Marcio Ricardo Bender em ação de obrigação de não fazer cumulada com indenização por danos morais e materiais por violação de direito autoral contra Atual Tintas e Vernizes Ltda. O autor, desenhista, alegava que a ré divulgou em seu site e prospectos, sem autorização nem indicação de autoria, imagens de projeto de casa popular de sua criação. A sentença julgou parcialmente procedente o pedido, fixando danos morais em R$ 30.000,00 e negando danos materiais, com sucumbência recíproca. O apelante sustentava ter direito a danos materiais, calculados pelo valor da obra multiplicado pelos acessos ao site, com base no Título VII da Lei 9.610/98, e pedia a majoração dos danos morais. A Câmara entendeu que o uso não autorizado de obra intelectual gera consequência patrimonial, a ser apurada em liquidação, inclusive por perícia, tendo como teto o parágrafo único do art. 103 da Lei 9.610/98 e observada a proporcionalidade da divulgação, e manteve os danos morais em R$ 30.000,00. Recurso parcialmente provido; sucumbência concentrada na parte ré, com honorários de 15% sobre a condenação após liquidação. Decisão unânime. Propriedade industrial: não — direito autoral (projeto arquitetônico/desenho).", "", "", ""],
  ["5003611-76.2018.8.21.0132/RS", "2/24/2022", "2022", "Sexta Câmara Cível", "Marca", "NÃO", "sem perícia de pi", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des. Gelson Rolim Stocker", "marca; clube de futebol; contrafação; dano moral in re ipsa; lucros cessantes; liquidação de sentença; apelação desprovida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL. AÇÃO DE OBRIGAÇÃO DE não FAZER Com pedido liminar de tutela de urgência c/c Indenizatória POR perdas e DANO. DANO MORAL. CABIMENTO. lucros cessantes. devidos.\n \n - Incontroverso nos autos que as apelantes possuíam e revendiam mercadorias de marca exclusiva da autora, o que configura a pratica de contrafação, em que pese aleguem que, cada uma só possuía uma unidade de produto.\n \n - Na medida em que restou comprovada a prática de contrafação, forçoso concluir que ocorreu, também, lesão extrapatrimonial, independente do produto ser de boa ou má qualidade.\n \n - Quanto aos lucros cessantes, estes são devidos pela prática de contrafação, nos critérios previstos na Lei 9.279/96, art. 210, que deverão ser apurados em liquidação de sentença, conforme fixado na sentença \"a quo\".\n \n - Sentença mantida\n \n NEGARAM PROVIMENTO AO RECURSO. UNÂNIME", "Apelações cíveis interpostas pelas rés (Bazar Telek, Marcelo E. Machado & Cia. Ltda. – Floricultura Beija Flor – e Marines Marthes Monteiro, além de Ivanete Aparecida da Silva Telehen, conforme as razões e o extrato) em ação de obrigação de não fazer cumulada com perdas e danos movida por Grêmio Foot-Ball Porto Alegrense, pela venda de cuias com sua marca sem licença. A sentença julgou procedentes os pedidos: busca e apreensão, abstenção sob multa diária de R$ 1.000,00 limitada a R$ 50.000,00, lucros cessantes pelo art. 210, II, da LPI a liquidar por arbitramento e danos morais de R$ 2.000,00 por ré, com honorários de 15%. As apelantes sustentavam indevido indeferimento da gratuidade, ausência de prova da má qualidade do produto, posse de apenas uma unidade, falta de prova dos lucros cessantes e inexistência de dano moral, ou sua redução. A Câmara entendeu incontroversa a revenda de produtos com marca exclusiva do autor sem autorização, configurando contrafação, com dano moral in re ipsa independentemente da qualidade, valor adequado e lucros cessantes a apurar em liquidação. Apelos desprovidos, honorários majorados em 2%. Decisão unânime. Propriedade industrial: sim — marca (contrafação de marca de clube de futebol).", "", "", ""],
  ["5003615-96.2015.8.21.0010/RS", "11/26/2021", "2021", "Quinta Câmara Cível", "Desenho industrial; Modelo de utilidade", "SIM", "Carlos Eduardo Gasparin — formação não informada (nomeado em 2016 e substituído) | Tiago Rafael de Carvalho — Engenheiro Mecânico, CREA-RS 109140 (petições de 2019 também indicam OAB/RS 73.695)", "1", "R$ 9.540,00", "?", "SIM", "INTEGRAL", "INTEGRAL", "DETERMINANTE", "SIM", "AMBAS", "DEFERIDA", "-", "NÃO IDENTIFICADO", "NÃO", "-", "NÃO", "NÃO", "-", "SIM", "RÉU", "NÃO", "NÃO", "NÃO", "NÃO", "NÃO", "NÃO", "NÃO", "Des. Jorge Luiz Lopes do Canto", "desenho industrial; contrafação; calota de rodoar; perícia realizada; reconvenção; ação cautelar de busca e apreensão; lucros cessantes; dano moral; obrigação de não fazer; julgamento conjunto", "APELAÇÕES CÍVEIS. PROPRIEDADE INDUSTRIAL E INTELECTUAL. JULGAMENTO CONJUNTO. AÇÃO DECLARATÓRIA DE PROPRIEDADE INDUSTRIAL CUMULADA COM INDENIZAÇÃO E RECONVENÇÃO N.º 50036159620158210010. AÇÃO DE BUSCA E APREENSÃO N.º 50036214020148210010. uso indevido de desenho industrial. contrafação. obrigação de não fazer. solidariedade. dever de indenizar. lucros cessantes. dano moral. configurado. prequestionamento.\n \n 1. No caso em exame foi devidamente comprovada a propriedade da empresa reconvinte sobre os desenhos industriais objeto da lide, daí ensejando o dever de indenizar os danos ocasionados pela parte reconvinda ao proceder à contrafação daqueles.\n \n 2. a propriedade industrial tem proteção constitucional, visando estimular o progresso técnico e científico, considerando o interesse social e econômico do país. A par disso, em vista de uma maior proteção ao autor da criação industrial, bem como a especificação e desenvolvimento da matéria, foi editada a Lei nº 9.279 de 1996, conhecida como Lei de Propriedade Industrial, na qual é limitado o âmbito de atuação da proteção aos direitos relativos à propriedade industrial.\n \n 3. Ainda, o referido diploma determina que a propriedade do desenho industrial se adquire pelo registro validamente expedido, o qual garante ao titular o seu uso exclusivo em todo o território nacional.\n \n 4. In casu, verifica-se que a empresa reconvinte é titular perante o Instituto Nacional de Propriedade Industrial – INPI dos registros de Desenho Industrial nº DI6403700-2 e DI6402369-9, de sorte que a exploração do desenho industrial devidamente registrado importa em ofensa ao disposto no art. 109 da Lei n. 9.279 de 14 de maio de 1996.\n \n 5. verifica-se que a empresa reconvinte demonstrou a existência do registro do desenho industrial, ora em discussão, sendo que eventual pretensão de nulidade de registro só pode ser levada a efeito em demanda de competência da Justiça Federal, com a intervenção obrigatória do INPI, consoante disposto no art. 175 da Lei de Propriedade Industrial (Lei 9.279 de 1996), não sendo este o objeto da demanda. a perícia produzida no feito atestou a similitude entre o produto comercializado pela parte reconvinda e aquele objeto do desenho industrial de propriedade da empresa reconvinte.\n \n 6. Da mesma forma, não merece prosperar a pretensão declaratória da empresa Rei Moldes, no que diz respeito ao direito de propriedade, de fabricação e comercialização de CALOTA DE PROTEÇÃO RODOAR, pois o conjunto probatório constante dos autos é no sentido de que a similitude existente entre ambos os desenhos é tal que este incorpora o produto fabricado pela reconvinte Resfri Ar, a qual detém a propriedade industrial regularmente registrada. Assim, inexiste razão jurídica a autorizar a concessão do registro pretendido pela parte reconvinda, sob pena de obstar o direito de fabricação e comercialização garantido à empresa reconvinte.\n \n 7. diante do reconhecimento da utilização indevida pela parte reconvinda do desenho industrial de propriedade da empresa Resfri Ar, é possível a condenação daquela ao pagamento de lucros cessantes limitados aos cinco (05) anos retroativos à distribuição da reconvenção, forte no artigo 225 da Lei de Propriedade Industrial, que deverão ser apurados em sede de liquidação de sentença.\n \n 8. Portanto, evidenciado o uso indevido do desenho industrial registrado pela empresa reconvinte, é corolário lógico a determinação de abstenção da prática de atos que violem a proteção legal garantida pelo registro. Desse modo, merece acolhida a pretensão recursal da empresa reconvinte apenas quanto à condenação à obrigação de não fazer, consubstanciada na abstenção de fabricação e comercialização de calotas de rodoar baseadas no desenho industrial em questão, cujo cumprimento deve ser imposto a ambos os reconvindos.\n \n 9. diante da conduta ilícita praticada pela parte reconvinda, são presumíveis os prejuízos alegados pela empresa reconvinte, é o denominado dano moral puro, ressaltado anteriormente, tendo em vista que foi afetada a credibilidade desta no trato de seus negócios mercantis, dano imaterial que deve ser reparado, na forma do art. 187 do Código Civil. quantum indenizatório mantido em R$ 30.000,00.\n \n 10. Do prequestionamento. Não merece prosperar o prequestionamento postulado objetivando a interposição de recurso à Superior Instância, visto que o julgador não está obrigado a se manifestar sobre todos os artigos de lei invocados pelas partes, bastando que aqueles referidos no corpo da decisão sejam suficientes para a resolução do caso submetido à apreciação.\n \n negado provimento aos apelos da parte reconvinda e dado parcial provimento ao recurso da parte reconvinte.", "Apelações de Rei Moldes e Componentes Plásticos Ltda. - EPP e Oscimar Correa Graminho e de Resfri Ar Climatizadores e Equipamentos Ltda., julgadas em conjunto, na ação cautelar de busca e apreensão e na ação declaratória cumulada com indenização, com reconvenção, sobre calotas de rodoar. A sentença julgou procedentes a cautelar e a reconvenção de Resfri Ar e improcedente a declaratória: abstenção sob multa, danos morais de R$ 30.000,00 e danos materiais a liquidar pelo art. 210 da LPI. Rei Moldes alegava pedido no INPI desde 2011 e diferença entre os produtos; Resfri Ar pedia abstenção e danos materiais contra ambos os reconvindos e danos morais de ao menos R$ 50.000,00. A Câmara entendeu comprovada a titularidade dos desenhos industriais DI6403700-2 e DI6402369-9 pela Resfri Ar, cuja nulidade só pode ser discutida na Justiça Federal (art. 175 da LPI), e a contrafação atestada por perícia; o pedido de modelo de utilidade MU9101125-6 fora anulado. Manteve lucros cessantes (cinco anos) e danos morais. Apelo dos reconvindos desprovido e o da reconvinte parcialmente provido para impor a abstenção a ambos os reconvindos. Decisão unânime. Propriedade industrial: sim — desenho industrial, contrafação e concorrência desleal; pedido de modelo de utilidade anulado.", "5003615-96.2015.8.21.0010 (com a cautelar apensa 5003621-40.2014.8.21.0010, julgada na mesma sentença e no mesmo acórdão)", "5ª Vara Cível da Comarca de Caxias do Sul", "Carlos Eduardo Gasparin — formação não informada (nomeado em 2016 e substituído) | Tiago Rafael de Carvalho — Engenheiro Mecânico, CREA-RS 109140 (petições de 2019 também indicam OAB/RS 73.695)"],
  ["5007357-61.2017.8.21.0010/RS", "11/24/2021", "2021", "Quinta Câmara Cível", "Marca", "SIM", "Jordana Marchioro Canali — perita contábil (CRC-RS 083097, conforme login no sistema), nomeada na liquidação por arbitramento", "1", "R$ 17.729,50", "?", "NÃO IDENTIFICADO", "INTEGRAL", "NÃO SE APLICA", "DETERMINANTE", "SIM", "AMBAS", "MULTIPLAS_DECISOES", "Perícia documentoscópica no incidente de falsidade (16/05/2017): quanto às declarações, 'não se prova por perícia grafodocumentoscópica, por configurar hipótese de eventual falsidade ideológica e não falsidade (material) de documento'; quanto aos encartes, 'fica inviabilizada a perícia requerida pelos excipientes', por falta dos originais. A perícia contábil pedida na inicial foi feita na liquidação por arbitramento", "NÃO IDENTIFICADO", "NÃO", "-", "NÃO", "NÃO", "-", "SIM", "NÃO IDENTIFICADO", "-", "NÃO", "NÃO", "NÃO", "NÃO", "NÃO", "NÃO", "Des. Jorge André Pereira Gailhard", "marca; nome empresarial; concorrência desleal; reconvenção; grupo econômico; anterioridade; incidente de falsidade; perícia requerida; dano moral in re ipsa; apelação desprovida", "AÇÃO COMINATÓRIA CUMULADA COM INDENIZAÇÃO POR DANOS MORAIS. RECONVENÇÃO. PROPRIEDADE INDUSTRIAL E INTELECTUAL. MARCA. NOME EMPRESARIAL CONCORRÊNCIA DESLEAL À MARCA. COMPROVAÇÃO. DANOS MATERIAIS. LIQUIDAÇÃO DE SENTENÇA. DANOS MORAIS. OCORRÊNCIA. HONORÁRIOS ADVOCATÍCIOS MANUTENÇÃO. HONORÁRIOS RECURSAIS.\n \n AC Nº 5003536-20.2015.8.21.0010/RS\n \n I. NA HIPÓTESE, É INCONTROVERSO QUE A RÉ-RECONVINTE É TITULAR DAS MARCAS \"O VANTAJÃO SUPERMERCADOS\" E \"SUPERMERCADOS VANTAJÃO\", AO PASSO QUE A AUTORA POSSUI EMPRESA COM NOME FANTASIA CONTENDO O NOME \"VANTAJÃO\".\n \n II. POR CERTO, É SABIDO QUE O DIREITO DE PROPRIEDADE SOBRE AS MARCAS ESTÁ PROTEGIDO PELA CONSTITUIÇÃO FEDERAL E PELA LEI DE PROPRIEDADE INDUSTRIAL. INTELIGÊNCIA DO ART. 5º, XXIX, DA CARTA MAGNA E DO ART. 129, DA LEI 9.279/96. DE IGUAL FORMA, TANTO A MARCA COMO O NOME EMPRESARIAL, ESTÃO CONSTITUCIONALMENTE PROTEGIDOS PELO ART. 5º, XXIX, DA CARTA MAGNA.\n \n III. NO CASO CONCRETO, A RÉ O VANTAJÃO SANTA FÉ OBTEVE O REGISTRO DAS MARCAS \"O VANTAJÃO SUPERMERCADOS\" E \"SUPERMERCADOS VANTAJÃO\" PERANTE O INPI, COM DATA DE DEPÓSITO EM 29.07.2005 E 24.11.2008, RESPECTIVAMENTE, ESTANDO AMBAS EM PLENA VIGÊNCIA. NO ENTANTO, OS AUTORES NÃO OBTIVERAM ÊXITO AO TENTAR REGISTRAR A MARCA, TENDO O INPI FUNDAMENTADO A SUA DECISÃO COM BASE NO ART. 124, XIX, DA LEI Nº 9.279/96. INCLUSIVE, A PRÓPRIA PARTE AUTORA RECONHECEU NÃO TER APRESENTADO INSURGÊNCIA NA VIA ADMINISTRATIVA, DEIXANDO DE POSTULAR, TAMBÉM, A NULIDADE DA MARCA PERANTE A JUSTIÇA FEDERAL, COMO FORMA DE IMPOR AO TITULAR A ABSTENÇÃO DO USO.\n \n IV. HIPÓTESE EM QUE EMPRESA-RÉ FOI CONSTITUÍDA PELO PRÓPRIO AUTOR JOSÉ ALTAIR, EM SOCIEDADE COM O DEMANDADO SANDRO ALEX, ONDE AMBOS DECIDIRAM ADOTAR A NOMENCLATURA \"VANTAJÃO\" NO NOME EMPRESARIAL DA APELADA, EM COMUNHÃO DE ESFORÇOS. TANTO É ASSIM QUE O NOME EMPRESARIAL DA CODEMANDADA PERMANECEU O MESMO, AINDA QUE APÓS A RETIRADA DO SÓCIO-DEMANDANTE JOSÉ ALTAIR DA SOCIEDADE.\n \n V. SEM QUALQUER EVIDÊNCIA DE QUE A SAÍDA DO AUTOR DA SOCIEDADE PODERIA PREJUDICAR A EXPLORAÇÃO DA MARCA \"VANTAJÃO\", QUE AINDA NÃO HAVIA SIDO REGISTRADA, SENDO A EMPRESA-RÉ NATURALMENTE DETENTORA DA PROTEÇÃO CONFERIDA AO SEU NOME EMPRESARIAL, RAZÃO NÃO HÁ PARA SE CONCLUIR QUE A REQUERIDA NÃO PODERIA UTILIZAR DA RESPECTIVA MARCA.\n \n VI. POR CONSEGUINTE, É DE SER MANTIDA A IMPROCEDÊNCIA DA DEMANDA, PORQUE INEXISTE PROVA DA USURPAÇÃO DO NOME EMPRESARIAL E DA MARCA, RAZÃO PELA QUAL NÃO HÁ FALAR EM ABSTENÇÃO DO USO PELOS RÉUS, TAMPOUCO EM DANOS MATERIAIS E EM DANOS MORAIS.\n \n VII. OUTROSSIM, NÃO HÁ ELEMENTOS QUE CARACTERIZEM A EMPRESA VANTAJÃO SANTA FÉ COMO CONTROLADORA DA EMPRESA SANDRA MARIA NUNES MORAIS E CIA LTDA., NA FORMA DO ART. 265, DA LEI Nº 6.404/76, RAZÃO PELA QUAL NÃO VINGA O PEDIDO SUBSIDIÁRIO.\n \n VIII. NO QUE TANGE À RECONVENÇÃO, A PARTIR DAS PROVAS DOS AUTOS, CONCLUI-SE QUE O AUTOR JOSÉ ALTAIR DE OLIVEIRA MORAIS VEM TENTANDO CEDER A MARCA, COMO SE FOSSE O VERDADEIRO TITULAR, A TERCEIROS. LOGO, É NOTÓRIO QUE A MARCA DE TITULARIDADE DO RECONVINTE ESTÁ CAUSANDO CONFUSÃO AOS CLIENTES, EM CONCORRÊNCIA DESLEAL, POIS A EMPRESA O VANTAJÃO SANTA FÉ ATUA NO MESMO RAMO E NO MESMO MUNICÍPIO. ASSIM, AS AUTORAS DEVEM SE ABSTER DE PRATICAR ATOS QUE IMPORTEM VIOLAÇÃO AO NOME EMPRESARIAL E ÀS MARCAS REGISTRADAS PELOS RECONVINTES, EM CONSONÂNCIA À ILUSTRADA SENTENÇA.\n \n IX. MANUTENÇÃO DOS HONORÁRIOS ADVOCATÍCIOS DO PROCURADOR DA RÉ-RECONVINDA, NOS TERMOS DO ART. 85, §§ 2º E 8º DO CPC.\n \n AC Nº 5007357-61.2017.8.21.0010/RS\n \n X. CONSIDERANDO O RESULTADO DO JULGAMENTO PRINCIPAL, EM QUE RECONHECIDO QUE A EMPRESA VANTAJÃO SANTA FÉ, AUTORA NA PRESENTE DEMANDA, É TITULAR DAS MARCAS COM A NOMENCLATURA \"VANTAJÃO\", PERCEBE-SE QUE A RÉ DEVE SER RESPONSABILIZADA POR PRÁTICA DE CONCORRÊNCIA DESLEAL E USURPAÇÃO DE MARCA ALHEIA. PORTANTO, ESTA TAMBÉM DEVERÁ SE ABSTER DE PRATICAR ATOS QUE IMPORTEM VIOLAÇÃO AO NOME EMPRESARIAL E ÀS MARCAS REGISTRADAS PELA AUTORA, TUDO CONFORME A SENTENÇA.\n \n XI. EM RELAÇÃO AOS DANOS MATERIAIS, É CERTO QUE A VIOLAÇÃO ÀS MARCAS CAUSOU PREJUÍZO À PARTE AUTORA, DEVENDO A QUESTÃO SER RESOLVIDA MEDIANTE LIQUIDAÇÃO DE SENTENÇA, EM CONFORMIDADE COM O ART. 208 E SEGUINTES, DA LEI Nº 9.279/96, COMO DESTACADO PELO ILUSTRE JUÍZO DE ORIGEM. NO PONTO, NÃO HOUVE IMPUGNAÇÃO ESPECÍFICA NO QUE CONCERNE À APURAÇÃO DOS DANOS MATERIAIS POR LIQUIDAÇÃO DE SENTENÇA.\n \n XII. DE OUTRO LADO, A HIPÓTESE DOS AUTOS REFLETE O DANO MORAL IN RE IPSA OU DANO MORAL PURO, EM RAZÃO DA VIOLAÇÃO DAS MARCAS, CONFERINDO O DIREITO À REPARAÇÃO SEM A NECESSIDADE DE PRODUÇÃO DE OUTRAS PROVAS. ALIÁS, O EGRÉGIO STJ ADOTOU O ENTENDIMENTO DE QUE A VIOLAÇÃO DA MARCA ENSEJA A INDENIZAÇÃO POR DANOS MORAIS, INDEPENDENTEMENTE DA PROVA DO PREJUÍZO EXTRAPATRIMONIAL.\n \n XIII. DESCABE QUALQUER ANÁLISE SOBRE O QUANTUM INDENIZATÓRIO, ANTE A AUSÊNCIA DE INSURGÊNCIA RECURSAL SOBRE A MATÉRIA.\n \n XIV. MANUTENÇÃO DOS HONORÁRIOS ADVOCATÍCIOS DO PROCURADOR DA RÉ EM 10% SOBRE O VALOR ATUALIZADO DA CONDENAÇÃO, NOS TERMOS DO ART. 85, § 2º, DO CPC, BEM COMO A SINGELEZA DA CAUSA.\n \n XV. DE ACORDO COM O ART. 85, § 11, DO CPC, AO JULGAR RECURSO, O TRIBUNAL DEVE MAJORAR OS HONORÁRIOS FIXADOS ANTERIORMENTE AO ADVOGADO VENCEDOR, OBSERVADOS OS LIMITES ESTABELECIDOS NOS §§ 2º E 3º PARA A FASE DE CONHECIMENTO.\n \n APELAÇÕES DESPROVIDAS.", "Apelações cíveis julgadas conjuntamente, por conexão, com sentença única. No primeiro, José Altair de Oliveira Morais e Sandra Maria Nunes Morais e Cia. Ltda. moveram ação de abstenção de uso de marca e nome empresarial com indenização contra O Vantajão Santa Fé Distribuidora de Produtos Alimentícios Ltda. e Sandro Alex Perussato, que reconvieram; no segundo, O Vantajão Santa Fé demandou ADV Comércio de Produtos Alimentícios Ltda. pelo uso da marca \"Vantajão\". A sentença julgou improcedente a primeira ação, procedente a reconvenção e procedente a segunda ação, com abstenção, danos morais de R$ 40.000,00 e danos materiais a liquidar. Os apelantes alegavam anterioridade do nome empresarial, má-fé no registro da marca, grupo econômico e ausência de danos. A Câmara entendeu que a ré detém registros vigentes das marcas \"O Vantajão Supermercados\" e \"Supermercados Vantajão\", que a nulidade deveria ser buscada na Justiça Federal e que a própria empresa ré foi constituída pelo autor já com o nome \"Vantajão\"; afastou o grupo econômico e reconheceu concorrência desleal e dano moral in re ipsa. Negou provimento às apelações e majorou os honorários para R$ 9.000,00 e 12%. Decisão unânime. Propriedade industrial: sim — marca registrada, nome empresarial e concorrência desleal (Lei 9.279/96).", "5007357-61.2017.8.21.0010 (julgado com a ação apensa 5003536-20.2015.8.21.0010; liquidação por arbitramento 5045445-95.2022.8.21.0010; incidente de falsidade 0039657-35.2015.8.21.0010)", "5ª Vara Cível da Comarca de Caxias do Sul", "Jordana Marchioro Canali — perita contábil (CRC-RS 083097, conforme login no sistema), nomeada na liquidação por arbitramento"],
  ["5055765-42.2019.8.21.0001/RS", "3/31/2021", "2021", "Quinta Câmara Cível", "Direito Autoral", "NÃO", "sem perícia de pi", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Des. Jorge Luiz Lopes do Canto", "direito autoral; composição musical; indicação de autoria; direito moral do autor; streaming; cessão de direitos autorais; ISRC; dano moral in re ipsa; juros moratórios", "APELAÇÃO CÍVEL. direito autoral. AÇÃO DE INDENIZAÇÃO. disponibilização de composição musical sem indicação da autoria. ILÍCITO CARACTERIZADO. danos morais. ocorrência. QUANTUM majorado. juros moratórios a contar do evento danoso.\n \n 1. A Constituição Federal, em seu art. 5º, inciso XXVII, confere proteção ao direito do autor, em razão do interesse econômico, moral e social envolvido. No mesmo rumo, a Lei n. 9.610 de 1998 regula as hipóteses de proteção ao direito autoral, consoante se denota do seu art. 7º.\n \n 2. Assim, o direito do autor regula as relações jurídicas advindas da criação de obras intelectuais, estéticas e compreendidas na literatura, nas artes e nas ciências, logo, se enquadra perfeitamente como composição musical a composição de autoria da parte autora, cuja criação artística deve ser atribuída a esta.\n \n 3. Inicialmente, cumpre destacar que a autoria das músicas é fato incontroverso nos autos, a teor do que estabelece o art. 374 do CPC, argumentando a ré que não tinha ciência da autoria para viabilizar a devida creditação das obras, porque elas não haviam sido objeto de registro. Entretanto, é importante frisar que a falta de registro da autoria da composição musical em questão não impede que o autor busque a reparação pela violação do direito autoral, pois de acordo com o disposto no art. 18 da Lei nº 9.610/98, os Direitos Autorais não dependem de registro prévio.\n \n 4. Portanto, é evidente que a disponibilização das músicas sem a devida menção da autoria viola os direitos autorais, devendo a parte ré ser responsabilizada pelos danos daí decorrentes, em função do ilícito praticado.\n \n 5. Note-se que a inexistência de registro não impede o reconhecimento e o pagamento dos direitos autorais ao criador da obra, bem como a cessão destes direitos não se presume ou ocorre de forma tácita, ao contrário, conforme do disposto no art. 50 da lei n. 9.610/98 está deverá ocorrer sempre de forma expressa e onerosa, isto é, mediante o correspectivo pagamento pela utilização das músicas em questão.\n \n 6. Cumpre destacar que o artigo 186 do Código Civil, preceitua que: aquele que, por ação ou omissão voluntária, negligência ou imprudência, violar direito e causar dano a outrem, ainda que exclusivamente moral, comete ato ilícito. Igualmente, o artigo 927, do diploma legal precitado, estabelece que: aquele que, por ato ilícito (arts. 186 e 187), causar dano a outrem, fica obrigado a repará-lo; hipóteses de incidência estas que se aplicam aos fatos descritos na exordial.\n \n 7. Ademais, o dano moral restou perfeitamente delineado, conforme entendimento assentado nas reiteradas decisões desta Corte quanto ao dano ser in re ipsa para hipótese de aquele ser de ordem moral, portanto, prescindindo de prova a esse mister.\n \n 8. O art. 24 da Lei N. 9.610 de 1998 estabelece que são direitos morais do autor, entre outros o de ter seu nome, pseudônimo ou sinal convencional indicado ou anunciado, como sendo o do autor, na utilização de sua obra, o que não ocorreu no caso em exame.\n \n 9. No que tange à prova do dano moral, por se tratar de lesão imaterial, desnecessária a demonstração do prejuízo, na medida em que possui natureza compensatória, minimizando de forma indireta as consequências da conduta do réu, decorrendo aquele do próprio fato. Conduta ilícita da demandada que faz presumir os prejuízos alegados pela parte autora, é o denominado dano moral puro.\n \n 10. O valor a ser arbitrado a título de indenização por dano imaterial deve levar em conta o princípio da proporcionalidade, bem como as condições do ofendido, a capacidade econômica do ofensor, além da reprovabilidade da conduta ilícita praticada. Por fim, há que se ter presente que o ressarcimento do dano não se transforme em ganho desmesurado, importando em enriquecimento ilícito. Portanto, presentes os pressupostos precitados que autorizam a majoração da indenização para R$ 36.000,00, considerando o número de Músicas no caso em tela.\n \n 11. Juros moratórios devidos desde a data do evento danoso, de acordo com a Súmula n. 54 do Superior Tribunal de Justiça, a base de 1% ao mês, na forma do artigo 406, do Código Civil, em consonância com o disposto no artigo 161, § 1º, do Código Tributário Nacional.\n \n Negado provimento ao recurso do réu e dado provimento ao apelo da parte autora.", "Apelações cíveis em ação de contrafação a direito de autor ajuizada pela Sucessão de Sérgio Napp contra Telet S/A, pela disponibilização de treze canções de Sérgio Napp, como \"A Vela\" e \"Desgarrados\", no streaming Claro Música sem crédito de autoria. A sentença determinou a creditação da autoria e condenou a ré a R$ 15.000,00 por danos morais, com juros desde 02.05.2019 e honorários de 20%. A autora pedia majoração, pelo número de obras e pela reincidência, e juros desde o evento danoso; a ré alegava cessão de direitos pela cadeia de licenciamento sem ISRC indicando o autor, exercício regular de direito e inexistência de dano. A Câmara entendeu que os direitos autorais independem de registro (art. 18 da Lei 9.610/98), que a cessão não foi provada e deve ser escrita (art. 50) e que a omissão do nome viola direito moral do autor (art. 24), gerando dano in re ipsa. Negou provimento ao recurso da ré e deu provimento ao da autora, majorando a indenização para R$ 36.000,00, com juros desde a disponibilização das obras. Decisão unânime. Propriedade industrial: não — direito autoral.", "", "", ""],
  ["5001590-30.2018.8.21.0132/RS", "12/10/2020", "2020", "Sexta Câmara Cível", "Marca", "SIM", "-", "0", "-", "-", "NÃO", "-", "-", "NÃO SE APLICA", "NÃO", "-", "-", "-", "-", "-", "-", "-", "NÃO", "-", "SIM", "-", "-", "NÃO SE APLICA", "NÃO SE APLICA", "NÃO", "NÃO SE APLICA", "NÃO", "NÃO", "Des. Luís Augusto Coelho Braga", "marca; contrafação; produto falsificado; busca e apreensão; revelia; ônus da prova; concorrência desleal; sentença mantida; apelação desprovida", "APELAÇÃO CÍVEL. PROPRIEDADE INDUSTRIAL E INTELECTUAL. AÇÃO DE OBRIGAÇÃO DE NÃO FAZER CUMULADA COM PEDIDOS INDENIZATÓRIOS. CONTRAFAÇÃO DE PRODUTOS. AUSENTE COMPROVAÇÃO DA PRÁTICA, A TEOR DO ART. 373, I, CPC. SENTENÇA DE IMPROCEDÊNCIA MANTIDA. APELAÇÃO DESPROVIDA.", "Apelação cível em ação de obrigação de fazer cumulada com pedidos indenizatórios ajuizada por Sport Club Internacional contra Enoch Jacques da Silva (Fábrica de Cuias Jacques), por comercialização de produtos com os distintivos do clube, apreendidos em busca e apreensão. A sentença julgou improcedentes os pedidos, com custas pelo autor e sem honorários. O apelante sustentava que houve contrafação comprovada por laudo e pela ausência de selo holográfico, que a boa-fé do réu era irrelevante e que os produtos de baixa qualidade e preço reduzido geravam confusão, concorrência desleal e desvio de clientela, pedindo danos materiais e morais. A Câmara reconheceu a titularidade da marca e a revelia do réu, mas entendeu não haver prova explícita da contrafação: embora os produtos ostentassem o distintivo, faltou demonstrar a ciência do réu sobre a falsificação, erro grosseiro, má qualidade ou preço manifestamente inferior, tendo o autor permanecido inerte na produção de provas (art. 373, I, do CPC). Negou provimento ao apelo, mantendo a improcedência. Decisão unânime. Propriedade industrial: sim — marca de clube de futebol, alegação de contrafação e concorrência desleal (Lei 9.279/96).", "5001590-30.2018.8.21.0132", "1ª Vara Cível da Comarca de Sapiranga", "-"],
  ["5000124-27.2019.8.21.0112/RS", "5/25/2023", "2023", "Sexta Câmara Cível", "Invenção; Modelo de utilidade", "SIM", "Cassandra Natalia Raimann: Engenheira Civil (UFRGS), CREA-RS 97.314, Agente da Propriedade Industrial nº 2.129, especializações em Engenharia de Produção e Perícia Judicial; José Mauricio Orso: engenheiro civil", "1", "R$ 8.944,25", "R$ 441,74", "SIM", "INTEGRAL", "INTEGRAL", "DETERMINANTE", "SIM", "AUTOR", "DEFERIDA", "-", "CADASTRO JUDICIAL", "SIM", "Ré impugnou o perito José Mauricio Orso (Ev. 61) por ausência de especialização em propriedade industrial (perfil em barragens, estradas e saneamento); pedido deferido (Ev. 63)", "NÃO IDENTIFICADO", "NÃO", "-", "NÃO", "AUTOR E RÉU", "SIM", "SIM", "NÃO", "NÃO", "SIM", "NÃO IDENTIFICADO", "NÃO", "Des.ª Eliziana da Silveira Perez", "patente; contrafação; reivindicação; teoria dos equivalentes; perícia técnica de engenharia; perícia realizada; nova perícia; preclusão; apelação desprovida", "APELAÇÃO. PROPRIEDADE INDUSTRIAL. Ação Declaratória de Violação de Invenção e Patente c/c Indenização por Danos Materiais e Morais. PROVA PERICIAL QUE ATESTOU AUSÊNCIA DE contrafação praticada pela apelada contra a Carta Patente de propriedade do autor.\n \n 1) Na espécie, busca o autor o reconhecimento da violação de Carta Patente, tendo em vita que a empresa ré teria a violado, através da fabricação de três implementos agrícolas.\n \n 2) Segundo conclusão da prova pericial judicial restou comprovada a inexistência de violação/contrafação à Carta Patente de propriedade do autor, pois, concluiu a expert que foi possível constatar que alguns elementos constantes na reivindicação principal não são encontrados de forma literal ou equivalente em ditos equipamentos, o que caracteriza a não violação do invento.\n \n NEGARAM PROVIMENTO À apelação.", "Apelação cível em ação declaratória de violação de patente cumulada com indenização por danos materiais e morais, ajuizada por Julio Adam contra Implementos Agrícolas Jan S.A. O autor, titular da carta patente PI 0521063-1 (chassi para colheitadeira), alegava que três equipamentos da ré — Jan Power Lancer 4.100, Spartan 3000 e Power JT 2650 — reproduziam o invento. A sentença julgou os pedidos improcedentes com base na perícia. Na apelação, o autor impugnou o laudo: perita engenheira civil, exame feito só sobre desenhos e catálogos e contradição entre a análise dos itens e a conclusão; pediu nova perícia por engenheiro mecânico e o reconhecimento de infração literal e por equivalência. A Câmara rejeitou a impugnação por inconsistência das alegações e por preclusão, pois o autor não se opôs à metodologia e validou os desenhos enviados pela ré. Acolheu a conclusão pericial de que elementos da reivindicação 1 não estão presentes, literalmente ou por equivalência, nos equipamentos da ré, que usam suspensão pneumática. Negou provimento ao recurso e majorou os honorários para 17% sobre o valor da causa, com exigibilidade suspensa pela AJG. Decisão unânime. Propriedade industrial: sim — patente, contrafação, reivindicações e teoria dos equivalentes.", "5000124-27.2019.8.21.0112", "Vara Judicial da Comarca de Não-Me-Toque/RS", "Cassandra Natalia Raimann: Engenheira Civil (UFRGS), CREA-RS 97.314, Agente da Propriedade Industrial nº 2.129, especializações em Engenharia de Produção e Perícia Judicial; José Mauricio Orso: engenheiro civil"],
  ["5000160-53.2014.8.21.0077/RS", "11/23/2023", "2023", "Sexta Câmara Cível", "Invenção", "SIM", "(1) Paulo Cesar Montenegro Dessards — engenheiro, segundo a JR Chemin (não atuou); (2) Jefferson Almeida Antunes — engenheiro, CREA-RS 136222, 'com especialidade em mecânica industrial' (acórdão); declarou desconhecer a Lei 9.279/96; (3) Carlos Ignacio Schmitt Sant'Anna — formação não identificada; cadastrado no TJRS em propriedade industrial (não atuou); (4) Ângela Kretschmann — licenciada em Física (PUCRS), mestre (PUCRS, 1999) e doutora (Unisinos, 2006) em Direito, advogada (OAB/RS 30.318), membro da ABAPI", "1", "R$ 984,00", "R$ 984,00", "SIM", "INTEGRAL", "REJEITADA", "DETERMINANTE", "SIM", "AMBAS", "MULTIPLAS_DECISOES", "Nova perícia/novo perito indeferidos em 01/06/2020: 'não vislumbro mácula no laudo realizado pelo perito designado. O inconformismo com a conclusão do estudo não tem o condão de, por si só, conduzir a necessidade de realização novo exame pericial'", "CADASTRO JUDICIAL", "SIM", "Após o laudo, a autora pediu o desentranhamento e novo perito (08/11/2018) e depois nova perícia por especialista em patentes (29/07/2019), por falta de conhecimento da LPI (art. 468, I, CPC). Indeferido em 01/06/2020; AI 70084658400 não conhecido; acolhido pelo TJRS na apelação (23/11/2023). A M&L alegou que a autora nada disse contra a nomeação antes do laudo", "NÃO IDENTIFICADO", "NÃO", "-", "SIM", "AUTOR E RÉU", "SIM", "SIM", "NÃO", "NÃO", "SIM", "NÃO IDENTIFICADO", "NÃO", "Des. Niwton Carpes da Silva", "patente de invenção; contrafação; secador de grãos; reivindicação; perícia realizada; substituição do perito; nova perícia; sentença desconstituída; tempestividade; reconvenção", "apelação cível. propriedade industrial. ação de obrigação de não fazer cumulada com pedido de perdas e danos. secador de grãos. maquinário patenteado. alegação de contrafação. PERÍCIA REALIZADA POR PROFISSIONAL SEM CONHECIMENTO DA LPI. NECESSIDADE DE ANÁLISE DAS REIVINDICAÇÕES CONSTANTES DA CARTA PATENTE A FIM DE VERIFICAÇÃO DA EXISTÊNCIA DE CONTRAFAÇÃO. SENTENÇA DESCONSTITUÍDA. DETERMINAÇÃO DE REABERTURA DA FASE PROBATÓRIA E REALIZAÇÃO DE NOVA PERÍCIA POR PROFISSIONAL ESPECIALIZADO.\n \n 1) Trata-se de ação através da qual pretende a parte autora obrigar as demandadas deixarem de fabricar, distribuir, comercializar e divulgar, em meio físico ou eletrônico, a secadora de grãos, em todas as suas linhas, bem como produtos similares ao registrado em patente PI 0604168-0, de sua titularidade, bem como condenar as rés ao pagamento de indenização por danos morais e materiais experimentados em face da contrafação praticada, julgada improcedente na origem. Por outro lado, a reconvenção proposta pela primeira ré foi julgada parcialmente procedente.\n \n 2) PRELIMINAR DE INTEMPESTIVIDADE - A decisão que desacolheu os embargos de declaração opostos em face da sentença foi disponibilizada no evento 39, SENT1, com data de 28/06/2023, tendo a parte autora sido intimada no 42. No entanto, necessário observar que na referida intimação consta o prazo de cinco dias, quando o correto, obviamente para a interposição do recurso de apelação, é de quinze dias. assim, considerando o prazo legal de quinze dias para interposição do recurso de apelação, bem como o fato de que o prazo teve início em 11.07.2023, o recurso interposto em 1º de agosto de 2023, é tempestivo.\n \n 3) NULIDADE DO LAUDO PERICIAL - Em que pese não seja caso de reconhecimento da nulidade do laudo, efetivamente se mostra necessária a desconstituição da sentença para que seja realizada nova perícia, agora por profissional com conhecimento na Lei de Propriedade Industrial.\n \n 4) O artigo 468, inciso, I, do CPC, prevê a necessidade de o perito ser substituído quando faltar conhecimento técnico, providência não adotada na origem, em que pese a afirmação do próprio perito que não tinha conhecimento da Lei de Propriedade Industrial.\n \n 5) Por desconhecer a Lei nº 9.279/96, o expert nada referiu acerca do teor das reivindicações constantes do título outorgado pelo INPI, as quais determinam o objeto protegido e a extensão da proteção conferida ao titular do direito. Esse cotejo se afigurava indispensável à luz da legislação específica para fins de conclusão sobre a violação do invento e vulneração da patente.\n \n 6) Para análise da ocorrência, ou não, de violação à patente, é necessário ser confrontados os produtos das empresas rés e as reivindicações correspondentes ao produto patenteado, não bastando ser realizado o mero cotejo/comparação entre os maquinários, como procedeu o perito nomeado na origem. A questão, por evidente, mostra-se muito mais complexa, a qual exige conhecimento e técnica especializada do profissional que realizará a perícia.\n \n 7) As reivindicações são a alma da patente. A não análise das reivindicações importa em desconhecimento do objeto de proteção, não se sabendo alcance da proteção e das suas limitações, motivo pelo qual a sentença deve ser desconstituída com o retorno dos autos à origem, devendo o juízo a quo designar nova perícia, agora a ser realizada por um profissional com conhecimento técnico na Lei de Propriedade Industrial.\n \n PRELIMINAR CONTRARRECURSAL REJEITADA. APELAÇÃO PROVIDA.", "Apelação cível em ação de obrigação de não fazer cumulada com perdas e danos, movida por Rovler Indústria de Agroequipamentos Ltda. contra Metalúrgica Vera Cruz Ltda. – ME e M&L Máquinas Ltda. A autora, titular da carta patente PI 0604168-0 (secador de cereais desmontável ou fixo adaptável em estufa convencional), alegava que as rés fabricavam e vendiam o secador sem autorização. A sentença, amparada em laudo pericial, julgou a ação improcedente e a reconvenção da Vera Cruz parcialmente procedente, com indenização por danos materiais de R$ 12.100. A autora apelou alegando nulidade da sentença e do laudo, feito por perito sem especialidade em patentes,, e contestou a reconvenção. A Câmara rejeitou a preliminar de intempestividade suscitada pela M&L; a intimação indicara prazo de cinco dias, e não de quinze. Não anulou o laudo, mas o julgou insuficiente: o perito admitiu desconhecer a Lei 9.279/96 e não confrontou os produtos das rés com as reivindicações da patente, que definem a extensão da proteção (art. 41 da LPI). Deu provimento à apelação para desconstituir a sentença e reabrir a instrução, com nova perícia por especialista. Decisão unânime. Propriedade industrial: sim — patente, contrafação e cotejo das reivindicações (art. 41 da LPI).", "5000160-53.2014.8.21.0077", "2ª Vara Judicial da Comarca de Venâncio Aires", "(1) Paulo Cesar Montenegro Dessards — engenheiro, segundo a JR Chemin (não atuou); (2) Jefferson Almeida Antunes — engenheiro, CREA-RS 136222, 'com especialidade em mecânica industrial' (acórdão); declarou desconhecer a Lei 9.279/96; (3) Carlos Ignacio Schmitt Sant'Anna — formação não identificada; cadastrado no TJRS em propriedade industrial (não atuou); (4) Ângela Kretschmann — licenciada em Física (PUCRS), mestre (PUCRS, 1999) e doutora (Unisinos, 2006) em Direito, advogada (OAB/RS 30.318), membro da ABAPI"]
];
const PRAW = (typeof window !== 'undefined' && window.__PROC_RAW && window.__PROC_RAW.length > 1) ? window.__PROC_RAW : PROC_RAW;
const PROC_AO_VIVO = PRAW !== PROC_RAW;
const semAc = (s) => String(s == null ? '' : s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim().toUpperCase();
const PIX = {};
PRAW[0].forEach((h, i) => { PIX[semAc(h)] = i; });
const cel = (row, nome) => { const i = PIX[semAc(nome)]; return i === undefined ? '' : String(row[i] == null ? '' : row[i]).trim(); };
const pad2 = (n) => String(n).padStart(2, '0');
const dataBR = (v) => {
  const m = String(v).match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (m) { let a = +m[1], b = +m[2]; const dia = a > 12 ? a : b, mes = a > 12 ? b : a; return pad2(dia) + '/' + pad2(mes) + '/' + m[3]; } // a planilha usa mês/dia/ano
  const m2 = String(v).match(/^(\d{4})-(\d{2})-(\d{2})/);
  return m2 ? m2[3] + '/' + m2[2] + '/' + m2[1] : String(v);
};
const rotAtivo = (s) => {
  const u = semAc(s);
  if (!u) return null;
  if (u.startsWith('MARCA')) return 'Marca';
  if (u.includes('DESENHO')) return 'Desenho industrial';
  if (u.includes('MODELO DE UTILIDADE')) return 'Modelo de utilidade';
  if (u.startsWith('INVENCAO') || u.includes('PATENTE DE INVENCAO')) return 'Patente de invenção';
  if (u.startsWith('PATENTE')) return 'Patente (tipo não informado)';
  if (u.includes('SOFTWARE') || u.includes('PROGRAMA DE COMPUTADOR')) return 'Software';
  if (u.includes('CULTIVAR')) return 'Cultivares';
  if (u.includes('AUTORAL')) return 'Direito autoral';
  if (u.includes('TRADE DRESS')) return 'Trade dress';
  if (u.includes('CONCORRENCIA')) return 'Concorrência desleal';
  const t = String(s).trim(); return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
};
const rotSN = (v) => {
  const u = semAc(v);
  if (!u || u === '-') return null;
  if (u === 'SIM' || /^SIM\b/.test(u)) return 'Sim';
  if (u === 'NAO') return 'Não';
  if (u.startsWith('NAO IDENT') || u === '?') return 'Não identificado';
  if (u === 'NAO SE APLICA') return 'Não se aplica';
  return String(v).trim();
};
const rotPeso = { 'DETERMINANTE': 'Determinante', 'CONCORRENTE': 'Concorrente', 'INDETERMINAVEL': 'Indeterminável', 'NAO SE APLICA': 'Não se aplica' };
const rotAcol = { 'INTEGRAL': 'Integral', 'PARCIAL': 'Parcial', 'REJEITADA': 'Rejeitado', 'REJEITADO': 'Rejeitado', 'NAO SE APLICA': 'Não se aplica', '-': 'Não se aplica' };
const reais = (v) => { const m = String(v).match(/R\$\s*([\d.]+(?:,\d{1,2})?)/); return m ? +m[1].replace(/\./g, '').replace(',', '.') : null; };
const honDe = (v) => { const n = reais(v); if (n !== null) return { v: n, st: 'valor' }; const u = semAc(v); if (!u || u === '-') return { v: null, st: 'na' }; return { v: null, st: 'ni' }; };
// Colunas do processo de 1º grau mostradas por seção. "-" = não se aplica; vazio = sem registro.
const G1SEC = [
  { t: 'Pedido e admissão da perícia', d: 'Quem pediu a perícia e como o juízo decidiu sobre ela.', cols: [['REQUERIMENTO DE PERICIA', 'Houve pedido de perícia?'], ['QUEM REQUEREU A PERÍCIA?', 'Quem pediu'], ['RESULTADO ADMISSIBILIDADE DE PERÍCIA?', 'Decisão sobre o pedido']], txt: ['FUNDAMENTO DO INDEFERIMENTO DE PERÍCIA', 'Fundamentos de indeferimento registrados'] },
  { t: 'Nomeação do perito', d: 'Quantos peritos foram nomeados, como foram escolhidos e se a nomeação foi contestada.', cols: [['NÚMERO DE PERITOS', 'Peritos nomeados'], ['FORMA DE ESCOLHA DO PERITO', 'Forma de escolha'], ['IMPUGNACAO DA NOMEACAO DO PERITO', 'Impugnação da nomeação'], ['SUBSTITUICAO PERITO', 'Substituição do perito']], txt: ['FUNDAMENTO DA IMPUGNAÇÃO', 'Fundamentos das impugnações'] },
  { t: 'Contraditório técnico', d: 'Quesitos, assistentes técnicos indicados pelas partes e pareceres divergentes do laudo.', cols: [['INDEFERIMENTO DE QUESITOS', 'Indeferimento de quesitos'], ['QUESITOS SUPLEMENTARES?', 'Quesitos suplementares'], ['HOUVE ASSISTENTE TECNICO?', 'Assistente técnico'], ['QUEM INDICOU O ASSITENTE TÉCNICO?', 'Quem indicou o assistente'], ['PARECER DIVERGENTE?', 'Parecer divergente do laudo']], txt: ['FUNDAMENTO DO INDEFERIMENTO', 'Registros sobre quesitos'] },
  { t: 'Segunda perícia e normas citadas', rosca: true, d: 'Pedidos de nova perícia e referências ao CPC e às normas sobre honorários periciais.', cols: [['REQUERIMENTO SEGUNDA PERICIA', 'Pedido de segunda perícia'], ['FOI REALIZADA SEGUNDA PERICIA?', 'Segunda perícia realizada'], ['HOUVE MENÇÃO DO ART. 479?', 'Menção ao art. 479 do CPC'], ['INVOCAÇÃO DO ART. 480', 'Invocação do art. 480 do CPC'], ['HOUVE REFERENCIA AO ATO 045/2022P?', 'Ato 045/2022-P (TJRS)'], ['HOUVE REFERENCIA AO ATO CNJ 232/2016?', 'Resolução CNJ 232/2016']] }
];
const CATMAP = { 'SIM': 'Sim', 'NAO': 'Não', 'NAO IDENTIFICADO': 'Não identificado', 'NAO SE APLICA': 'Não se aplica', '-': 'Não se aplica', '?': 'Não identificado', 'AMBAS': 'Ambas as partes', 'AUTOR': 'Autor', 'REU': 'Réu', 'AUTOR E REU': 'Autor e réu', 'DEFERIDA': 'Deferida', 'INDEFERIDA': 'Indeferida', 'MULTIPLAS_DECISOES': 'Múltiplas decisões', 'CADASTRO JUDICIAL': 'Cadastro judicial' };
const rotCat = (v, col) => {
  const u = semAc(v);
  if (!u) return 'Sem registro';
  if (semAc(col) === 'NUMERO DE PERITOS' && /^\d+$/.test(u)) return u === '0' ? 'Nenhum' : u + (u === '1' ? ' perito' : ' peritos');
  if (CATMAP[u]) return CATMAP[u];
  if (/^SIM\b/.test(u)) return 'Sim';
  if (u.startsWith('NAO IDENT')) return 'Não identificado';
  const t = String(v).trim().split(/\s[(—]/)[0]; return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
};
// Formação dos peritos: classificação por palavras-chave do texto da coluna FORMAÇÕES DO PERITO (um processo pode ter várias)
const FORM_REGRAS = [['Engenharia mecânica', /MECANIC/], ['Engenharia civil', /CIVIL/], ['Engenharia elétrica ou eletrônica', /ELETRONIC|ELETRIC/], ['Engenharia de produção', /ENGENHARIA DE PRODUCAO/], ['Ciências contábeis', /CONTAB|CONTADOR/], ['Design industrial', /DESIGN/], ['Propriedade intelectual', /PROPRIEDADE (INTELECTUAL|INDUSTRIAL)|AGENTE DA PROPRIEDADE/], ['Direito', /JURIDIC|DIREITO/], ['Física', /FISIC/]];
const formsTxt = (u) => { const out = FORM_REGRAS.filter(([, re]) => re.test(u)).map(([k]) => k); if (/ENGENH/.test(u) && !out.some(k => k.startsWith('Engenharia'))) out.push('Engenharia (área não informada)'); return out; };
// Peritos citados no texto: cada nome recebe as formações do trecho que vem depois dele (até o próximo nome ou separador).
const NAO_NOME = /^(Engenh|Tecnolog|Instala|Industri|Doutor|Mestre|Designer|Ci[eê]ncias|Cont[aá]b|T[eé]cnic|Bacharel|Per[ií]ci|Gest[aã]o|Tribut|Jur[ií]dic|Sociais|Seguran|Trabalho|Propriedade|Agente|Laudos?|Processo|Lei|F[ií]sica|Direito|Conhecimento|Os|Vara|Comarca|Justi|Tribunal|Licenciad|Membro|Especiali|Civil|Mec[aâ]nic|Produ|Sistema|Judicial|Mestrad|Doutorad)/;
const NOME = /(?:[A-ZÁÉÍÓÚÂÊÔÃÕÇ][a-záéíóúâêôãõçü]+|[A-Z]\.)(?:\s+(?:(?:da|de|do|dos|das)\s+)?(?:[A-ZÁÉÍÓÚÂÊÔÃÕÇ][a-záéíóúâêôãõçü]+(?:['’][A-Z][a-z]+)?|[A-Z]\.))+/g;
const peritosDe = (txt) => {
  const t = String(txt || ''); const u0 = semAc(t);
  if (!u0 || u0 === '-' || u0.startsWith('NAO IDENT') || u0.startsWith('SEM PERICIA')) return [];
  const pedacos = t.split(/\s\|\s|\[|\]|(?<=[a-z\d)]{2})\.\s+(?=[A-ZÁÉÍÓÚ])/);
  const res = [];
  pedacos.forEach(p => {
    const nomes = [];
    let m; NOME.lastIndex = 0;
    while ((m = NOME.exec(p))) { const nm = m[0].trim(); const pal = nm.split(/\s+/); if (/\b(VF|Vara|Comarca|de|em|do|da)\s+$/.test(p.slice(Math.max(0, m.index - 8), m.index)) || NAO_NOME.test(pal[0]) || pal.filter(w => !/^(da|de|do|dos|das)$/.test(w)).length < 2 || pal.some(w => NAO_NOME.test(w) && w.length > 3)) continue; nomes.push({ nm, i: m.index, f: m.index + nm.length }); }
    if (!nomes.length) { const f = formsTxt(semAc(p)); if (f.length) res.push({ nome: '', forms: f }); return; }
    nomes.forEach((n, k) => { const fim = k + 1 < nomes.length ? nomes[k + 1].i : p.length; let f = formsTxt(semAc(p.slice(n.f, fim))); if (!f.length && k === 0) f = formsTxt(semAc(p.slice(0, n.i))); res.push({ nome: n.nm, forms: f }); });
  });
  const por = {}; res.forEach(x => { const k = x.nome || ''; por[k] = por[k] || { nome: x.nome, forms: [] }; x.forms.forEach(f => { if (!por[k].forms.includes(f)) por[k].forms.push(f); }); });
  return Object.values(por);
};
const formacoesDe = (peritos, v) => {
  const u = semAc(v);
  if (!u || u === '-') return [];
  const out = []; peritos.forEach(x => x.forms.forEach(f => { if (!out.includes(f)) out.push(f); }));
  return out.length ? out : ['Não identificada'];
};
const proc1gDe = (v) => { const u = semAc(v); if (!u || u === '-') return ''; if (u.startsWith('SOLICITAR') || u.startsWith('BAIXAR')) return 'Não analisado'; if (u.includes('NAO LOCALIZADO')) return 'Não localizado'; return String(v).trim(); };
const textoDe = (v) => { const t = String(v || '').trim(); return t === '-' ? '' : t; };
const camaraDe = (v) => { const u = semAc(v); return u.startsWith('QUINTA') ? '5ª Câmara Cível' : u.startsWith('SEXTA') ? '6ª Câmara Cível' : String(v).trim() || 'Não informada'; };
const J = PRAW.slice(1).filter(row => cel(row, 'Nº PROCESSO')).map((row, i) => {
  const num = cel(row, 'Nº PROCESSO');
  const mC = num.match(/CNJ:\s*([\d.\-]+)/), m5 = num.match(/^(\d{7}-\d{2}\.\d{4}\.\d\.\d{2}\.\d{4})/);
  const data = dataBR(cel(row, 'DATA JULGAMENTO'));
  const ano = +(cel(row, 'ANO') || data.slice(-4));
  const g1 = ['NÚMERO DE PERITOS', 'HOUVE ASSISTENTE TECNICO?', 'PESO PROVA TÉCNICA', 'ACOLHIMENTO DO LAUDO PERICIAL NO 1º GRAU'].some(c => cel(row, c));
  const pu = semAc(cel(row, 'PERÍCIA'));
  const peso = rotPeso[semAc(cel(row, 'PESO PROVA TÉCNICA'))] || (g1 ? 'Sem registro' : null);
  const ac = (c) => g1 ? (rotAcol[semAc(cel(row, c))] || 'Sem registro') : null;
  const pt = cel(row, 'PERITO'), ptU = semAc(pt);
  const nP = cel(row, 'NÚMERO DE PERITOS');
  return {
    id: pad2(i + 1), num, relator: textoDe(cel(row, 'RELATORIA')), indexa: textoDe(cel(row, 'PALAVRAS-CHAVE INDEXADORAS')), ementa: textoDe(cel(row, 'EMENTA')), resumo: textoDe(cel(row, 'RESUMO DO CASO E DA ESSÊNCIA DA DECISÃO')), p1g: proc1gDe(cel(row, 'PROCESSO - 1º GRAU')), vara: textoDe(cel(row, 'VARA DE ORIGEM')), peritosF: peritosDe(cel(row, 'FORMAÇÕES DO PERITO')), forms: formacoesDe(peritosDe(cel(row, 'FORMAÇÕES DO PERITO')), cel(row, 'FORMAÇÕES DO PERITO')), cnj: mC ? mC[1] : (m5 ? m5[1] : num.split(' ')[0]), data, ano,
    camara: camaraDe(cel(row, 'CÂMARA')),
    ativos: Array.from(new Set(cel(row, 'ATIVO DE PI').split(/;|\s+e\s+/).map(rotAtivo).filter(Boolean))),
    pericia: pu === 'SIM' ? 'Sim' : pu === 'NAO' ? 'Não' : pu.startsWith('VERIFICAR') ? 'A verificar no processo' : 'Não informado',
    g1, at: g1 ? (cel(row, 'HOUVE ASSISTENTE TECNICO?') === '-' ? 'Não se aplica' : (rotSN(cel(row, 'HOUVE ASSISTENTE TECNICO?')) || 'Sem registro')) : 'Sem dados do 1º grau',
    peso, ac1: ac('ACOLHIMENTO DO LAUDO PERICIAL NO 1º GRAU'), ac2: ac('ACOLHIMENTO DO LAUDO PERICIAL NO 2º GRAU'),
    nPer: nP === '' ? null : +nP,
    perito: (!pt || pt === '-' || ptU.startsWith('SEM PERICIA')) ? '' : (ptU.startsWith('NAO IDENT') ? 'Não identificado' : pt),
    honI: honDe(cel(row, 'VALOR INICIAL DOS HONORÁRIOS PERICIAIS')), honF: honDe(cel(row, 'VALOR FINAL DOS HONORÁRIOS PERICIAIS')),
    c: Object.fromEntries(G1SEC.flatMap(sc => sc.cols).map(([col]) => { const raw = cel(row, col); return [col, (g1 || raw) ? rotCat(raw, col) : null]; })),
    tx: Object.fromEntries(G1SEC.filter(sc => sc.txt).map(sc => { const raw = cel(row, sc.txt[0]); const u = semAc(raw); return [sc.txt[0], (!u || u === '-' || u.startsWith('NAO IDENT')) ? '' : raw]; }))
  };
});

// Magistrados: Questionarios_Magistrados_Consolidados.xlsx, aba "Respostas consolidadas" (chave = linha da planilha; 11 questionários)
const MQ = {
2:["Primeiro grau, vara regional empresarial", "Primeiro grau, vara regional empresarial", "Primeiro grau, vara regional empresarial", "Segundo grau, Câmara Cível", "Segundo grau, Câmara Cível", "Primeiro grau, vara regional empresarial", "Segundo grau, Câmara Cível", "Segundo grau, Câmara Cível", "Segundo grau, Câmara Cível", "Segundo grau, Câmara Cível", "Primeiro grau, vara regional empresarial"],
3:["6 a 10 anos", "2 a 5 anos", "Menos de 2 anos", "Mais de 10 anos", "2 a 5 anos", "Mais de 10 anos", "2 a 5 anos", "2 a 5 anos", "Menos de 2 anos", "Menos de 2 anos", "2 a 5 anos"],
4:["Semanalmente", "Algumas vezes por ano", "Semanalmente", "Mensalmente", "Mensalmente", "Algumas vezes por ano", "Mensalmente", "Semanalmente", "Semanalmente", "Semanalmente", "Semanalmente"],
5:["Marca; Trade dress; Concorrência desleal", "Marca; Concorrência desleal; Segredo de negócio", "Patente de invenção; Marca", "Marca; Trade dress; Concorrência desleal", "Marca; Trade dress", "Marca; Trade dress; Concorrência desleal", "Marca; Trade dress; Concorrência desleal", "Trade dress; Concorrência desleal", "Marca; Trade dress; Concorrência desleal", "Marca; Trade dress; Concorrência desleal", "Marca"],
6:["Em regra dispensável", "Depende do caso", "Em regra necessária", "Depende do caso", "Em regra dispensável", "", "Em regra necessária", "Depende do caso", "Em regra necessária", "Em regra necessária", "Depende do caso"],
7:["Em regra necessária", "Depende do caso", "Em regra necessária", "Em regra necessária", "Em regra necessária", "", "Em regra necessária", "Em regra necessária", "Em regra necessária", "Em regra necessária", "Em regra necessária"],
8:["Em regra necessária", "Depende do caso", "Em regra necessária", "Em regra necessária", "Em regra necessária", "", "Em regra necessária", "Em regra necessária", "Em regra necessária", "Em regra necessária", "Em regra necessária"],
9:["Depende do caso", "Depende do caso", "Em regra necessária", "Em regra necessária", "Depende do caso", "Depende do caso", "Em regra necessária", "Depende do caso", "Em regra necessária", "Em regra necessária", "Depende do caso"],
10:["Depende do caso", "Depende do caso", "Em regra necessária", "Depende do caso", "Depende do caso", "Depende do caso", "Depende do caso", "Em regra necessária", "Em regra necessária", "Em regra necessária", "Depende do caso"],
11:["Em regra dispensável", "Depende do caso", "Depende do caso", "Depende do caso", "Em regra dispensável", "Em regra dispensável", "Em regra necessária", "Depende do caso", "Em regra necessária", "Em regra necessária", "Depende do caso"],
12:["Em regra dispensável", "Depende do caso", "Depende do caso", "Depende do caso", "Em regra dispensável", "", "Em regra necessária", "Depende do caso", "", "", "Depende do caso"],
13:["2 / 5", "3 / 5", "1 / 5", "3 / 5", "1 / 5", "2 / 5", "1 / 5", "1 / 5", "1 / 5", "1 / 5", "2 / 5"],
14:["Questão exclusivamente jurídica; Finalidade protelatória", "Prova documental suficiente; Questão exclusivamente jurídica", "", "Prova documental suficiente; Questão exclusivamente jurídica", "Prova documental suficiente", "Prova documental suficiente; Possibilidade de aferição pelo próprio juízo", "Nunca indeferi", "Nunca indeferi", "Nunca indeferi", "Nunca indeferi", "Prova documental suficiente; Possibilidade de aferição pelo próprio juízo"],
15:["Preferencialmente do cadastro, excepcionalmente fora", "Preferencialmente do cadastro, excepcionalmente fora", "Exclusivamente do cadastro", "Preferencialmente do cadastro, excepcionalmente fora", "Não sei responder", "Preferencialmente do cadastro, excepcionalmente fora", "Preferencialmente do cadastro, excepcionalmente fora", "Não sei responder", "Não sei responder", "Não sei responder", "Preferencialmente do cadastro, excepcionalmente fora"],
16:["Ausência de inscrito com a especialidade; Recusa dos inscritos", "Ausência de inscrito com a especialidade; Recusa dos inscritos", "", "Experiência anterior do profissional perante o juízo", "", "Ausência de inscrito com a especialidade; Recusa dos inscritos", "Experiência anterior do profissional perante o juízo", "Não atuo e nem atuei na função em primeira instância.", "a perícia é determinada no primeiro grau somente.", "a perícia é determinada no primeiro grau somente.", "Ausência de inscrito na comarca ou região; Recusa dos inscritos"],
17:["Na maioria das vezes", "Não sei responder", "Sim, sempre", "Na maioria das vezes", "Não sei responder", "Não sei responder", "Na maioria das vezes", "Não sei responder", "Não sei responder", "Não sei responder", "Na maioria das vezes"],
18:["2", "3", "5", "3", "NS = não sei responder", "NS = não sei responder", "3", "NS = não sei responder", "NS = não sei responder", "NS = não sei responder", "3"],
19:["3", "3", "3", "3", "NS = não sei responder", "NS = não sei responder", "2", "NS = não sei responder", "NS = não sei responder", "NS = não sei responder", "3"],
20:["Formação técnica no setor do objeto; Experiência anterior em perícias na matéria", "Formação técnica no setor do objeto; Experiência anterior em perícias na matéria", "Formação técnica no setor do objeto; Conhecimento do sistema de patentes e marcas; Disponibilidade e prazo", "Formação técnica no setor do objeto; Conhecimento do sistema de patentes e marcas; Experiência anterior em perícias na matéria", "Formação técnica no setor do objeto; Experiência anterior em perícias na matéria", "Formação técnica no setor do objeto", "Formação técnica no setor do objeto", "", "", "", "Conhecimento do sistema de patentes e marcas; Experiência anterior em perícias na matéria"],
21:["Dependeria do caso", "Dependeria do caso", "Dependeria do caso", "Dependeria do caso", "Não", "Não sei responder", "Dependeria do caso", "Sim", "Não", "Não", "Não"],
22:["Não", "Não", "Não", "Não me recordo", "Não", "Não me recordo", "Não me recordo", "Não me recordo", "", "", "Não"],
23:["Sim, em alguns casos", "Não sei responder", "Sim, em alguns casos", "Não", "Não sei responder", "Não", "Não sei responder", "Não sei responder", "Não sei responder", "Não sei responder", "Não sei responder"],
24:["Não sei avaliar", "Não sei avaliar", "Não sei avaliar", "Sim, para melhor", "Não sei avaliar", "Não sei avaliar", "Sim, para pior", "Não sei avaliar", "Não sei avaliar", "Não sei avaliar", "Não sei avaliar"],
25:["Alterno entre poucos nomes", "Procuro alternar entre os disponíveis", "Alterno entre poucos nomes", "Alterno entre poucos nomes", "Alterno entre poucos nomes", "Varia conforme a disponibilidade", "Procuro alternar entre os disponíveis", "Não sei responder", "Não sei responder", "Não sei responder", "Procuro alternar entre os disponíveis"],
26:["Qualidade do laudo anterior", "Qualidade do laudo anterior; Cumprimento de prazo", "", "Qualidade do laudo anterior; Cumprimento de prazo", "Qualidade do laudo anterior; Cumprimento de prazo", "Ausência de outros profissionais com a especialidade", "Qualidade do laudo anterior", "", "", "", "Qualidade do laudo anterior; Honorários em valor compatível"],
27:["Não", "Apenas quando houver número suficiente de inscritos com a especialidade", "Não", "Apenas quando houver número suficiente de inscritos com a especialidade", "Apenas quando houver número suficiente de inscritos com a especialidade", "Apenas quando houver número suficiente de inscritos com a especialidade", "Sim", "Apenas quando houver número suficiente de inscritos com a especialidade", "Sim", "Sim", "Não"],
28:["Não, mas já considerei", "Sim, mais de uma vez", "Sim, mais de uma vez", "Sim, mais de uma vez", "Nunca considerei", "Nunca considerei", "Nunca considerei", "Nunca considerei", "Nunca considerei", "Nunca considerei", "Nunca considerei"],
29:["Cobertura das duas dimensões da controvérsia", "Cobertura das duas dimensões da controvérsia", "Cobertura das duas dimensões da controvérsia", "Cobertura das duas dimensões da controvérsia; Menos pedidos de esclarecimento; Maior aceitação pelas partes", "Não vejo vantagem", "Cobertura das duas dimensões da controvérsia", "Cobertura das duas dimensões da controvérsia", "Cobertura das duas dimensões da controvérsia", "", "", "Não vejo vantagem"],
30:["Custo", "Custo; Ausência de previsão específica na regulamentação do Tribunal", "Custo", "Custo; Prazo", "Não vejo desvantagem", "Custo", "Custo", "Não vejo desvantagem", "Não vejo desvantagem", "Não vejo desvantagem", "Divergência entre os peritos"],
31:["2 / 5", "4 / 5", "4 / 5", "3 / 5", "2 / 5", "4 / 5", "2 / 5", "5 / 5", "3 / 5", "3 / 5", "1 / 5"],
32:["2 / 5", "2 / 5", "1 / 5", "3 / 5", "3 / 5", "1 / 5", "1 / 5", "1 / 5", "3 / 5", "3 / 5", "1 / 5"],
33:["Esclarecimento pontual de conceito técnico; Apreciação de tutela de urgência; Controvérsia de menor complexidade", "Esclarecimento pontual de conceito técnico; Apreciação de tutela de urgência; Controvérsia de menor complexidade", "Apreciação de tutela de urgência; Controvérsia de menor complexidade", "Esclarecimento pontual de conceito técnico; Complementação de perícia", "Esclarecimento pontual de conceito técnico; Controvérsia de menor complexidade", "Controvérsia de menor complexidade", "Controvérsia de menor complexidade", "Esclarecimento pontual de conceito técnico; Apreciação de tutela de urgência; Controvérsia de menor complexidade", "", "", "Complementação de perícia"],
34:["Resistência das partes", "Dificuldade de localizar especialista disponível", "Ausência de laudo escrito para revisão em grau recursal; Logística de audiência", "Dificuldade de localizar especialista disponível; Ausência de laudo escrito para revisão em grau recursal", "Dificuldade de localizar especialista disponível", "Dificuldade de localizar especialista disponível", "Dificuldade de localizar especialista disponível", "Ausência de disciplina sobre remuneração; Logística de audiência", "", "", "Resistência das partes"],
35:["3", "3", "3", "3", "4", "3", "3", "3", "5", "5", "3"],
36:["2", "4", "3", "5", "NS = não sei responder", "3", "2", "2", "NS = não sei responder", "NS = não sei responder", "1"],
37:["3", "3", "3", "3", "3", "1", "3", "3", "4", "4", "3"],
38:["Quesito jurídico apresentado como técnico; Genérico", "Quesito jurídico apresentado como técnico; Sugestivo", "Quesito jurídico apresentado como técnico; Número excessivo", "Quesito jurídico apresentado como técnico; Genérico", "Quesito jurídico apresentado como técnico; Sugestivo", "Quesito jurídico apresentado como técnico", "Quesito jurídico apresentado como técnico", "Genérico; Sugestivo", "Não identifico problema recorrente", "Não identifico problema recorrente", "Não identifico problema recorrente"],
39:["Tb são comuns quesitos fora do objeto da prova, jurídicos ou não", "", "", "Sem observações.", "", "", "", "", "", "", ""],
40:["Sim, em alguns casos", "Sim, em alguns casos", "Sim, com frequência", "Sim, em alguns casos", "Sim, em alguns casos", "Não me recordo", "Sim, com frequência", "Sim, em alguns casos", "Não", "Não", "Sim, com frequência"],
41:["Perícia realizada com custeio pelo Tribunal", "Perícia realizada com custeio pelo Tribunal; Processo paralisado por período relevante", "Perícia realizada com custeio pelo Tribunal", "Perícia realizada com custeio pelo Tribunal; Julgamento sem a prova técnica", "Sem efeito relevante", "", "Perícia realizada com custeio pelo Tribunal", "Processo paralisado por período relevante", "Sem efeito relevante", "Sem efeito relevante", "Perícia não realizada por ausência de profissional que aceitasse o valor; Processo paralisado por período relevante"],
42:["2 / 5", "3 / 5", "1 / 5", "3 / 5", "3 / 5", "1 / 5", "2 / 5", "3 / 5", "3 / 5", "3 / 5", "2 / 5"],
43:["4 / 5", "3 / 5", "1 / 5", "3 / 5", "3 / 5", "4 / 5", "3 / 5", "3 / 5", "3 / 5", "3 / 5", "4 / 5"],
44:["Sim, em alguns casos", "Não sei responder", "Não", "Sim, com frequência", "Não sei responder", "Sim, em alguns casos", "Sim, em alguns casos", "Sim, em alguns casos", "Não sei responder", "Não sei responder", "Sim, com frequência"],
45:["3 / 5", "2 / 5", "3 / 5", "3 / 5", "3 / 5", "2 / 5", "2 / 5", "3 / 5", "3 / 5", "3 / 5", "3 / 5"],
46:["Rubrica própria de especialidade em propriedade industrial no cadastro; Admissão do agente da propriedade industrial habilitado perante o INPI", "Rubrica própria de especialidade em propriedade industrial no cadastro; Admissão do agente da propriedade industrial habilitado perante o INPI; Previsão expressa de perícia por dois especialistas", "Rubrica própria de especialidade em propriedade industrial no cadastro; Admissão do agente da propriedade industrial habilitado perante o INPI; Tabela específica de honorários para a matéria; Previsão expressa de perícia por dois especialistas; Disciplina da remuneração na prova técnica simplificada; Roteiro de referência para formulação de quesitos", "Tabela específica de honorários para a matéria; Disciplina da remuneração na prova técnica simplificada; Roteiro de referência para formulação de quesitos", "Rubrica própria de especialidade em propriedade industrial no cadastro; Tabela específica de honorários para a matéria", "Rubrica própria de especialidade em propriedade industrial no cadastro; Tabela específica de honorários para a matéria", "Rubrica própria de especialidade em propriedade industrial no cadastro; Tabela específica de honorários para a matéria; Previsão expressa de perícia por dois especialistas; Regra de alternância na nomeação", "Rubrica própria de especialidade em propriedade industrial no cadastro; Admissão do agente da propriedade industrial habilitado perante o INPI; Tabela específica de honorários para a matéria; Disciplina da remuneração na prova técnica simplificada; Roteiro de referência para formulação de quesitos", "Nenhuma alteração necessária", "Nenhuma alteração necessária", "Rubrica própria de especialidade em propriedade industrial no cadastro; Tabela específica de honorários para a matéria; Roteiro de referência para formulação de quesitos"],
47:["", "", "mas são: - conhecimento da rotina da unidade pelos peritos, que não demandam trabalho extra de comunicação e explicações. Os peritos vão conhecendo a forma de trabalho e se adequando à ela. - uso a regra “recusou, saiu da lista”, assim nunca tenho recusas, pois há um sistema de subsidio cruzado (processos com a perícia paga pela parte compensam os processos pagos pelo tribunal, nos quais a remuneração é insuficiente). - facilita o controle de suspeições e a criação do vínculo de confiança no profissional. É possível conhecer 4 ou 5 peritos de cada área, mas não é possível conhecer 30 de cada área", "", "", "", "", "", "Considerando que presto a jurisdição em segundo grau e as perícias são designadas no primeiro grau, grande parte das perguntas não tenho como responder com exatidão.", "Considerando que presto a jurisdição em segundo grau e as perícias são designadas no primeiro grau, grande parte das perguntas não tenho como responder com exatidão.", ""]
};
const Q = { 3: 'Tempo de atuação em processos que envolvem propriedade industrial.', 4: 'Com que frequência processos de propriedade industrial chegam à sua unidade?', 5: 'Em quais ativos identifica maior recorrência de controvérsia técnica?', 13: 'Com que frequência indefere perícia requerida nesses processos?', 14: 'Qual o fundamento mais frequente do indeferimento de requerimento de perícia?', 15: 'Nomeia peritos constantes do cadastro previamente habilitado do Tribunal ou também de fora dele?', 16: 'Qual o motivo da nomeação fora do cadastro?', 17: 'Nomeado profissional não cadastrado, ele providencia a habilitação no cadastro, como lhe incumbe?', 18: 'Com que frequência encontra no cadastro profissional com especialidade adequada em propriedade industrial?', 19: 'O cadastro permite identificar, com clareza suficiente, a especialidade do profissional para a matéria?', 20: 'Que critérios mais pesam na escolha do perito?', 21: 'Nomearia agente da propriedade industrial habilitado perante o INPI, sem inscrição em conselho de classe?', 22: 'Já nomeou órgão técnico ou científico (universidade, ICT, INPI) em lugar de perito pessoa física?', 23: 'Já deixou de nomear perito por ter ele atuado como assistente técnico nos três anos anteriores (art. 17, II, da Resolução nº 1359/2021-COMAG)?', 24: 'A implantação do Sistema AJ, em 2021, alterou a forma como escolhe peritos nesta matéria?', 25: 'Em processos de mesma matéria, costuma nomear o mesmo profissional ou alternar entre profissionais?', 26: 'Qual a razão principal da repetição da nomeação?', 27: 'Deveria haver regra de alternância na nomeação de peritos, à semelhança da que se aplica ao administrador judicial?', 28: 'Já nomeou dois peritos com expertises complementares, um da área técnica do objeto e outro da propriedade industrial?', 29: 'Que vantagens observou ou esperaria desse arranjo?', 30: 'Que desvantagens observou ou esperaria desse arranjo?', 31: 'Considera cabível a nomeação de dois peritos com expertises complementares em processos de propriedade industrial?', 32: 'Com que frequência utiliza a prova técnica simplificada do art. 464, §§ 2º a 4º, do CPC nesses processos?', 33: 'Em que hipóteses considera essa via adequada?', 34: 'Quais os principais obstáculos ao uso dessa via?', 35: 'Os quesitos apresentados pelas partes costumam ser tecnicamente adequados ao objeto da controvérsia?', 36: 'Com que frequência formula quesitos de ofício (art. 470, II, do CPC)?', 37: 'Em que medida os pareceres de assistentes técnicos contribuem para o convencimento?', 38: 'Qual o problema mais frequente nos quesitos?', 40: 'Já teve processo de propriedade industrial em que a parte onerada com a prova era beneficiária da gratuidade da justiça?', 41: 'Qual o efeito observado nesses casos? (responda apenas se já teve caso assim na pergunta anterior)', 42: 'Os valores de referência do Tribunal são adequados às perícias em propriedade industrial?', 43: 'Com que frequência há impugnação ou recurso quanto ao valor dos honorários periciais nesses processos?', 44: 'Já houve recusa de nomeação por insuficiência dos honorários?', 45: 'As normas do CNJ e do TJRS sobre cadastro, credenciamento e nomeação contemplam as particularidades da prova técnica em propriedade industrial?', 46: 'Que alterações consideraria úteis?' };
const AT_MAG = ['Marca', 'Patente de invenção', 'Modelo de utilidade', 'Desenho industrial', 'Trade dress', 'Concorrência desleal', 'Segredo de negócio'];
const B01_ROW = { 'Marca': 6, 'Patente de invenção': 7, 'Modelo de utilidade': 8, 'Desenho industrial': 9, 'Trade dress': 10, 'Concorrência desleal': 11, 'Segredo de negócio': 12 };
const INK = '#141614', MUTE = '#5E625C';
const STRIPE = 'repeating-linear-gradient(135deg, #D7F24B 0 6px, #C5E236 6px 12px)';
const CH = { ok: ['#EAF5C6', '#3D5200'], warn: ['#FCEBD3', '#7A4300'], pend: ['#FBE3E0', '#8B1D1D'], neu: ['#F1F2EE', '#3E423C'] };
const ICON = { doc: 'M7 3h7l5 5v13H7zM14 3v5h5', laudo: 'M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z', din: 'M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', pess: 'M16 21v-2a4 4 0 0 0-8 0v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' };
const pctTxt = (n, N) => N ? (100 * n / N).toFixed(1).replace('.', ',') + '%' : '—';
const nN = (n, N) => N ? n + '/' + N + ' — ' + pctTxt(n, N) : 'Sem base para cálculo';
const brl = (v) => { const p = v.toFixed(2).split('.'); return 'R$ ' + p[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + p[1]; };
const mediana = (a) => { if (!a.length) return null; const s = a.slice().sort((x, y) => x - y), m = Math.floor(s.length / 2); return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const medTxt = (a) => { const m = mediana(a); return m === null ? 'sem base' : String(m).replace('.', ','); };
const tog = (key, val) => { const cur = st[key] || []; set({ [key]: cur.includes(val) ? cur.filter(x => x !== val) : cur.concat([val]) }); };
const has = (key, val) => (st[key] || []).includes(val);
const any = (key) => (st[key] || []).length > 0;
const iso = (d) => d.split('/').reverse().join('-');
const rowBg = (sel) => sel ? '#F1F7D9' : 'transparent';
const ck = (k) => ({ chipBg: CH[k][0], chipFg: CH[k][1] });
const tab = st.tab || 'proc';
// ---- Processos: filtros (menus e cliques). Cada gráfico ignora o próprio filtro para continuar mostrando as alternativas.
const plural = (n, s, p) => n === 1 ? s : p;
const ICON_MARTELO = 'M14.5 12.5l-8 8a2.12 2.12 0 0 1-3-3l8-8M16 16l6-6M8 8l6-6M9 7l8 8M21 11l-8-8';
const VERDE = '#A3C826', VERDE_E = '#4F7A00', VERDE_C = '#D7F24B';
const T = J.length;
const ordem = (vals, pref) => Array.from(new Set(vals.filter(v => v !== null && v !== undefined))).sort((a, b) => { const ia = pref.indexOf(a), ib = pref.indexOf(b); return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || String(a).localeCompare(String(b), 'pt'); });
const ATIVOS = ordem(J.flatMap(r => r.ativos), ['Marca', 'Desenho industrial', 'Modelo de utilidade', 'Patente de invenção', 'Patente (tipo não informado)', 'Software', 'Cultivares', 'Direito autoral']);
const ANO0 = Math.min(...J.map(r => r.ano)), ANO1 = Math.max(...J.map(r => r.ano));
const ANOS = []; for (let a = ANO0; a <= ANO1; a++) ANOS.push(a);
const CAMS = ordem(J.map(r => r.camara), ['5ª Câmara Cível', '6ª Câmara Cível']);
const PERS = ordem(J.map(r => r.pericia), ['Sim', 'Não', 'A verificar no processo', 'Não informado']);
const ATS = ordem(J.map(r => r.at), ['Sim', 'Não', 'Não identificado', 'Sem registro', 'Sem dados do 1º grau']);
const PESOS = ordem(J.map(r => r.peso), ['Determinante', 'Concorrente', 'Indeterminável', 'Não se aplica', 'Sem registro']);
const FORMS = (() => { const c = {}; J.forEach(r => r.forms.forEach(f => { c[f] = (c[f] || 0) + 1; })); return Object.keys(c).sort((a, b) => (a === 'Não identificada') - (b === 'Não identificada') || c[b] - c[a] || a.localeCompare(b, 'pt')); })();
const ACOLS = ['Integral', 'Parcial', 'Rejeitado', 'Não se aplica', 'Sem registro'];
const acKey = (r) => r.ac1 + ' → ' + r.ac2;
const q = (st.q || '').trim().toLowerCase();
const PF = {
  anos: (r) => has('anos', r.ano), ativos: (r) => r.ativos.some(a => has('ativos', a)), cam: (r) => has('cam', r.camara),
  per: (r) => has('per', r.pericia), at: (r) => has('at', r.at), peso: (r) => has('peso', r.peso), acol: (r) => r.g1 && has('acol', acKey(r)), juls: (r) => has('juls', r.id), form: (r) => r.forms.some(f => has('form', f))
};
// Filtro por clique nas seções do 1º grau: "coluna␟valor" (OU dentro da coluna, E entre colunas)
const SEP = '\u241F';
const g1Sel = {}; (st.g1f || []).forEach(k => { const [c, v] = k.split(SEP); (g1Sel[c] = g1Sel[c] || []).push(v); });
const passG = (r, semCol) => Object.keys(g1Sel).every(c => c === semCol || g1Sel[c].includes(r.c[c]));
const passQ = (r) => !q || [r.num, r.data, r.camara, r.relator, r.indexa, r.resumo, r.ativos.join(' '), r.perito, r.p1g, r.vara].join(' ').toLowerCase().includes(q);
const passAll = (r, sem) => Object.keys(PF).every(k => k === sem || !any(k) || PF[k](r)) && passQ(r) && passG(r, sem && sem.startsWith('g1:') ? sem.slice(3) : null);
const F = J.filter(r => passAll(r));
const N = F.length;
const opt = (key, vals, get, lbl) => vals.map(v => ({ k: lbl ? lbl(v) : String(v), n: J.filter(r => get(r, v)).length, sel: has(key, v), rowBg: rowBg(has(key, v)), pick: () => tog(key, v) }));
const fAnos = opt('anos', ANOS, (r, v) => r.ano === v);
const fAtivos = opt('ativos', ATIVOS, (r, v) => r.ativos.includes(v));
const fCam = opt('cam', CAMS, (r, v) => r.camara === v);
const fPer = opt('per', PERS, (r, v) => r.pericia === v);
const fAT = opt('at', ATS, (r, v) => r.at === v);
const fFormP = opt('form', FORMS, (r, v) => r.forms.includes(v));
// Barras horizontais clicáveis (ativos e peso do laudo)
const barras = (key, vals, base, get, desc) => {
  const cont = vals.map(v => ({ v, n: base.filter(r => get(r, v)).length }));
  const mx = Math.max(1, ...cont.map(c => c.n));
  return cont.map(({ v, n }) => { const sel = has(key, v); return { k: v, n, w: 100 * n / mx, sel, fw: sel ? 700 : 500, bar: sel ? VERDE_E : (any(key) ? '#C9CCC4' : VERDE), op: (any(key) && !sel) ? 0.55 : 1, tip: desc(v, n, base.length), pick: () => tog(key, v) }; });
};
// Julgamentos por ano
const baseY = J.filter(r => passAll(r, 'anos'));
const maxY = Math.max(1, ...ANOS.map(a => baseY.filter(r => r.ano === a).length));
const pts = ANOS.map((a, i) => { const n = baseY.filter(r => r.ano === a).length; return { a, n, x: ANOS.length > 1 ? 40 + 920 * i / (ANOS.length - 1) : 500, y: 172 - 140 * n / maxY }; });
const curva = pts.map((p, i) => { if (!i) return 'M' + p.x.toFixed(1) + ' ' + p.y.toFixed(1); const p0 = pts[i - 2] || pts[i - 1], p1 = pts[i - 1], p3 = pts[i + 1] || p; const c1x = p1.x + (p.x - p0.x) / 6, c1y = Math.min(172, p1.y + (p.y - p0.y) / 6), c2x = p.x - (p3.x - p1.x) / 6, c2y = Math.min(172, p.y - (p3.y - p1.y) / 6); return 'C' + [c1x, c1y, c2x, c2y, p.x, p.y].map(v => v.toFixed(1)).join(' '); }).join(' ');
const anoLinha = { linha: curva, area: curva + ' L' + pts[pts.length - 1].x.toFixed(1) + ' 200 L' + pts[0].x.toFixed(1) + ' 200 Z', pts: pts.map(p => { const sel = has('anos', p.a); const ts = any('anos'); return { k: String(p.a), n: String(p.n), l: (p.x / 10).toFixed(2), t: (p.y / 2).toFixed(2), sel, fill: sel ? VERDE_E : '#FFFFFF', bd: sel ? VERDE_E : '#6E9A0A', op: ts && !sel ? 0.45 : 1, tt: p.n + ' ' + plural(p.n, 'julgamento', 'julgamentos'), tip: p.n + ' ' + plural(p.n, 'julgamento de apelação', 'julgamentos de apelação') + ' em ' + p.a + '. Clique para filtrar este ano.', pick: () => tog('anos', p.a) }; }) };
// Ativos
const baseAt = J.filter(r => passAll(r, 'ativos'));
const ativos = barras('ativos', ATIVOS, baseAt, (r, v) => r.ativos.includes(v), (v, n, b) => v + ': ' + n + ' de ' + b + ' ' + plural(b, 'julgamento', 'julgamentos') + ' do filtro. Clique para ver só esses julgamentos nos demais gráficos.').sort((x, y) => y.n - x.n);
// Peso da prova técnica (só processos com dados do 1º grau)
const basePeso = J.filter(r => r.g1 && passAll(r, 'peso'));
const pesoDesc = { 'Determinante': 'a prova técnica foi decisiva para o resultado', 'Concorrente': 'a prova técnica pesou junto com outras provas', 'Indeterminável': 'não é possível dizer, pelos autos, quanto o laudo pesou', 'Não se aplica': 'não houve prova técnica a considerar', 'Sem registro': 'o campo está vazio na planilha' };
const PESOCOR = { 'Determinante': VERDE_E, 'Concorrente': VERDE, 'Indeterminável': VERDE_C, 'Não se aplica': '#C9CCC4', 'Sem registro': '#E3E5DF' };
const pesos = PESOS.map(v => { const n = basePeso.filter(r => r.peso === v).length; const sel = has('peso', v); const ts = any('peso'); const b = basePeso.length;
  return { k: v, n: String(n), pct: pctTxt(n, b), w: b ? 100 * n / b : 0, cor: ts && !sel ? '#E3E5DF' : (PESOCOR[v] || '#C9CCC4'), sel, bd: sel ? VERDE_E : '#E4E6E0', bg: sel ? '#F1F7D9' : '#FFFFFF', op: ts && !sel ? 0.55 : 1, d: pesoDesc[v] || '', tip: v + ' — ' + (pesoDesc[v] || 'rótulo da planilha') + ': ' + n + ' de ' + b + ' ' + plural(b, 'processo', 'processos') + ' com dados do 1º grau no filtro. Clique para filtrar.', pick: () => tog('peso', v) }; });
// Acolhimento do laudo: 1º grau (linhas) x 2º grau (colunas)
const baseAc = J.filter(r => r.g1 && passAll(r, 'acol'));
const ac1s = ACOLS.filter(a => J.some(r => r.g1 && r.ac1 === a)), ac2s = ACOLS.filter(a => J.some(r => r.g1 && r.ac2 === a));
const maxAc = Math.max(1, ...ac1s.flatMap(a => ac2s.map(b => baseAc.filter(r => r.ac1 === a && r.ac2 === b).length)));
const acol = { cols: ac2s.map(b => ({ k: b })), gtc: '120px repeat(' + ac2s.length + ', minmax(52px, 1fr))', base: baseAc.length, linhas: ac1s.map(a => ({ k: a, cells: ac2s.map(b => {
  const n = baseAc.filter(r => r.ac1 === a && r.ac2 === b).length; const key = a + ' → ' + b; const sel = has('acol', key);
  return { n: n ? String(n) : '·', bg: sel ? VERDE_E : n ? 'rgba(122,165,10,' + (0.18 + 0.72 * n / maxAc).toFixed(2) + ')' : '#FFFFFF', fg: sel ? '#FFFFFF' : (n / maxAc > 0.6 ? '#FFFFFF' : INK), bd: sel ? VERDE_E : '#E4E6E0', cur: n || sel ? 'pointer' : 'default',
    tip: n ? n + ' ' + plural(n, 'processo', 'processos') + ' com laudo ' + a.toLowerCase() + ' no 1º grau e ' + b.toLowerCase() + ' no 2º grau. Clique para filtrar.' : 'Nenhum processo do filtro com laudo ' + a.toLowerCase() + ' no 1º grau e ' + b.toLowerCase() + ' no 2º grau.',
    pick: () => { if (n || sel) tog('acol', key); } };
}) })) };
// Honorários periciais: valor inicial ou final, como registrado na planilha
const honB = st.honB === 'inicial' ? 'inicial' : 'final';
const hk = honB === 'final' ? 'honF' : 'honI', hk2 = honB === 'final' ? 'honI' : 'honF';
const honItens = F.filter(r => r[hk].v !== null).map(r => ({ id: r.id, v: r[hk].v, outro: r[hk2], d: r.data, ativo: r.ativos[0] || 'Ativo não informado', cnj: r.cnj })).sort((a, b) => a.v - b.v);
const semValor = F.filter(r => r.pericia === 'Sim' && r.g1 && r[hk].st === 'ni');
const hMin = honItens.length ? honItens[0].v : 0, hMax = honItens.length ? honItens[honItens.length - 1].v : 0;
const escala = Math.max(1, hMax * 1.05);
const outroTxt = (o) => o.st === 'valor' ? brl(o.v) : o.st === 'ni' ? 'não identificado' : 'não se aplica';
const hon = {
  tem: honItens.length > 0, faixa: honItens.length ? (honItens.length === 1 ? brl(hMin) : brl(hMin) + ' → ' + brl(hMax)) : 'Sem base para cálculo',
  nTxt: honItens.length + (honItens.length === 1 ? ' processo' : ' processos'), x0: 100 * hMin / escala, xw: 100 * (hMax - hMin) / escala,
  bIni: { bg: honB === 'inicial' ? INK : 'transparent', fg: honB === 'inicial' ? '#FFFFFF' : INK, pick: () => set({ honB: 'inicial' }) },
  bFim: { bg: honB === 'final' ? INK : 'transparent', fg: honB === 'final' ? '#FFFFFF' : INK, pick: () => set({ honB: 'final' }) },
  rotulo: honB === 'final' ? 'Fixados pelo juízo' : 'Propostos pelo perito', rotuloMin: honB === 'final' ? 'valor fixado' : 'valor proposto', outroRot: honB === 'final' ? 'proposto' : 'fixado',
  itens: honItens.map((h, i) => { const sel = has('juls', h.id); return { ...h, pos: String(i + 1), txt: brl(h.v), x: 100 * h.v / escala, sub: h.cnj + ' · ' + h.d + ' · ' + (honB === 'final' ? 'proposto' : 'fixado') + ': ' + outroTxt(h.outro), sel, bg: sel ? '#F1F7D9' : '#FFFFFF', bd: sel ? '#C9E43A' : '#ECEDE8', tip: 'Honorários periciais ' + (honB === 'final' ? 'fixados pelo juízo' : 'propostos pelo perito') + ': ' + brl(h.v) + ', no processo ' + h.cnj + ' (' + h.ativo.toLowerCase() + '). Clique para ver só este julgamento nos demais gráficos.', pick: () => tog('juls', h.id) }; }),
  semN: semValor.length, temSem: semValor.length > 0, semTxt: semValor.map(r => r.cnj).join('; ')
};
// Indicadores
const comPer = F.filter(r => r.pericia === 'Sim').length, aVer = F.filter(r => r.pericia === 'A verificar no processo').length;
const g1N = F.filter(r => r.g1).length;
const pesoBase = F.filter(r => ['Determinante', 'Concorrente', 'Indeterminável'].includes(r.peso));
const det = pesoBase.filter(r => r.peso === 'Determinante').length;
const camTxt = CAMS.map(c => c.replace(' Câmara Cível', '')).join(' e ') + (CAMS.length > 1 ? ' Câmaras Cíveis' : ' Câmara Cível');
const fixVals = F.filter(r => r.honF.v !== null).map(r => r.honF.v);
const fixMax = fixVals.length ? Math.max(...fixVals) : null;
const kpis = [
  { k: 'Julgamentos no filtro', v: N + ' de ' + T, s: 'Apelações da ' + camTxt + ', ' + ANO0 + '–' + ANO1, chip: 'Calculável', ...ck('ok'), ic: ICON_MARTELO, icBg: '#F6F7F3', tip: 'Julgamentos de apelação da planilha que atendem aos filtros e seleções atuais, de um total de ' + T + '.' },
  { k: 'Com perícia realizada', v: N ? pctTxt(comPer, N) : 'Sem base para cálculo', s: (N ? comPer + ' de ' + N + ' julgamentos do filtro' : '') + (aVer ? ' · ' + aVer + ' a verificar no processo' : ''), chip: aVer ? 'Com ressalvas' : 'Calculável', ...ck(aVer ? 'warn' : 'ok'), ic: ICON.pess, icBg: '#F6F7F3', tip: 'Julgamentos em que houve perícia realizada no processo (coluna PERÍCIA = SIM). Os marcados como “verificar no processo” não entram como sim nem como não.' },
  { k: 'Prova técnica determinante', v: pesoBase.length ? pctTxt(det, pesoBase.length) : 'Sem base para cálculo', s: (pesoBase.length ? det + ' de ' + pesoBase.length + ' classificados · ' : '') + g1N + ' ' + plural(g1N, 'processo', 'processos') + ' com dados do 1º grau', chip: 'Com ressalvas', ...ck('warn'), ic: ICON.laudo, icBg: '#D7F24B', tip: 'Entre os processos com o peso da prova técnica classificado (determinante, concorrente ou indeterminável), quantos tiveram a prova técnica como decisiva. Só os processos com dados do 1º grau têm essa classificação.' },
  { k: 'Honorários fixados em até', v: fixMax !== null ? brl(fixMax) : 'Sem base para cálculo', s: fixMax !== null ? 'maior valor entre ' + fixVals.length + ' ' + plural(fixVals.length, 'processo', 'processos') + ' com valor fixado · nominal, sem correção' : 'nenhum valor fixado nos julgamentos do filtro', chip: fixMax !== null ? 'Com ressalvas' : 'Sem base', ...ck(fixMax !== null ? 'warn' : 'pend'), ic: ICON.din, icBg: '#F6F7F3', tip: 'Maior valor de honorários periciais fixado pelo juízo nos julgamentos do filtro. Valor da época, sem correção monetária.' }
];
const chipsProc = [].concat(
  (st.anos || []).map(a => ({ k: 'Ano ' + a, rm: () => tog('anos', a) })),
  (st.ativos || []).map(a => ({ k: a, rm: () => tog('ativos', a) })),
  (st.cam || []).map(a => ({ k: a, rm: () => tog('cam', a) })),
  (st.per || []).map(a => ({ k: 'Perícia: ' + a, rm: () => tog('per', a) })),
  (st.at || []).map(a => ({ k: 'Assistente técnico: ' + a, rm: () => tog('at', a) })),
  (st.peso || []).map(a => ({ k: 'Peso: ' + a, rm: () => tog('peso', a) })),
  (st.acol || []).map(a => ({ k: 'Laudo ' + a, rm: () => tog('acol', a) })),
  (st.juls || []).map(j => ({ k: 'Processo ' + ((J.find(r => r.id === j) || {}).cnj || j), rm: () => tog('juls', j) })),
  (st.form || []).map(a => ({ k: 'Formação: ' + a, rm: () => tog('form', a) })),
  (st.g1f || []).map(k => { const [c, v] = k.split(SEP); const lb = (G1SEC.flatMap(x => x.cols).find(x => x[0] === c) || [c, c])[1]; return { k: lb + ': ' + v, rm: () => tog('g1f', k) }; }),
  q ? [{ k: 'Busca: “' + st.q + '”', rm: () => set({ q: '' }) }] : []);
const sorted = F.slice().sort((a, b) => st.asc ? iso(a.data).localeCompare(iso(b.data)) : iso(b.data).localeCompare(iso(a.data)));
const curto = (s, n) => s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s;
const COLS = [['proc', 'Processo (acórdão)', 'num'], ['ano', 'Ano', 'ano'], ['cam', 'Câmara', 'camara'], ['rel', 'Relatoria', 'relator'], ['idx', 'Indexadores', 'indexa'], ['ementa', 'Ementa', 'ementa'], ['resumo', 'Resumo do caso', 'resumo'], ['ativo', 'Ativo de PI', 'ativoT'], ['perito', 'Perito', 'perito'], ['p1g', 'Processo (1º grau)', 'p1g'], ['vara', 'Vara de origem', 'vara']];
const LARG = { proc: 190, ano: 60, cam: 130, rel: 180, idx: 220, ementa: 360, resumo: 340, ativo: 150, perito: 260, p1g: 200, vara: 200 };
const off = st.colsOff || [];
const colsVis = COLS.filter(c => !off.includes(c[0]));
const tabCols = colsVis.map(c => ({ k: c[1], w: LARG[c[0]] + 'px' }));
const tabMinW = colsVis.reduce((s2, c) => s2 + LARG[c[0]] + 24, 0) + 'px';
const valCol = (r, c) => { const v = c[2] === 'ativoT' ? r.ativos.join('; ') : r[c[2]]; return v === undefined || v === null || v === '' ? '—' : String(v); };
const tabela = sorted.map(r => ({ id: r.id, cells: colsVis.map(c => { const txt = valCol(r, c); const btn = c[0] === 'proc'; const longo = !btn && txt.length > 220;
  return { txt, btn, plain: !btn && !longo, longo, curto: longo ? curto(txt, 200) : '', jBg: has('juls', r.id) ? '#D7F24B' : '#F6F7F3', pick: () => tog('juls', r.id) }; }) }));
const csvCab = colsVis.map(c => c[1]);
const csvRows = sorted.map(r => colsVis.map(c => { const v = valCol(r, c); return v === '—' ? '' : v; }));
const colsOpen = st.open === 'cols';
const colsDd = { open: colsOpen, sum: colsVis.length === COLS.length ? 'Todos' : colsVis.length + ' de ' + COLS.length, bd: colsOpen ? INK : (colsVis.length < COLS.length ? '#C9E43A' : '#E4E6E0'), bg: colsOpen || colsVis.length < COLS.length ? '#F1F7D9' : '#FFFFFF', rot: colsOpen ? 'rotate(180deg)' : 'none',
  toggle: () => set({ open: colsOpen ? null : 'cols' }), todos: () => set({ colsOff: [] }), fechar: () => set({ open: null }),
  opts: COLS.map(c => { const sel = !off.includes(c[0]); return { k: c[1], sel, mk: sel ? INK : '#FFFFFF', ck: sel ? '#FFFFFF' : 'transparent', rowBg: sel ? '#F1F7D9' : 'transparent', pick: () => { if (sel && colsVis.length === 1) return; set({ colsOff: sel ? off.concat([c[0]]) : off.filter(x => x !== c[0]) }); } }; }) };
// Formação dos peritos (barras verticais, ordem decrescente)
const baseForm = J.filter(r => r.forms.length && passAll(r, 'form'));
const formProcCont = FORMS.map(f => ({ f, n: baseForm.filter(r => r.forms.includes(f)).length }));
const maxF = Math.max(1, ...formProcCont.map(x => x.n));
const formacoes = formProcCont.slice().sort((a, b) => (a.f === 'Não identificada') - (b.f === 'Não identificada') || b.n - a.n).map(({ f, n }, i, arr) => { const al = i < 2 ? 'left: 0' : (i >= arr.length - 2 ? 'right: 0' : 'left: 50%; transform: translateX(-50%)'); const sel = has('form', f); const ts = any('form');
  const nomes = []; baseForm.filter(r => r.forms.includes(f)).forEach(r => r.peritosF.filter(x => x.forms.includes(f)).forEach(x => { const nm = x.nome || 'Perito sem nome identificado na planilha'; if (!nomes.includes(nm)) nomes.push(nm); }));
  if (f === 'Não identificada') baseForm.filter(r => r.forms.includes(f)).forEach(r => { const nm = 'Sem nome nem formação identificados (' + r.cnj + ')'; if (!nomes.includes(nm)) nomes.push(nm); });
  return { k: f, al, n: String(n), nomes: nomes.map(t => ({ t })), temNomes: nomes.length > 0, h: Math.max(4, Math.round(150 * n / maxF)), sel, op: ts && !sel ? 0.45 : 1, bar: sel ? VERDE_E : (f === 'Não identificada' ? '#C9CCC4' : VERDE), rbg: sel ? '#F1F7D9' : 'transparent', tip: f + ': ' + n + ' de ' + baseForm.length + ' ' + plural(baseForm.length, 'processo', 'processos') + ' com formação do perito registrada (' + pctTxt(n, baseForm.length) + '). Clique para filtrar.', pick: () => tog('form', f) }; });
// Seções do processo de 1º grau
const CATORD = ['Sim', 'Não', 'Ambas as partes', 'Autor', 'Réu', 'Autor e réu', 'Deferida', 'Indeferida', 'Múltiplas decisões', 'Cadastro judicial', 'Nenhum', '1 perito', '2 peritos', '3 peritos', 'Não identificado', 'Não se aplica', 'Sem registro'];
const CINZA = ['Não identificado', 'Não se aplica', 'Sem registro'];
const g1secoes = G1SEC.map(sc => ({ t: sc.t, d: sc.d, rosca: !!sc.rosca, barras: !sc.rosca,
  itens: sc.cols.map(([col, lb]) => {
    const base = J.filter(r => r.c[col] !== null && passAll(r, 'g1:' + col));
    const cats = ordem(J.map(r => r.c[col]), CATORD);
    const mx = Math.max(1, ...cats.map(v => base.filter(r => r.c[col] === v).length));
    const tem = (g1Sel[col] || []).length > 0;
    const ROSCA = { 'Sim': VERDE_E, 'Não': VERDE_C, 'Não identificado': '#B4B8AE', 'Não se aplica': '#D9DCD3', 'Sem registro': '#ECEDE8' };
    const tot = base.length; let acc = 0;
    const segs = cats.map((v, i) => { const n = base.filter(r => r.c[col] === v).length; const a0 = acc; acc += 360 * n / (tot || 1); const c0 = ROSCA[v] || ['#7DA30F', '#C9E43A', '#A9AEA3'][i % 3]; return (tem && !has('g1f', col + SEP + v) ? '#ECEDE8' : c0) + ' ' + a0.toFixed(2) + 'deg ' + acc.toFixed(2) + 'deg'; });
    const corCat = (v, i) => ROSCA[v] || ['#7DA30F', '#C9E43A', '#A9AEA3'][i % 3];
    return { q: lb, rosca: !!sc.rosca, grad: tot ? 'conic-gradient(' + segs.join(', ') + ')' : '#E6E8E2', centro: String(tot), nTxt: base.length + ' ' + plural(base.length, 'processo', 'processos'), cats: cats.map((v, ci) => { const n = base.filter(r => r.c[col] === v).length; const key = col + SEP + v; const sel = has('g1f', key);
      return { k: v, n, pct: pctTxt(n, base.length), cor: corCat(v, ci), w: 100 * n / mx, fw: sel ? 700 : 500, op: tem && !sel ? 0.5 : 1, bar: sel ? VERDE_E : (CINZA.includes(v) ? '#C9CCC4' : VERDE), tip: lb + ' — ' + v + ': ' + n + ' de ' + base.length + ' ' + plural(base.length, 'processo', 'processos') + ' (' + pctTxt(n, base.length) + '). Clique para filtrar o painel.', pick: () => tog('g1f', key) }; }) };
  }),
  temTxt: !!sc.txt && F.some(r => r.tx[sc.txt[0]]), txtT: sc.txt ? sc.txt[1] : '', textos: sc.txt ? F.filter(r => r.tx[sc.txt[0]]).map(r => ({ cnj: r.cnj, txt: r.tx[sc.txt[0]] })) : []
}));
const g1Base = F.filter(r => r.g1).length;
const fonteTxt = (PROC_AO_VIVO ? 'Lido agora da planilha ' : 'Retrato da planilha ') + PROC_FONTE + (PROC_AO_VIVO ? '' : ', copiado em ' + PROC_LIDA) + '. ' + T + ' julgamentos; ' + J.filter(r => r.g1).length + ' com dados do processo de 1º grau.';
// Peritos: Questionarios_Peritos_Consolidados.xlsx, aba "Respostas consolidadas" (chave = linha da planilha; 14 questionários). Linhas 43 e 44 (aceite e contatos) não foram importadas; 1 contribuição livre omitida por conter dado identificável.
const PQ = {
2:["Direito", "Direito", "Engenharias", "Direito", "Direito", "Engenharias", "Direito", "Engenharias", "Direito", "Engenharia e Direito", "Direito", "Direito", "Direito", "Engenharias"],
3:["Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim"],
4:["Não", "Não", "Sim", "Não", "Sim", "Sim", "Não", "Não", "Sim", "Sim", "Sim", "Não", "Sim", "Sim"],
5:["Sim", "Sim", "Sim", "Sim", "Não", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim"],
6:["Menos de 2 anos", "6 a 10 anos", "2 a 5 anos", "Menos de 2 anos", "2 a 5 anos", "Mais de 10 anos", "2 a 5 anos", "2 a 5 anos", "Mais de 10 anos", "2 a 5 anos", "2 a 5 anos", "2 a 5 anos", "Mais de 10 anos", "Mais de 10 anos"],
7:["1 a 3", "11 a 20", "4 a 10", "1 a 3", "1 a 3", "11 a 20", "4 a 10", "1 a 3", "Mais de 20", "11 a 20", "4 a 10", "1 a 3", "4 a 10", "Mais de 20"],
8:["Sim", "Sim", "Sim", "Sim", "Não", "Sim", "Sim", "Sim", "Sim", "Não", "Sim", "Sim", "Sim", "Sim"],
9:["Cadastrado e credenciado", "Cadastrado e credenciado", "Cadastrado e credenciado", "Cadastrado e credenciado", "Cadastrado e credenciado", "Cadastrado e credenciado", "Cadastrado e credenciado", "Cadastrado e credenciado", "Cadastrado e credenciado", "Cadastrado e credenciado", "Cadastrado, sem credenciamento", "Cadastrado e credenciado", "Não cadastrado", "Cadastrado, sem credenciamento"],
10:["Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Não", "Sim", "Sim", "Sim", "Não", "Não", "Sim"],
11:["Outros", "Não me recordo", "", "Outros", "Outros", "Engenharia", "Outros", "Engenharia", "Outros", "Outros", "Não me recordo", "", "", "Engenharia"],
12:["Nenhuma", "Nenhuma", "Nenhuma", "Nenhuma", "Nenhuma", "Nenhuma", "Nenhuma", "Muita", "Nenhuma", "Nenhuma", "Nenhuma", "Não se aplica", "Não se aplica", "Nenhuma"],
13:["5 / 5", "5 / 5", "3 / 5", "4 / 5", "3 / 5", "5 / 5", "5 / 5", "1 / 5", "5 / 5", "5 / 5", "3 / 5", "", "", "1 / 5"],
14:["Não conhecia a regra", "Não", "Não", "Sim", "Não conhecia a regra", "Não", "Não", "Não", "Não", "Não", "Não", "", "Não", "Não conhecia a regra"],
15:["Sorteio ou lista do cadastro", "Não sei informar", "Nomeação direta pelo juízo", "Nomeação direta pelo juízo", "Sorteio ou lista do cadastro", "Nomeação direta pelo juízo", "Sorteio ou lista do cadastro", "Não sei informar", "Nomeação direta pelo juízo", "Sorteio ou lista do cadastro", "Sorteio ou lista do cadastro; Nomeação direta pelo juízo", "Não sei informar", "Nomeação direta pelo juízo", "Nomeação direta pelo juízo"],
16:["Não sei responder", "Sim, por poucos juízos", "Não, as nomeações se distribuem", "Não sei responder", "Não sei responder", "Não, as nomeações se distribuem", "Não, as nomeações se distribuem", "Não sei responder", "Sim, pelo mesmo juízo com frequência", "Não sei responder", "Sim, por poucos juízos", "Sim, pelo mesmo juízo com frequência", "Sim, pelo mesmo juízo com frequência", "Não sei responder"],
17:["Não sei informar", "Sim", "Sim", "Não", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Sim", "Não sei informar", "Sim"],
18:["Não sei informar", "Não", "Não", "Não sei informar", "Não", "Sim, e foi rejeitada", "Não", "Não", "Não", "Sim, e foi rejeitada", "Não", "Não", "Não", "Não"],
19:["Não", "Sim", "Sim", "Não", "Sim", "Não", "Não", "Não", "Sim", "Não", "Sim", "Não", "Sim", "Não"],
20:["", "Valor dos honorários", "Objeto fora da especialidade; Valor dos honorários", "", "Objeto fora da especialidade; Valor dos honorários", "", "", "", "Objeto fora da especialidade; Valor dos honorários; Impedimento ou suspeição", "", "Objeto fora da especialidade", "", "Valor dos honorários; Impedimento ou suspeição", ""],
21:["Patente; Marca", "Patente; Modelo de utilidade; Marca; Desenho industrial; Trade dress; Concorrência desleal", "Patente; Modelo de utilidade; Desenho industrial", "Patente; Marca; Trade dress", "Marca", "Patente; Modelo de utilidade; Marca; Desenho industrial; Trade dress; Segredo de negócio", "Modelo de utilidade; Marca; Desenho industrial; Trade dress; Concorrência desleal", "Patente; Modelo de utilidade; Desenho industrial; Trade dress; Concorrência desleal", "Patente; Modelo de utilidade; Marca; Trade dress", "Patente; Modelo de utilidade; Marca; Desenho industrial; Trade dress; Concorrência desleal; Segredo de negócio", "Patente; Modelo de utilidade; Marca; Desenho industrial; Trade dress; Concorrência desleal", "Patente", "Patente; Modelo de utilidade; Marca; Desenho industrial", "Patente; Modelo de utilidade"],
22:["Delimitação do objeto pelos quesitos", "Acesso às instalações ou ao produto", "Acesso às instalações ou ao produto", "Delimitação do objeto pelos quesitos", "Acesso às instalações ou ao produto", "Ausência de padrão metodológico", "Acesso ao estado da técnica; Acesso às instalações ou ao produto; Delimitação do objeto pelos quesitos", "Acesso às instalações ou ao produto", "Ausência de padrão metodológico; Delimitação do objeto pelos quesitos", "Delimitação do objeto pelos quesitos", "Acesso às instalações ou ao produto; Delimitação do objeto pelos quesitos", "Ausência de padrão metodológico", "Acesso às instalações ou ao produto", "Prazo concedido"],
23:["Predominantemente documental, com diligência eventual", "Predominantemente documental, com diligência eventual", "Predominantemente documental, com diligência eventual", "Predominantemente documental, com diligência eventual", "Predominantemente documental, com diligência eventual", "Predominantemente documental, com diligência eventual", "Diligência ou trabalho de campo na maior parte dos casos", "Diligência ou trabalho de campo na maior parte dos casos", "Predominantemente documental, com diligência eventual", "Predominantemente documental, com diligência eventual", "Diligência ou trabalho de campo na maior parte dos casos", "Apenas análise documental", "Diligência ou trabalho de campo na maior parte dos casos", "Predominantemente documental, com diligência eventual"],
24:["4 / 5", "5 / 5", "5 / 5", "4 / 5", "2 / 5", "4 / 5", "3 / 5", "5 / 5", "5 / 5", "2 / 5", "5 / 5", "3 / 5", "3 / 5", "3 / 5"],
25:["Delimito o alcance técnico da resposta", "Respondo integralmente", "Delimito o alcance técnico da resposta", "Delimito o alcance técnico da resposta", "Delimito o alcance técnico da resposta", "Delimito o alcance técnico da resposta", "Delimito o alcance técnico da resposta", "Delimito o alcance técnico da resposta", "Delimito o alcance técnico da resposta", "Deixo de responder", "Delimito o alcance técnico da resposta", "Delimito o alcance técnico da resposta", "Delimito o alcance técnico da resposta", "Deixo de responder"],
26:["11 a 20", "Mais de 30", "Mais de 30", "21 a 30", "11 a 20", "Mais de 30", "11 a 20", "Mais de 30", "Mais de 30", "Varia muito", "Varia muito", "Até 10", "11 a 20", "Varia muito"],
27:["3 / 5", "3 / 5", "4 / 5", "3 / 5", "2 / 5", "4 / 5", "3 / 5", "3 / 5", "2 / 5", "4 / 5", "2 / 5", "3 / 5", "2 / 5", "4 / 5"],
28:["2 / 5", "3 / 5", "2 / 5", "4 / 5", "2 / 5", "1 / 5", "2 / 5", "3 / 5", "3 / 5", "1 / 5", "4 / 5", "3 / 5", "1 / 5", "2 / 5"],
29:["4 / 5", "4 / 5", "5 / 5", "3 / 5", "2 / 5", "4 / 5", "3 / 5", "5 / 5", "5 / 5", "4 / 5", "3 / 5", "2 / 5", "4 / 5", "5 / 5"],
30:["5 / 5", "4 / 5", "4 / 5", "4 / 5", "2 / 5", "5 / 5", "3 / 5", "5 / 5", "1 / 5", "4 / 5", "5 / 5", "2 / 5", "2 / 5", "5 / 5"],
31:["Sim, mais de uma vez", "Sim, uma vez", "Não", "Sim, uma vez", "Não", "Sim, uma vez", "Não", "Sim, uma vez", "Sim, mais de uma vez", "Sim, uma vez", "Sim, uma vez", "Não", "Não", "Sim, mais de uma vez"],
32:["Laudo único, com divergência registrada", "Laudo único, sem divergência", "", "Laudo único, sem divergência", "", "Laudo único, sem divergência", "", "Laudo único, sem divergência", "Laudo único, sem divergência", "Laudos separados divergentes", "Laudo único, sem divergência", "", "Laudos separados divergentes", "Laudo único, sem divergência"],
33:["5 / 5", "4 / 5", "3 / 5", "4 / 5", "4 / 5", "4 / 5", "3 / 5", "4 / 5", "5 / 5", "5 / 5", "5 / 5", "3 / 5", "5 / 5", "5 / 5"],
34:["3 / 5", "4 / 5", "3 / 5", "2 / 5", "1 / 5", "4 / 5", "4 / 5", "5 / 5", "2 / 5", "3 / 5", "4 / 5", "2 / 5", "1 / 5", "3 / 5"],
35:["Não sei informar", "Não", "Sim, uma vez", "Não sei informar", "Não", "Não", "Sim, mais de uma vez", "Não", "Não", "Sim, mais de uma vez", "Sim, uma vez", "Sim, mais de uma vez", "Não", "Não sei informar"],
36:["Muito inferior ao trabalho realizado", "Muito inferior ao trabalho realizado", "Muito inferior ao trabalho realizado", "Muito inferior ao trabalho realizado", "Muito inferior ao trabalho realizado", "Muito inferior ao trabalho realizado", "Muito inferior ao trabalho realizado", "Muito inferior ao trabalho realizado", "Muito inferior ao trabalho realizado", "Inferior ao devido, mas aceitável", "Inferior ao devido, mas aceitável", "Inferior ao devido, mas aceitável", "", "Adequado"],
37:["Ainda não recebi", "", "Ainda não recebi", "Ainda não recebi", "De 1 a 3 meses", "Ainda não recebi", "De 3 a 6 meses", "De 1 a 3 meses", "Ainda não recebi", "Mais de 6 meses", "Ainda não recebi", "Ainda não recebi", "", "De 3 a 6 meses"],
38:["Nunca", "Nunca", "Uma ou duas vezes", "Nunca", "Uma ou duas vezes", "Uma ou duas vezes", "Nunca", "Nunca", "Uma ou duas vezes", "Nunca", "Nunca", "Nunca", "Com frequência", "Nunca"],
39:["4 / 5", "4 / 5", "5 / 5", "4 / 5", "", "5 / 5", "4 / 5", "5 / 5", "4 / 5", "4 / 5", "5 / 5", "5 / 5", "4 / 5", "5 / 5"],
40:["Sim", "Não", "Não", "Não", "", "Não", "Não", "Não", "Não", "Não", "Não", "Não", "Não", "Não"],
41:["4 / 5", "4 / 5", "4 / 5", "4 / 5", "3 / 5", "4 / 5", "4 / 5", "4 / 5", "4 / 5", "5 / 5", "5 / 5", "1 / 5", "2 / 5", "5 / 5"],
42:["Rubrica própria de especialidade em propriedade industrial no cadastro; Previsão expressa de perícia por dois especialistas; Roteiro de referência para formulação de quesitos", "Roteiro de referência para formulação de quesitos; Regra de alternância na nomeação", "Rubrica própria de especialidade em propriedade industrial no cadastro; Regra de alternância na nomeação", "Rubrica própria de especialidade em propriedade industrial no cadastro; Tabela específica de honorários para a matéria; Previsão expressa de perícia por dois especialistas", "Admissão do agente da propriedade industrial habilitado perante o INPI; Tabela específica de honorários para a matéria", "Rubrica própria de especialidade em propriedade industrial no cadastro; Admissão do agente da propriedade industrial habilitado perante o INPI; Tabela específica de honorários para a matéria", "Admissão do agente da propriedade industrial habilitado perante o INPI; Tabela específica de honorários para a matéria; Disciplina da remuneração na prova técnica simplificada; Roteiro de referência para formulação de quesitos; Regra de alternância na nomeação", "Rubrica própria de especialidade em propriedade industrial no cadastro", "Rubrica própria de especialidade em propriedade industrial no cadastro; Admissão do agente da propriedade industrial habilitado perante o INPI; Disciplina da remuneração na prova técnica simplificada", "Nenhuma alteração necessária", "Rubrica própria de especialidade em propriedade industrial no cadastro; Admissão do agente da propriedade industrial habilitado perante o INPI; Regra de alternância na nomeação", "Tabela específica de honorários para a matéria; Disciplina da remuneração na prova técnica simplificada; Roteiro de referência para formulação de quesitos; Regra de alternância na nomeação", "Rubrica própria de especialidade em propriedade industrial no cadastro; Admissão do agente da propriedade industrial habilitado perante o INPI", "Admissão do agente da propriedade industrial habilitado perante o INPI; Tabela específica de honorários para a matéria"],
45:["", "__OMITIDO__", "Eu estou cadastrado como perito no TJRS nas especialidades de Engenharia e Agente da Propriedade Industrial. Minha atuação profissional está focada na área de patentes e desenhos industriais. Frequentemente recebo nomeações sobre temas exclusivos de engenharia e acabo declinando por estar fora da minha área de atuação. Acredito que o cadastro do TJRS poderia ser aprimorado para informar uma formação complementar (Ex: Especialidade: Agente da Propriedade Industrial; Formação complementar: Engenharia). Acredito que isso poderia facilitar o processo de nomeação na área de patentes, onde a dupla formação é desejável.", "", "", "", "", "Penso que não fica claro no cadastro para os magistrados que meu cadastro de perito está direcionado para Propriedade Intelectual. Sou constantemente nomeado como perito de Engenharia Elétrica, mas nunca fui nomeado para perícias de propriedade intelectual.", "", "Quanto ao Bloco Quesitos: Sou contra \"regrar\" a apresentação de quesitos. Contudo, deixo de responder quando o tema foge da controvérsia, ou do escopo do trabalho pericial. E nesses casos, a parte pode insistir no quesito até a conclusão dos esclarecimentos.; Quanto a rubrica: Os agentes de propriedade industrial do INPI, já possuem a rubrica (API) no sistema eproc.", "Sou perito há poucos anos mas espero poder ter contribuído. att.", "", "", ""],
};
const QP = {"2": "Área de formação de graduação", "3": "Pós-graduação ou qualificação específica em propriedade intelectual", "4": "Agente da propriedade industrial habilitado perante o INPI", "5": "Inscrição em conselho de classe", "6": "Tempo de atuação como perito judicial", "7": "Número aproximado de perícias em propriedade industrial realizadas", "8": "Atua também como assistente técnico de partes", "9": "Situação no Sistema AJ do TJRS", "10": "Ao se cadastrar, foi possível indicar a propriedade industrial como especialidade?", "11": "Em qual rubrica de especialidade conseguiu se enquadrar?", "12": "Encontrou dificuldade em comprovar especialidade em propriedade industrial por certidão de órgão de classe?", "13": "O cadastro permite ao magistrado identificá-lo como especialista na matéria?", "14": "A vedação de atuar como perito nos três anos seguintes à atuação como assistente técnico já o impediu de aceitar nomeação?", "15": "Como ocorreram suas nomeações em processos de propriedade industrial?", "16": "Costuma ser nomeado reiteradamente pelo mesmo juízo?", "17": "Já foi nomeado por juízo de comarca sem vara empresarial especializada?", "18": "Já teve nomeação impugnada por alegação de falta de especialidade?", "19": "Já recusou nomeação em processo de propriedade industrial?", "20": "Por qual motivo recusou?", "21": "Sobre quais ativos já periciou?", "22": "Quais as principais dificuldades encontradas na execução?", "23": "As perícias que realiza exigem, em regra, que tipo de trabalho?", "24": "Com que frequência recebe quesitos que exigem juízo jurídico, e não técnico?", "25": "Como procede nesses casos?", "26": "Quantos quesitos costuma receber por processo, somados os das partes e os do juízo?", "27": "Os quesitos que recebe são claros e tecnicamente adequados?", "28": "Com que frequência precisa pedir esclarecimento ou reformulação de quesitos?", "29": "Com que frequência há assistentes técnicos indicados nas perícias em que atua?", "30": "A atuação dos assistentes técnicos contribui para a qualidade da prova produzida?", "31": "Já realizou perícia em conjunto com perito de área complementar?", "32": "Qual foi o resultado desse trabalho conjunto?", "33": "A atuação conjunta de um técnico da área do objeto e de um especialista em propriedade industrial melhora o resultado da perícia?", "34": "Os honorários arbitrados correspondem à complexidade das perícias em propriedade industrial?", "35": "Já atuou em processo de propriedade industrial em que a parte era beneficiária da gratuidade da justiça e os honorários foram custeados pelo Tribunal?", "36": "Como avalia o valor pago pelo Tribunal nesses casos?", "37": "Qual foi o prazo de efetivo pagamento nesses casos?", "38": "Já recusou nomeação por insuficiência de honorários?", "39": "Com que frequência suas conclusões foram acolhidas nas decisões?", "40": "Já foi ouvido em audiência como especialista, em lugar da realização de perícia (art. 464, §§ 2º a 4º, do CPC)?", "41": "As normas do CNJ e do TJRS sobre perícia atendem às particularidades da propriedade industrial?", "42": "Que alterações consideraria úteis?"};
// ---- Motor comum dos questionários (peritos e magistrados): contagens, gráficos e filtro por clique
const PAL = ['#4F7A00', '#C9E43A', '#7D8B2F', '#A9AEA3', '#E1E3DC', '#FFFFFF'];
const GRAY = '#B4B8AE';
const STRIPE_G = 'repeating-linear-gradient(45deg, #9A9E96 0 2px, #E4E6E0 2px 5px)';
const STRIPE_D = 'repeating-linear-gradient(135deg, #D7F24B 0 6px, #A9C22B 6px 12px)';
const STRIPE_K = 'repeating-linear-gradient(45deg, #5E625C 0 2px, #2A2D2A 2px 5px)';
const multi = (v) => v ? v.split(';').map(x => x.trim()).filter(Boolean) : [];
const escN = (v) => { const m = /^(\d)/.exec(v || ''); return m ? +m[1] : null; };
const isNS = (v) => (v || '').indexOf('NS') === 0;
const lc = (x) => x.charAt(0).toLowerCase() + x.slice(1);
const ESC1 = ['Nunca', 'Raramente', 'Às vezes', 'Frequentemente', 'Sempre'];
const ESC2 = ['Nunca / Nada', 'Raramente / Pouco', 'Às vezes / Parcialmente', 'Frequentemente / Muito', 'Sempre / Totalmente'];
const medL = (a, rt) => { const m = mediana(a); if (m === null) return 'sem base'; return m % 1 === 0 ? rt[m - 1] : 'entre ' + rt[Math.floor(m) - 1].toLowerCase() + ' e ' + rt[Math.ceil(m) - 1].toLowerCase(); };
const mkSurvey = (cfg) => {
  const D = cfg.D, QQ = cfg.Q, SEL = st[cfg.selKey] || [], un = cfg.un, unPl = cfg.unPl, LIV = cfg.livre || {};
  const lbl = (k) => LIV[k] || k;
  const RT = (row) => (cfg.rot && cfg.rot[row]) || ESC1;
  const selRows = Array.from(new Set(SEL.map(s => s.row)));
  const matchSel = (i, s) => { const v = D[s.row][i]; if (s.kind === 'm') return multi(v).includes(s.val); if (s.kind === 'e') return s.val === 'NS' ? isNS(v) : escN(v) === +s.val; return v === s.val; };
  const passSel = (i, skip) => selRows.every(r => r === skip || SEL.filter(s => s.row === r).some(s => matchSel(i, s)));
  const idxFor = (row) => cfg.base.filter(i => passSel(i, row));
  const IDX = idxFor(-1);
  const isSel = (row, val) => SEL.some(s => s.row === row && s.val === val);
  const rowTemSel = (row) => SEL.some(s => s.row === row);
  const togS = (row, val, kind, t) => set({ [cfg.selKey]: isSel(row, val) ? SEL.filter(s => !(s.row === row && s.val === val)) : SEL.concat([{ row, val, kind, t }]) });
  const nU = (n) => n + ' ' + plural(n, un, unPl);
  const CL = ' Clique para ver só esses ' + unPl + ' nos demais gráficos.';
  const contar = (row, isMulti, ids, filtro) => { const base = ids || idxFor(row); const resp = base.filter(i => D[row][i]); const c = {}; resp.forEach(i => (isMulti ? multi(D[row][i]) : [D[row][i]]).forEach(a => { if (!filtro || filtro(a)) c[a] = (c[a] || 0) + 1; })); return { R: resp.length, aus: base.length - resp.length, tot: base.length, c }; };
  const ord = (c) => Object.keys(c).map(k => ({ k, n: c[k] })).sort((a, b) => b.n - a.n || a.k.localeCompare(b.k, 'pt'));
  const baseTxt = (r, isMulti, extra) => 'Base: ' + r.R + ' de ' + r.tot + ' ' + unPl + ' com resposta' + (r.aus ? ' · ' + r.aus + ' sem resposta registrada' : '') + (isMulti ? ' · múltipla escolha: os percentuais podem somar mais de 100%' : '') + (extra ? ' · ' + extra : '');
  const card = (o) => Object.assign({ isH: false, isV: false, isD: false, isB: false, rows: [], leg: [], fx: '1 1 360px', grad: '', cv: '', cs: '', aria: '', ring: '' }, o);
  const semBase = 'Sem base para cálculo no filtro atual';
  const estilo = (row, val, top, padrao) => { const sel = isSel(row, val); const ts = rowTemSel(row); return { sel, op: ts && !sel ? 0.4 : 1, rbg: sel ? '#F1F7D9' : 'transparent', cor: sel ? '#4F7A00' : (top ? STRIPE : padrao) }; };
  const verbo = (n, isMulti) => isMulti ? plural(n, 'marcou', 'marcaram') : plural(n, 'respondeu', 'responderam');
  // Elegibilidade: só quem respondeu "Sim" na pergunta de contexto
  const eleg = (row, ctx, ctxTxt) => { const base = idxFor(row); const ids = base.filter(i => (D[ctx][i] || '').indexOf('Sim') === 0); const fora = base.filter(i => (D[ctx][i] || '').indexOf('Sim') !== 0 && D[row][i]).length; return { ids, base: (r, isMulti) => 'Base: ' + r.R + ' de ' + ids.length + ' elegíveis (responderam “Sim” ' + ctxTxt + ')' + (fora ? ' · ' + fora + ' ' + plural(fora, 'resposta', 'respostas') + ' de quem não confirmou essa situação ' + plural(fora, 'foi mantida', 'foram mantidas') + ' na planilha e ' + plural(fora, 'excluída', 'excluídas') + ' aqui' : '') + (isMulti ? ' · múltipla escolha' : '') }; };
  const hbar = (row, t, isMulti, opt) => { opt = opt || {}; const r = contar(row, isMulti, opt.ids); const rows = opt.cats ? opt.cats.map(k => ({ k, n: r.c[k] || 0 })) : ord(r.c); return card({ isH: true, t, q: QQ[row], fx: opt.fx || '1 1 360px', rows: rows.map((x, i) => { const e = estilo(row, x.k, !opt.cats && i === 0, opt.cats ? '#A3C826' : GRAY); return { k: lbl(x.k), txt: x.n + ' de ' + r.R + ' · ' + pctTxt(x.n, r.R), w: r.R ? 100 * x.n / r.R : 0, ...e, tip: nU(x.n) + ' de ' + r.R + ' com resposta (' + pctTxt(x.n, r.R) + ') ' + verbo(x.n, isMulti) + ' “' + lbl(x.k) + '” em: ' + lc(t) + '.' + CL, pick: () => togS(row, x.k, isMulti ? 'm' : 's', t) }; }), base: r.R ? (opt.base ? opt.base(r, isMulti) : baseTxt(r, isMulti, opt.extra)) : semBase }); };
  const vbar = (row, t, cats, opt) => { opt = opt || {}; const r = contar(row, false, opt.ids); const rows = cats ? cats.map(k => ({ k, n: r.c[k] || 0 })) : ord(r.c); const mx = Math.max(1, ...rows.map(x => x.n)); return card({ isV: true, t, q: QQ[row], fx: opt.fx || '1 1 360px', rows: rows.map(x => { const top = x.n === mx && x.n > 0; const e = estilo(row, x.k, top, '#D3D6CE'); return { k: x.k, n: x.n + ' · ' + pctTxt(x.n, r.R), h: Math.max(4, Math.round(120 * x.n / mx)), ...e, tagBg: top || e.sel ? INK : 'transparent', tagFg: top || e.sel ? '#FFFFFF' : MUTE, tip: nU(x.n) + ' de ' + r.R + ' (' + pctTxt(x.n, r.R) + ') ' + verbo(x.n, false) + ' “' + x.k + '” em: ' + lc(t) + '.' + CL, pick: () => togS(row, x.k, 's', t) }; }), base: r.R ? (opt.base ? opt.base(r, false) : baseTxt(r, false, opt.extra)) : semBase }); };
  const vesc = (row, t, opt) => { opt = opt || {}; const ids = idxFor(row); const vals = ids.map(i => D[row][i]); const nums = vals.map(escN).filter(v => v !== null); const ns = vals.filter(isNS).length; const aus = vals.filter(v => !v).length; const cats = [1, 2, 3, 4, 5].map(k => ({ k: String(k), n: nums.filter(v => v === k).length, ns: false })); if (cfg.temNS) cats.push({ k: 'NS', n: ns, ns: true }); const mx = Math.max(1, ...cats.map(x => x.n)); const top = Math.max(0, ...cats.filter(x => !x.ns).map(x => x.n)); return card({ isV: true, t, q: QQ[row], fx: opt.fx || '1 1 300px', rows: cats.map(x => { const hi = !x.ns && x.n === top && x.n > 0; const e = estilo(row, x.k, hi, x.ns ? STRIPE_G : '#D3D6CE'); return { k: x.ns ? 'Não sabe' : RT(row)[+x.k - 1], n: String(x.n), h: Math.max(4, Math.round(120 * x.n / mx)), ...e, tagBg: hi || e.sel ? INK : 'transparent', tagFg: hi || e.sel ? '#FFFFFF' : MUTE, tip: x.ns ? nU(x.n) + ' ' + plural(x.n, 'respondeu que não sabe', 'responderam que não sabem') + ' avaliar: ' + lc(t) + '.' + CL : nU(x.n) + ' ' + plural(x.n, 'respondeu', 'responderam') + ' “' + RT(row)[+x.k - 1] + '” (' + x.k + ' de 5) em: ' + lc(t) + '.' + CL, pick: () => togS(row, x.k, 'e', t) }; }), base: nums.length ? 'Mediana: ' + medL(nums, RT(row)) + ' · ' + nums.length + ' respostas na escala' + (ns ? ' · ' + ns + ' não sabem (fora da mediana)' : '') + (aus ? ' · ' + aus + ' sem resposta' : '') + ' · escala de 1 (' + RT(row)[0].toLowerCase() + ') a 5 (' + RT(row)[4].toLowerCase() + ')' : semBase }); };
  const donut = (row, t, isMulti, opt) => { opt = opt || {}; const r = contar(row, isMulti, opt.ids, opt.filtro); const rows = ord(r.c); const tot = rows.reduce((s, x) => s + x.n, 0); let acc = 0; const segs = rows.map((x, i) => { const a0 = acc; acc += 360 * x.n / (tot || 1); const cor = rowTemSel(row) && !isSel(row, x.k) ? '#ECEDE8' : PAL[i % PAL.length]; return cor + ' ' + a0.toFixed(2) + 'deg ' + acc.toFixed(2) + 'deg'; }); return card({ isD: true, t, q: QQ[row], fx: opt.fx || '1 1 320px', grad: tot ? 'conic-gradient(' + segs.join(', ') + ')' : '#E6E8E2', cv: String(r.R), cs: unPl + ' com resposta', aria: t + ': ' + rows.map(x => x.k + ' ' + x.n).join('; '), ring: t + ' — ' + rows.map(x => lbl(x.k) + ': ' + nU(x.n) + ' (' + pctTxt(x.n, r.R) + ')').join('; ') + '. Clique na legenda para filtrar.', rows: rows.map((x, i) => { const e = estilo(row, x.k, false, PAL[i % PAL.length]); return { k: lbl(x.k), ...e, cor: PAL[i % PAL.length], txt: x.n + ' · ' + pctTxt(x.n, r.R), tip: nU(x.n) + ' de ' + r.R + ' (' + pctTxt(x.n, r.R) + ') ' + verbo(x.n, isMulti) + ' “' + lbl(x.k) + '” em: ' + lc(t) + '.' + CL, pick: () => togS(row, x.k, isMulti ? 'm' : 's', t) }; }), base: r.R ? (opt.base ? opt.base(r, isMulti) : baseTxt(r, isMulti, isMulti ? 'fatias = proporção das ' + tot + ' marcações; legenda = ' + unPl + ' que marcaram' : opt.extra)) : semBase }); };
  const desc = (row, t, opt) => { opt = opt || {}; const ids = idxFor(row); const vals = ids.map(i => D[row][i]); const nums = vals.map(escN).filter(v => v !== null); const ns = vals.filter(isNS).length; const aus = vals.filter(v => !v).length; const R = nums.length + ns; const cats = [1, 2, 3, 4, 5].map(k => ({ k: String(k), rot: RT(row)[k - 1], n: nums.filter(v => v === k).length })).concat(cfg.temNS ? [{ k: 'NS', rot: 'Não sei responder', n: ns }] : []).filter(x => x.n > 0); const ESCPAL = { 1: '#E1E3DC', 2: '#A9AEA3', 3: '#C9E43A', 4: '#7D8B2F', 5: '#4F7A00', NS: '#E3D3AE' }; let acc = 0; const segs = cats.map(x => { const a0 = acc; acc += 360 * x.n / (R || 1); const cor = rowTemSel(row) && !isSel(row, x.k) ? '#ECEDE8' : ESCPAL[x.k]; return cor + ' ' + a0.toFixed(2) + 'deg ' + acc.toFixed(2) + 'deg'; }); return card({ isD: true, t, q: QQ[row], fx: opt.fx || '1 1 320px', grad: R ? 'conic-gradient(' + segs.join(', ') + ')' : '#E6E8E2', cv: String(R), cs: unPl + ' com resposta', aria: t + ': ' + cats.map(x => x.rot + ' ' + x.n).join('; '), ring: t + ' — ' + cats.map(x => x.rot + ': ' + nU(x.n) + ' (' + pctTxt(x.n, R) + ')').join('; ') + '. Clique na legenda para filtrar.', rows: cats.map(x => { const e = estilo(row, x.k, false, ESCPAL[x.k]); return { k: x.rot, ...e, cor: ESCPAL[x.k], txt: x.n + ' · ' + pctTxt(x.n, R), tip: nU(x.n) + ' de ' + R + ' (' + pctTxt(x.n, R) + ') ' + verbo(x.n, false) + ' “' + x.rot + '” em: ' + lc(t) + '.' + CL, pick: () => togS(row, x.k, 'e', t) }; }), base: R ? 'Mediana: ' + medL(nums, RT(row)) + (ns ? ' · ' + ns + ' não sabem (fora da mediana)' : '') + (aus ? ' · ' + aus + ' sem resposta' : '') + ' · base: ' + R + ' de ' + ids.length + ' ' + unPl : semBase }); };
  // Barras empilhadas por linha (categorias fixas), com segmentos clicáveis
  const pilha = (t, q, itens, cats, opt) => { opt = opt || {}; const rows = itens.map(([row, rot]) => { const vals = idxFor(row).map(i => D[row][i]); const resp = vals.filter(Boolean); const R = resp.length; const ts = rowTemSel(row); const c = {}; cats.forEach(([k]) => { c[k] = resp.filter(v => v === k).length; }); return { k: rot, pOrd: R ? c[cats[0][0]] / R : 0, segs: cats.map(([k, , cor]) => { const sel = isSel(row, k); return { w: R ? 100 * c[k] / R : 0, cor, op: ts && !sel ? 0.3 : 1, ring: sel ? 'inset 0 0 0 2px #FFFFFF' : 'none', tip: rot + ': ' + nU(c[k]) + ' de ' + R + ' (' + pctTxt(c[k], R) + ') — “' + (opt.verboCat ? opt.verboCat(k) : k) + '”.' + CL, pick: () => togS(row, k, 's', rot) }; }), txt: cats.map(([k]) => c[k]).join(' · ') + ' de ' + R + (vals.length - R ? ' (+' + (vals.length - R) + ' s/ resp.)' : '') }; }); if (opt.ordenar) rows.sort((x, y) => y.pOrd - x.pOrd); return card({ isB: true, t, q, fx: opt.fx || '2 1 560px', rows, leg: cats.map(([k, l, cor]) => ({ k: l, cor })), base: opt.base }); };
  const unicas = (lista) => lista.map(([row, t]) => { const r = contar(row, false); const ts = rowTemSel(row); return { t, q: QQ[row], base: r.R + '/' + r.tot, rows: ord(r.c).map((x, i) => { const ns = /^Não sei|^Não me recordo/.test(x.k); const sel = isSel(row, x.k); return { k: x.k, txt: x.n + ' (' + pctTxt(x.n, r.R) + ')', bg: sel ? INK : (i === 0 && !ns ? '#F1F7D9' : (ns ? '#F1F2EE' : '#F6F7F3')), fg: sel ? '#FFFFFF' : (i === 0 && !ns ? '#3D5200' : '#3E423C'), fw: i === 0 || sel ? 600 : 500, op: ts && !sel ? 0.45 : 1, tip: nU(x.n) + ' de ' + r.R + ' (' + pctTxt(x.n, r.R) + ') ' + verbo(x.n, false) + ' “' + x.k + '” em: ' + lc(t) + '.' + CL, pick: () => togS(row, x.k, 's', t) }; }) }; });
  const escalas = (lista) => lista.map(([row, t]) => { const vals = idxFor(row).map(i => D[row][i]); const nums = vals.map(escN).filter(v => v !== null); const ns = vals.filter(isNS).length; const cnt = [1, 2, 3, 4, 5].map(k => nums.filter(v => v === k).length); const mx = Math.max(...cnt); const ts = rowTemSel(row); const cel = (n, key) => { const sel = isSel(row, key); const hi = key !== 'NS' && n && n === mx; return { n: String(n), bg: sel ? INK : (hi ? '#C9E43A' : (n ? (key === 'NS' ? '#ECEDE8' : '#EEF5D2') : '#F6F7F3')), fw: hi || sel ? 700 : 500, fg: sel ? '#FFFFFF' : (n ? INK : '#9A9E96'), op: ts && !sel ? 0.4 : 1, tip: key === 'NS' ? nU(n) + ' ' + plural(n, 'respondeu que não sabe', 'responderam que não sabem') + ' avaliar: ' + lc(t) + '.' + CL : nU(n) + ' ' + plural(n, 'respondeu', 'responderam') + ' “' + RT(row)[+key - 1] + '” (' + key + ' de 5) em: ' + lc(t) + '.' + CL, pick: () => togS(row, key, 'e', t) }; }; return { t, q: QQ[row], med: medL(nums, RT(row)), valid: nums.length, cells: cnt.map((n, j) => cel(n, String(j + 1))).concat([cel(ns, 'NS')]) }; });
  const chipsSel = SEL.map(s => ({ k: s.t + ': ' + (s.kind === 'e' ? (s.val === 'NS' ? 'não sabe' : RT(s.row)[+s.val - 1].toLowerCase()) : lbl(s.val)), rm: () => togS(s.row, s.val, s.kind, s.t) }));
  return { IDX, N: IDX.length, idxFor, contar, eleg, hbar, vbar, vesc, desc, donut, pilha, unicas, escalas, chipsSel, nU };
};
const segsDest = (vals, R, rots) => vals.map((n, i) => ({ w: R ? 100 * n / R : 0, bg: [ '#D7F24B', STRIPE_D, STRIPE_K ][i], tip: rots[i] + ': ' + n + ' de ' + R }));

// ---- Peritos (planilha consolidada)
const PGR = (v) => v;
const pBase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].filter(i => (!any('forms') || has('forms', PQ[2][i])) && (!any('tempos') || has('tempos', PQ[6][i])) && (!any('pAtivos') || multi(PQ[21][i]).some(a => has('pAtivos', a))));
const SP = mkSurvey({ D: PQ, Q: QP, base: pBase, selKey: 'pSel', un: 'perito', unPl: 'peritos', temNS: false });
const PN = SP.N;
const r9 = SP.contar(9, false);
const aj1 = r9.c['Cadastrado e credenciado'] || 0, aj2 = r9.c['Cadastrado, sem credenciamento'] || 0, aj3 = r9.c['Não cadastrado'] || 0;
const formCont = ['Direito', 'Engenharias', 'Engenharia e Direito'].map(f => SP.IDX.filter(i => PQ[2][i] === f).length);
const pDest = { aLab: 'Peritos que responderam', aV: String(PN), aSub: formCont[0] + ' com formação em Direito · ' + formCont[1] + ' em Engenharias · ' + formCont[2] + ' em Engenharia e Direito. São 14 questionários com textos distintos, o que não comprova 14 pessoas diferentes.', bLab: 'Cadastrados e credenciados no Sistema AJ', bV: r9.R ? pctTxt(aj1, r9.R) : 'Sem base', bN: aj1 + ' de ' + r9.R + ' peritos', segs: segsDest([aj1, aj2, aj3], r9.R, ['Cadastrado e credenciado', 'Cadastrado, sem credenciamento', 'Não cadastrado']), det: aj1 + ' cadastrados e credenciados · ' + aj2 + ' cadastrados sem credenciamento · ' + aj3 + ' não cadastrado(s)' };
const SIMNAO = [['Sim', 'Sim', '#4F7A00'], ['Não', 'Não', '#D3D6CE']];
const e20 = SP.eleg(20, 19, 'sobre já ter recusado nomeação');
const e32 = SP.eleg(32, 31, 'sobre perícia conjunta');
const e36 = SP.eleg(36, 35, 'sobre custeio pelo Tribunal');
const e37 = SP.eleg(37, 35, 'sobre custeio pelo Tribunal');
const pSecoes = [
  { t: 'Perfil e qualificação', d: 'Formação, experiência como perito e volume de perícias em propriedade industrial.', linhas: [
    [SP.donut(2, 'Formação de graduação', false), SP.vbar(6, 'Tempo como perito judicial', ['Menos de 2 anos', '2 a 5 anos', '6 a 10 anos', 'Mais de 10 anos'], { extra: 'faixas na ordem do questionário' }), SP.vbar(7, 'Perícias em PI já realizadas', ['1 a 3', '4 a 10', '11 a 20', 'Mais de 20'], { extra: 'faixas, não números exatos' })],
    [SP.pilha('Qualificação e atuação', 'Perguntas de sim ou não sobre qualificação em PI, habilitação e atuação como assistente.', [[3, 'Pós-graduação ou qualificação em PI'], [5, 'Inscrição em conselho de classe'], [4, 'Agente da PI habilitado no INPI'], [8, 'Atua também como assistente técnico']], SIMNAO, { fx: '1 1 100%', base: 'Valores: sim · não. Clique num segmento para filtrar.' })]
  ] },
  { t: 'Cadastro no Sistema AJ', d: 'Como a especialidade em propriedade industrial aparece no cadastro do Tribunal.', linhas: [
    [SP.donut(10, 'Conseguiu indicar PI como especialidade?', false), SP.hbar(11, 'Rubrica em que conseguiu se enquadrar', false), SP.donut(12, 'Dificuldade para comprovar a especialidade', false)],
    [SP.vesc(13, 'O cadastro permite ser identificado como especialista', { fx: '1 1 340px' }), SP.donut(14, 'A vedação após atuar como assistente técnico já impediu nomeação?', false)]
  ] },
  { t: 'Nomeações e recusas', d: 'Forma de nomeação, repetição, impugnações e motivos de recusa.', linhas: [
    [SP.hbar(15, 'Como ocorreram as nomeações em PI', true), SP.hbar(16, 'Nomeação reiterada pelo mesmo juízo', false)],
    [SP.donut(17, 'Nomeado por comarca sem vara empresarial?', false), SP.donut(18, 'Nomeação impugnada por falta de especialidade?', false), SP.donut(19, 'Já recusou nomeação em PI?', false)],
    [SP.hbar(20, 'Motivo da recusa', true, { ids: e20.ids, base: e20.base, fx: '1 1 100%' })]
  ] },
  { t: 'Ativos periciados e execução', d: 'Experiência por ativo de PI e principais dificuldades no trabalho pericial. O filtro “Ativo periciado” usa esta pergunta.', linhas: [
    [SP.hbar(21, 'Ativos que já periciou', true), SP.hbar(22, 'Principais dificuldades na execução', true)],
    [SP.donut(23, 'Tipo de trabalho que as perícias exigem', false, { fx: '1 1 100%' })]
  ] },
  { t: 'Quesitos', d: 'Quesitos com conteúdo jurídico, forma de lidar com eles e volume recebido.', linhas: [
    [SP.vesc(24, 'Recebe quesitos que exigem juízo jurídico'), SP.donut(25, 'Como procede nesses casos', false), SP.vbar(26, 'Quesitos recebidos por processo', ['Até 10', '11 a 20', '21 a 30', 'Mais de 30', 'Varia muito'], { extra: 'faixas na ordem do questionário' })]
  ] },
  { t: 'Perícia conjunta', d: 'Atuação com perito de área complementar e o resultado obtido.', linhas: [
    [SP.donut(31, 'Já fez perícia com perito de área complementar?', false), SP.hbar(32, 'Resultado do trabalho conjunto', false, { ids: e32.ids, base: e32.base })]
  ] },
  { t: 'Honorários e gratuidade', d: 'Adequação dos honorários, recusas por remuneração e custeio pelo Tribunal nos casos de gratuidade.', linhas: [
    [SP.vesc(34, 'Os honorários correspondem à complexidade', { fx: '1 1 340px' }), SP.vbar(38, 'Já recusou nomeação por honorários insuficientes?', ['Nunca', 'Uma ou duas vezes', 'Com frequência'])],
    [SP.donut(35, 'Atuou com honorários custeados pelo Tribunal (gratuidade)?', false), SP.hbar(36, 'Avaliação do valor pago pelo Tribunal', false, { ids: e36.ids, base: e36.base }), SP.vbar(37, 'Prazo efetivo de pagamento', ['De 1 a 3 meses', 'De 3 a 6 meses', 'Mais de 6 meses', 'Ainda não recebi'], { ids: e37.ids, base: e37.base })]
  ] },
  { t: 'Acolhimento, prova simplificada e normas', d: 'Percepção sobre o acolhimento das conclusões, experiência com a prova técnica simplificada e propostas de mudança.', linhas: [
    [SP.vesc(39, 'Conclusões acolhidas nas decisões', { fx: '1 1 340px' }), SP.donut(40, 'Já foi ouvido como especialista em lugar da perícia?', false)],
    [SP.hbar(42, 'Alterações normativas consideradas úteis', true, { fx: '1 1 100%' })]
  ] }
];
const pEscalas = SP.escalas([[27, 'Quesitos claros e tecnicamente adequados'], [28, 'Precisa pedir esclarecimento de quesitos'], [29, 'Há assistentes técnicos indicados'], [30, 'Assistentes contribuem para a qualidade da prova'], [33, 'Atuação conjunta melhora o resultado'], [41, 'Normas atendem às particularidades da PI']]);
const pTextos = SP.IDX.filter(i => PQ[45][i] && PQ[45][i] !== '__OMITIDO__').map(i => ({ txt: PQ[45][i], tag: 'Contribuição livre · ' + PQ[2][i], temNota: false, nota: '' }));
const fForm = ['Direito', 'Engenharias', 'Engenharia e Direito'].map(f => ({ k: f, n: PQ[2].filter(v => v === f).length, sel: has('forms', f), rowBg: rowBg(has('forms', f)), pick: () => tog('forms', f) }));
const fTempo = ['Menos de 2 anos', '2 a 5 anos', '6 a 10 anos', 'Mais de 10 anos'].map(t => ({ k: t, n: PQ[6].filter(v => v === t).length, sel: has('tempos', t), rowBg: rowBg(has('tempos', t)), pick: () => tog('tempos', t) }));
const fPAt = ['Patente', 'Marca', 'Modelo de utilidade', 'Desenho industrial', 'Trade dress', 'Concorrência desleal', 'Segredo de negócio'].map(a => ({ k: a, n: PQ[21].filter(v => multi(v).includes(a)).length, sel: has('pAtivos', a), rowBg: rowBg(has('pAtivos', a)), pick: () => tog('pAtivos', a) }));
const chipsPer = [].concat(
  (st.forms || []).map(f => ({ k: f, rm: () => tog('forms', f) })),
  (st.tempos || []).map(t => ({ k: t, rm: () => tog('tempos', t) })),
  (st.pAtivos || []).map(a => ({ k: 'Periciou: ' + a, rm: () => tog('pAtivos', a) })),
  SP.chipsSel);
const svPer = { dest: pDest, secoes: pSecoes, temUni: false, uniT: '', unicas: [], escT: 'Outras avaliações em escala de 1 a 5', escalas: pEscalas, escRod: 'Escala do questionário: 1 Nunca · 2 Raramente · 3 Às vezes · 4 Frequentemente · 5 Sempre. A mediana é a resposta do meio quando todas são ordenadas; não é convertida em percentual de concordância.', temTxt: pTextos.length > 0, textos: pTextos, txtD: 'Textos como constam da planilha, identificados só pela formação. Uma contribuição foi omitida por conter dado que pode identificar o respondente.' };

// ---- Magistrados (planilha consolidada)
const GR = MQ[2].map(v => v.startsWith('Primeiro') ? '1º' : '2º');
const amostra = st.amostra || 'todos';
const IDX0 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(i => amostra === 'todos' || i !== 9);
const atSel = AT_MAG.filter(a => !any('mAtivos') || has('mAtivos', a));
const SM = mkSurvey({ D: MQ, Q: Q, base: IDX0.filter(i => !any('graus') || has('graus', GR[i])), selKey: 'mSel', un: 'magistrado', unPl: 'magistrados', temNS: true, rot: { 35: ESC2, 36: ESC2, 37: ESC2 }, livre: { 'a perícia é determinada no primeiro grau somente.': 'Texto livre: “a perícia é determinada no primeiro grau somente”', 'Não atuo e nem atuei na função em primeira instância.': 'Texto livre: “não atuo nem atuei em primeira instância”' } });
const IDX = SM.IDX, NM = SM.N;
const r15 = SM.contar(15, false);
const ex15 = r15.c['Exclusivamente do cadastro'] || 0, pr15 = r15.c['Preferencialmente do cadastro, excepcionalmente fora'] || 0, ns15 = r15.c['Não sei responder'] || 0;
const ns15g2 = SM.idxFor(15).filter(i => MQ[15][i] === 'Não sei responder' && GR[i] === '2º').length;
const g1M = IDX.filter(i => GR[i] === '1º').length, g2M = IDX.filter(i => GR[i] === '2º').length;
const mDest = { aLab: 'Magistrados que responderam', aV: String(NM), aSub: g1M + ' de 1º grau (varas regionais empresariais) · ' + g2M + ' de 2º grau (Câmaras Cíveis)' + (IDX.includes(8) && IDX.includes(9) ? '. Os questionários 09 e 10 têm respostas idênticas; use o filtro Amostra para contar só um.' : ''), bLab: 'Nomeiam peritos do cadastro do Tribunal', bV: r15.R ? pctTxt(ex15 + pr15, r15.R) : 'Sem base', bN: (ex15 + pr15) + ' de ' + r15.R + ' magistrados', segs: segsDest([ex15, pr15, ns15], r15.R, ['Exclusivamente do cadastro', 'Preferencialmente do cadastro', 'Não sabem responder']), det: ex15 + ' exclusivamente do cadastro · ' + pr15 + ' preferencialmente, com exceções · ' + ns15 + ' não souberam responder' + (ns15 && ns15g2 === ns15 ? ' (todos do 2º grau, onde a nomeação é rara)' : '') };
const B01C = [['Em regra necessária', 'Em regra necessária', '#141614'], ['Depende do caso', 'Depende do caso', '#C9E43A'], ['Em regra dispensável', 'Em regra dispensável', STRIPE_G]];
const b01card = SM.pilha('Necessidade da perícia por ativo de PI', 'Para cada espécie de ativo, a perícia é necessária, dispensável ou depende do caso?', atSel.map(a => [B01_ROW[a], a]), B01C, { ordenar: true, base: 'Em ordem decrescente de “em regra necessária”. Valores: necessária · depende do caso · dispensável. Clique num segmento para filtrar. Campos sem resposta ficam fora do denominador.' });
const e41 = SM.eleg(41, 40, 'sobre ter tido caso com gratuidade');
const mSecoes = [
  { t: 'Perfil dos respondentes', d: 'Experiência na matéria e frequência com que processos de PI chegam à unidade.', linhas: [[SM.vbar(3, 'Tempo de atuação em PI', ['Menos de 2 anos', '2 a 5 anos', '6 a 10 anos', 'Mais de 10 anos'], { extra: 'faixas na ordem do questionário' }), SM.vbar(4, 'Frequência de processos de PI na unidade', null)]] },
  { t: 'Ativos de PI e necessidade da perícia', d: 'O filtro “Ativo de PI” restringe estes dois gráficos.', linhas: [[SM.donut(5, 'Ativos com mais controvérsia técnica', true, { filtro: (a) => atSel.includes(a), fx: '1 1 340px' }), b01card]] },
  { t: 'Indeferimento da perícia', d: 'Com que frequência a perícia requerida é indeferida e por quais fundamentos.', linhas: [[SM.vesc(13, 'Frequência com que indefere perícia', { fx: '1 1 340px' }), SM.hbar(14, 'Fundamento mais frequente do indeferimento', true)]] },
  { t: 'Cadastro e escolha do perito', d: 'Uso do cadastro do Tribunal, qualidade da informação e critérios de escolha.', linhas: [
    [SM.donut(15, 'Nomeação dentro ou fora do cadastro', false, { fx: '1 1 340px' }), SM.hbar(16, 'Motivo da nomeação fora do cadastro', true, { extra: 'inclui respostas em texto livre de magistrados do 2º grau' })],
    [SM.donut(17, 'O não cadastrado providencia a habilitação?', false), SM.desc(18, 'Encontra no cadastro especialista adequado'), SM.desc(19, 'O cadastro identifica a especialidade com clareza')],
    [SM.hbar(20, 'Critérios que mais pesam na escolha do perito', true, { fx: '1 1 100%' })],
    [SM.donut(21, 'Nomearia agente da PI sem conselho de classe?', false), SM.donut(22, 'Já nomeou órgão técnico em lugar de pessoa física?', false)]
  ] },
  { t: 'Repetição, dois peritos, prova simplificada e quesitos', d: 'Perguntas de múltipla escolha, uma por cartão, em ordem decrescente.', linhas: [
    [SM.hbar(26, 'Razão principal da repetição da nomeação', true), SM.hbar(29, 'Vantagens de dois peritos complementares', true)],
    [SM.hbar(30, 'Desvantagens de dois peritos complementares', true), SM.hbar(33, 'Quando a prova técnica simplificada é adequada', true)],
    [SM.hbar(34, 'Obstáculos à prova técnica simplificada', true), SM.hbar(38, 'Problema mais frequente nos quesitos', true)],
    [SM.hbar(41, 'Efeito observado quando a parte tinha gratuidade', true, { ids: e41.ids, base: e41.base }), SM.hbar(46, 'Alterações normativas consideradas úteis', true)]
  ] }
];
const mUnicas = SM.unicas([[23, 'Impedimento por atuação anterior como assistente técnico'], [24, 'Efeito do Sistema AJ na escolha de peritos'], [25, 'Mesmo profissional ou alternância'], [27, 'Regra de alternância na nomeação'], [28, 'Já nomeou dois peritos complementares'], [40, 'Parte onerada com gratuidade da justiça'], [44, 'Recusa de nomeação por honorários insuficientes']]);
const mEscalas = SM.escalas([[31, 'Cabimento de dois peritos complementares'], [32, 'Uso da prova técnica simplificada'], [35, 'Quesitos tecnicamente adequados'], [36, 'Quesitos formulados de ofício'], [37, 'Contribuição dos assistentes técnicos'], [42, 'Valores de referência adequados'], [43, 'Impugnação do valor dos honorários'], [45, 'Normas contemplam a matéria']]);
const vistos = {};
const mTextos = [];
[[39, 'Observação sobre quesitos'], [47, 'Contribuição livre']].forEach(([row, tipo]) => IDX.forEach(i => { const v = MQ[row][i]; if (!v || v === 'Sem observações.') return; const key = row + v; if (vistos[key]) { vistos[key].n++; vistos[key].tag = tipo + ' · ' + GR[i] + ' grau · ' + vistos[key].n + ' questionários com texto idêntico'; return; } const o = { txt: v, tag: tipo + ' · ' + GR[i] + ' grau', n: 1, temNota: v.indexOf('mas são:') === 0, nota: 'O início deste texto não consta da planilha consolidada.' }; vistos[key] = o; mTextos.push(o); }));
const fGrau = ['1º', '2º'].map(g => ({ k: g + ' grau', n: IDX0.filter(i => GR[i] === g).length, sel: has('graus', g), rowBg: rowBg(has('graus', g)), pick: () => tog('graus', g) }));
const fMAt = AT_MAG.map(a => ({ k: a, n: '', sel: has('mAtivos', a), rowBg: rowBg(has('mAtivos', a)), pick: () => tog('mAtivos', a) }));
const fAmostra = [['todos', 'Todos os 11 questionários', 11], ['sem10', 'Sem o 10 (idêntico ao 09)', 10]].map(([k, l, n]) => ({ k: l, n, sel: amostra === k, rowBg: rowBg(amostra === k), pick: () => set({ amostra: k }) }));
const chipsMag = [].concat(
  (st.graus || []).map(g => ({ k: g + ' grau', rm: () => tog('graus', g) })),
  (st.mAtivos || []).map(a => ({ k: a, rm: () => tog('mAtivos', a) })),
  SM.chipsSel);
const svMag = { dest: mDest, secoes: mSecoes, temUni: true, uniT: 'Nomeação, alternância e remuneração', unicas: mUnicas, escT: 'Avaliações em escala de 1 a 5', escalas: mEscalas, escRod: 'Escala do questionário: 1 Nunca · 2 Raramente · 3 Às vezes · 4 Frequentemente · 5 Sempre · NS Não sei responder. As perguntas sobre quesitos e assistentes técnicos usam 1 Nunca/Nada a 5 Sempre/Totalmente. A mediana não é convertida em percentual de concordância.', temTxt: mTextos.length > 0, textos: mTextos, txtD: 'Textos como constam da planilha, identificados só pelo grau. Sem codificação temática.' };
// ---- Cabeçalho por painel
const HD = {
  proc: { eyebrow: 'Processos judiciais do Poder Judiciário do RS\n', t1: 'Prova técnica nos', t2: 'processos', t3: 'de propriedade intelectual', sub: 'Perícia, honorários, ativos de Propriedade Industrial e \npeso do laudo nas decisões do TJRS entre ' + ANO0 + ' e ' + ANO1 + '.', hero: [{ k: 'Julgamentos no filtro', v: N + ' de ' + T }, { k: 'Decididos com base no laudo', v: pesoBase.length ? det + ' de ' + pesoBase.length : 'Sem base' }] },
  per: { eyebrow: 'Questionário consolidado · ' + PN + ' peritos', t1: 'O que os', t2: 'peritos', t3: 'declaram sobre a prova técnica', sub: 'Experiências e percepções declaradas. As respostas não são associadas a peritos identificados nos processos.', hero: [{ k: 'Peritos no filtro', v: String(PN) }, { k: 'Credenciados no Sistema AJ', v: pDest.bV }] },
  mag: { eyebrow: 'Questionário consolidado · ' + NM + ' magistrados', t1: 'O que os', t2: 'magistrados', t3: 'declaram sobre a prova técnica', sub: 'Percepções declaradas em 1º e 2º graus. As respostas não são atribuídas a julgados nem a pessoas.', hero: [{ k: 'Magistrados no filtro', v: String(NM) }, { k: 'Nomeiam peritos do cadastro', v: mDest.bV }] }
}[tab];
const chipBase = tab === 'proc' ? N + '/' + T + ' julgamentos' : tab === 'per' ? PN + '/14 peritos' : NM + ' magistrados' + (amostra === 'sem10' ? ' · sem o questionário 10' : '');
const chipsAll = tab === 'proc' ? chipsProc : tab === 'per' ? chipsPer : chipsMag;
const tb = (t) => ({ bg: tab === t ? '#FFFFFF' : 'transparent', fg: tab === t ? INK : '#E6E8E2' });
const mkDd = (key, label, title, opts, radio) => {
  const open = st.open === key; const sel = opts.filter(o => o.sel);
  const sum = radio ? (sel[0] ? sel[0].k : '') : sel.length === 0 ? 'Todos' : sel.length === 1 ? sel[0].k : sel.length + ' selecionados';
  const ativo = !radio && sel.length > 0;
  return { key, label, title, open, sum, role: radio ? 'menuitemradio' : 'menuitemcheckbox', rad: radio ? '50%' : '4px',
    bg: open || ativo ? '#F1F7D9' : '#F6F7F3', bd: open ? INK : (ativo ? '#C9E43A' : '#E4E6E0'), rot: open ? 'rotate(180deg)' : 'none',
    toggle: () => set({ open: open ? null : key }), clear: () => set(radio ? { [key]: null } : { [key]: [] }), clearLbl: radio ? 'Voltar ao padrão' : 'Limpar seleção',
    opts: opts.map(o => ({ ...o, mk: o.sel ? INK : '#FFFFFF', ck: o.sel ? '#FFFFFF' : 'transparent' })) };
};
const dds = tab === 'proc'
  ? [mkDd('anos', 'Ano', 'Ano do julgamento', fAnos), mkDd('ativos', 'Patente / ativo', 'Ativo discutido (coluna ATIVO DE PI)', fAtivos), mkDd('cam', 'Câmara', 'Órgão julgador', fCam), mkDd('per', 'Perícia', 'Houve perícia nos autos?', fPer), mkDd('at', 'Assistente técnico', 'Houve assistente técnico? (processos com dados do 1º grau)', fAT), mkDd('form', 'Formação do perito', 'Formação dos peritos (áreas identificadas no texto da planilha)', fFormP)]
  : tab === 'per'
  ? [mkDd('pAtivos', 'Ativo periciado', 'Ativos que o perito já periciou', fPAt), mkDd('forms', 'Formação', 'Formação de graduação', fForm), mkDd('tempos', 'Tempo como perito', 'Tempo de atuação como perito judicial', fTempo)]
  : [mkDd('mAtivos', 'Ativo de PI', 'Ativo de PI (restringe os gráficos por ativo)', fMAt), mkDd('graus', 'Instância', 'Grau de jurisdição', fGrau), mkDd('amostra', 'Amostra', 'Questionários 09 e 10 (respostas idênticas)', fAmostra, true)];
const nota = tab === 'proc' ? 'clique em barras, valores ou julgados para filtrar os demais gráficos' : 'clique em qualquer barra, legenda, segmento ou célula para filtrar os demais gráficos';
return {
  ...HD, chipBase, chips: chipsAll, dds, nota,
  isProc: tab === 'proc', isSurvey: tab !== 'proc', isPer: tab === 'per', isMag: tab === 'mag', tProc: tb('proc'), tPer: tb('per'), tMag: tb('mag'),
  goProc: () => set({ tab: 'proc', open: null }), goPer: () => set({ tab: 'per', open: null }), goMag: () => set({ tab: 'mag', open: null }),
  limpar: () => set({ anos: [], ativos: [], cam: [], per: [], peso: [], acol: [], g1f: [], form: [], at: [], juls: [], q: '', forms: [], tempos: [], pAtivos: [], pSel: [], graus: [], mAtivos: [], mSel: [], amostra: null, open: null }),
  proc: { anoLinha, anosBase: baseY.length, formacoes, formBase: baseForm.length, colsDd, tabCols, tabMinW, csvCab, csvRows, exportar: () => { const q2 = (v) => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"'; const linhas = [csvCab].concat(csvRows).map(l => l.map(q2).join(';')).join('\r\n'); const blob = new Blob(['\ufeff' + linhas], { type: 'text/csv;charset=utf-8' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'julgamentos_filtrados_' + new Date().toISOString().slice(0, 10) + '.csv'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500); }, N, kpis, hon, ativos, pesos, pesoBase: basePeso.length, acol, g1secoes, g1Base, tabela, fonte: fonteTxt, vazio: N === 0, q: st.q || '', onQ: (e) => set({ q: e.target.value }), sort: () => set({ asc: !st.asc }), sortLbl: st.asc ? '↑ antigas' : '↓ recentes' },
  sv: tab === 'per' ? svPer : svMag
};
}

function renderTpl(vm, reg, esc) {
let __o = "";
__o += "<div" + " style=\"font-family: Montserrat, 'Segoe UI', Arial, sans-serif; color: #141614; background: radial-gradient(900px 520px at 100% 0%, #EEF6CF 0%, rgba(241,242,238,0) 70%), radial-gradient(700px 480px at 0% 100%, #F0F6D8 0%, rgba(241,242,238,0) 70%), #F1F2EE; min-height: 100vh; box-sizing: border-box; padding: 28px 20px 72px; font-size: 13px\"" + ">";
__o += "\n";
__o += "<div" + " style=\"max-width: 1240px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px\"" + ">";
__o += "\n\n";
__o += "<header" + " style=\"display: flex; justify-content: center\"" + ">";
__o += "\n";
__o += "<nav" + " aria-label=\"Pain\u00e9is\"" + " style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 6px; background: #141614; border-radius: 14px; padding: 6px; box-shadow: 0 8px 24px rgba(20,22,20,0.12)\"" + ">";
__o += "\n";
__o += "<span" + " aria-hidden=\"true\"" + " style=\"width: 34px; height: 34px; border-radius: 9px; background: #D7F24B; display: flex; align-items: center; justify-content: center; margin-right: 6px\"" + ">";
__o += "\n";
__o += "<svg" + " width=\"18\"" + " height=\"18\"" + " viewBox=\"0 0 24 24\"" + " fill=\"none\"" + " stroke=\"#141614\"" + " stroke-width=\"2.2\"" + " stroke-linecap=\"round\"" + " stroke-linejoin=\"round\"" + ">";
__o += "<path" + " d=\"M4 20V10M10 20V4M16 20v-7M22 20H2\"" + ">";
__o += "</path>";
__o += "</svg>";
__o += "\n";
__o += "</span>";
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((vm.goProc)) + "\"" + " aria-pressed=\"" + esc((vm.isProc)) + "\"" + " style=\"" + "border: 0; border-radius: 9px; padding: 9px 14px; font-size: 13px; font-weight: 500; cursor: pointer; background: " + esc((vm.tProc?.bg)) + "; color: " + esc((vm.tProc?.fg)) + "\"" + ">";
__o += "Processos judiciais";
__o += "</button>";
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((vm.goPer)) + "\"" + " aria-pressed=\"" + esc((vm.isPer)) + "\"" + " style=\"" + "border: 0; border-radius: 9px; padding: 9px 14px; font-size: 13px; font-weight: 500; cursor: pointer; background: " + esc((vm.tPer?.bg)) + "; color: " + esc((vm.tPer?.fg)) + "\"" + ">";
__o += "Vis\u00e3o dos peritos";
__o += "</button>";
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((vm.goMag)) + "\"" + " aria-pressed=\"" + esc((vm.isMag)) + "\"" + " style=\"" + "border: 0; border-radius: 9px; padding: 9px 14px; font-size: 13px; font-weight: 500; cursor: pointer; background: " + esc((vm.tMag?.bg)) + "; color: " + esc((vm.tMag?.fg)) + "\"" + ">";
__o += "Vis\u00e3o dos magistrados";
__o += "</button>";
__o += "\n";
__o += "</nav>";
__o += "\n";
__o += "</header>";
__o += "\n\n";
__o += "<section" + " style=\"display: flex; flex-direction: column; align-items: center; gap: 16px; text-align: center\"" + ">";
__o += "\n";
__o += "<span" + " style=\"display: inline-flex; align-items: center; gap: 6px; background: #FFFFFF; border: 1px solid #E4E6E0; border-radius: 999px; padding: 5px 12px; font-size: 11.5px; font-weight: 500; color: #3E423C\"" + ">";
__o += "<span" + " aria-hidden=\"true\"" + " style=\"width: 7px; height: 7px; border-radius: 50%; background: #B9D832\"" + ">";
__o += "</span>";
__o += esc((vm.eyebrow));
__o += "</span>";
__o += "\n";
__o += "<h1" + " style=\"margin: 0; font-size: 44px; line-height: 1.12; font-weight: 600; letter-spacing: -0.02em; max-width: 820px\"" + ">";
__o += esc((vm.t1)) + "&nbsp;" + esc((vm.t2));
__o += "<br" + ">";
__o += esc((vm.t3));
__o += "</h1>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; font-size: 14px; line-height: 1.6; color: #5E625C; max-width: min(560px, 100%); width: 407px\"" + ">";
__o += esc((vm.sub));
__o += "</p>";
__o += "\n\n";
__o += "</section>";
__o += "\n\n";
__o += "<main" + " style=\"display: flex; flex-direction: column; gap: 20px; min-width: 0\"" + ">";
__o += "\n\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 10px\"" + ">";
__o += "\n";
__o += "<div" + " role=\"toolbar\"" + " aria-label=\"Filtros\"" + " style=\"position: relative; z-index: 5; display: flex; flex-wrap: wrap; align-items: center; gap: 8px; background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 18px; padding: 10px; box-shadow: 0 2px 10px rgba(20,22,20,0.04)\"" + ">";
__o += "\n";
__o += "<span" + " style=\"display: flex; align-items: center; gap: 8px; padding: 0 8px 0 4px; font-size: 14px; font-weight: 600\"" + ">";
__o += "<span" + " aria-hidden=\"true\"" + " style=\"width: 30px; height: 30px; border-radius: 50%; background: #D7F24B; display: flex; align-items: center; justify-content: center\"" + ">";
__o += "<svg" + " width=\"14\"" + " height=\"14\"" + " viewBox=\"0 0 24 24\"" + " fill=\"none\"" + " stroke=\"#141614\"" + " stroke-width=\"2.2\"" + " stroke-linecap=\"round\"" + " stroke-linejoin=\"round\"" + ">";
__o += "<path" + " d=\"M3 5h18M7 12h10M10 19h4\"" + ">";
__o += "</path>";
__o += "</svg>";
__o += "</span>";
__o += "Filtros";
__o += "</span>";
__o += "\n";
for (const d of ((vm.dds) || [])) {
__o += "\n";
__o += "<div" + " style=\"position: relative\"" + ">";
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((d?.toggle)) + "\"" + " aria-haspopup=\"true\"" + " aria-expanded=\"" + esc((d?.open)) + "\"" + " style=\"" + "display: flex; align-items: center; gap: 8px; border: 1px solid " + esc((d?.bd)) + "; background: " + esc((d?.bg)) + "; color: #141614; border-radius: 999px; padding: 9px 14px; font-size: 12.5px; cursor: pointer; white-space: nowrap" + "\"" + ">";
__o += "\n";
__o += "<span" + " style=\"color: #5E625C\"" + ">";
__o += esc((d?.label));
__o += "</span>";
__o += "<strong" + " style=\"font-weight: 600\"" + ">";
__o += esc((d?.sum));
__o += "</strong>";
__o += "\n";
__o += "<svg" + " aria-hidden=\"true\"" + " width=\"12\"" + " height=\"12\"" + " viewBox=\"0 0 24 24\"" + " fill=\"none\"" + " stroke=\"#141614\"" + " stroke-width=\"2.4\"" + " stroke-linecap=\"round\"" + " stroke-linejoin=\"round\"" + " style=\"" + "transform: " + esc((d?.rot)) + "\"" + ">";
__o += "<path" + " d=\"M6 9l6 6 6-6\"" + ">";
__o += "</path>";
__o += "</svg>";
__o += "\n";
__o += "</button>";
__o += "\n";
if ((d?.open)) {
__o += "\n";
__o += "<div" + " role=\"menu\"" + " aria-label=\"" + esc((d?.label)) + "\"" + " style=\"position: absolute; top: calc(100% + 8px); left: 0; z-index: 30; min-width: 280px; max-height: 360px; overflow-y: auto; background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 16px; padding: 8px; box-shadow: 0 16px 40px rgba(20,22,20,0.14); display: flex; flex-direction: column; gap: 2px\"" + ">";
__o += "\n";
__o += "<span" + " style=\"font-size: 11.5px; font-weight: 600; color: #5E625C; padding: 6px 10px 8px\"" + ">";
__o += esc((d?.title));
__o += "</span>";
__o += "\n";
for (const o of ((d?.opts) || [])) {
__o += "\n";
__o += "<button" + " role=\"" + esc((d?.role)) + "\"" + " aria-checked=\"" + esc((o?.sel)) + "\"" + " data-ev=\"click:" + reg((o?.pick)) + "\"" + " style=\"" + "display: flex; align-items: center; justify-content: space-between; gap: 12px; width: 100%; border: 0; border-radius: 10px; padding: 9px 10px; font-size: 13px; color: #141614; text-align: left; cursor: pointer; background: " + esc((o?.rowBg)) + "\"" + ">";
__o += "\n";
__o += "<span" + " style=\"display: flex; align-items: center; gap: 10px\"" + ">";
__o += "<span" + " aria-hidden=\"true\"" + " style=\"" + "flex: none; width: 16px; height: 16px; box-sizing: border-box; border-radius: " + esc((d?.rad)) + "; border: 1.5px solid #141614; background: " + esc((o?.mk)) + "; display: flex; align-items: center; justify-content: center" + "\"" + ">";
__o += "<svg" + " width=\"10\"" + " height=\"10\"" + " viewBox=\"0 0 24 24\"" + " fill=\"none\"" + " stroke=\"" + esc((o?.ck)) + "\"" + " stroke-width=\"4\"" + " stroke-linecap=\"round\"" + " stroke-linejoin=\"round\"" + ">";
__o += "<path" + " d=\"M5 12l5 5 9-10\"" + ">";
__o += "</path>";
__o += "</svg>";
__o += "</span>";
__o += esc((o?.k));
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"font-size: 12px; color: #5E625C\"" + ">";
__o += esc((o?.n));
__o += "</span>";
__o += "\n";
__o += "</button>";
__o += "\n";
}
__o += "\n";
__o += "<div" + " style=\"display: flex; justify-content: space-between; gap: 8px; border-top: 1px solid #ECEDE8; margin-top: 6px; padding: 8px 2px 2px\"" + ">";
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((d?.clear)) + "\"" + " style=\"border: 0; background: transparent; color: #141614; font-size: 12px; font-weight: 500; cursor: pointer; padding: 6px 8px; text-decoration: underline\"" + ">";
__o += esc((d?.clearLbl));
__o += "</button>";
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((d?.toggle)) + "\"" + " style=\"border: 0; background: #141614; color: #FFFFFF; border-radius: 999px; padding: 7px 14px; font-size: 12px; font-weight: 600; cursor: pointer\"" + ">";
__o += "Fechar";
__o += "</button>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</div>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
}
__o += "\n";
__o += "<button" + " class=\"btn-limpar\"" + " data-ev=\"click:" + reg((vm.limpar)) + "\"" + " aria-label=\"Limpar todos\"" + " style=\"position: relative; display: flex; align-items: center; justify-content: center; width: 38px; height: 38px; border: 1px solid #E4E6E0; background: #F6F7F3; color: #141614; border-radius: 50%; padding: 0; cursor: pointer\"" + ">";
__o += "<svg" + " aria-hidden=\"true\"" + " width=\"16\"" + " height=\"16\"" + " viewBox=\"0 0 24 24\"" + " fill=\"none\"" + " stroke=\"#141614\"" + " stroke-width=\"2\"" + " stroke-linecap=\"round\"" + " stroke-linejoin=\"round\"" + ">";
__o += "<path" + " d=\"M7 21l-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21M22 21H7M5 11l9 9\"" + ">";
__o += "</path>";
__o += "</svg>";
__o += "<span" + " class=\"dica-limpar\"" + " style=\"position: absolute; top: calc(100% + 8px); left: 50%; transform: translateX(-50%); background: #141614; color: #FFFFFF; border-radius: 8px; padding: 5px 9px; font-size: 11.5px; font-weight: 600; white-space: nowrap; pointer-events: none; z-index: 40\"" + ">";
__o += "Limpar todos";
__o += "</span>";
__o += "</button>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 8px; padding: 0 4px\"" + ">";
__o += "\n";
__o += "<span" + " style=\"font-size: 12px; font-weight: 500; color: #5E625C\"" + ">";
__o += "Filtro ativo";
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"background: #141614; color: #FFFFFF; border-radius: 999px; padding: 5px 12px; font-size: 12px; font-weight: 600\"" + ">";
__o += esc((vm.chipBase));
__o += "</span>";
__o += "\n";
for (const c of ((vm.chips) || [])) {
__o += "<button" + " data-ev=\"click:" + reg((c?.rm)) + "\"" + " title=\"Remover este filtro\"" + " style=\"display: flex; align-items: center; gap: 6px; background: #F1F7D9; border: 1px solid #C9E43A; color: #141614; border-radius: 999px; padding: 5px 10px 5px 12px; font-size: 12px; cursor: pointer\"" + ">";
__o += esc((c?.k));
__o += "<svg" + " aria-hidden=\"true\"" + " width=\"10\"" + " height=\"10\"" + " viewBox=\"0 0 24 24\"" + " fill=\"none\"" + " stroke=\"#141614\"" + " stroke-width=\"3\"" + " stroke-linecap=\"round\"" + ">";
__o += "<path" + " d=\"M6 6l12 12M18 6L6 18\"" + ">";
__o += "</path>";
__o += "</svg>";
__o += "</button>";
}
__o += "\n";
__o += "<span" + " style=\"font-size: 12px; color: #5E625C\"" + ">";
__o += "\u00b7 " + esc((vm.nota));
__o += "</span>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</div>";
__o += "\n\n";
if ((vm.isProc)) {
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 20px\"" + ">";
__o += "\n\n";
__o += "<div" + " style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr)); gap: 14px\"" + ">";
__o += "\n";
for (const k of ((vm.proc?.kpis) || [])) {
__o += "\n";
__o += "<article" + " title=\"" + esc((k?.tip)) + "\"" + " style=\"background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 18px; padding: 18px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 2px 10px rgba(20,22,20,0.04)\"" + ">";
__o += "\n";
__o += "<div" + " style=\"display: flex; justify-content: space-between; align-items: flex-start; gap: 8px\"" + ">";
__o += "\n";
__o += "<span" + " aria-hidden=\"true\"" + " style=\"" + "width: 34px; height: 34px; border-radius: 50%; background: " + esc((k?.icBg)) + "; border: 1px solid #E4E6E0; display: flex; align-items: center; justify-content: center" + "\"" + ">";
__o += "<svg" + " width=\"15\"" + " height=\"15\"" + " viewBox=\"0 0 24 24\"" + " fill=\"none\"" + " stroke=\"#141614\"" + " stroke-width=\"2\"" + " stroke-linecap=\"round\"" + " stroke-linejoin=\"round\"" + ">";
__o += "<path" + " d=\"" + esc((k?.ic)) + "\"" + ">";
__o += "</path>";
__o += "</svg>";
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"" + "border-radius: 999px; padding: 3px 9px; font-size: 11px; font-weight: 600; background: " + esc((k?.chipBg)) + "; color: " + esc((k?.chipFg)) + "\"" + ">";
__o += esc((k?.chip));
__o += "</span>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 4px\"" + ">";
__o += "\n";
__o += "<span" + " style=\"font-size: 12.5px; color: #5E625C\"" + ">";
__o += esc((k?.k));
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"font-size: 26px; font-weight: 700; letter-spacing: -0.02em; line-height: 1.1\"" + ">";
__o += esc((k?.v));
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"font-size: 11.5px; line-height: 1.5; color: #5E625C\"" + ">";
__o += esc((k?.s));
__o += "</span>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</article>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n\n";
__o += "<article" + " style=\"background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 20px; padding: 20px; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 2px 10px rgba(20,22,20,0.04)\"" + ">";
__o += "\n";
__o += "<div" + " style=\"position: relative; background: #F6F7F3; border-radius: 14px; padding: 18px 18px 34px; height: 240px; box-sizing: border-box\"" + ">";
__o += "\n";
__o += "<div" + " style=\"position: relative; width: 100%; height: 100%\"" + ">";
__o += "\n";
__o += "<svg" + " aria-hidden=\"true\"" + " viewBox=\"0 0 1000 200\"" + " preserveAspectRatio=\"none\"" + " style=\"position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible\"" + ">";
__o += "\n";
__o += "<defs" + ">";
__o += "<linearGradient" + " id=\"gradAno\"" + " x1=\"0\"" + " y1=\"0\"" + " x2=\"0\"" + " y2=\"1\"" + ">";
__o += "<stop" + " offset=\"0%\"" + " stop-color=\"#A3C826\"" + " stop-opacity=\"0.55\"" + ">";
__o += "</stop>";
__o += "<stop" + " offset=\"100%\"" + " stop-color=\"#A3C826\"" + " stop-opacity=\"0\"" + ">";
__o += "</stop>";
__o += "</linearGradient>";
__o += "</defs>";
__o += "\n";
__o += "<path" + " d=\"" + esc((vm.proc?.anoLinha?.area)) + "\"" + " fill=\"url(#gradAno)\"" + ">";
__o += "</path>";
__o += "\n";
__o += "<path" + " d=\"" + esc((vm.proc?.anoLinha?.linha)) + "\"" + " fill=\"none\"" + " stroke=\"#6E9A0A\"" + " stroke-width=\"3\"" + " stroke-linecap=\"round\"" + " vector-effect=\"non-scaling-stroke\"" + ">";
__o += "</path>";
__o += "\n";
__o += "</svg>";
__o += "\n";
for (const y of ((vm.proc?.anoLinha?.pts) || [])) {
__o += "\n";
__o += "<button" + " class=\"ponto-ano\"" + " data-ev=\"click:" + reg((y?.pick)) + "\"" + " aria-pressed=\"" + esc((y?.sel)) + "\"" + " aria-label=\"" + esc((y?.tip)) + "\"" + " style=\"" + "position: absolute; left: " + esc((y?.l)) + "%; top: " + esc((y?.t)) + "%; width: 30px; height: 30px; margin: -15px 0 0 -15px; border: 0; padding: 0; background: transparent; cursor: pointer; opacity: " + esc((y?.op)) + "\"" + ">";
__o += "\n";
__o += "<span" + " style=\"" + "display: block; width: 14px; height: 14px; margin: 8px; box-sizing: border-box; border-radius: 50%; background: " + esc((y?.fill)) + "; border: 3px solid " + esc((y?.bd)) + "\"" + ">";
__o += "</span>";
__o += "\n";
__o += "<span" + " class=\"dica-ano\"" + " style=\"position: absolute; bottom: calc(100% + 4px); left: 50%; transform: translateX(-50%); background: #141614; color: #FFFFFF; border-radius: 8px; padding: 5px 9px; font-size: 11.5px; font-weight: 600; white-space: nowrap; pointer-events: none\"" + ">";
__o += esc((y?.k)) + " \u00b7 " + esc((y?.tt));
__o += "</span>";
__o += "\n";
__o += "</button>";
__o += "\n";
}
__o += "\n";
for (const y of ((vm.proc?.anoLinha?.pts) || [])) {
__o += "<span" + " style=\"" + "position: absolute; left: " + esc((y?.l)) + "%; bottom: -26px; transform: translateX(-50%); font-size: 12px; color: #5E625C" + "\"" + ">";
__o += esc((y?.k));
__o += "</span>";
}
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 6px\"" + ">";
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 15px; font-weight: 600\"" + ">";
__o += "Julgamentos por ano";
__o += "</h2>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; line-height: 1.55; color: #5E625C\"" + ">";
__o += "Julgamentos de apela\u00e7\u00e3o por ano da decis\u00e3o, entre os " + esc((vm.proc?.anosBase)) + " que atendem aos demais filtros. Passe o mouse sobre um ponto para ver o total do ano; clique para filtrar.";
__o += "</p>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</article>";
__o += "\n\n";
__o += "<div" + " style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(min(420px, 100%), 1fr)); gap: 20px\"" + ">";
__o += "\n\n";
__o += "<article" + " style=\"background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 20px; padding: 20px; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 2px 10px rgba(20,22,20,0.04)\"" + ">";
__o += "\n";
__o += "<div" + " style=\"background: #F6F7F3; border-radius: 14px; padding: 18px; display: flex; flex-direction: column; gap: 16px\"" + ">";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 10px\"" + ">";
__o += "\n";
__o += "<div" + " role=\"group\"" + " aria-label=\"Valor dos honor\u00e1rios\"" + " style=\"display: flex; background: #FFFFFF; border: 1px solid #E4E6E0; border-radius: 999px; padding: 3px\"" + ">";
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((vm.proc?.hon?.bIni?.pick)) + "\"" + " style=\"" + "border: 0; border-radius: 999px; padding: 6px 12px; font-size: 12px; font-weight: 600; cursor: pointer; background: " + esc((vm.proc?.hon?.bIni?.bg)) + "; color: " + esc((vm.proc?.hon?.bIni?.fg)) + "\"" + ">";
__o += "Proposto";
__o += "</button>";
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((vm.proc?.hon?.bFim?.pick)) + "\"" + " style=\"" + "border: 0; border-radius: 999px; padding: 6px 12px; font-size: 12px; font-weight: 600; cursor: pointer; background: " + esc((vm.proc?.hon?.bFim?.bg)) + "; color: " + esc((vm.proc?.hon?.bFim?.fg)) + "\"" + ">";
__o += "Fixado";
__o += "</button>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<span" + " style=\"background: #EAF5C6; color: #3D5200; border-radius: 999px; padding: 3px 9px; font-size: 11px; font-weight: 600\"" + ">";
__o += esc((vm.proc?.hon?.nTxt));
__o += "</span>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<span" + " style=\"font-size: 24px; font-weight: 700; letter-spacing: -0.01em\"" + ">";
__o += esc((vm.proc?.hon?.faixa));
__o += "</span>";
__o += "\n";
if ((vm.proc?.hon?.tem)) {
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 8px\"" + ">";
__o += "\n";
__o += "<div" + " style=\"position: relative; height: 10px; border-radius: 999px; background: #E3E5DF; margin: 8px 8px 0\"" + ">";
__o += "\n";
__o += "<span" + " style=\"" + "position: absolute; top: 0; bottom: 0; left: " + esc((vm.proc?.hon?.x0)) + "%; width: " + esc((vm.proc?.hon?.xw)) + "%; border-radius: 999px; background: repeating-linear-gradient(135deg, #D7F24B 0 6px, #C5E236 6px 12px)" + "\"" + ">";
__o += "</span>";
__o += "\n";
for (const h of ((vm.proc?.hon?.itens) || [])) {
__o += "<span" + " title=\"" + esc((h?.tip)) + "\"" + " style=\"" + "position: absolute; top: 50%; left: " + esc((h?.x)) + "%; width: 14px; height: 14px; margin: -7px 0 0 -7px; border-radius: 50%; background: #FFFFFF; border: 3px solid #141614; box-sizing: border-box" + "\"" + ">";
__o += "</span>";
}
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<div" + " style=\"display: flex; justify-content: space-between; font-size: 11px; color: #5E625C; padding: 0 2px\"" + ">";
__o += "<span" + ">";
__o += "M\u00ednimo";
__o += "</span>";
__o += "<span" + ">";
__o += "M\u00e1ximo";
__o += "</span>";
__o += "</div>";
__o += "\n";
__o += "</div>";
__o += "\n";
}
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 8px\"" + ">";
__o += "\n";
for (const h of ((vm.proc?.hon?.itens) || [])) {
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((h?.pick)) + "\"" + " aria-pressed=\"" + esc((h?.sel)) + "\"" + " title=\"" + esc((h?.tip)) + "\"" + " style=\"" + "display: flex; align-items: center; justify-content: space-between; gap: 10px; width: 100%; text-align: left; cursor: pointer; color: #141614; background: " + esc((h?.bg)) + "; border: 1px solid " + esc((h?.bd)) + "; border-radius: 12px; padding: 10px 12px" + "\"" + ">";
__o += "\n";
__o += "<span" + " style=\"display: flex; align-items: center; gap: 10px; min-width: 0\"" + ">";
__o += "<span" + " style=\"width: 28px; height: 28px; flex: none; border-radius: 50%; border: 1px solid #E4E6E0; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700\"" + ">";
__o += esc((h?.pos));
__o += "</span>";
__o += "<span" + " style=\"display: flex; flex-direction: column; min-width: 0\"" + ">";
__o += "<span" + " style=\"font-size: 15px; font-weight: 700\"" + ">";
__o += esc((h?.txt));
__o += "</span>";
__o += "<span" + " style=\"font-size: 11.5px; color: #5E625C\"" + ">";
__o += esc((h?.sub));
__o += "</span>";
__o += "</span>";
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"border-radius: 999px; padding: 3px 9px; font-size: 11px; font-weight: 600; background: #F1F2EE; color: #3E423C; white-space: nowrap\"" + ">";
__o += esc((h?.ativo));
__o += "</span>";
__o += "\n";
__o += "</button>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 6px\"" + ">";
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 15px; font-weight: 600\"" + ">";
__o += "Honor\u00e1rios periciais, do menor ao maior";
__o += "</h2>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; line-height: 1.55; color: #5E625C\"" + ">";
__o += "Valor proposto pelo perito e valor fixado pelo ju\u00edzo, um por processo, como registrados na planilha. Valores nominais, sem corre\u00e7\u00e3o monet\u00e1ria.";
__o += "</p>";
__o += "\n";
if ((vm.proc?.hon?.temSem)) {
__o += "\n";
__o += "<p" + " style=\"margin: 4px 0 0; font-size: 12px; line-height: 1.5; color: #3E423C\"" + ">";
__o += "<strong" + " style=\"font-weight: 600\"" + ">";
__o += "Sem " + esc((vm.proc?.hon?.rotuloMin)) + " identificado (" + esc((vm.proc?.hon?.semN)) + "):";
__o += "</strong>";
__o += " " + esc((vm.proc?.hon?.semTxt)) + ".";
__o += "</p>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</article>";
__o += "\n\n";
__o += "<article" + " style=\"background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 20px; padding: 20px; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 2px 10px rgba(20,22,20,0.04)\"" + ">";
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 15px; font-weight: 600\"" + ">";
__o += "Ativos discutidos nos julgamentos";
__o += "</h2>";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; line-height: 1.55; color: #5E625C\"" + ">";
__o += "Julgamentos por ativo de propriedade intelectual. Um julgamento pode envolver dois ativos, ent\u00e3o a soma passa do total. Clique numa barra para filtrar.";
__o += "</p>";
__o += "<div" + " style=\"background: #F6F7F3; border-radius: 14px; padding: 16px; display: flex; flex-direction: column; gap: 10px\"" + ">";
__o += "\n";
for (const a of ((vm.proc?.ativos) || [])) {
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((a?.pick)) + "\"" + " aria-pressed=\"" + esc((a?.sel)) + "\"" + " title=\"" + esc((a?.tip)) + "\"" + " style=\"" + "display: grid; grid-template-columns: minmax(110px, 190px) 1fr 34px; align-items: center; gap: 12px; border: 0; background: transparent; padding: 2px 0; cursor: pointer; text-align: left; font-size: 12.5px; color: #141614; opacity: " + esc((a?.op)) + "\"" + ">";
__o += "\n";
__o += "<span" + " style=\"" + "font-weight: " + esc((a?.fw)) + "\"" + ">";
__o += esc((a?.k));
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"height: 22px; border-radius: 8px; background: #E3E5DF; overflow: hidden\"" + ">";
__o += "<span" + " style=\"" + "display: block; height: 100%; width: " + esc((a?.w)) + "%; border-radius: 8px; background: " + esc((a?.bar)) + "\"" + ">";
__o += "</span>";
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"font-weight: 700; text-align: right\"" + ">";
__o += esc((a?.n));
__o += "</span>";
__o += "\n";
__o += "</button>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 6px\"" + ">";
__o += "\n\n\n";
__o += "</div>";
__o += "\n";
__o += "</article>";
__o += "\n";
__o += "</div>";
__o += "\n\n";
__o += "<div" + " style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(min(420px, 100%), 1fr)); gap: 20px\"" + ">";
__o += "\n\n";
__o += "<article" + " style=\"background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 20px; padding: 20px; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 2px 10px rgba(20,22,20,0.04)\"" + ">";
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 15px; font-weight: 600\"" + ">";
__o += "Peso do laudo na decis\u00e3o";
__o += "</h2>";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; line-height: 1.55; color: #5E625C\"" + ">";
__o += "Classifica\u00e7\u00e3o registrada na sele\u00e7\u00e3o para os " + esc((vm.proc?.pesoBase)) + " processos. ";
__o += "<br" + ">";
__o += "Clique num bloco para filtrar.";
__o += "</p>";
__o += "<div" + " style=\"background: #F6F7F3; border-radius: 14px; padding: 16px; display: flex; flex-direction: column; gap: 14px\"" + ">";
__o += "\n";
__o += "<div" + " style=\"display: flex; height: 18px; border-radius: 999px; overflow: hidden; background: #E3E5DF\"" + ">";
__o += "\n";
for (const a of ((vm.proc?.pesos) || [])) {
__o += "<span" + " title=\"" + esc((a?.tip)) + "\"" + " style=\"" + "width: " + esc((a?.w)) + "%; background: " + esc((a?.cor)) + "\"" + ">";
__o += "</span>";
}
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<div" + " style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 8px\"" + ">";
__o += "\n";
for (const a of ((vm.proc?.pesos) || [])) {
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((a?.pick)) + "\"" + " aria-pressed=\"" + esc((a?.sel)) + "\"" + " title=\"" + esc((a?.tip)) + "\"" + " style=\"" + "display: flex; flex-direction: column; gap: 4px; text-align: left; cursor: pointer; color: #141614; background: " + esc((a?.bg)) + "; border: 1px solid " + esc((a?.bd)) + "; border-radius: 12px; padding: 10px 12px; opacity: " + esc((a?.op)) + "\"" + ">";
__o += "\n";
__o += "<span" + " style=\"display: flex; align-items: center; gap: 6px; font-size: 11.5px; font-weight: 600\"" + ">";
__o += "<span" + " aria-hidden=\"true\"" + " style=\"" + "width: 10px; height: 10px; border-radius: 3px; background: " + esc((a?.cor)) + "\"" + ">";
__o += "</span>";
__o += esc((a?.k));
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"font-size: 24px; font-weight: 700; letter-spacing: -0.02em; line-height: 1.1\"" + ">";
__o += esc((a?.n));
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"font-size: 11px; color: #5E625C\"" + ">";
__o += esc((a?.pct));
__o += "</span>";
__o += "\n";
__o += "</button>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 6px\"" + ">";
__o += "\n\n\n";
__o += "</div>";
__o += "\n";
__o += "</article>";
__o += "\n\n";
__o += "<article" + " style=\"background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 20px; padding: 20px; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 2px 10px rgba(20,22,20,0.04)\"" + ">";
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 15px; font-weight: 600\"" + ">";
__o += "Acolhimento do laudo";
__o += "</h2>";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; line-height: 1.55; color: #5E625C\"" + ">";
__o += "Como o laudo pericial foi acolhido na senten\u00e7a e no ac\u00f3rd\u00e3o. ";
__o += "<br" + ">";
__o += "Clique numa c\u00e9lula para filtrar.";
__o += "</p>";
__o += "<div" + " style=\"background: #F6F7F3; border-radius: 14px; padding: 16px; overflow-x: auto\"" + ">";
__o += "\n";
__o += "<div" + " style=\"" + "display: grid; grid-template-columns: " + esc((vm.proc?.acol?.gtc)) + "; gap: 6px; min-width: 380px; font-size: 12px" + "\"" + ">";
__o += "\n";
__o += "<span" + " style=\"font-size: 11px; color: #5E625C; align-self: end; line-height: 1.3\"" + ">";
__o += "1\u00ba grau \u2193 \u00b7 2\u00ba grau \u2192";
__o += "</span>";
__o += "\n";
for (const c of ((vm.proc?.acol?.cols) || [])) {
__o += "<span" + " style=\"font-size: 11px; font-weight: 600; color: #3E423C; text-align: center; align-self: end; line-height: 1.3\"" + ">";
__o += esc((c?.k));
__o += "</span>";
}
__o += "\n";
for (const l of ((vm.proc?.acol?.linhas) || [])) {
__o += "\n";
__o += "<span" + " style=\"font-weight: 600; align-self: center\"" + ">";
__o += esc((l?.k));
__o += "</span>";
__o += "\n";
for (const c of ((l?.cells) || [])) {
__o += "<button" + " data-ev=\"click:" + reg((c?.pick)) + "\"" + " title=\"" + esc((c?.tip)) + "\"" + " style=\"" + "height: 40px; border-radius: 10px; border: 1px solid " + esc((c?.bd)) + "; background: " + esc((c?.bg)) + "; color: " + esc((c?.fg)) + "; font-size: 14px; font-weight: 700; cursor: " + esc((c?.cur)) + "\"" + ">";
__o += esc((c?.n));
__o += "</button>";
}
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 6px\"" + ">";
__o += "\n\n\n";
__o += "</div>";
__o += "\n";
__o += "</article>";
__o += "\n";
__o += "</div>";
__o += "\n\n";
__o += "<article" + " style=\"background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 20px; padding: 20px; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 2px 10px rgba(20,22,20,0.04)\"" + ">";
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 15px; font-weight: 600\"" + ">";
__o += "Forma\u00e7\u00e3o dos peritos";
__o += "</h2>";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; line-height: 1.55; color: #5E625C\"" + ">";
__o += ". Um processo pode ter peritos de mais de uma \u00e1rea, ou um mesmo perito pode ter mais de uma forma\u00e7\u00e3o. Clique numa barra para filtrar.";
__o += "</p>";
__o += "<div" + " style=\"background: #F6F7F3; border-radius: 14px; padding: 16px 14px 12px; display: flex; align-items: flex-end; gap: 10px; height: 250px; overflow-x: auto\"" + ">";
__o += "\n";
for (const y of ((vm.proc?.formacoes) || [])) {
__o += "\n";
__o += "<button" + " class=\"barra-form\"" + " data-ev=\"click:" + reg((y?.pick)) + "\"" + " aria-pressed=\"" + esc((y?.sel)) + "\"" + " aria-label=\"" + esc((y?.tip)) + "\"" + " style=\"" + "position: relative; flex: 1 0 74px; min-width: 74px; height: 100%; border: 0; border-radius: 10px; padding: 4px 2px 0; cursor: pointer; color: #141614; background: " + esc((y?.rbg)) + "; opacity: " + esc((y?.op)) + "; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; gap: 6px" + "\"" + ">";
__o += "\n";
if ((y?.temNomes)) {
__o += "<span" + " class=\"dica-form\"" + " style=\"" + "position: absolute; top: 0; " + esc((y?.al)) + "; width: 200px; background: #141614; color: #FFFFFF; border-radius: 10px; padding: 8px 10px; font-size: 11px; line-height: 1.4; text-align: left; pointer-events: none; z-index: 20; display: flex; flex-direction: column; gap: 3px" + "\"" + ">";
__o += "<strong" + " style=\"font-weight: 700; color: #D7F24B\"" + ">";
__o += esc((y?.k));
__o += "</strong>";
for (const nm of ((y?.nomes) || [])) {
__o += "<span" + ">";
__o += esc((nm?.t));
__o += "</span>";
}
__o += "</span>";
}
__o += "\n";
__o += "<span" + " style=\"font-size: 12px; font-weight: 700\"" + ">";
__o += esc((y?.n));
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"" + "width: 100%; max-width: 64px; height: " + esc((y?.h)) + "px; border-radius: 8px 8px 4px 4px; background: " + esc((y?.bar)) + "\"" + ">";
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"font-size: 11px; line-height: 1.25; color: #3E423C; text-align: center; min-height: 28px\"" + ">";
__o += esc((y?.k));
__o += "</span>";
__o += "\n";
__o += "</button>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 6px\"" + ">";
__o += "\n\n\n";
__o += "</div>";
__o += "\n";
__o += "</article>";
__o += "\n\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 6px; padding: 8px 4px 0\"" + ">";
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.01em\"" + ">";
__o += "O processo de 1\u00ba grau, que originou os ac\u00f3rd\u00e3os";
__o += "</h2>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; line-height: 1.55; color: #5E625C; max-width: 760px\"" + ">";
__o += "Analise como a per\u00edcia ocorreu no processo de conhecimento ligado a cada ac\u00f3rd\u00e3o. H\u00e1 dados do 1\u00ba grau para " + esc((vm.proc?.g1Base)) + " dos " + esc((vm.proc?.N)) + " julgamentos do filtro; os demais ainda n\u00e3o foram analisados. Cinza: n\u00e3o se aplica, n\u00e3o identificado ou sem registro. Clique numa barra ou fatia para filtrar o painel.";
__o += "</p>";
__o += "\n";
__o += "</div>";
__o += "\n";
for (const sc of ((vm.proc?.g1secoes) || [])) {
__o += "\n";
__o += "<article" + " style=\"background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 20px; padding: 20px; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 2px 10px rgba(20,22,20,0.04)\"" + ">";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 6px\"" + ">";
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 15px; font-weight: 600\"" + ">";
__o += esc((sc?.t));
__o += "</h2>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; line-height: 1.55; color: #5E625C\"" + ">";
__o += esc((sc?.d));
__o += "</p>";
__o += "\n";
__o += "</div>";
__o += "\n";
if ((sc?.barras)) {
__o += "\n";
__o += "<div" + " style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr)); gap: 12px\"" + ">";
__o += "\n";
for (const it of ((sc?.itens) || [])) {
__o += "\n";
__o += "<div" + " style=\"background: #F6F7F3; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 8px\"" + ">";
__o += "\n";
__o += "<div" + " style=\"display: flex; justify-content: space-between; align-items: baseline; gap: 8px\"" + ">";
__o += "<span" + " style=\"font-size: 12.5px; font-weight: 600\"" + ">";
__o += esc((it?.q));
__o += "</span>";
__o += "<span" + " style=\"font-size: 11px; color: #5E625C; white-space: nowrap\"" + ">";
__o += esc((it?.nTxt));
__o += "</span>";
__o += "</div>";
__o += "\n";
for (const a of ((it?.cats) || [])) {
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((a?.pick)) + "\"" + " title=\"" + esc((a?.tip)) + "\"" + " style=\"" + "display: grid; grid-template-columns: minmax(80px, 120px) 1fr 24px; align-items: center; gap: 10px; border: 0; background: transparent; padding: 1px 0; cursor: pointer; text-align: left; font-size: 12px; color: #141614; opacity: " + esc((a?.op)) + "\"" + ">";
__o += "\n";
__o += "<span" + " style=\"" + "font-weight: " + esc((a?.fw)) + "\"" + ">";
__o += esc((a?.k));
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"height: 14px; border-radius: 6px; background: #E3E5DF; overflow: hidden\"" + ">";
__o += "<span" + " style=\"" + "display: block; height: 100%; width: " + esc((a?.w)) + "%; border-radius: 6px; background: " + esc((a?.bar)) + "\"" + ">";
__o += "</span>";
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"font-weight: 700; text-align: right\"" + ">";
__o += esc((a?.n));
__o += "</span>";
__o += "\n";
__o += "</button>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
}
__o += "\n";
if ((sc?.rosca)) {
__o += "\n";
__o += "<div" + " style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr)); gap: 12px\"" + ">";
__o += "\n";
for (const it of ((sc?.itens) || [])) {
__o += "\n";
__o += "<div" + " style=\"background: #F6F7F3; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 12px\"" + ">";
__o += "\n";
__o += "<span" + " style=\"font-size: 12.5px; font-weight: 600\"" + ">";
__o += esc((it?.q));
__o += "</span>";
__o += "\n";
__o += "<div" + " style=\"display: flex; align-items: center; gap: 14px\"" + ">";
__o += "\n";
__o += "<div" + " role=\"img\"" + " aria-label=\"" + esc((it?.q)) + "\"" + " style=\"" + "flex: none; width: 96px; height: 96px; border-radius: 50%; background: " + esc((it?.grad)) + "; display: flex; align-items: center; justify-content: center" + "\"" + ">";
__o += "\n";
__o += "<span" + " style=\"width: 60px; height: 60px; border-radius: 50%; background: #F6F7F3; display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.1\"" + ">";
__o += "<strong" + " style=\"font-size: 18px\"" + ">";
__o += esc((it?.centro));
__o += "</strong>";
__o += "<span" + " style=\"font-size: 9.5px; color: #5E625C\"" + ">";
__o += "processos";
__o += "</span>";
__o += "</span>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 4px; min-width: 0; flex: 1\"" + ">";
__o += "\n";
for (const a of ((it?.cats) || [])) {
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((a?.pick)) + "\"" + " title=\"" + esc((a?.tip)) + "\"" + " style=\"" + "display: flex; align-items: center; justify-content: space-between; gap: 8px; border: 0; background: transparent; padding: 2px 0; cursor: pointer; text-align: left; font-size: 12px; color: #141614; opacity: " + esc((a?.op)) + "\"" + ">";
__o += "\n";
__o += "<span" + " style=\"" + "display: flex; align-items: center; gap: 6px; font-weight: " + esc((a?.fw)) + "\"" + ">";
__o += "<span" + " aria-hidden=\"true\"" + " style=\"" + "flex: none; width: 10px; height: 10px; border-radius: 3px; background: " + esc((a?.cor)) + "\"" + ">";
__o += "</span>";
__o += esc((a?.k));
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"font-weight: 700; white-space: nowrap\"" + ">";
__o += esc((a?.n));
__o += "</span>";
__o += "\n";
__o += "</button>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</div>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
}
__o += "\n";
if ((sc?.temTxt)) {
__o += "\n";
__o += "<details" + " style=\"font-size: 12px; color: #3E423C\"" + ">";
__o += "\n";
__o += "<summary" + " style=\"cursor: pointer; font-weight: 600\"" + ">";
__o += esc((sc?.txtT));
__o += "</summary>";
__o += "\n";
__o += "<ul" + " style=\"margin: 8px 0 0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px; line-height: 1.5\"" + ">";
__o += "\n";
for (const x of ((sc?.textos) || [])) {
__o += "<li" + ">";
__o += "<strong" + " style=\"font-weight: 600\"" + ">";
__o += esc((x?.cnj));
__o += "</strong>";
__o += " \u2014 " + esc((x?.txt));
__o += "</li>";
}
__o += "\n";
__o += "</ul>";
__o += "\n";
__o += "</details>";
__o += "\n";
}
__o += "\n";
__o += "</article>";
__o += "\n";
}
__o += "\n\n";
__o += "<article" + " style=\"background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 20px; display: flex; flex-direction: column; box-shadow: 0 2px 10px rgba(20,22,20,0.04); overflow: hidden\"" + ">";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px; padding: 16px 18px\"" + ">";
__o += "\n";
__o += "<span" + " style=\"font-size: 15px; font-weight: 600\"" + ">";
__o += "Julgamentos ";
__o += "<span" + " style=\"color: #5E625C; font-weight: 500\"" + ">";
__o += "(" + esc((vm.proc?.N)) + ")";
__o += "</span>";
__o += "</span>";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-wrap: wrap; gap: 8px; align-items: center; flex: 1 1 360px; justify-content: flex-end\"" + ">";
__o += "\n";
__o += "<label" + " style=\"display: flex; align-items: center; gap: 8px; flex: 1 1 220px; max-width: 320px; background: #F6F7F3; border: 1px solid #E4E6E0; border-radius: 999px; padding: 0 12px\"" + ">";
__o += "<svg" + " aria-hidden=\"true\"" + " width=\"14\"" + " height=\"14\"" + " viewBox=\"0 0 24 24\"" + " fill=\"none\"" + " stroke=\"#5E625C\"" + " stroke-width=\"2\"" + " stroke-linecap=\"round\"" + ">";
__o += "<circle" + " cx=\"11\"" + " cy=\"11\"" + " r=\"7\"" + ">";
__o += "</circle>";
__o += "<path" + " d=\"M20 20l-3.5-3.5\"" + ">";
__o += "</path>";
__o += "</svg>";
__o += "<input" + " id=\"busca\"" + " type=\"search\"" + " aria-label=\"Buscar\"" + " value=\"" + esc((vm.proc?.q)) + "\"" + " data-ev=\"input:" + reg((vm.proc?.onQ)) + "\"" + " placeholder=\"Processo, relator, indexador, perito\u2026\"" + " style=\"flex: 1; min-width: 0; border: 0; background: transparent; padding: 9px 0; font-size: 12.5px; outline: none\"" + ">";
__o += "</label>";
__o += "\n";
__o += "<div" + " style=\"position: relative\"" + ">";
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((vm.proc?.colsDd?.toggle)) + "\"" + " aria-haspopup=\"true\"" + " aria-expanded=\"" + esc((vm.proc?.colsDd?.open)) + "\"" + " style=\"" + "display: flex; align-items: center; gap: 8px; border: 1px solid " + esc((vm.proc?.colsDd?.bd)) + "; background: " + esc((vm.proc?.colsDd?.bg)) + "; color: #141614; border-radius: 999px; padding: 8px 14px; font-size: 12px; cursor: pointer; white-space: nowrap" + "\"" + ">";
__o += "\n";
__o += "<span" + " style=\"color: #5E625C\"" + ">";
__o += "Campos";
__o += "</span>";
__o += "<strong" + " style=\"font-weight: 600\"" + ">";
__o += esc((vm.proc?.colsDd?.sum));
__o += "</strong>";
__o += "\n";
__o += "<svg" + " aria-hidden=\"true\"" + " width=\"12\"" + " height=\"12\"" + " viewBox=\"0 0 24 24\"" + " fill=\"none\"" + " stroke=\"#141614\"" + " stroke-width=\"2.4\"" + " stroke-linecap=\"round\"" + " stroke-linejoin=\"round\"" + " style=\"" + "transform: " + esc((vm.proc?.colsDd?.rot)) + "\"" + ">";
__o += "<path" + " d=\"M6 9l6 6 6-6\"" + ">";
__o += "</path>";
__o += "</svg>";
__o += "\n";
__o += "</button>";
__o += "\n";
if ((vm.proc?.colsDd?.open)) {
__o += "\n";
__o += "<div" + " role=\"menu\"" + " aria-label=\"Campos da tabela\"" + " style=\"position: absolute; top: calc(100% + 8px); right: 0; z-index: 30; min-width: 260px; max-height: 380px; overflow-y: auto; background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 16px; padding: 8px; box-shadow: 0 16px 40px rgba(20,22,20,0.14); display: flex; flex-direction: column; gap: 2px\"" + ">";
__o += "\n";
__o += "<span" + " style=\"font-size: 11.5px; font-weight: 600; color: #5E625C; padding: 6px 10px 8px\"" + ">";
__o += "Campos exibidos no detalhamento";
__o += "</span>";
__o += "\n";
for (const o of ((vm.proc?.colsDd?.opts) || [])) {
__o += "\n";
__o += "<button" + " role=\"menuitemcheckbox\"" + " aria-checked=\"" + esc((o?.sel)) + "\"" + " data-ev=\"click:" + reg((o?.pick)) + "\"" + " style=\"" + "display: flex; align-items: center; gap: 10px; width: 100%; border: 0; border-radius: 10px; padding: 8px 10px; font-size: 13px; color: #141614; text-align: left; cursor: pointer; background: " + esc((o?.rowBg)) + "\"" + ">";
__o += "\n";
__o += "<span" + " aria-hidden=\"true\"" + " style=\"" + "flex: none; width: 16px; height: 16px; box-sizing: border-box; border-radius: 4px; border: 1.5px solid #141614; background: " + esc((o?.mk)) + "; display: flex; align-items: center; justify-content: center" + "\"" + ">";
__o += "<svg" + " width=\"10\"" + " height=\"10\"" + " viewBox=\"0 0 24 24\"" + " fill=\"none\"" + " stroke=\"" + esc((o?.ck)) + "\"" + " stroke-width=\"4\"" + " stroke-linecap=\"round\"" + " stroke-linejoin=\"round\"" + ">";
__o += "<path" + " d=\"M5 12l5 5 9-10\"" + ">";
__o += "</path>";
__o += "</svg>";
__o += "</span>";
__o += esc((o?.k)) + "\n";
__o += "</button>";
__o += "\n";
}
__o += "\n";
__o += "<div" + " style=\"display: flex; justify-content: space-between; gap: 8px; border-top: 1px solid #ECEDE8; margin-top: 6px; padding: 8px 2px 2px\"" + ">";
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((vm.proc?.colsDd?.todos)) + "\"" + " style=\"border: 0; background: transparent; color: #141614; font-size: 12px; font-weight: 500; cursor: pointer; padding: 6px 8px; text-decoration: underline\"" + ">";
__o += "Mostrar todos";
__o += "</button>";
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((vm.proc?.colsDd?.fechar)) + "\"" + " style=\"border: 0; background: #141614; color: #FFFFFF; border-radius: 999px; padding: 7px 14px; font-size: 12px; font-weight: 600; cursor: pointer\"" + ">";
__o += "Fechar";
__o += "</button>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</div>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((vm.proc?.sort)) + "\"" + " style=\"border: 1px solid #E4E6E0; background: #FFFFFF; border-radius: 999px; padding: 8px 14px; font-size: 12px; font-weight: 500; cursor: pointer\"" + ">";
__o += "Data " + esc((vm.proc?.sortLbl));
__o += "</button>";
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((vm.proc?.exportar)) + "\"" + " title=\"Baixar a tabela filtrada em CSV\"" + " style=\"border: 0; background: #D7F24B; color: #141614; border-radius: 999px; padding: 8px 14px; font-size: 12px; font-weight: 600; cursor: pointer\"" + ">";
__o += "+ Exportar CSV";
__o += "</button>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<div" + " style=\"overflow-x: auto\"" + ">";
__o += "\n";
__o += "<table" + " style=\"" + "width: 100%; min-width: " + esc((vm.proc?.tabMinW)) + "; font-size: 12.5px; table-layout: fixed" + "\"" + ">";
__o += "\n";
__o += "<thead" + ">";
__o += "<tr" + " style=\"background: #F6F7F3; color: #5E625C\"" + ">";
for (const c of ((vm.proc?.tabCols) || [])) {
__o += "<th" + " style=\"" + "padding: 10px 12px; font-weight: 500; width: " + esc((c?.w)) + "\"" + ">";
__o += esc((c?.k));
__o += "</th>";
}
__o += "</tr>";
__o += "</thead>";
__o += "\n";
__o += "<tbody" + ">";
__o += "\n";
for (const r of ((vm.proc?.tabela) || [])) {
__o += "\n";
__o += "<tr" + " style=\"border-top: 1px solid #ECEDE8\"" + ">";
for (const c of ((r?.cells) || [])) {
__o += "<td" + " style=\"padding: 10px 12px; line-height: 1.5; color: #2A2D28; overflow-wrap: anywhere\"" + ">";
if ((c?.btn)) {
__o += "<button" + " data-ev=\"click:" + reg((c?.pick)) + "\"" + " title=\"Mostrar s\u00f3 este julgamento nos gr\u00e1ficos (clique de novo para desfazer)\"" + " style=\"" + "border: 0; border-radius: 10px; padding: 4px 8px; font-size: 12px; font-weight: 600; line-height: 1.4; text-align: left; cursor: pointer; color: #141614; background: " + esc((c?.jBg)) + "\"" + ">";
__o += esc((c?.txt));
__o += "</button>";
}
if ((c?.plain)) {
__o += esc((c?.txt));
}
if ((c?.longo)) {
__o += "<details" + ">";
__o += "<summary" + " style=\"cursor: pointer; list-style: none\"" + ">";
__o += esc((c?.curto)) + " ";
__o += "<span" + " style=\"font-weight: 600; text-decoration: underline\"" + ">";
__o += "ler tudo";
__o += "</span>";
__o += "</summary>";
__o += "<div" + " style=\"margin-top: 6px; padding: 10px; background: #F6F7F3; border-radius: 10px; white-space: pre-line\"" + ">";
__o += esc((c?.txt));
__o += "</div>";
__o += "</details>";
}
__o += "</td>";
}
__o += "</tr>";
__o += "\n";
}
__o += "\n";
__o += "</tbody>";
__o += "\n";
__o += "</table>";
__o += "\n";
__o += "</div>";
__o += "\n";
if ((vm.proc?.vazio)) {
__o += "<p" + " style=\"margin: 0; padding: 18px; color: #5E625C\"" + ">";
__o += "Nenhum julgamento corresponde aos filtros e \u00e0 busca. Limpe um filtro para continuar.";
__o += "</p>";
}
__o += "\n";
__o += "<p" + " style=\"margin: 0; padding: 12px 18px 16px; border-top: 1px solid #ECEDE8; font-size: 11.5px; line-height: 1.5; color: #5E625C\"" + ">";
__o += esc((vm.proc?.fonte));
__o += "</p>";
__o += "\n";
__o += "</article>";
__o += "\n";
__o += "</div>";
__o += "\n";
}
__o += "\n\n";
if ((vm.isSurvey)) {
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 28px\"" + ">";
__o += "\n\n";
__o += "<article" + " style=\"background: #141614; color: #FFFFFF; border-radius: 22px; padding: 28px; display: flex; flex-wrap: wrap; gap: 28px; box-shadow: 0 12px 30px rgba(20,22,20,0.16)\"" + ">";
__o += "\n";
__o += "<div" + " style=\"flex: 1 1 260px; display: flex; flex-direction: column; gap: 10px\"" + ">";
__o += "\n";
__o += "<span" + " style=\"display: inline-flex; align-self: flex-start; align-items: center; gap: 6px; background: rgba(255,255,255,0.08); border-radius: 999px; padding: 5px 12px; font-size: 11.5px; color: #E6E8E2\"" + ">";
__o += "<span" + " aria-hidden=\"true\"" + " style=\"width: 7px; height: 7px; border-radius: 50%; background: #D7F24B\"" + ">";
__o += "</span>";
__o += esc((vm.sv?.dest?.aLab));
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"font-size: 64px; font-weight: 700; line-height: 1; letter-spacing: -0.03em\"" + ">";
__o += esc((vm.sv?.dest?.aV));
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"font-size: 13px; line-height: 1.55; color: #C9CCC4\"" + ">";
__o += esc((vm.sv?.dest?.aSub));
__o += "</span>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<div" + " style=\"width: 1px; background: rgba(255,255,255,0.12); align-self: stretch\"" + ">";
__o += "</div>";
__o += "\n";
__o += "<div" + " style=\"flex: 2 1 380px; display: flex; flex-direction: column; gap: 10px\"" + ">";
__o += "\n";
__o += "<span" + " style=\"display: inline-flex; align-self: flex-start; align-items: center; gap: 6px; background: rgba(255,255,255,0.08); border-radius: 999px; padding: 5px 12px; font-size: 11.5px; color: #E6E8E2\"" + ">";
__o += "<span" + " aria-hidden=\"true\"" + " style=\"width: 7px; height: 7px; border-radius: 50%; background: #D7F24B\"" + ">";
__o += "</span>";
__o += esc((vm.sv?.dest?.bLab));
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"display: flex; align-items: baseline; gap: 14px; flex-wrap: wrap\"" + ">";
__o += "<span" + " style=\"font-size: 64px; font-weight: 700; line-height: 1; letter-spacing: -0.03em; color: #D7F24B\"" + ">";
__o += esc((vm.sv?.dest?.bV));
__o += "</span>";
__o += "<span" + " style=\"font-size: 15px; color: #E6E8E2\"" + ">";
__o += esc((vm.sv?.dest?.bN));
__o += "</span>";
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"display: flex; height: 12px; border-radius: 999px; overflow: hidden; background: rgba(255,255,255,0.1); max-width: 520px\"" + ">";
for (const g of ((vm.sv?.dest?.segs) || [])) {
__o += "<span" + " title=\"" + esc((g?.tip)) + "\"" + " style=\"" + "width: " + esc((g?.w)) + "%; background: " + esc((g?.bg)) + "\"" + ">";
__o += "</span>";
}
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"font-size: 13px; line-height: 1.55; color: #C9CCC4\"" + ">";
__o += esc((vm.sv?.dest?.det));
__o += "</span>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</article>";
__o += "\n\n";
for (const s of ((vm.sv?.secoes) || [])) {
__o += "\n";
__o += "<section" + " style=\"display: flex; flex-direction: column; gap: 14px\"" + ">";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 4px; padding: 0 4px\"" + ">";
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.01em\"" + ">";
__o += esc((s?.t));
__o += "</h2>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; color: #5E625C\"" + ">";
__o += esc((s?.d));
__o += "</p>";
__o += "\n";
__o += "</div>";
__o += "\n";
for (const l of ((s?.linhas) || [])) {
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-wrap: wrap; gap: 20px; align-items: stretch\"" + ">";
__o += "\n";
for (const c of ((l) || [])) {
__o += "\n";
__o += "<article" + " style=\"" + "flex: " + esc((c?.fx)) + "; min-width: 0; background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 20px; padding: 20px; display: flex; flex-direction: column; gap: 14px; box-shadow: 0 2px 10px rgba(20,22,20,0.04)" + "\"" + ">";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 4px\"" + ">";
__o += "\n";
__o += "<h3" + " style=\"margin: 0; font-size: 15px; font-weight: 600\"" + ">";
__o += esc((c?.t));
__o += "</h3>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; font-size: 12px; line-height: 1.5; color: #5E625C\"" + ">";
__o += esc((c?.q));
__o += "</p>";
__o += "\n";
__o += "</div>";
__o += "\n\n";
if ((c?.isH)) {
__o += "\n";
__o += "<div" + " style=\"background: #F6F7F3; border-radius: 14px; padding: 14px 16px; display: flex; flex-direction: column; gap: 12px\"" + ">";
__o += "\n";
for (const r of ((c?.rows) || [])) {
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((r?.pick)) + "\"" + " aria-pressed=\"" + esc((r?.sel)) + "\"" + " title=\"" + esc((r?.tip)) + "\"" + " style=\"" + "display: flex; flex-direction: column; gap: 5px; width: 100%; border: 0; border-radius: 10px; padding: 6px 8px; margin: -6px -8px; box-sizing: content-box; text-align: left; cursor: pointer; color: #141614; background: " + esc((r?.rbg)) + "; opacity: " + esc((r?.op)) + "\"" + ">";
__o += "\n";
__o += "<span" + " style=\"display: flex; justify-content: space-between; gap: 12px; font-size: 12.5px\"" + ">";
__o += "<span" + ">";
__o += esc((r?.k));
__o += "</span>";
__o += "<span" + " style=\"font-weight: 700; white-space: nowrap\"" + ">";
__o += esc((r?.txt));
__o += "</span>";
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"display: block; height: 10px; border-radius: 999px; background: #E6E8E2; overflow: hidden\"" + ">";
__o += "<span" + " style=\"" + "display: block; height: 100%; width: " + esc((r?.w)) + "%; border-radius: 999px; background: " + esc((r?.cor)) + "\"" + ">";
__o += "</span>";
__o += "</span>";
__o += "\n";
__o += "</button>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
}
__o += "\n\n";
if ((c?.isV)) {
__o += "\n";
__o += "<div" + " style=\"background: #F6F7F3; border-radius: 14px; padding: 16px 14px 12px; display: flex; align-items: flex-end; gap: 10px; height: 200px\"" + ">";
__o += "\n";
for (const r of ((c?.rows) || [])) {
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((r?.pick)) + "\"" + " aria-pressed=\"" + esc((r?.sel)) + "\"" + " title=\"" + esc((r?.tip)) + "\"" + " style=\"" + "flex: 1; min-width: 0; height: 100%; border: 0; border-radius: 10px; padding: 4px 2px 0; cursor: pointer; color: #141614; background: " + esc((r?.rbg)) + "; opacity: " + esc((r?.op)) + "; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; gap: 6px" + "\"" + ">";
__o += "\n";
__o += "<span" + " style=\"" + "font-size: 11px; font-weight: 700; background: " + esc((r?.tagBg)) + "; color: " + esc((r?.tagFg)) + "; border-radius: 6px; padding: 2px 7px; white-space: nowrap" + "\"" + ">";
__o += esc((r?.n));
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"" + "width: 100%; max-width: 72px; height: " + esc((r?.h)) + "px; border-radius: 8px; background: " + esc((r?.cor)) + "\"" + ">";
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"font-size: 11px; line-height: 1.3; color: #5E625C; text-align: center; min-height: 28px\"" + ">";
__o += esc((r?.k));
__o += "</span>";
__o += "\n";
__o += "</button>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
}
__o += "\n\n";
if ((c?.isD)) {
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 20px; background: #F6F7F3; border-radius: 14px; padding: 16px\"" + ">";
__o += "\n";
__o += "<div" + " role=\"img\"" + " aria-label=\"" + esc((c?.aria)) + "\"" + " title=\"" + esc((c?.ring)) + "\"" + " style=\"" + "flex: none; width: 150px; height: 150px; border-radius: 50%; background: " + esc((c?.grad)) + "; display: flex; align-items: center; justify-content: center" + "\"" + ">";
__o += "\n";
__o += "<div" + " style=\"width: 96px; height: 96px; border-radius: 50%; background: #F6F7F3; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center\"" + ">";
__o += "\n";
__o += "<span" + " style=\"font-size: 24px; font-weight: 700; letter-spacing: -0.02em\"" + ">";
__o += esc((c?.cv));
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"font-size: 10.5px; color: #5E625C; max-width: 80px; line-height: 1.3\"" + ">";
__o += esc((c?.cs));
__o += "</span>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<ul" + " style=\"margin: 0; padding: 0; list-style: none; flex: 1 1 180px; display: flex; flex-direction: column; gap: 4px\"" + ">";
__o += "\n";
for (const r of ((c?.rows) || [])) {
__o += "\n";
__o += "<li" + ">";
__o += "<button" + " data-ev=\"click:" + reg((r?.pick)) + "\"" + " aria-pressed=\"" + esc((r?.sel)) + "\"" + " title=\"" + esc((r?.tip)) + "\"" + " style=\"" + "display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; width: 100%; border: 0; border-radius: 8px; padding: 5px 6px; text-align: left; font-size: 12.5px; cursor: pointer; color: #141614; background: " + esc((r?.rbg)) + "; opacity: " + esc((r?.op)) + "\"" + ">";
__o += "<span" + " style=\"display: flex; align-items: flex-start; gap: 8px\"" + ">";
__o += "<span" + " aria-hidden=\"true\"" + " style=\"" + "flex: none; width: 10px; height: 10px; margin-top: 3px; border-radius: 3px; background: " + esc((r?.cor)) + "; border: 1px solid #C9CCC4" + "\"" + ">";
__o += "</span>";
__o += esc((r?.k));
__o += "</span>";
__o += "<span" + " style=\"font-weight: 700; white-space: nowrap\"" + ">";
__o += esc((r?.txt));
__o += "</span>";
__o += "</button>";
__o += "</li>";
__o += "\n";
}
__o += "\n";
__o += "</ul>";
__o += "\n";
__o += "</div>";
__o += "\n";
}
__o += "\n\n";
if ((c?.isB)) {
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 10px\"" + ">";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-wrap: wrap; gap: 8px; font-size: 11.5px\"" + ">";
__o += "\n";
for (const g of ((c?.leg) || [])) {
__o += "<span" + " style=\"display: flex; align-items: center; gap: 6px; background: #F6F7F3; border-radius: 999px; padding: 4px 10px\"" + ">";
__o += "<span" + " aria-hidden=\"true\"" + " style=\"" + "width: 10px; height: 10px; border-radius: 3px; background: " + esc((g?.cor)) + "; border: 1px solid #C9CCC4" + "\"" + ">";
__o += "</span>";
__o += esc((g?.k));
__o += "</span>";
}
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<div" + " style=\"background: #F6F7F3; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 8px\"" + ">";
__o += "\n";
for (const b of ((c?.rows) || [])) {
__o += "\n";
__o += "<div" + " style=\"display: grid; grid-template-columns: minmax(130px, 220px) 1fr minmax(110px, 150px); align-items: center; gap: 14px; background: #FFFFFF; border: 1px solid #ECEDE8; border-radius: 12px; padding: 10px 12px; font-size: 12.5px\"" + ">";
__o += "\n";
__o += "<span" + " style=\"font-weight: 600\"" + ">";
__o += esc((b?.k));
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"display: flex; height: 18px; border-radius: 999px; overflow: hidden; background: #F1F2EE\"" + ">";
for (const g of ((b?.segs) || [])) {
__o += "<button" + " data-ev=\"click:" + reg((g?.pick)) + "\"" + " title=\"" + esc((g?.tip)) + "\"" + " aria-label=\"" + esc((g?.tip)) + "\"" + " style=\"" + "width: " + esc((g?.w)) + "%; border: 0; padding: 0; cursor: pointer; background: " + esc((g?.cor)) + "; opacity: " + esc((g?.op)) + "; box-shadow: " + esc((g?.ring)) + "\"" + ">";
__o += "</button>";
}
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"font-size: 12px; color: #3E423C; text-align: right\"" + ">";
__o += esc((b?.txt));
__o += "</span>";
__o += "\n";
__o += "</div>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</div>";
__o += "\n";
}
__o += "\n\n";
__o += "<p" + " style=\"margin: 0; margin-top: auto; font-size: 11.5px; line-height: 1.5; color: #5E625C\"" + ">";
__o += esc((c?.base));
__o += "</p>";
__o += "\n";
__o += "</article>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
}
__o += "\n";
__o += "</section>";
__o += "\n";
}
__o += "\n\n";
if ((vm.sv?.temUni)) {
__o += "\n";
__o += "<section" + " style=\"display: flex; flex-direction: column; gap: 14px\"" + ">";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 4px; padding: 0 4px\"" + ">";
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.01em\"" + ">";
__o += esc((vm.sv?.uniT));
__o += "</h2>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; color: #5E625C\"" + ">";
__o += "Perguntas de resposta \u00fanica, agrupadas para compara\u00e7\u00e3o. Categorias em ordem decrescente; \u201cn\u00e3o sei\u201d fica como resposta pr\u00f3pria. Clique numa resposta para filtrar.";
__o += "</p>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<article" + " style=\"background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 20px; overflow: hidden; box-shadow: 0 2px 10px rgba(20,22,20,0.04)\"" + ">";
__o += "\n";
__o += "<div" + " style=\"overflow-x: auto\"" + ">";
__o += "\n";
__o += "<table" + " style=\"width: 100%; min-width: 860px; font-size: 12.5px\"" + ">";
__o += "\n";
__o += "<thead" + ">";
__o += "<tr" + " style=\"background: #F6F7F3; color: #5E625C\"" + ">";
__o += "<th" + " style=\"padding: 12px 18px; font-weight: 500; width: 38%\"" + ">";
__o += "Pergunta";
__o += "</th>";
__o += "<th" + " style=\"padding: 12px 12px; font-weight: 500\"" + ">";
__o += "Respostas";
__o += "</th>";
__o += "<th" + " style=\"padding: 12px 18px; font-weight: 500; width: 70px; text-align: right\"" + ">";
__o += "Base";
__o += "</th>";
__o += "</tr>";
__o += "</thead>";
__o += "\n";
__o += "<tbody" + ">";
__o += "\n";
for (const u of ((vm.sv?.unicas) || [])) {
__o += "\n";
__o += "<tr" + " style=\"border-top: 1px solid #ECEDE8\"" + ">";
__o += "<td" + " style=\"padding: 14px 18px\"" + ">";
__o += "<span" + " style=\"display: block; font-weight: 600\"" + ">";
__o += esc((u?.t));
__o += "</span>";
__o += "<span" + " style=\"display: block; margin-top: 2px; color: #5E625C; font-size: 11.5px; line-height: 1.45\"" + ">";
__o += esc((u?.q));
__o += "</span>";
__o += "</td>";
__o += "\n";
__o += "<td" + " style=\"padding: 14px 12px\"" + ">";
__o += "<span" + " style=\"display: flex; flex-wrap: wrap; gap: 6px\"" + ">";
for (const r of ((u?.rows) || [])) {
__o += "<button" + " data-ev=\"click:" + reg((r?.pick)) + "\"" + " title=\"" + esc((r?.tip)) + "\"" + " style=\"" + "border: 0; border-radius: 999px; padding: 5px 11px; font-size: 11.5px; cursor: pointer; background: " + esc((r?.bg)) + "; color: " + esc((r?.fg)) + "; font-weight: " + esc((r?.fw)) + "; opacity: " + esc((r?.op)) + "\"" + ">";
__o += esc((r?.k)) + " \u00b7 " + esc((r?.txt));
__o += "</button>";
}
__o += "</span>";
__o += "</td>";
__o += "\n";
__o += "<td" + " style=\"padding: 14px 18px; text-align: right; color: #5E625C\"" + ">";
__o += esc((u?.base));
__o += "</td>";
__o += "</tr>";
__o += "\n";
}
__o += "\n";
__o += "</tbody>";
__o += "\n";
__o += "</table>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</article>";
__o += "\n";
__o += "</section>";
__o += "\n";
}
__o += "\n\n";
__o += "<section" + " style=\"display: flex; flex-direction: column; gap: 14px\"" + ">";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 4px; padding: 0 4px\"" + ">";
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.01em\"" + ">";
__o += esc((vm.sv?.escT));
__o += "</h2>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; color: #5E625C\"" + ">";
__o += "Quantidade de respondentes em cada resposta da escala. A cor mais forte marca a resposta mais frequente. Clique numa c\u00e9lula para filtrar os demais gr\u00e1ficos.";
__o += "</p>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<article" + " style=\"background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 20px; overflow: hidden; box-shadow: 0 2px 10px rgba(20,22,20,0.04)\"" + ">";
__o += "\n";
__o += "<div" + " style=\"overflow-x: auto\"" + ">";
__o += "\n";
__o += "<table" + " style=\"width: 100%; min-width: 860px; font-size: 12.5px\"" + ">";
__o += "\n";
__o += "<thead" + ">";
__o += "<tr" + " style=\"background: #F6F7F3; color: #5E625C\"" + ">";
__o += "<th" + " style=\"padding: 12px 18px; font-weight: 500\"" + ">";
__o += "Pergunta";
__o += "</th>";
__o += "<th" + " style=\"padding: 12px 4px; font-weight: 500; text-align: center; width: 74px; font-size: 11.5px; line-height: 1.3\"" + ">";
__o += "Nunca";
__o += "</th>";
__o += "<th" + " style=\"padding: 12px 4px; font-weight: 500; text-align: center; width: 74px; font-size: 11.5px; line-height: 1.3\"" + ">";
__o += "Raramente";
__o += "</th>";
__o += "<th" + " style=\"padding: 12px 4px; font-weight: 500; text-align: center; width: 74px; font-size: 11.5px; line-height: 1.3\"" + ">";
__o += "\u00c0s vezes";
__o += "</th>";
__o += "<th" + " style=\"padding: 12px 4px; font-weight: 500; text-align: center; width: 74px; font-size: 11.5px; line-height: 1.3\"" + ">";
__o += "Frequente\u00admente";
__o += "</th>";
__o += "<th" + " style=\"padding: 12px 4px; font-weight: 500; text-align: center; width: 74px; font-size: 11.5px; line-height: 1.3\"" + ">";
__o += "Sempre";
__o += "</th>";
__o += "<th" + " style=\"padding: 12px 4px; font-weight: 500; text-align: center; width: 74px; font-size: 11.5px; line-height: 1.3\"" + ">";
__o += "N\u00e3o sabe";
__o += "</th>";
__o += "<th" + " style=\"padding: 12px 18px; font-weight: 500; text-align: right; width: 150px\"" + ">";
__o += "Mediana";
__o += "</th>";
__o += "</tr>";
__o += "</thead>";
__o += "\n";
__o += "<tbody" + ">";
__o += "\n";
for (const e of ((vm.sv?.escalas) || [])) {
__o += "\n";
__o += "<tr" + " style=\"border-top: 1px solid #ECEDE8\"" + ">";
__o += "<td" + " style=\"padding: 12px 18px\"" + ">";
__o += "<span" + " style=\"display: block; font-weight: 600\"" + ">";
__o += esc((e?.t));
__o += "</span>";
__o += "<span" + " style=\"display: block; margin-top: 2px; color: #5E625C; font-size: 11.5px; line-height: 1.45\"" + ">";
__o += esc((e?.q));
__o += "</span>";
__o += "</td>";
__o += "\n";
for (const x of ((e?.cells) || [])) {
__o += "<td" + " style=\"padding: 8px 4px; text-align: center\"" + ">";
__o += "<button" + " data-ev=\"click:" + reg((x?.pick)) + "\"" + " title=\"" + esc((x?.tip)) + "\"" + " style=\"" + "display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 32px; border: 0; border-radius: 10px; cursor: pointer; font-size: 12.5px; background: " + esc((x?.bg)) + "; font-weight: " + esc((x?.fw)) + "; color: " + esc((x?.fg)) + "; opacity: " + esc((x?.op)) + "\"" + ">";
__o += esc((x?.n));
__o += "</button>";
__o += "</td>";
}
__o += "\n";
__o += "<td" + " style=\"padding: 12px 18px; text-align: right\"" + ">";
__o += "<strong" + " style=\"font-size: 13.5px\"" + ">";
__o += esc((e?.med));
__o += "</strong>";
__o += "<span" + " style=\"display: block; font-size: 11px; color: #5E625C\"" + ">";
__o += esc((e?.valid)) + " respostas";
__o += "</span>";
__o += "</td>";
__o += "</tr>";
__o += "\n";
}
__o += "\n";
__o += "</tbody>";
__o += "\n";
__o += "</table>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; padding: 12px 18px; font-size: 11.5px; color: #5E625C; border-top: 1px solid #ECEDE8\"" + ">";
__o += esc((vm.sv?.escRod));
__o += "</p>";
__o += "\n";
__o += "</article>";
__o += "\n";
__o += "</section>";
__o += "\n\n";
if ((vm.sv?.temTxt)) {
__o += "\n";
__o += "<section" + " style=\"display: flex; flex-direction: column; gap: 14px\"" + ">";
__o += "\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 4px; padding: 0 4px\"" + ">";
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.01em\"" + ">";
__o += "Contribui\u00e7\u00f5es livres";
__o += "</h2>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; color: #5E625C\"" + ">";
__o += esc((vm.sv?.txtD));
__o += "</p>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "<div" + " style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(min(340px, 100%), 1fr)); gap: 14px\"" + ">";
__o += "\n";
for (const x of ((vm.sv?.textos) || [])) {
__o += "\n";
__o += "<article" + " style=\"background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 18px; padding: 18px; display: flex; flex-direction: column; gap: 10px; box-shadow: 0 2px 10px rgba(20,22,20,0.04)\"" + ">";
__o += "\n";
__o += "<span" + " style=\"align-self: flex-start; background: #F1F7D9; color: #3D5200; border-radius: 999px; padding: 3px 10px; font-size: 11px; font-weight: 600\"" + ">";
__o += esc((x?.tag));
__o += "</span>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; font-size: 13px; line-height: 1.6\"" + ">";
__o += "\u201c" + esc((x?.txt)) + "\u201d";
__o += "</p>";
__o += "\n";
if ((x?.temNota)) {
__o += "<span" + " style=\"font-size: 11.5px; color: #8A4B00\"" + ">";
__o += esc((x?.nota));
__o += "</span>";
}
__o += "\n";
__o += "</article>";
__o += "\n";
}
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</section>";
__o += "\n";
}
__o += "\n\n";
__o += "</div>";
__o += "\n";
}
__o += "\n\n";
__o += "</main>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</div>";
return __o;
}

const raiz = document.getElementById('app');
let handlers = [];
const esc = (v) => (v === null || v === undefined) ? '' : String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const reg = (fn) => { handlers.push(fn); return handlers.length - 1; };

function render() {
  const ativo = document.activeElement;
  const focoId = ativo && ativo.id ? ativo.id : null;
  const sel = focoId && ativo.selectionStart !== undefined ? [ativo.selectionStart, ativo.selectionEnd] : null;
  const abertos = Array.from(raiz.querySelectorAll('details[open] > summary')).map(s => s.textContent);
  handlers = [];
  let vm;
  try { vm = renderVals(); } catch (e) { console.error(e); raiz.innerHTML = '<p style="padding:24px;font-family:sans-serif">Não foi possível calcular os indicadores. Detalhe técnico: ' + esc(e.message) + '</p>'; return; }
  let htmlOut;
  try { htmlOut = renderTpl(vm, reg, esc); } catch (e) { console.error(e); return; }
  raiz.innerHTML = htmlOut;
  raiz.querySelectorAll('details > summary').forEach(s => { if (abertos.includes(s.textContent)) s.parentElement.open = true; });
  if (focoId) { const el = document.getElementById(focoId); if (el) { el.focus(); if (sel && el.setSelectionRange) { try { el.setSelectionRange(sel[0], sel[1]); } catch (e) {} } } }
}

['click', 'input'].forEach(tipo => raiz.addEventListener(tipo, (ev) => {
  let el = ev.target;
  while (el && el !== raiz) {
    const d = el.getAttribute && el.getAttribute('data-ev');
    if (d) { const [t, i] = d.split(':'); if (t === tipo) { if (tipo === 'click') ev.preventDefault(); handlers[+i] && handlers[+i](ev); return; } }
    el = el.parentNode;
  }
}));

// Leitura direta da planilha (funciona quando ela está compartilhada como "qualquer pessoa com o link pode ver")
const PLANILHA = '1mb-NXp2W56eYcSt1rG1lId4EulVQu0oAdu4orRT5Xz4';
function csv(txt) {
  const out = []; let row = [], f = '', aspas = false;
  for (let i = 0; i < txt.length; i++) {
    const c = txt[i];
    if (aspas) { if (c === '"') { if (txt[i + 1] === '"') { f += '"'; i++; } else aspas = false; } else f += c; }
    else if (c === '"') aspas = true;
    else if (c === ',') { row.push(f); f = ''; }
    else if (c === '\n' || c === '\r') { if (c === '\r' && txt[i + 1] === '\n') i++; row.push(f); out.push(row); row = []; f = ''; }
    else f += c;
  }
  if (f !== '' || row.length) { row.push(f); out.push(row); }
  return out;
}
render();
if (window.fetch) {
  const base = 'https://docs.google.com/spreadsheets/d/' + PLANILHA;
  const fontes = [base + '/export?format=csv&gid=1327819595', base + '/gviz/tq?tqx=out:csv&headers=1&sheet=' + encodeURIComponent('DECISÕES')];
  const ok = (linhas) => { const cab = (linhas[0] || []).map(h => String(h).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().trim()); return cab.includes('ATIVO DE PI') && cab.includes('PERICIA') && linhas.length > 1; };
  const tenta = (i) => { if (i >= fontes.length) return;
    fetch(fontes[i], { cache: 'no-store' }).then(r => r.ok ? r.text() : Promise.reject(r.status))
      .then(t => { const linhas = csv(t); if (ok(linhas)) { window.__PROC_RAW = linhas; render(); } else tenta(i + 1); })
      .catch(() => tenta(i + 1)); };
  tenta(0);
}
})();
