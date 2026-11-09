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
  ["Nº PROCESSO", "DATA JULGAMENTO", "ANO", "CÂMARA", "ATIVO DE PI", "PERÍCIA", "PERITO", "NÚMERO DE PERITOS", "VALOR INICIAL DOS HONORÁRIOS PERICIAIS", "VALOR FINAL DOS HONORÁRIOS PERICIAIS", "HOUVE ASSISTENTE TECNICO?", "ACOLHIMENTO DO LAUDO PERICIAL NO 1º GRAU", "ACOLHIMENTO DO LAUDO PERICIAL NO 2º GRAU", "PESO PROVA TÉCNICA", "REQUERIMENTO DE PERICIA", "QUEM REQUEREU A PERÍCIA?", "RESULTADO ADMISSIBILIDADE DE PERÍCIA?", "FUNDAMENTO DO INDEFERIMENTO DE PERÍCIA", "FORMA DE ESCOLHA DO PERITO", "IMPUGNACAO DA NOMEACAO DO PERITO", "FUNDAMENTO DA IMPUGNAÇÃO", "SUBSTITUICAO PERITO", "INDEFERIMENTO DE QUESITOS", "FUNDAMENTO DO INDEFERIMENTO", "QUESITOS SUPLEMENTARES?", "QUEM INDICOU O ASSITENTE TÉCNICO?", "PARECER DIVERGENTE?", "REQUERIMENTO SEGUNDA PERICIA", "FOI REALIZADA SEGUNDA PERICIA?", "HOUVE MENÇÃO DO ART. 479?", "INVOCAÇÃO DO ART. 480", "HOUVE REFERENCIA AO ATO 045/2022P?", "HOUVE REFERENCIA AO ATO CNJ 232/2016?"],
  ["70018200212 (Nº CNJ: 0000544-71.2006.8.21.7000)", "3/30/2023", "2023", "Sexta Câmara Cível", "Modelo de utilidade", "SIM", "1ª perícia: Carlos Caetano Pettinelli — Engenheiro Civil, Tecnologia Mecânica, Instalações Industriais, CREA-RS 10619 (timbre do laudo) | 2ª perícia: Bruno W. Schramm e Paulo Jacobus Alves (engenheiro) — formações não identificadas nos arquivos; a ré os chama de 'peritos, engenheiros mecânicos'", "2", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "SIM", "PARCIAL", "REJEITADA", "DETERMINANTE", "SIM", "AMBAS", "MULTIPLAS_DECISOES", "Pedido da ré de nova perícia indeferido na cautelar (fl. 37, doc. 46); fundamento não consta dos arquivos. O indeferimento foi revertido pelo TJRS (agravo retido acolhido em 31/05/2007), seguindo-se a segunda perícia", "NÃO IDENTIFICADO", "NÃO", "-", "NÃO", "NÃO", "-", "SIM", "RÉU", "SIM", "SIM", "SIM", "SIM", "NÃO", "NÃO", "NÃO"],
  ["70079865317 (Nº CNJ: 0351743-39.2018.8.21.7000)", "3/29/2023", "2023", "Quinta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70082479247 (Nº CNJ: 0219833-49.2019.8.21.7000)", "9/29/2021", "2021", "Quinta Câmara Cível", "Modelo de utilidade", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70082558206 (Nº CNJ: 0227729-46.2019.8.21.7000)", "11/25/2020", "2020", "Quinta Câmara Cível", "Desenho industrial; Modelo de utilidade", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70082631755 (Nº CNJ: 0235084-10.2019.8.21.7000)", "4/30/2020", "2020", "Sexta Câmara Cível", "Marca", "SIM", "-", "0", "-", "-", "NÃO", "-", "-", "INDETERMINÁVEL", "SIM", "AMBAS", "NÃO IDENTIFICADO", "-", "-", "-", "-", "-", "NÃO", "-", "SIM", "-", "-", "NÃO", "NÃO", "NÃO", "NÃO", "-", "NÃO"],
  ["70082643529 (Nº CNJ: 0236261-09.2019.8.21.7000)", "5/25/2022", "2022", "Quinta Câmara Cível", "Cultivares", "SIM", "NÃO IDENTIFICADO", "1", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "INTEGRAL", "INTEGRAL", "CONCORRENTE", "SIM", "NÃO IDENTIFICADO", "DEFERIDA", "-", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO", "Não houve indeferimento de quesitos; o juízo indeferiu a impugnação da ré aos quesitos da autora (fl. 901), decisão mantida pela conversão do agravo em retido. Fundamentos não disponíveis", "SIM", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO", "NÃO", "NÃO", "NÃO", "NÃO IDENTIFICADO", "NÃO"],
  ["70082714676 (Nº CNJ: 0243376-81.2019.8.21.7000)", "4/15/2020", "2020", "Quinta Câmara Cível", "Software", "SIM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "NÃO", "", "", "NÃO"],
  ["70082848599 (Nº CNJ: 0256768-88.2019.8.21.7000)", "4/24/2020", "2020", "Sexta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70082909664 (Nº CNJ: 0262875-51.2019.8.21.7000)", "4/30/2020", "2020", "Sexta Câmara Cível", "Modelo de utilidade", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70083372003 (Nº CNJ: 0309109-91.2019.8.21.7000)", "6/25/2020", "2020", "Sexta Câmara Cível", "Direito Autoral", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70083402438 (Nº CNJ: 0312152-36.2019.8.21.7000)", "3/31/2021", "2021", "Quinta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70083604116 (Nº CNJ: 0332320-59.2019.8.21.7000)", "2/20/2020", "2020", "Sexta Câmara Cível", "Marca", "VERIFICAR NO PROCESSO", "-", "0", "-", "-", "NÃO", "-", "-", "INDETERMINÁVEL", "NÃO", "-", "-", "-", "-", "-", "-", "-", "-", "-", "NÃO", "-", "-", "NÃO SE APLICA", "NÃO SE APLICA", "NÃO", "NÃO SE APLICA", "-", "NÃO"],
  ["70083605006 (Nº CNJ: 0332409-82.2019.8.21.7000)", "4/2/2020", "2020", "Quinta Câmara Cível", "Desenho industrial", "VERIFICAR NO PROCESSO", "Laudos emprestados: Elio Grossman (Doutor em Ciências, Mestre em Engenharia de Produção, Designer Industrial — 13ª VF/RJ) e Gabriele Sarmento da Silva (especialista em propriedade intelectual, engenheira — VF de Bento Gonçalves)", "0", "-", "-", "NÃO", "-", "-", "INDETERMINÁVEL", "SIM", "AUTOR", "NÃO IDENTIFICADO", "-", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "-", "-", "-", "SIM", "-", "-", "NÃO", "NÃO", "NÃO", "NÃO", "-", "NÃO"],
  ["70083606756 (Nº CNJ: 0332584-76.2019.8.21.7000)", "5/27/2020", "2020", "Quinta Câmara Cível", "Desenho industrial", "SIM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70083653774 (Nº CNJ: 0003736-21.2020.8.21.7000)", "7/30/2020", "2020", "Sexta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70083916585 (Nº CNJ: 0030017-14.2020.8.21.7000)", "12/10/2020", "2020", "Sexta Câmara Cível", "Desenho industrial", "SIM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70083918292 (Nº CNJ: 0030188-68.2020.8.21.7000)", "7/30/2020", "2020", "Sexta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70083951632 (Nº CNJ: 0033522-13.2020.8.21.7000)", "4/29/2020", "2020", "Quinta Câmara Cível", "Modelo de utilidade", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70083952168 (Nº CNJ: 0033575-91.2020.8.21.7000)", "5/27/2020", "2020", "Quinta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70084011436 (Nº CNJ: 0039502-38.2020.8.21.7000)", "4/30/2020", "2020", "Sexta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70084070283 (Nº CNJ: 0045387-33.2020.8.21.7000)", "5/27/2020", "2020", "Quinta Câmara Cível", "Direito Autoral", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70084877927 (Nº CNJ: 0001345-59.2021.8.21.7000)", "10/21/2021", "2021", "Sexta Câmara Cível", "Modelo de utilidade", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70084880095 (Nº CNJ: 0001562-05.2021.8.21.7000)", "9/30/2021", "2021", "Sexta Câmara Cível", "Software", "SIM", "Engenharia Eletrônica, com especialização em Engenharia de Segurança do Trabalho (Eduardo Jorge Fernandes, CREA-RJ). Os dois peritos da cautelar de 2011 não são identificados", "1", "R$ 10.820,00", "R$ 9.020,00", "NÃO IDENTIFICADO", "INTEGRAL", "INTEGRAL", "DETERMINANTE", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "DEFERIDA", "-", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "-", "NÃO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO", "SIM (nova vistoria na ação principal após a perícia da cautelar)", "NÃO", "NÃO", "NÃO", "NÃO"],
  ["70084966092 (Nº CNJ: 0010162-15.2021.8.21.7000)", "6/30/2021", "2021", "Quinta Câmara Cível", "Desenho industrial", "SIM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70085111177 (Nº CNJ: 0024670-63.2021.8.21.7000)", "8/19/2021", "2021", "Sexta Câmara Cível", "Direito Autoral", "VERIFICAR NO PROCESSO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "NÃO", "", "", "NÃO"],
  ["70085127330 (Nº CNJ: 0026286-73.2021.8.21.7000)", "5/25/2022", "2022", "Quinta Câmara Cível", "Direito Autoral", "SIM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70085142560 (Nº CNJ: 0027809-23.2021.8.21.7000)", "5/25/2022", "2022", "Quinta Câmara Cível", "Software", "SIM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70085145977 (Nº CNJ: 0028150-49.2021.8.21.7000)", "4/27/2022", "2022", "Quinta Câmara Cível", "Desenho industrial", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70085182319 (Nº CNJ: 0031784-53.2021.8.21.7000)", "11/24/2021", "2021", "Quinta Câmara Cível", "Patente nº 8705074 (IDENTIFICAR A PATENTE)", "SIM", "Juliano André Pavan — Técnico em Contabilidade, Bacharel e Mestre em Ciências Contábeis; contador CRC-RS 070346/O-0; CNPC 492. [Conhecimento: perito engenheiro, nome não identificado nas cópias]", "1", "?", "?", "SIM", "PARCIAL", "PARCIAL", "DETERMINANTE", "SIM", "AUTOR", "MULTIPLAS_DECISOES", "-", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO", "-", "SIM", "RÉU", "SIM", "SIM", "SIM", "NÃO", "NÃO IDENTIFICADO", "NÃO IDENTIFICADO", "NÃO"],
  ["70085194561 (Nº CNJ: 0033009-11.2021.8.21.7000)", "8/26/2021", "2021", "Sexta Câmara Cível", "Software", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70085200780 (Nº CNJ: 0033631-90.2021.8.21.7000)", "8/19/2021", "2021", "Sexta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["70085217081 (Nº CNJ: 0035261-84.2021.8.21.7000)", "12/15/2021", "2021", "Quinta Câmara Cível", "Desenho industrial", "SIM", "Marcio Lavies Bonder — Contador (CRC-RS 71.633; CNPC/CFC nº 287); Bacharel em Ciências Jurídicas e Sociais; pós-graduado em Perícia Contábil e em Gestão Tributária; sócio de LB Perícias (Marcio Lavies Bonder Perícias SS). [Processo originário, apenas em cópia: Adriano Boff, engenheiro mecânico, CREA 140381]", "1", "R$ 64.089,41", "R$ 64.089,41", "SIM", "-", "-", "INDETERMINÁVEL", "SIM", "AUTOR", "DEFERIDA", "-", "NÃO IDENTIFICADO", "SIM", "Pedido de destituição posterior à nomeação (Autora, Ev. 128): desídia, atraso, laudo que deixou 81% dos quesitos sem resposta, quebra de confiança (arts. 157 e 468 CPC; NBC TP 01). Indeferido (Ev. 131): perito 'preenche todos os requisitos' e é 'profissional da confiança do Juízo'.", "NÃO", "SIM", "Quesitos complementares da Ré (Ev. 193) já respondidos nos laudos anteriores (Ev. 195); deferidos apenas três pontos remanescentes", "SIM", "AUTOR E RÉU", "SIM", "SIM", "NÃO", "NÃO", "SIM", "NÃO IDENTIFICADO", "NÃO"],
  ["70085219194 (Nº CNJ: 0035472-23.2021.8.21.7000)", "12/16/2021", "2021", "Sexta Câmara Cível", "Patente (identificar tipo)", "SIM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "NÃO", "", "", "", "", "", "", "NÃO", "", "", "NÃO"],
  ["70085227817 (Nº CNJ: 0036334-91.2021.8.21.7000)", "8/25/2021", "2021", "Quinta Câmara Cível", "Marca", "NÃO", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["5000587-18.2018.8.21.0010/RS", "10/29/2025", "2025", "Quinta Câmara Cível", "Desenho industrial; Modelo de utilidade", "NÃO", "sem perícia de pi", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["5018859-26.2019.8.21.0010/RS", "6/26/2024", "2024", "Quinta Câmara Cível", "Marca", "NÃO", "sem perícia de pi", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["5001186-67.2017.8.21.0017/RS", "3/31/2022", "2022", "Sexta Câmara Cível", "Direito Autoral", "NÃO", "sem perícia de pi", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["5003611-76.2018.8.21.0132/RS", "2/24/2022", "2022", "Sexta Câmara Cível", "Marca", "NÃO", "sem perícia de pi", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["5003615-96.2015.8.21.0010/RS", "11/26/2021", "2021", "Quinta Câmara Cível", "Desenho industrial; Modelo de utilidade", "SIM", "Carlos Eduardo Gasparin — formação não informada (nomeado em 2016 e substituído) | Tiago Rafael de Carvalho — Engenheiro Mecânico, CREA-RS 109140 (petições de 2019 também indicam OAB/RS 73.695)", "1", "R$ 9.540,00", "?", "SIM", "INTEGRAL", "INTEGRAL", "DETERMINANTE", "SIM", "AMBAS", "DEFERIDA", "-", "NÃO IDENTIFICADO", "NÃO", "-", "NÃO", "NÃO", "-", "SIM", "RÉU", "NÃO", "NÃO", "NÃO", "NÃO", "NÃO", "NÃO", "NÃO"],
  ["5007357-61.2017.8.21.0010/RS", "11/24/2021", "2021", "Quinta Câmara Cível", "Marca", "SIM", "Jordana Marchioro Canali — perita contábil (CRC-RS 083097, conforme login no sistema), nomeada na liquidação por arbitramento", "1", "R$ 17.729,50", "?", "NÃO IDENTIFICADO", "INTEGRAL", "NÃO SE APLICA", "DETERMINANTE", "SIM", "AMBAS", "MULTIPLAS_DECISOES", "Perícia documentoscópica no incidente de falsidade (16/05/2017): quanto às declarações, 'não se prova por perícia grafodocumentoscópica, por configurar hipótese de eventual falsidade ideológica e não falsidade (material) de documento'; quanto aos encartes, 'fica inviabilizada a perícia requerida pelos excipientes', por falta dos originais. A perícia contábil pedida na inicial foi feita na liquidação por arbitramento", "NÃO IDENTIFICADO", "NÃO", "-", "NÃO", "NÃO", "-", "SIM", "NÃO IDENTIFICADO", "-", "NÃO", "NÃO", "NÃO", "NÃO", "NÃO", "NÃO"],
  ["5055765-42.2019.8.21.0001/RS", "3/31/2021", "2021", "Quinta Câmara Cível", "Direito Autoral", "NÃO", "sem perícia de pi", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["5001590-30.2018.8.21.0132/RS", "12/10/2020", "2020", "Sexta Câmara Cível", "Marca", "SIM", "-", "0", "-", "-", "NÃO", "-", "-", "NÃO SE APLICA", "NÃO", "-", "-", "-", "-", "-", "-", "-", "NÃO", "-", "SIM", "-", "-", "NÃO SE APLICA", "NÃO SE APLICA", "NÃO", "NÃO SE APLICA", "NÃO", "NÃO"],
  ["5000124-27.2019.8.21.0112/RS", "5/25/2023", "2023", "Sexta Câmara Cível", "Invenção; Modelo de utilidade", "SIM", "Cassandra Natalia Raimann: Engenheira Civil (UFRGS), CREA-RS 97.314, Agente da Propriedade Industrial nº 2.129, especializações em Engenharia de Produção e Perícia Judicial; José Mauricio Orso: engenheiro civil", "1", "R$ 8.944,25", "R$ 441,74", "SIM", "INTEGRAL", "INTEGRAL", "DETERMINANTE", "SIM", "AUTOR", "DEFERIDA", "-", "CADASTRO JUDICIAL", "SIM", "Ré impugnou o perito José Mauricio Orso (Ev. 61) por ausência de especialização em propriedade industrial (perfil em barragens, estradas e saneamento); pedido deferido (Ev. 63)", "NÃO IDENTIFICADO", "NÃO", "-", "NÃO", "AUTOR E RÉU", "SIM", "SIM", "NÃO", "NÃO", "SIM", "NÃO IDENTIFICADO", "NÃO"],
  ["5000160-53.2014.8.21.0077/RS", "11/23/2023", "2023", "Sexta Câmara Cível", "Invenção", "SIM", "(1) Paulo Cesar Montenegro Dessards — engenheiro, segundo a JR Chemin (não atuou); (2) Jefferson Almeida Antunes — engenheiro, CREA-RS 136222, 'com especialidade em mecânica industrial' (acórdão); declarou desconhecer a Lei 9.279/96; (3) Carlos Ignacio Schmitt Sant'Anna — formação não identificada; cadastrado no TJRS em propriedade industrial (não atuou); (4) Ângela Kretschmann — licenciada em Física (PUCRS), mestre (PUCRS, 1999) e doutora (Unisinos, 2006) em Direito, advogada (OAB/RS 30.318), membro da ABAPI", "1", "R$ 984,00", "R$ 984,00", "SIM", "INTEGRAL", "REJEITADA", "DETERMINANTE", "SIM", "AMBAS", "MULTIPLAS_DECISOES", "Nova perícia/novo perito indeferidos em 01/06/2020: 'não vislumbro mácula no laudo realizado pelo perito designado. O inconformismo com a conclusão do estudo não tem o condão de, por si só, conduzir a necessidade de realização novo exame pericial'", "CADASTRO JUDICIAL", "SIM", "Após o laudo, a autora pediu o desentranhamento e novo perito (08/11/2018) e depois nova perícia por especialista em patentes (29/07/2019), por falta de conhecimento da LPI (art. 468, I, CPC). Indeferido em 01/06/2020; AI 70084658400 não conhecido; acolhido pelo TJRS na apelação (23/11/2023). A M&L alegou que a autora nada disse contra a nomeação antes do laudo", "NÃO IDENTIFICADO", "NÃO", "-", "SIM", "AUTOR E RÉU", "SIM", "SIM", "NÃO", "NÃO", "SIM", "NÃO IDENTIFICADO", "NÃO"]
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
  { t: 'Segunda perícia e normas citadas', d: 'Pedidos de nova perícia e referências ao CPC e às normas sobre honorários periciais.', cols: [['REQUERIMENTO SEGUNDA PERICIA', 'Pedido de segunda perícia'], ['FOI REALIZADA SEGUNDA PERICIA?', 'Segunda perícia realizada'], ['HOUVE MENÇÃO DO ART. 479?', 'Menção ao art. 479 do CPC'], ['INVOCAÇÃO DO ART. 480', 'Invocação do art. 480 do CPC'], ['HOUVE REFERENCIA AO ATO 045/2022P?', 'Ato 045/2022-P (TJRS)'], ['HOUVE REFERENCIA AO ATO CNJ 232/2016?', 'Resolução CNJ 232/2016']] }
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
    id: pad2(i + 1), cnj: mC ? mC[1] : (m5 ? m5[1] : num.split(' ')[0]), data, ano,
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
const T = J.length;
const ordem = (vals, pref) => Array.from(new Set(vals.filter(v => v !== null && v !== undefined))).sort((a, b) => { const ia = pref.indexOf(a), ib = pref.indexOf(b); return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || String(a).localeCompare(String(b), 'pt'); });
const ATIVOS = ordem(J.flatMap(r => r.ativos), ['Marca', 'Desenho industrial', 'Modelo de utilidade', 'Patente de invenção', 'Patente (tipo não informado)', 'Software', 'Cultivares', 'Direito autoral']);
const ANO0 = Math.min(...J.map(r => r.ano)), ANO1 = Math.max(...J.map(r => r.ano));
const ANOS = []; for (let a = ANO0; a <= ANO1; a++) ANOS.push(a);
const CAMS = ordem(J.map(r => r.camara), ['5ª Câmara Cível', '6ª Câmara Cível']);
const PERS = ordem(J.map(r => r.pericia), ['Sim', 'Não', 'A verificar no processo', 'Não informado']);
const ATS = ordem(J.map(r => r.at), ['Sim', 'Não', 'Não identificado', 'Sem registro', 'Sem dados do 1º grau']);
const PESOS = ordem(J.map(r => r.peso), ['Determinante', 'Concorrente', 'Indeterminável', 'Não se aplica', 'Sem registro']);
const ACOLS = ['Integral', 'Parcial', 'Rejeitado', 'Não se aplica', 'Sem registro'];
const acKey = (r) => r.ac1 + ' → ' + r.ac2;
const q = (st.q || '').trim().toLowerCase();
const PF = {
  anos: (r) => has('anos', r.ano), ativos: (r) => r.ativos.some(a => has('ativos', a)), cam: (r) => has('cam', r.camara),
  per: (r) => has('per', r.pericia), at: (r) => has('at', r.at), peso: (r) => has('peso', r.peso), acol: (r) => r.g1 && has('acol', acKey(r)), juls: (r) => has('juls', r.id)
};
// Filtro por clique nas seções do 1º grau: "coluna␟valor" (OU dentro da coluna, E entre colunas)
const SEP = '\u241F';
const g1Sel = {}; (st.g1f || []).forEach(k => { const [c, v] = k.split(SEP); (g1Sel[c] = g1Sel[c] || []).push(v); });
const passG = (r, semCol) => Object.keys(g1Sel).every(c => c === semCol || g1Sel[c].includes(r.c[c]));
const passQ = (r) => !q || [r.id, r.cnj, r.data, r.camara, r.ativos.join(' '), r.perito].join(' ').toLowerCase().includes(q);
const passAll = (r, sem) => Object.keys(PF).every(k => k === sem || !any(k) || PF[k](r)) && passQ(r) && passG(r, sem && sem.startsWith('g1:') ? sem.slice(3) : null);
const F = J.filter(r => passAll(r));
const N = F.length;
const opt = (key, vals, get, lbl) => vals.map(v => ({ k: lbl ? lbl(v) : String(v), n: J.filter(r => get(r, v)).length, sel: has(key, v), rowBg: rowBg(has(key, v)), pick: () => tog(key, v) }));
const fAnos = opt('anos', ANOS, (r, v) => r.ano === v);
const fAtivos = opt('ativos', ATIVOS, (r, v) => r.ativos.includes(v));
const fCam = opt('cam', CAMS, (r, v) => r.camara === v);
const fPer = opt('per', PERS, (r, v) => r.pericia === v);
const fAT = opt('at', ATS, (r, v) => r.at === v);
// Barras horizontais clicáveis (ativos e peso do laudo)
const barras = (key, vals, base, get, desc) => {
  const cont = vals.map(v => ({ v, n: base.filter(r => get(r, v)).length }));
  const mx = Math.max(1, ...cont.map(c => c.n));
  return cont.map(({ v, n }) => { const sel = has(key, v); return { k: v, n, w: 100 * n / mx, sel, fw: sel ? 700 : 500, bar: sel ? STRIPE : (any(key) ? '#BFC2BA' : INK), op: (any(key) && !sel) ? 0.55 : 1, tip: desc(v, n, base.length), pick: () => tog(key, v) }; });
};
// Julgamentos por ano
const baseY = J.filter(r => passAll(r, 'anos'));
const maxY = Math.max(1, ...ANOS.map(a => baseY.filter(r => r.ano === a).length));
const anosCard = ANOS.map(a => { const n = baseY.filter(r => r.ano === a).length; const sel = has('anos', a); const ts = any('anos'); const top = n === maxY && n > 0; return { k: String(a), n: String(n), h: Math.max(4, Math.round(130 * n / maxY)), sel, op: ts && !sel ? 0.4 : 1, rbg: sel ? '#F1F7D9' : 'transparent', bar: sel ? INK : (top ? STRIPE : '#D3D6CE'), tagBg: top || sel ? INK : 'transparent', tagFg: top || sel ? '#FFFFFF' : MUTE, tip: n + ' ' + plural(n, 'julgamento de apelação', 'julgamentos de apelação') + ' em ' + a + (n ? ' (' + pctTxt(n, baseY.length) + ' dos julgamentos do filtro). Clique para ver só este ano nos demais gráficos.' : '. Nenhum julgamento da planilha neste ano.'), pick: () => tog('anos', a) }; });
// Ativos
const baseAt = J.filter(r => passAll(r, 'ativos'));
const ativos = barras('ativos', ATIVOS, baseAt, (r, v) => r.ativos.includes(v), (v, n, b) => v + ': ' + n + ' de ' + b + ' ' + plural(b, 'julgamento', 'julgamentos') + ' do filtro. Clique para ver só esses julgamentos nos demais gráficos.').sort((x, y) => y.n - x.n);
// Peso da prova técnica (só processos com dados do 1º grau)
const basePeso = J.filter(r => r.g1 && passAll(r, 'peso'));
const pesoDesc = { 'Determinante': 'a prova técnica foi decisiva para o resultado', 'Concorrente': 'a prova técnica pesou junto com outras provas', 'Indeterminável': 'não é possível dizer, pelos autos, quanto o laudo pesou', 'Não se aplica': 'não houve prova técnica a considerar', 'Sem registro': 'o campo está vazio na planilha' };
const pesos = barras('peso', PESOS, basePeso, (r, v) => r.peso === v, (v, n, b) => v + ' — ' + (pesoDesc[v] || 'rótulo da planilha') + ': ' + n + ' de ' + b + ' ' + plural(b, 'processo', 'processos') + ' com dados do 1º grau no filtro. Clique para filtrar.');
// Acolhimento do laudo: 1º grau (linhas) x 2º grau (colunas)
const baseAc = J.filter(r => r.g1 && passAll(r, 'acol'));
const ac1s = ACOLS.filter(a => J.some(r => r.g1 && r.ac1 === a)), ac2s = ACOLS.filter(a => J.some(r => r.g1 && r.ac2 === a));
const maxAc = Math.max(1, ...ac1s.flatMap(a => ac2s.map(b => baseAc.filter(r => r.ac1 === a && r.ac2 === b).length)));
const acol = { cols: ac2s.map(b => ({ k: b })), gtc: '120px repeat(' + ac2s.length + ', minmax(52px, 1fr))', base: baseAc.length, linhas: ac1s.map(a => ({ k: a, cells: ac2s.map(b => {
  const n = baseAc.filter(r => r.ac1 === a && r.ac2 === b).length; const key = a + ' → ' + b; const sel = has('acol', key);
  return { n: n ? String(n) : '·', bg: sel ? INK : n ? 'rgba(20,22,20,' + (0.08 + 0.5 * n / maxAc).toFixed(2) + ')' : '#FFFFFF', fg: sel ? '#FFFFFF' : (n / maxAc > 0.6 ? '#FFFFFF' : INK), bd: sel ? INK : '#E4E6E0', cur: n || sel ? 'pointer' : 'default',
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
  itens: honItens.map((h, i) => { const sel = has('juls', h.id); return { ...h, pos: String(i + 1), txt: brl(h.v), x: 100 * h.v / escala, sub: 'Nº ' + h.id + ' · ' + h.d + ' · ' + (honB === 'final' ? 'proposto' : 'fixado') + ': ' + outroTxt(h.outro), sel, bg: sel ? '#F1F7D9' : '#FFFFFF', bd: sel ? '#C9E43A' : '#ECEDE8', tip: 'Honorários periciais ' + (honB === 'final' ? 'fixados pelo juízo' : 'propostos pelo perito') + ': ' + brl(h.v) + ', no processo ' + h.cnj + ' (' + h.ativo.toLowerCase() + '). Clique para ver só este julgamento nos demais gráficos.', pick: () => tog('juls', h.id) }; }),
  semN: semValor.length, temSem: semValor.length > 0, semTxt: semValor.map(r => 'Nº ' + r.id).join(', ')
};
// Indicadores
const comPer = F.filter(r => r.pericia === 'Sim').length, aVer = F.filter(r => r.pericia === 'A verificar no processo').length;
const g1N = F.filter(r => r.g1).length;
const pesoBase = F.filter(r => ['Determinante', 'Concorrente', 'Indeterminável'].includes(r.peso));
const det = pesoBase.filter(r => r.peso === 'Determinante').length;
const camTxt = CAMS.map(c => c.replace(' Câmara Cível', '')).join(' e ') + (CAMS.length > 1 ? ' Câmaras Cíveis' : ' Câmara Cível');
const kpis = [
  { k: 'Julgamentos no filtro', v: N + ' de ' + T, s: 'Apelações da ' + camTxt + ', ' + ANO0 + '–' + ANO1, chip: 'Calculável', ...ck('ok'), ic: ICON.doc, icBg: '#F6F7F3', tip: 'Julgamentos de apelação da planilha que atendem aos filtros e seleções atuais, de um total de ' + T + '.' },
  { k: 'Com perícia realizada', v: N ? comPer + ' de ' + N : 'Sem base para cálculo', s: (N ? pctTxt(comPer, N) + ' do filtro' : '') + (aVer ? ' · ' + aVer + ' a verificar no processo' : ''), chip: aVer ? 'Com ressalvas' : 'Calculável', ...ck(aVer ? 'warn' : 'ok'), ic: ICON.pess, icBg: '#F6F7F3', tip: 'Julgamentos em que houve perícia realizada no processo (coluna PERÍCIA = SIM). Os marcados como “verificar no processo” não entram como sim nem como não.' },
  { k: 'Prova técnica determinante', v: pesoBase.length ? det + ' de ' + pesoBase.length : 'Sem base para cálculo', s: (pesoBase.length ? pctTxt(det, pesoBase.length) + ' dos classificados · ' : '') + g1N + ' ' + plural(g1N, 'processo', 'processos') + ' com dados do 1º grau', chip: 'Com ressalvas', ...ck('warn'), ic: ICON.laudo, icBg: '#D7F24B', tip: 'Entre os processos com o peso da prova técnica classificado (determinante, concorrente ou indeterminável), quantos tiveram a prova técnica como decisiva. Só os processos com dados do 1º grau têm essa classificação.' },
  { k: 'Honorários ' + hon.rotulo.toLowerCase(), v: hon.faixa, s: hon.nTxt + ' com valor · nominais, sem correção', chip: hon.tem ? 'Com ressalvas' : 'Sem base', ...ck(hon.tem ? 'warn' : 'pend'), ic: ICON.din, icBg: '#F6F7F3', tip: 'Menor e maior valor de honorários periciais ' + hon.rotulo.toLowerCase() + ' nos julgamentos do filtro. Valores da época, sem correção monetária.' }
];
const chipsProc = [].concat(
  (st.anos || []).map(a => ({ k: 'Ano ' + a, rm: () => tog('anos', a) })),
  (st.ativos || []).map(a => ({ k: a, rm: () => tog('ativos', a) })),
  (st.cam || []).map(a => ({ k: a, rm: () => tog('cam', a) })),
  (st.per || []).map(a => ({ k: 'Perícia: ' + a, rm: () => tog('per', a) })),
  (st.at || []).map(a => ({ k: 'Assistente técnico: ' + a, rm: () => tog('at', a) })),
  (st.peso || []).map(a => ({ k: 'Peso: ' + a, rm: () => tog('peso', a) })),
  (st.acol || []).map(a => ({ k: 'Laudo ' + a, rm: () => tog('acol', a) })),
  (st.juls || []).map(j => ({ k: 'Julgamento nº ' + j, rm: () => tog('juls', j) })),
  (st.g1f || []).map(k => { const [c, v] = k.split(SEP); const lb = (G1SEC.flatMap(x => x.cols).find(x => x[0] === c) || [c, c])[1]; return { k: lb + ': ' + v, rm: () => tog('g1f', k) }; }),
  q ? [{ k: 'Busca: “' + st.q + '”', rm: () => set({ q: '' }) }] : []);
const sorted = F.slice().sort((a, b) => st.asc ? iso(a.data).localeCompare(iso(b.data)) : iso(b.data).localeCompare(iso(a.data)));
const corSN = { 'Sim': ['#EAF5C6', '#3D5200'], 'Não': ['#F1F2EE', '#3E423C'], 'Não identificado': ['#FCEBD3', '#7A4300'], 'A verificar no processo': ['#FCEBD3', '#7A4300'] };
const cor = (v) => corSN[v] || ['#F1F2EE', '#5E625C'];
const curto = (s, n) => s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s;
const tabela = sorted.map(r => ({ ...r, ativoT: r.ativos.join('; ') || '—', perBg: cor(r.pericia)[0], perFg: cor(r.pericia)[1], atT: r.at, atBg: cor(r.at)[0], atFg: cor(r.at)[1], pesoT: r.peso || '—', peritoT: r.perito ? curto(r.perito, 90) : '—', peritoTip: r.perito || 'Sem perito registrado na planilha', camT: r.camara.replace(' Câmara Cível', ' Câmara'), jBg: has('juls', r.id) ? '#D7F24B' : '#F6F7F3', pick: () => tog('juls', r.id) }));

// Seções do processo de 1º grau
const CATORD = ['Sim', 'Não', 'Ambas as partes', 'Autor', 'Réu', 'Autor e réu', 'Deferida', 'Indeferida', 'Múltiplas decisões', 'Cadastro judicial', 'Nenhum', '1 perito', '2 peritos', '3 peritos', 'Não identificado', 'Não se aplica', 'Sem registro'];
const CINZA = ['Não identificado', 'Não se aplica', 'Sem registro'];
const g1secoes = G1SEC.map(sc => ({ t: sc.t, d: sc.d,
  itens: sc.cols.map(([col, lb]) => {
    const base = J.filter(r => r.c[col] !== null && passAll(r, 'g1:' + col));
    const cats = ordem(J.map(r => r.c[col]), CATORD);
    const mx = Math.max(1, ...cats.map(v => base.filter(r => r.c[col] === v).length));
    const tem = (g1Sel[col] || []).length > 0;
    return { q: lb, nTxt: base.length + ' ' + plural(base.length, 'processo', 'processos'), cats: cats.map(v => { const n = base.filter(r => r.c[col] === v).length; const key = col + SEP + v; const sel = has('g1f', key);
      return { k: v, n, w: 100 * n / mx, fw: sel ? 700 : 500, op: tem && !sel ? 0.5 : 1, bar: sel ? STRIPE : (CINZA.includes(v) ? '#B9BCB4' : INK), tip: lb + ' — ' + v + ': ' + n + ' de ' + base.length + ' ' + plural(base.length, 'processo', 'processos') + ' (' + pctTxt(n, base.length) + '). Clique para filtrar o painel.', pick: () => tog('g1f', key) }; }) };
  }),
  temTxt: !!sc.txt && F.some(r => r.tx[sc.txt[0]]), txtT: sc.txt ? sc.txt[1] : '', textos: sc.txt ? F.filter(r => r.tx[sc.txt[0]]).map(r => ({ id: r.id, cnj: r.cnj, txt: r.tx[sc.txt[0]] })) : []
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
const PAL = ['#141614', '#C9E43A', '#7D8B2F', '#A9AEA3', '#E1E3DC', '#FFFFFF'];
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
  const estilo = (row, val, top, padrao) => { const sel = isSel(row, val); const ts = rowTemSel(row); return { sel, op: ts && !sel ? 0.4 : 1, rbg: sel ? '#F1F7D9' : 'transparent', cor: sel ? INK : (top ? STRIPE : padrao) }; };
  const verbo = (n, isMulti) => isMulti ? plural(n, 'marcou', 'marcaram') : plural(n, 'respondeu', 'responderam');
  // Elegibilidade: só quem respondeu "Sim" na pergunta de contexto
  const eleg = (row, ctx, ctxTxt) => { const base = idxFor(row); const ids = base.filter(i => (D[ctx][i] || '').indexOf('Sim') === 0); const fora = base.filter(i => (D[ctx][i] || '').indexOf('Sim') !== 0 && D[row][i]).length; return { ids, base: (r, isMulti) => 'Base: ' + r.R + ' de ' + ids.length + ' elegíveis (responderam “Sim” ' + ctxTxt + ')' + (fora ? ' · ' + fora + ' ' + plural(fora, 'resposta', 'respostas') + ' de quem não confirmou essa situação ' + plural(fora, 'foi mantida', 'foram mantidas') + ' na planilha e ' + plural(fora, 'excluída', 'excluídas') + ' aqui' : '') + (isMulti ? ' · múltipla escolha' : '') }; };
  const hbar = (row, t, isMulti, opt) => { opt = opt || {}; const r = contar(row, isMulti, opt.ids); const rows = opt.cats ? opt.cats.map(k => ({ k, n: r.c[k] || 0 })) : ord(r.c); return card({ isH: true, t, q: QQ[row], fx: opt.fx || '1 1 360px', rows: rows.map((x, i) => { const e = estilo(row, x.k, !opt.cats && i === 0, opt.cats ? INK : GRAY); return { k: lbl(x.k), txt: x.n + ' de ' + r.R + ' · ' + pctTxt(x.n, r.R), w: r.R ? 100 * x.n / r.R : 0, ...e, tip: nU(x.n) + ' de ' + r.R + ' com resposta (' + pctTxt(x.n, r.R) + ') ' + verbo(x.n, isMulti) + ' “' + lbl(x.k) + '” em: ' + lc(t) + '.' + CL, pick: () => togS(row, x.k, isMulti ? 'm' : 's', t) }; }), base: r.R ? (opt.base ? opt.base(r, isMulti) : baseTxt(r, isMulti, opt.extra)) : semBase }); };
  const vbar = (row, t, cats, opt) => { opt = opt || {}; const r = contar(row, false, opt.ids); const rows = cats ? cats.map(k => ({ k, n: r.c[k] || 0 })) : ord(r.c); const mx = Math.max(1, ...rows.map(x => x.n)); return card({ isV: true, t, q: QQ[row], fx: opt.fx || '1 1 360px', rows: rows.map(x => { const top = x.n === mx && x.n > 0; const e = estilo(row, x.k, top, '#D3D6CE'); return { k: x.k, n: x.n + ' · ' + pctTxt(x.n, r.R), h: Math.max(4, Math.round(120 * x.n / mx)), ...e, tagBg: top || e.sel ? INK : 'transparent', tagFg: top || e.sel ? '#FFFFFF' : MUTE, tip: nU(x.n) + ' de ' + r.R + ' (' + pctTxt(x.n, r.R) + ') ' + verbo(x.n, false) + ' “' + x.k + '” em: ' + lc(t) + '.' + CL, pick: () => togS(row, x.k, 's', t) }; }), base: r.R ? (opt.base ? opt.base(r, false) : baseTxt(r, false, opt.extra)) : semBase }); };
  const vesc = (row, t, opt) => { opt = opt || {}; const ids = idxFor(row); const vals = ids.map(i => D[row][i]); const nums = vals.map(escN).filter(v => v !== null); const ns = vals.filter(isNS).length; const aus = vals.filter(v => !v).length; const cats = [1, 2, 3, 4, 5].map(k => ({ k: String(k), n: nums.filter(v => v === k).length, ns: false })); if (cfg.temNS) cats.push({ k: 'NS', n: ns, ns: true }); const mx = Math.max(1, ...cats.map(x => x.n)); const top = Math.max(0, ...cats.filter(x => !x.ns).map(x => x.n)); return card({ isV: true, t, q: QQ[row], fx: opt.fx || '1 1 300px', rows: cats.map(x => { const hi = !x.ns && x.n === top && x.n > 0; const e = estilo(row, x.k, hi, x.ns ? STRIPE_G : '#D3D6CE'); return { k: x.ns ? 'Não sabe' : RT(row)[+x.k - 1], n: String(x.n), h: Math.max(4, Math.round(120 * x.n / mx)), ...e, tagBg: hi || e.sel ? INK : 'transparent', tagFg: hi || e.sel ? '#FFFFFF' : MUTE, tip: x.ns ? nU(x.n) + ' ' + plural(x.n, 'respondeu que não sabe', 'responderam que não sabem') + ' avaliar: ' + lc(t) + '.' + CL : nU(x.n) + ' ' + plural(x.n, 'respondeu', 'responderam') + ' “' + RT(row)[+x.k - 1] + '” (' + x.k + ' de 5) em: ' + lc(t) + '.' + CL, pick: () => togS(row, x.k, 'e', t) }; }), base: nums.length ? 'Mediana: ' + medL(nums, RT(row)) + ' · ' + nums.length + ' respostas na escala' + (ns ? ' · ' + ns + ' não sabem (fora da mediana)' : '') + (aus ? ' · ' + aus + ' sem resposta' : '') + ' · escala de 1 (' + RT(row)[0].toLowerCase() + ') a 5 (' + RT(row)[4].toLowerCase() + ')' : semBase }); };
  const donut = (row, t, isMulti, opt) => { opt = opt || {}; const r = contar(row, isMulti, opt.ids, opt.filtro); const rows = ord(r.c); const tot = rows.reduce((s, x) => s + x.n, 0); let acc = 0; const segs = rows.map((x, i) => { const a0 = acc; acc += 360 * x.n / (tot || 1); const cor = rowTemSel(row) && !isSel(row, x.k) ? '#ECEDE8' : PAL[i % PAL.length]; return cor + ' ' + a0.toFixed(2) + 'deg ' + acc.toFixed(2) + 'deg'; }); return card({ isD: true, t, q: QQ[row], fx: opt.fx || '1 1 320px', grad: tot ? 'conic-gradient(' + segs.join(', ') + ')' : '#E6E8E2', cv: String(r.R), cs: unPl + ' com resposta', aria: t + ': ' + rows.map(x => x.k + ' ' + x.n).join('; '), ring: t + ' — ' + rows.map(x => lbl(x.k) + ': ' + nU(x.n) + ' (' + pctTxt(x.n, r.R) + ')').join('; ') + '. Clique na legenda para filtrar.', rows: rows.map((x, i) => { const e = estilo(row, x.k, false, PAL[i % PAL.length]); return { k: lbl(x.k), ...e, cor: PAL[i % PAL.length], txt: x.n + ' · ' + pctTxt(x.n, r.R), tip: nU(x.n) + ' de ' + r.R + ' (' + pctTxt(x.n, r.R) + ') ' + verbo(x.n, isMulti) + ' “' + lbl(x.k) + '” em: ' + lc(t) + '.' + CL, pick: () => togS(row, x.k, isMulti ? 'm' : 's', t) }; }), base: r.R ? (opt.base ? opt.base(r, isMulti) : baseTxt(r, isMulti, isMulti ? 'fatias = proporção das ' + tot + ' marcações; legenda = ' + unPl + ' que marcaram' : opt.extra)) : semBase }); };
  const desc = (row, t, opt) => { opt = opt || {}; const ids = idxFor(row); const vals = ids.map(i => D[row][i]); const nums = vals.map(escN).filter(v => v !== null); const ns = vals.filter(isNS).length; const aus = vals.filter(v => !v).length; const R = nums.length + ns; const cats = [1, 2, 3, 4, 5].map(k => ({ k: String(k), rot: RT(row)[k - 1], n: nums.filter(v => v === k).length })).concat(cfg.temNS ? [{ k: 'NS', rot: 'Não sei responder', n: ns }] : []).filter(x => x.n > 0); const ESCPAL = { 1: '#E1E3DC', 2: '#A9AEA3', 3: '#C9E43A', 4: '#7D8B2F', 5: '#141614', NS: '#E3D3AE' }; let acc = 0; const segs = cats.map(x => { const a0 = acc; acc += 360 * x.n / (R || 1); const cor = rowTemSel(row) && !isSel(row, x.k) ? '#ECEDE8' : ESCPAL[x.k]; return cor + ' ' + a0.toFixed(2) + 'deg ' + acc.toFixed(2) + 'deg'; }); return card({ isD: true, t, q: QQ[row], fx: opt.fx || '1 1 320px', grad: R ? 'conic-gradient(' + segs.join(', ') + ')' : '#E6E8E2', cv: String(R), cs: unPl + ' com resposta', aria: t + ': ' + cats.map(x => x.rot + ' ' + x.n).join('; '), ring: t + ' — ' + cats.map(x => x.rot + ': ' + nU(x.n) + ' (' + pctTxt(x.n, R) + ')').join('; ') + '. Clique na legenda para filtrar.', rows: cats.map(x => { const e = estilo(row, x.k, false, ESCPAL[x.k]); return { k: x.rot, ...e, cor: ESCPAL[x.k], txt: x.n + ' · ' + pctTxt(x.n, R), tip: nU(x.n) + ' de ' + R + ' (' + pctTxt(x.n, R) + ') ' + verbo(x.n, false) + ' “' + x.rot + '” em: ' + lc(t) + '.' + CL, pick: () => togS(row, x.k, 'e', t) }; }), base: R ? 'Mediana: ' + medL(nums, RT(row)) + (ns ? ' · ' + ns + ' não sabem (fora da mediana)' : '') + (aus ? ' · ' + aus + ' sem resposta' : '') + ' · base: ' + R + ' de ' + ids.length + ' ' + unPl : semBase }); };
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
const SIMNAO = [['Sim', 'Sim', INK], ['Não', 'Não', '#D3D6CE']];
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
  ? [mkDd('anos', 'Ano', 'Ano do julgamento', fAnos), mkDd('ativos', 'Patente / ativo', 'Ativo discutido (coluna ATIVO DE PI)', fAtivos), mkDd('cam', 'Câmara', 'Órgão julgador', fCam), mkDd('per', 'Perícia', 'Houve perícia nos autos?', fPer), mkDd('at', 'Assistente técnico', 'Houve assistente técnico? (processos com dados do 1º grau)', fAT)]
  : tab === 'per'
  ? [mkDd('pAtivos', 'Ativo periciado', 'Ativos que o perito já periciou', fPAt), mkDd('forms', 'Formação', 'Formação de graduação', fForm), mkDd('tempos', 'Tempo como perito', 'Tempo de atuação como perito judicial', fTempo)]
  : [mkDd('mAtivos', 'Ativo de PI', 'Ativo de PI (restringe os gráficos por ativo)', fMAt), mkDd('graus', 'Instância', 'Grau de jurisdição', fGrau), mkDd('amostra', 'Amostra', 'Questionários 09 e 10 (respostas idênticas)', fAmostra, true)];
const nota = tab === 'proc' ? 'clique em barras, valores ou julgados para filtrar os demais gráficos' : 'clique em qualquer barra, legenda, segmento ou célula para filtrar os demais gráficos';
return {
  ...HD, chipBase, chips: chipsAll, dds, nota,
  isProc: tab === 'proc', isSurvey: tab !== 'proc', isPer: tab === 'per', isMag: tab === 'mag', tProc: tb('proc'), tPer: tb('per'), tMag: tb('mag'),
  goProc: () => set({ tab: 'proc', open: null }), goPer: () => set({ tab: 'per', open: null }), goMag: () => set({ tab: 'mag', open: null }),
  limpar: () => set({ anos: [], ativos: [], cam: [], per: [], peso: [], acol: [], g1f: [], at: [], juls: [], q: '', forms: [], tempos: [], pAtivos: [], pSel: [], graus: [], mAtivos: [], mSel: [], amostra: null, open: null }),
  proc: { anosCard, anosBase: baseY.length, exportar: () => { const cab = ['Nº', 'Processo (CNJ)', 'Data do julgamento', 'Câmara', 'Ativo', 'Perícia', 'Assistente técnico', 'Peso do laudo', 'Laudo no 1º grau', 'Laudo no 2º grau', 'Honorários (valor inicial)', 'Honorários (valor final)', 'Perito(s)']; const hv = (h) => h.st === 'valor' ? brl(h.v) : h.st === 'ni' ? 'Não identificado' : ''; const q2 = (v) => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"'; const linhas = [cab].concat(tabela.map(r => [r.id, r.cnj, r.data, r.camara, r.ativoT, r.pericia, r.atT, r.peso || '', r.ac1 || '', r.ac2 || '', hv(r.honI), hv(r.honF), r.perito])).map(l => l.map(q2).join(';')).join('\r\n'); const blob = new Blob(['\ufeff' + linhas], { type: 'text/csv;charset=utf-8' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'julgamentos_filtrados_' + new Date().toISOString().slice(0, 10) + '.csv'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500); }, N, kpis, hon, ativos, pesos, pesoBase: basePeso.length, acol, g1secoes, g1Base, tabela, fonte: fonteTxt, vazio: N === 0, q: st.q || '', onQ: (e) => set({ q: e.target.value }), sort: () => set({ asc: !st.asc }), sortLbl: st.asc ? '↑ antigas' : '↓ recentes' },
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
__o += "<span" + " style=\"flex: 1 1 0\"" + ">";
__o += "</span>";
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((vm.limpar)) + "\"" + " style=\"border: 1px solid #E4E6E0; background: #F6F7F3; color: #141614; border-radius: 999px; padding: 9px 14px; font-size: 12.5px; font-weight: 500; cursor: pointer\"" + ">";
__o += "Limpar todos";
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
__o += "<div" + " style=\"background: #F6F7F3; border-radius: 14px; padding: 16px 14px 12px; display: flex; align-items: flex-end; gap: 12px; height: 220px\"" + ">";
__o += "\n";
for (const y of ((vm.proc?.anosCard) || [])) {
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((y?.pick)) + "\"" + " aria-pressed=\"" + esc((y?.sel)) + "\"" + " title=\"" + esc((y?.tip)) + "\"" + " style=\"" + "flex: 1; min-width: 0; height: 100%; border: 0; border-radius: 10px; padding: 4px 2px 0; cursor: pointer; color: #141614; background: " + esc((y?.rbg)) + "; opacity: " + esc((y?.op)) + "; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; gap: 6px" + "\"" + ">";
__o += "\n";
__o += "<span" + " style=\"" + "font-size: 11.5px; font-weight: 700; background: " + esc((y?.tagBg)) + "; color: " + esc((y?.tagFg)) + "; border-radius: 6px; padding: 2px 8px" + "\"" + ">";
__o += esc((y?.n));
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"" + "width: 100%; max-width: 88px; height: " + esc((y?.h)) + "px; border-radius: 8px; background: " + esc((y?.bar)) + "\"" + ">";
__o += "</span>";
__o += "\n";
__o += "<span" + " style=\"font-size: 12px; color: #5E625C\"" + ">";
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
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 15px; font-weight: 600\"" + ">";
__o += "Julgamentos por ano";
__o += "</h2>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; line-height: 1.55; color: #5E625C\"" + ">";
__o += "Julgamentos de apela\u00e7\u00e3o por ano da decis\u00e3o, entre os " + esc((vm.proc?.anosBase)) + " que atendem aos demais filtros. Anos sem julgamento na planilha aparecem com zero. Clique numa barra para filtrar.";
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
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 15px; font-weight: 600\"" + ">";
__o += "Ativos discutidos nos julgamentos";
__o += "</h2>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; line-height: 1.55; color: #5E625C\"" + ">";
__o += "Julgamentos por ativo de propriedade intelectual, conforme a coluna ATIVO DE PI. Um julgamento pode envolver dois ativos, ent\u00e3o a soma passa do total. Clique numa barra para filtrar.";
__o += "</p>";
__o += "\n";
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
__o += "<div" + " style=\"background: #F6F7F3; border-radius: 14px; padding: 16px; display: flex; flex-direction: column; gap: 10px\"" + ">";
__o += "\n";
for (const a of ((vm.proc?.pesos) || [])) {
__o += "\n";
__o += "<button" + " data-ev=\"click:" + reg((a?.pick)) + "\"" + " aria-pressed=\"" + esc((a?.sel)) + "\"" + " title=\"" + esc((a?.tip)) + "\"" + " style=\"" + "display: grid; grid-template-columns: minmax(110px, 150px) 1fr 34px; align-items: center; gap: 12px; border: 0; background: transparent; padding: 2px 0; cursor: pointer; text-align: left; font-size: 12.5px; color: #141614; opacity: " + esc((a?.op)) + "\"" + ">";
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
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 15px; font-weight: 600\"" + ">";
__o += "Peso da prova t\u00e9cnica na decis\u00e3o";
__o += "</h2>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; line-height: 1.55; color: #5E625C\"" + ">";
__o += "Classifica\u00e7\u00e3o registrada na planilha para os " + esc((vm.proc?.pesoBase)) + " processos do filtro com dados do 1\u00ba grau. Os demais julgamentos ainda n\u00e3o t\u00eam essa an\u00e1lise. Clique numa barra para filtrar.";
__o += "</p>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</article>";
__o += "\n\n";
__o += "<article" + " style=\"background: #FFFFFF; border: 1px solid #E7E8E3; border-radius: 20px; padding: 20px; display: flex; flex-direction: column; gap: 16px; box-shadow: 0 2px 10px rgba(20,22,20,0.04)\"" + ">";
__o += "\n";
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
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 15px; font-weight: 600\"" + ">";
__o += "O laudo no 1\u00ba e no 2\u00ba grau";
__o += "</h2>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; line-height: 1.55; color: #5E625C\"" + ">";
__o += "Como o laudo pericial foi acolhido na senten\u00e7a (linhas) e no ac\u00f3rd\u00e3o (colunas), nos " + esc((vm.proc?.acol?.base)) + " processos do filtro com dados do 1\u00ba grau. \u201cN\u00e3o se aplica\u201d corresponde ao \u201c-\u201d da planilha; \u201cSem registro\u201d, a campo vazio. Clique numa c\u00e9lula para filtrar.";
__o += "</p>";
__o += "\n";
__o += "</div>";
__o += "\n";
__o += "</article>";
__o += "\n";
__o += "</div>";
__o += "\n\n";
__o += "<div" + " style=\"display: flex; flex-direction: column; gap: 6px; padding: 8px 4px 0\"" + ">";
__o += "\n";
__o += "<h2" + " style=\"margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.01em\"" + ">";
__o += "No processo de 1\u00ba grau";
__o += "</h2>";
__o += "\n";
__o += "<p" + " style=\"margin: 0; font-size: 12.5px; line-height: 1.55; color: #5E625C; max-width: 760px\"" + ">";
__o += "Como a per\u00edcia correu no processo de conhecimento ligado a cada ac\u00f3rd\u00e3o. H\u00e1 dados do 1\u00ba grau para " + esc((vm.proc?.g1Base)) + " dos " + esc((vm.proc?.N)) + " julgamentos do filtro; os demais ainda n\u00e3o foram analisados. Barras cinza: n\u00e3o se aplica, n\u00e3o identificado ou sem registro. Clique numa barra para filtrar o painel.";
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
__o += "N\u00ba " + esc((x?.id));
__o += "</strong>";
__o += " \u00b7 " + esc((x?.cnj)) + " \u2014 " + esc((x?.txt));
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
__o += "<input" + " id=\"busca\"" + " type=\"search\"" + " aria-label=\"Buscar\"" + " value=\"" + esc((vm.proc?.q)) + "\"" + " data-ev=\"input:" + reg((vm.proc?.onQ)) + "\"" + " placeholder=\"CNJ, ativo, perito\u2026\"" + " style=\"flex: 1; min-width: 0; border: 0; background: transparent; padding: 9px 0; font-size: 12.5px; outline: none\"" + ">";
__o += "</label>";
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
__o += "<table" + " style=\"width: 100%; min-width: 1080px; font-size: 12.5px\"" + ">";
__o += "\n";
__o += "<thead" + ">";
__o += "<tr" + " style=\"background: #F6F7F3; color: #5E625C\"" + ">";
__o += "<th" + " style=\"padding: 10px 18px; font-weight: 500\"" + ">";
__o += "N\u00ba";
__o += "</th>";
__o += "<th" + " style=\"padding: 10px 12px; font-weight: 500\"" + ">";
__o += "Processo (CNJ)";
__o += "</th>";
__o += "<th" + " style=\"padding: 10px 12px; font-weight: 500\"" + ">";
__o += "Data";
__o += "</th>";
__o += "<th" + " style=\"padding: 10px 12px; font-weight: 500\"" + ">";
__o += "C\u00e2mara";
__o += "</th>";
__o += "<th" + " style=\"padding: 10px 12px; font-weight: 500\"" + ">";
__o += "Ativo";
__o += "</th>";
__o += "<th" + " style=\"padding: 10px 12px; font-weight: 500\"" + ">";
__o += "Per\u00edcia";
__o += "</th>";
__o += "<th" + " style=\"padding: 10px 12px; font-weight: 500\"" + ">";
__o += "Assistente t\u00e9cnico";
__o += "</th>";
__o += "<th" + " style=\"padding: 10px 12px; font-weight: 500\"" + ">";
__o += "Peso do laudo";
__o += "</th>";
__o += "<th" + " style=\"padding: 10px 18px; font-weight: 500\"" + ">";
__o += "Perito(s), conforme a planilha";
__o += "</th>";
__o += "</tr>";
__o += "</thead>";
__o += "\n";
__o += "<tbody" + ">";
__o += "\n";
for (const r of ((vm.proc?.tabela) || [])) {
__o += "\n";
__o += "<tr" + " style=\"border-top: 1px solid #ECEDE8\"" + ">";
__o += "<td" + " style=\"padding: 8px 12px 8px 14px\"" + ">";
__o += "<button" + " data-ev=\"click:" + reg((r?.pick)) + "\"" + " title=\"Mostrar s\u00f3 este julgamento nos gr\u00e1ficos (clique de novo para desfazer)\"" + " style=\"" + "border: 0; border-radius: 999px; padding: 4px 10px; font-size: 12.5px; font-weight: 600; cursor: pointer; color: #141614; background: " + esc((r?.jBg)) + "\"" + ">";
__o += esc((r?.id));
__o += "</button>";
__o += "</td>";
__o += "<td" + " style=\"padding: 11px 12px; color: #3E423C; white-space: nowrap\"" + ">";
__o += esc((r?.cnj));
__o += "</td>";
__o += "<td" + " style=\"padding: 11px 12px\"" + ">";
__o += esc((r?.data));
__o += "</td>";
__o += "<td" + " style=\"padding: 11px 12px; white-space: nowrap\"" + ">";
__o += esc((r?.camT));
__o += "</td>";
__o += "<td" + " style=\"padding: 11px 12px\"" + ">";
__o += esc((r?.ativoT));
__o += "</td>";
__o += "<td" + " style=\"padding: 11px 12px\"" + ">";
__o += "<span" + " style=\"" + "border-radius: 999px; padding: 3px 9px; font-size: 11px; font-weight: 600; white-space: nowrap; background: " + esc((r?.perBg)) + "; color: " + esc((r?.perFg)) + "\"" + ">";
__o += esc((r?.pericia));
__o += "</span>";
__o += "</td>";
__o += "<td" + " style=\"padding: 11px 12px\"" + ">";
__o += "<span" + " style=\"" + "border-radius: 999px; padding: 3px 9px; font-size: 11px; font-weight: 600; white-space: nowrap; background: " + esc((r?.atBg)) + "; color: " + esc((r?.atFg)) + "\"" + ">";
__o += esc((r?.atT));
__o += "</span>";
__o += "</td>";
__o += "<td" + " style=\"padding: 11px 12px\"" + ">";
__o += esc((r?.pesoT));
__o += "</td>";
__o += "<td" + " title=\"" + esc((r?.peritoTip)) + "\"" + " style=\"padding: 11px 18px; color: #3E423C; max-width: 320px\"" + ">";
__o += esc((r?.peritoT));
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
