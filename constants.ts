import { Campaign } from './types';

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'setembro-amarelo',
    title: 'Setembro Amarelo',
    description: 'A campanha de prevenção ao suicídio que salva vidas.',
    longDescription: 'Setembro Amarelo é uma campanha essencial que ilumina um tema muitas vezes cercado de tabus: a prevenção ao suicídio. Iniciada no Brasil em 2015, a campanha ganha força em setembro, mês que sedia o Dia Mundial de Prevenção do Suicídio (10/09). O objetivo é claro: quebrar o silêncio, promover o diálogo e mostrar que a busca por ajuda é um ato de coragem. Falar é a melhor solução e pode salvar vidas.',
    image: 'https://i.imgur.com/nVRhO1w.jpeg',
    logo: 'https://i.imgur.com/OKReyaz.png',
    objectPosition: 'object-right',
    colors: {
      bg: 'from-gray-900 via-gray-900 to-yellow-900/20',
      text: 'text-yellow-200',
      accent: 'bg-yellow-400',
      accentHover: 'hover:bg-yellow-500',
      ring: 'ring-yellow-400',
      neon: '#facc15',
      neonGlow: '#fef08a'
    },
    details: {
      symptoms: {
        title: 'Sinais de Alerta',
        items: [
          'Isolamento social e familiar',
          'Mudanças drásticas de humor',
          'Falar sobre morte ou suicídio com frequência',
          'Perda de interesse em atividades que antes gostava',
          'Comportamento autodestrutivo (abuso de álcool/drogas)',
          'Frases como "Eu quero sumir" ou "Não aguento mais"',
        ],
        source: { name: 'Ministério da Saúde', url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/suicidio' }
      },
      stats: {
        title: 'Dados sobre o Suicídio',
        items: [
          {
            value: '16.262',
            label: 'Vidas perdidas',
            description: 'Número de suicídios registrados no Brasil.',
            year: 2022,
            source: 'UOL / Agenda do Poder',
          },
          {
            value: '44',
            label: 'Suicídios por dia',
            description: 'Média de suicídios por dia no Brasil durante o ano de 2022.',
            year: 2022,
            source: 'Agência Cidades',
          },
          {
            value: '1 morte',
            label: 'A cada 32 minutos',
            description: 'Com 16.262 suicídios em 2022, o Brasil registrou uma morte por suicídio a cada 32 minutos.',
            year: 2022,
            source: 'NAT',
          },
        ],
      },
      prevention: {
        title: 'Prevenção e Cuidados',
        items: [
          'Converse abertamente sobre seus sentimentos.',
          'Pratique atividades físicas regularmente.',
          'Mantenha uma rotina de sono saudável.',
          'Evite o consumo de álcool e drogas.',
          'Busque ajuda profissional ao primeiro sinal de alerta.',
          'Esteja presente e ofereça apoio a amigos e familiares.',
        ],
        source: { name: 'CVV (Centro de Valorização da Vida)', url: 'https://www.cvv.org.br/blog/prevencao-do-suicidio-2/' }
      },
      riskFactors: {
        title: 'Fatores de Risco',
        items: [
          'Histórico de transtornos mentais (depressão, bipolaridade, esquizofrenia).',
          'Tentativas prévias de suicídio.',
          'Abuso de álcool e outras drogas.',
          'Histórico familiar de suicídio ou transtornos mentais.',
          'Isolamento social e falta de apoio.',
          'Eventos estressantes recentes (perda de emprego, luto, divórcio).',
        ],
        source: { name: 'Associação Brasileira de Psiquiatria', url: 'https://www.abp.org.br/post/fatores-de-risco-para-o-suic%C3%ADdio' }
      },
      patientRights: {
        title: 'Direitos do Paciente',
        items: [
          {
            name: 'Lei da Reforma Psiquiátrica (Lei 10.216/2001)',
            description: 'Garante a proteção e os direitos das pessoas com transtornos mentais, priorizando o tratamento em serviços comunitários e buscando a reinserção social.',
            source: { name: 'Planalto.gov.br', url: 'https://www.planalto.gov.br/ccivil_03/leis/leis_2001/l10216.htm' }
          },
          {
            name: 'Auxílio-Doença',
            description: 'Pessoas com transtornos mentais graves que as incapacitem para o trabalho têm direito ao auxílio-doença pelo INSS, mediante perícia médica.',
            source: { name: 'INSS', url: 'https://www.gov.br/inss/pt-br/beneficios/beneficio-por-incapacidade-temporaria' }
          },
          {
            name: 'Atendimento Confidencial e Gratuito',
            description: 'O SUS oferece atendimento psicológico e psiquiátrico gratuito e confidencial através dos CAPS (Centros de Atenção Psicossocial).',
            source: { name: 'Ministério da Saúde', url: 'https://www.gov.br/saude/pt-br/acesso-a-informacao/acoes-e-programas/caps' }
          }
        ]
      },
      tips: {
        title: 'Dica de Cuidado',
        items: [
          'Lembre-se: seus sentimentos são válidos. Não hesite em compartilhá-los com alguém de confiança.',
          'Uma pequena pausa durante o dia pode fazer uma grande diferença. Respire fundo por um minuto.',
          'Acolher alguém que está sofrendo, sem julgamentos, pode ser o primeiro passo para salvar uma vida.',
          'Não subestime o poder de uma boa noite de sono para a sua saúde mental.',
          'Celebrar pequenas conquistas diárias ajuda a manter uma perspectiva positiva.',
        ]
      },
      supporterGuide: {
        title: 'Guia para Apoiadores',
        scenarios: [
            {
                scenario: "Um amigo diz: 'Eu sinto que sou um fardo para todos. Seria melhor se eu não estivesse aqui.' O que você responde?",
                goodResponse: {
                    text: "“Estou aqui por você. Seus sentimentos são importantes e quero te ajudar a encontrar apoio.”",
                    explanation: "Valida os sentimentos da pessoa, oferece apoio incondicional e direciona para ajuda profissional, sem julgamentos."
                },
                badResponse: {
                    text: "“Não diga isso! Sua vida é ótima, você tem que pensar positivo.”",
                    explanation: "Minimiza o sofrimento da pessoa, pode gerar culpa e não oferece uma solução prática para a dor que ela está sentindo."
                }
            },
            {
                scenario: "Alguém próximo parece muito isolado e triste. Você decide abordar a pessoa. Como você começa a conversa?",
                goodResponse: {
                    text: "“Tenho notado que você parece um pouco distante ultimamente. Quer conversar sobre o que está sentindo? Estou aqui para ouvir.”",
                    explanation: "Mostra que você se importa, abre um espaço seguro para o diálogo e oferece escuta sem pressão ou julgamento."
                },
                badResponse: {
                    text: "“Você precisa sair mais, se animar! Deixe de ser tão pessimista.”",
                    explanation: "Oferece conselhos simplistas, ignora a complexidade do problema e pode fazer a pessoa se sentir ainda mais incompreendida."
                }
            },
            {
                scenario: "Durante uma conversa, uma pessoa menciona 'não aguentar mais'. Qual sua reação imediata?",
                goodResponse: {
                    text: "“Isso soa muito pesado. Você não está sozinho(a) nisso. Vamos encontrar ajuda juntos.”",
                    explanation: "Leva a sério o sinal de alerta, oferece companhia e reforça a ideia de que buscar ajuda é um passo a ser dado em conjunto."
                },
                badResponse: {
                    text: "“Todo mundo passa por fases ruins. Eu já passei por coisa pior e superei.”",
                    explanation: "Transforma a conversa em uma competição de sofrimento, diminuindo a dor da outra pessoa e não oferecendo o apoio necessário."
                }
            }
        ]
      },
      help: {
        title: 'Onde Buscar Ajuda',
        items: [
          {
            name: 'CVV (Centro de Valorização da Vida)',
            description: 'Apoio emocional e prevenção do suicídio, atendendo voluntária e gratuitamente todas as pessoas que querem e precisam conversar, sob total sigilo por telefone, email e chat 24 horas todos os dias.',
            link: 'https://www.cvv.org.br/',
            phone: '188',
          },
          {
            name: 'CAPS (Centros de Atenção Psicossocial)',
            description: 'Procure o CAPS mais próximo na sua cidade para atendimento especializado em saúde mental pelo SUS.',
            link: 'https://www.gov.br/saude/pt-br/acesso-a-informacao/acoes-e-programas/caps',
          },
        ],
      },
      quiz: {
        title: 'Teste seus conhecimentos',
        questions: [
          {
            question: 'Qual é o principal objetivo do Setembro Amarelo?',
            options: [
              'Falar sobre alimentação saudável',
              'Prevenir o suicídio e promover saúde mental',
              'Combater doenças infecciosas',
              'Estimular a prática esportiva',
            ],
            correctAnswerIndex: 1,
            explanation: 'Correto! O Setembro Amarelo foca na conscientização sobre a prevenção do suicídio e a importância de cuidar da saúde mental, quebrando tabus e incentivando a busca por ajuda.',
          },
          {
            question: 'O que simboliza a cor amarela na campanha?',
            options: [
              'Alegria e esperança',
              'Cautela',
              'Dinheiro',
              'Tristeza',
            ],
            correctAnswerIndex: 0,
            explanation: 'Correto! Inspirado no laço amarelo usado por amigos de um jovem que cometeu suicídio, a cor representa a vida, a luz e a esperança.',
          },
          {
            question: 'Quando o Setembro Amarelo começou oficialmente no Brasil?',
            options: [
              '2010',
              '2015',
              '2018',
              '2020',
            ],
            correctAnswerIndex: 1,
            explanation: 'Correto! A campanha foi iniciada no Brasil em 2015 pelo CVV (Centro de Valorização da Vida), CFM (Conselho Federal de Medicina) e ABP (Associação Brasileira de Psiquiatria).',
          },
          {
            question: 'Qual é a frase que resume o espírito da campanha?',
            options: [
              '“Fale sobre isso”',
              '“Evite o assunto”',
              '“Siga em silêncio”',
              '“Não compartilhe”',
            ],
            correctAnswerIndex: 0,
            explanation: 'Correto! "Falar é a melhor solução" é um dos lemas. A campanha incentiva o diálogo aberto como uma das principais ferramentas para a prevenção e quebra de estigmas.',
          },
          {
            question: 'O que uma pessoa pode fazer para ajudar alguém em sofrimento emocional?',
            options: [
              'Ignorar o problema',
              'Julgar as atitudes',
              'Ouvir e orientar a buscar ajuda profissional',
              'Dizer que é “frescura”',
            ],
            correctAnswerIndex: 2,
            explanation: 'Correto! A escuta empática, sem julgamentos, e o incentivo à busca por ajuda profissional são as atitudes mais importantes e eficazes para apoiar alguém.',
          },
        ]
      },
      mythsVsTruths: {
        title: 'Mitos vs. Verdades',
        items: [
          {
            topic: 'Você acha que o suicídio acontece por uma única causa?',
            statement: 'O suicídio acontece por uma única causa.',
            isMyth: true,
            explanation: 'O suicídio é resultado de vários fatores — emocionais, psicológicos, sociais e até biológicos. Nunca é algo simples ou isolado.',
          },
          {
            topic: 'Falar sobre suicídio pode “dar ideia” para alguém?',
            statement: 'Falar sobre suicídio pode “dar ideia” para alguém.',
            isMyth: true,
            explanation: 'Conversar de forma acolhedora e responsável pode salvar vidas. O silêncio, sim, pode ser perigoso.',
          },
          {
            topic: 'A depressão e a ansiedade aumentam o risco de suicídio?',
            statement: 'A depressão e a ansiedade aumentam o risco de suicídio.',
            isMyth: false,
            explanation: 'Esses transtornos precisam ser levados a sério e tratados com acompanhamento médico e psicológico.',
          },
          {
            topic: 'Apenas profissionais de saúde podem ajudar quem pensa em suicídio?',
            statement: 'Apenas profissionais de saúde podem ajudar quem pensa em suicídio.',
            isMyth: true,
            explanation: 'Todos podemos ajudar! Escutar sem julgamento e incentivar a pessoa a procurar ajuda faz toda a diferença.',
          },
          {
            topic: 'Você sabia que existe um número gratuito (188) para conversar com alguém quando estiver mal?',
            statement: 'Existe um número gratuito (188 - CVV) para conversar e buscar apoio.',
            isMyth: false,
            explanation: 'O CVV (Centro de Valorização da Vida) está disponível 24h, de forma gratuita e sigilosa. Falar é um ato de coragem.',
          },
        ],
      },
    },
  },
  {
    id: 'outubro-rosa',
    title: 'Outubro Rosa',
    description: 'A conscientização sobre o câncer de mama é um ato de amor.',
    longDescription: 'Outubro Rosa é um movimento global que colore o mundo com um laço de esperança e conscientização. O foco da campanha é alertar mulheres e a sociedade sobre a importância vital da prevenção e do diagnóstico precoce do câncer de mama. Através da informação, do autoexame e da mamografia, a campanha incentiva o autocuidado e o conhecimento do próprio corpo, lembrando que um toque pode mudar tudo e que a detecção em estágio inicial aumenta exponencialmente as chances de cura.',
    image: 'https://i.imgur.com/CFnjotJ.jpeg',
    logo: 'https://i.imgur.com/Rjch5Y3.png',
    objectPosition: 'object-center',
    colors: {
      bg: 'from-gray-900 via-gray-900 to-pink-900/20',
      text: 'text-pink-200',
      accent: 'bg-pink-500',
      accentHover: 'hover:bg-pink-600',
      ring: 'ring-pink-500',
      neon: '#ec4899',
      neonGlow: '#f9a8d4'
    },
    details: {
      symptoms: {
        title: 'Sintomas e Sinais de Alerta',
        items: [
          'Nódulo (caroço), fixo e geralmente indolor',
          'Pele da mama avermelhada, retraída ou parecida com casca de laranja',
          'Alterações no bico do peito (mamilo)',
          'Pequenos nódulos nas axilas ou no pescoço',
          'Saída de líquido anormal pelos mamilos',
        ],
        source: { name: 'INCA', url: 'https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/mama/sintomas' }
      },
      stats: {
        title: 'Dados sobre o Câncer de Mama',
        items: [
          {
            value: 'Nº 1',
            label: 'Incidência no Brasil',
            description: 'É o tipo de câncer com maior incidência entre mulheres no país (excluindo pele não melanoma).',
            year: '2023-2025',
            source: 'INCA',
          },
          {
            value: '73.610',
            label: 'Novos Casos por Ano',
            description: 'Estimativa de novos casos por ano no Brasil para o triênio.',
            year: '2023-2025',
            source: 'INCA',
          },
          {
            value: '95%',
            label: 'Chance de Cura',
            description: 'A taxa de cura do câncer de mama pode chegar a 95% quando o diagnóstico é feito precocemente.',
            year: 2023,
            source: 'INCA',
          },
        ],
      },
      prevention: {
        title: 'Prevenção e Cuidados',
        items: [
          'Mantenha o peso corporal adequado.',
          'Pratique atividade física regularmente.',
          'Evite o consumo de bebidas alcoólicas.',
          'Amamente: a amamentação protege contra o câncer de mama.',
          'Realize o autoexame das mamas mensalmente.',
          'Consulte seu médico e faça a mamografia de rastreamento.',
        ],
        source: { name: 'INCA', url: 'https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/mama/prevencao' }
      },
      riskFactors: {
        title: 'Fatores de Risco',
        items: [
          'Ser mulher e envelhecer (principal fator).',
          'Histórico familiar de câncer de mama ou ovário.',
          'Mutações genéticas hereditárias (BRCA1 e BRCA2).',
          'Primeira menstruação antes dos 12 anos e menopausa após os 55.',
          'Obesidade, sedentarismo e consumo de álcool.',
          'Não ter tido filhos ou ter a primeira gravidez após os 30 anos.',
        ],
        source: { name: 'INCA', url: 'https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/mama/fatores-de-risco' }
      },
      patientRights: {
        title: 'Direitos do Paciente',
        items: [
          {
            name: 'Lei dos 60 Dias (Lei nº 12.732/2012)',
            description: 'Garante o direito de iniciar o tratamento no SUS em, no máximo, 60 dias a partir da data do diagnóstico.',
            source: { name: 'Planalto.gov.br', url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12732.htm' }
          },
          {
            name: 'Reconstrução Mamária',
            description: 'A mulher que teve a mama retirada devido ao câncer tem direito à cirurgia de reconstrução mamária pelo SUS.',
            source: { name: 'Lei nº 13.770/2018', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13770.htm' }
          },
          {
            name: 'Saque do FGTS e PIS/PASEP',
            description: 'Pacientes com câncer (ou que tenham dependentes com a doença) podem solicitar o saque integral do FGTS e do PIS/PASEP.',
            source: { name: 'Caixa Econômica Federal', url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts/saque-fgts/paginas/default.aspx' }
          },
          {
            name: 'Isenção de Impostos',
            description: 'Direito à isenção de Imposto de Renda sobre aposentadoria e isenção de IPI na compra de veículos adaptados, em casos específicos.',
            source: { name: 'Receita Federal', url: 'https://www.gov.br/pt-br/servicos/solicitar-isencao-do-imposto-de-renda' }
          }
        ]
      },
      tips: {
        title: 'Dica de Cuidado',
        items: [
            'Conheça seu corpo. O autoexame mensal das mamas é um gesto de amor próprio que ajuda na detecção precoce.',
            'Uma caminhada de 30 minutos por dia pode reduzir significativamente o risco de desenvolver câncer de mama.',
            'Lembre-se: a mamografia é sua aliada. Faça o exame regularmente, conforme a orientação médica.',
            'Adicionar mais vegetais e frutas coloridas à sua dieta fortalece seu corpo e sua saúde.',
            'O apoio de amigas e familiares é fundamental. Converse sobre a importância da prevenção com as mulheres da sua vida.',
        ]
      },
      supporterGuide: {
        title: 'Guia para Apoiadores',
        scenarios: [
            {
                scenario: "Uma amiga te conta que foi diagnosticada com câncer de mama e está assustada. O que você diz?",
                goodResponse: {
                    text: "“Sinto muito que esteja passando por isso. Estou aqui para o que precisar, seja para conversar ou te levar nas consultas.”",
                    explanation: "Valida os sentimentos dela, oferece apoio concreto e mostra que ela não está sozinha, sem fazer promessas vazias."
                },
                badResponse: {
                    text: "“Não se preocupe, vai dar tudo certo! Minha tia teve isso e se curou rapidinho.”",
                    explanation: "Embora bem-intencionado, pode minimizar o medo da pessoa e invalidar seus sentimentos. Comparar experiências nem sempre ajuda."
                }
            },
            {
                scenario: "Sua parceira está passando pelo tratamento e se sente mal com as mudanças no corpo. Como você pode apoiá-la?",
                goodResponse: {
                    text: "“Você é linda e forte, e estamos passando por isso juntos. Como posso te ajudar a se sentir mais confortável hoje?”",
                    explanation: "Reforça o amor e a parceria, valida a beleza dela além da aparência física e pergunta de forma prática como pode ajudar."
                },
                badResponse: {
                    text: "“A aparência não importa agora, o importante é a saúde.”",
                    explanation: "Ignora o sofrimento legítimo dela com a autoestima, o que pode fazê-la se sentir incompreendida e sozinha em seus sentimentos."
                }
            },
            {
                scenario: "Uma colega de trabalho está voltando após a cirurgia. O que é apropriado dizer?",
                goodResponse: {
                    text: "“Que bom te ver de volta! Se precisar de algo ou de um ritmo mais leve, me avise. Estamos felizes por ter você aqui.”",
                    explanation: "É acolhedor, profissional e oferece ajuda prática sem ser invasivo, respeitando a privacidade e o ritmo dela."
                },
                badResponse: {
                    text: "“E aí, como foi a cirurgia? Fizeram a reconstrução? Está tudo bem mesmo?”",
                    explanation: "Faz perguntas invasivas sobre o tratamento e o corpo, o que pode ser extremamente desconfortável e desrespeitoso."
                }
            }
        ]
      },
      help: {
        title: 'Onde Buscar Ajuda',
        items: [
          {
            name: 'INCA (Instituto Nacional de Câncer)',
            description: 'Informações detalhadas sobre prevenção, diagnóstico e tratamento do câncer de mama.',
            link: 'https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/mama',
          },
          {
            name: 'FEMAMA',
            description: 'Federação Brasileira de Instituições Filantrópicas de Apoio à Saúde da Mama.',
            link: 'https://www.femama.org.br/',
          },
        ],
      },
      quiz: {
        title: 'Teste seus conhecimentos',
        questions: [
          {
            question: 'O Outubro Rosa é uma campanha de conscientização sobre:',
            options: [
              'Câncer de pele',
              'Câncer de mama',
              'Câncer de pulmão',
              'Câncer de próstata',
            ],
            correctAnswerIndex: 1,
            explanation: 'Correto! O Outubro Rosa é a campanha mundialmente conhecida pela conscientização sobre a prevenção e o diagnóstico precoce do câncer de mama.',
          },
          {
            question: 'Qual exame é essencial para o diagnóstico precoce do câncer de mama?',
            options: [
              'Eletrocardiograma',
              'Hemograma',
              'Mamografia',
              'Endoscopia',
            ],
            correctAnswerIndex: 2,
            explanation: 'Correto! A mamografia é o principal exame para detectar o câncer de mama em estágios iniciais, muitas vezes antes mesmo do surgimento de sintomas, o que aumenta muito as chances de cura.',
          },
          {
            question: 'Qual é o principal fator de risco para o câncer de mama?',
            options: [
              'Sedentarismo e histórico familiar',
              'Beber água em excesso',
              'Praticar esportes',
              'Dormir cedo',
            ],
            correctAnswerIndex: 0,
            explanation: 'Correto! Além do envelhecimento e da predisposição genética, fatores como obesidade, sedentarismo e consumo de álcool aumentam o risco de desenvolver a doença.',
          },
          {
            question: 'Qual símbolo representa a campanha Outubro Rosa?',
            options: [
              'Um laço rosa',
              'Uma flor roxa',
              'Uma estrela vermelha',
              'Um círculo azul',
            ],
            correctAnswerIndex: 0,
            explanation: 'Correto! O laço rosa é o símbolo universal da luta e da conscientização contra o câncer de mama, usado para demonstrar apoio e solidariedade à causa.',
          },
          {
            question: 'Além das mulheres, quem também pode desenvolver câncer de mama?',
            options: [
              'Apenas idosos',
              'Apenas atletas',
              'Homens',
              'Nenhuma outra pessoa',
            ],
            correctAnswerIndex: 2,
            explanation: 'Correto! Embora seja muito mais raro (correspondendo a cerca de 1% de todos os casos), homens também podem desenvolver câncer de mama e devem estar atentos aos sinais.',
          },
        ],
      },
      mythsVsTruths: {
        title: 'Mitos vs. Verdades',
        items: [
          {
            topic: 'Somente quem tem histórico de câncer de mama na família precisa se cuidar?',
            statement: 'Somente quem tem histórico familiar precisa se preocupar com o câncer de mama.',
            isMyth: true,
            explanation: 'A maioria dos casos não tem relação hereditária. Toda mulher deve manter seus exames em dia.',
          },
          {
            topic: 'Homens também podem ter câncer de mama?',
            statement: 'Homens também podem ter câncer de mama.',
            isMyth: false,
            explanation: 'Embora raro, homens também podem desenvolver a doença. Atenção a qualquer alteração na região do peito.',
          },
          {
            topic: 'Fazer o autoexame dispensa a mamografia?',
            statement: 'O autoexame substitui a mamografia.',
            isMyth: true,
            explanation: 'O autoexame ajuda no autoconhecimento, mas não substitui a mamografia, que detecta tumores bem pequenos.',
          },
          {
            topic: 'Atividade física pode ajudar na prevenção do câncer de mama?',
            statement: 'Atividade física ajuda a prevenir o câncer de mama.',
            isMyth: false,
            explanation: 'A prática regular de exercícios equilibra os hormônios e o peso corporal, diminuindo os riscos.',
          },
          {
            topic: 'Descobrir cedo aumenta as chances de cura?',
            statement: 'O diagnóstico precoce aumenta as chances de cura.',
            isMyth: false,
            explanation: 'Quando diagnosticado no início, o câncer de mama tem mais de 90% de chance de cura. Prevenir é poder!',
          },
        ],
      },
    },
  },
  {
    id: 'novembro-azul',
    title: 'Novembro Azul',
    description: 'Cuidar da saúde também é coisa de homem.',
    longDescription: 'Novembro Azul é um chamado à ação para todos os homens. A campanha busca quebrar o preconceito e a desinformação que ainda cercam a saúde masculina, com foco principal na prevenção do câncer de próstata — o segundo mais comum entre os brasileiros. Cuidar da saúde é um ato de responsabilidade e coragem. A campanha reforça a importância de consultas e exames anuais, mostrando que a prevenção é o melhor caminho para uma vida longa e saudável.',
    image: 'https://i.imgur.com/HVDPCNc.jpeg',
    logo: 'https://i.imgur.com/XuVzMm4.png',
    objectPosition: 'object-center',
    colors: {
      bg: 'from-gray-900 via-gray-900 to-blue-900/20',
      text: 'text-blue-200',
      accent: 'bg-blue-500',
      accentHover: 'hover:bg-blue-600',
      ring: 'ring-blue-500',
      neon: '#3b82f6',
      neonGlow: '#93c5fd'
    },
     details: {
      symptoms: {
        title: 'Sintomas e Sinais de Alerta',
        items: [
          'Dificuldade de urinar',
          'Demora em começar e terminar de urinar',
          'Diminuição do jato de urina',
          'Necessidade de urinar mais vezes durante o dia ou à noite',
          'Presença de sangue na urina ou no sêmen',
        ],
        source: { name: 'INCA', url: 'https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/prostata/sintomas' }
      },
      stats: {
        title: 'Dados sobre o Câncer de Próstata',
        items: [
          {
            value: 'Nº 1',
            label: 'Incidência em Homens',
            description: 'É o câncer mais incidente em homens no Brasil (excluindo pele não melanoma).',
            year: '2023-2025',
            source: 'INCA',
          },
          {
            value: '71.730',
            label: 'Novos Casos por Ano',
            description: 'Estimativa de novos casos por ano no Brasil para o triênio.',
            year: '2023-2025',
            source: 'INCA',
          },
          {
            value: '1 morte',
            label: 'A cada 38 minutos',
            description: 'O câncer de próstata causa um óbito a cada 38 minutos no Brasil.',
            year: 2022,
            source: 'Instituto Lado a Lado pela Vida',
          },
        ],
      },
      prevention: {
        title: 'Prevenção e Cuidados',
        items: [
          'Mantenha uma alimentação saudável e equilibrada.',
          'Pratique atividade física regularmente.',
          'Evite o tabagismo e o consumo de álcool.',
          'Consulte um urologista anualmente a partir dos 50 anos (ou 45, se tiver histórico familiar).',
          'Realize os exames de rotina, como o toque retal e o PSA.',
        ],
        source: { name: 'Sociedade Brasileira de Urologia', url: 'https://portaldaurologia.org.br/publico/doencas/cancer-de-prostata/' }
      },
      riskFactors: {
        title: 'Fatores de Risco',
        items: [
          'Idade (risco aumenta significativamente após os 50 anos).',
          'Histórico familiar de câncer de próstata (pai ou irmão).',
          'Raça (maior incidência em homens negros).',
          'Obesidade e sobrepeso.',
          'Má alimentação (dieta pobre em frutas e vegetais).',
          'Sedentarismo.',
        ],
        source: { name: 'INCA', url: 'https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/prostata/fatores-de-risco' }
      },
      patientRights: {
        title: 'Direitos do Paciente',
        items: [
          {
            name: 'Lei dos 60 Dias (Lei nº 12.732/2012)',
            description: 'Assim como em outros tipos de câncer, garante o início do tratamento no SUS em até 60 dias após o diagnóstico.',
            source: { name: 'Planalto.gov.br', url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12732.htm' }
          },
          {
            name: 'Auxílio-Doença e Aposentadoria por Invalidez',
            description: 'Caso a doença ou o tratamento incapacite o paciente para o trabalho, ele pode solicitar benefícios junto ao INSS.',
            source: { name: 'INSS', url: 'https://www.gov.br/inss/pt-br/beneficios/beneficio-por-incapacidade-temporaria' }
          },
          {
            name: 'Acesso a Tratamento',
            description: 'O SUS deve oferecer acesso a diversas modalidades de tratamento, como cirurgia, radioterapia e hormonioterapia, conforme a indicação médica.',
            source: { name: 'Ministério da Saúde', url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/cancer-de-prostata' }
          },
          {
            name: 'Isenção de Imposto de Renda',
            description: 'Aposentados e pensionistas com câncer de próstata têm direito à isenção do Imposto de Renda relativo aos seus proventos.',
            source: { name: 'Receita Federal', url: 'https://www.gov.br/pt-br/servicos/solicitar-isencao-do-imposto-de-renda' }
          }
        ]
      },
       tips: {
        title: 'Dica de Cuidado',
        items: [
            'Deixe o preconceito de lado. Cuidar da saúde é o maior ato de coragem que um homem pode ter.',
            'Beba bastante água. Manter-se hidratado é fundamental para a saúde da próstata e dos rins.',
            'Converse com seu médico. O urologista é seu principal aliado na prevenção.',
            'Não espere os sintomas aparecerem. O diagnóstico precoce do câncer de próstata começa com exames de rotina.',
            'Incentive seus amigos e familiares a também se cuidarem. A saúde é um esforço coletivo.',
        ]
      },
      supporterGuide: {
        title: 'Guia para Apoiadores',
        scenarios: [
            {
                scenario: "Seu pai tem mais de 50 anos e se recusa a ir ao urologista, dizendo que 'não precisa disso'. Como você o incentiva?",
                goodResponse: {
                    text: "“Pai, sua saúde é muito importante para nós. Cuidar de si mesmo é um ato de coragem. Que tal marcarmos um check-up juntos?”",
                    explanation: "Associa o cuidado à masculinidade positiva (coragem), mostra o impacto dele na família e normaliza a prevenção ao sugerir ir junto."
                },
                badResponse: {
                    text: "“Deixa de ser teimoso! Se você não for, vai acabar doente e vai ser pior.”",
                    explanation: "Usa um tom de confronto e apela para o medo, o que pode aumentar a resistência e criar um clima negativo."
                }
            },
            {
                scenario: "Um amigo está ansioso com o resultado do exame de PSA. O que é melhor dizer?",
                goodResponse: {
                    text: "“É normal se sentir assim. Independentemente do resultado, estou aqui com você para dar uma força.”",
                    explanation: "Valida a ansiedade dele, oferece apoio incondicional e mostra que sua amizade não depende do diagnóstico."
                },
                badResponse: {
                    text: "“Relaxa, cara. Isso não deve ser nada. Exame de próstata é besteira.”",
                    explanation: "Minimiza uma preocupação legítima e reforça o estigma de que a saúde masculina é um assunto trivial, desincentivando o cuidado."
                }
            },
            {
                scenario: "Um familiar está em tratamento e se queixa dos efeitos colaterais. Como você oferece suporte?",
                goodResponse: {
                    text: "“Imagino que seja difícil. Tem algo que eu possa fazer para te ajudar hoje? Uma comida, uma companhia para ver um filme?”",
                    explanation: "Reconhece a dificuldade dele, não tenta 'consertar' o problema, e oferece ajuda prática e específica, tornando o apoio mais tangível."
                },
                badResponse: {
                    text: "“Pelo menos você está se tratando, né? Tem que ser forte e aguentar.”",
                    explanation: "Invalida o sofrimento atual dele com uma positividade tóxica, pressionando-o a suprimir seus sentimentos em vez de compartilhá-los."
                }
            }
        ]
      },
      help: {
        title: 'Onde Buscar Ajuda',
        items: [
          {
            name: 'Instituto Lado a Lado pela Vida',
            description: 'Pioneiros na campanha Novembro Azul no Brasil, oferecem informação e suporte.',
            link: 'https://ladoaladopelavida.org.br/',
          },
          {
            name: 'Sociedade Brasileira de Urologia',
            description: 'Informações confiáveis e diretrizes sobre a saúde masculina e o câncer de próstata.',
            link: 'https://portaldaurologia.org.br/',
          },
        ],
      },
      quiz: {
        title: 'Teste seus conhecimentos',
        questions: [
          {
            question: 'O Novembro Azul é dedicado à conscientização sobre:',
            options: [
              'Câncer de intestino',
              'Câncer de próstata',
              'Câncer de mama',
              'Câncer de pele',
            ],
            correctAnswerIndex: 1,
            explanation: 'Correto! O Novembro Azul é uma campanha global que busca alertar os homens sobre a importância da prevenção e do diagnóstico precoce do câncer de próstata.',
          },
          {
            question: 'Qual exame ajuda a detectar precocemente o câncer de próstata?',
            options: [
              'PSA e toque retal',
              'Raio-X',
              'Hemograma',
              'Tomografia abdominal',
            ],
            correctAnswerIndex: 0,
            explanation: 'Correto! A combinação do exame de sangue (PSA), que mede uma proteína produzida pela próstata, e o exame de toque retal é fundamental para o diagnóstico precoce e preciso.',
          },
          {
            question: 'A partir de que idade os homens devem fazer os exames preventivos regularmente?',
            options: [
              '20 anos',
              '30 anos',
              '45 anos (ou antes, se houver histórico familiar)',
              '60 anos',
            ],
            correctAnswerIndex: 2,
            explanation: 'Correto! A recomendação geral é a partir dos 50 anos, mas homens com histórico familiar da doença ou que são negros devem iniciar o acompanhamento mais cedo, aos 45 anos.',
          },
          {
            question: 'Qual atitude ajuda na prevenção dessa doença?',
            options: [
              'Alimentação saudável e atividade física',
              'Uso de antibióticos',
              'Evitar exames médicos',
              'Dormir pouco',
            ],
            correctAnswerIndex: 0,
            explanation: 'Correto! Manter hábitos saudáveis, como uma dieta rica em frutas e vegetais e a prática regular de exercícios, pode reduzir o risco de vários tipos de câncer, incluindo o de próstata.',
          },
          {
            question: 'Qual é o símbolo da campanha Novembro Azul?',
            options: [
              'Um laço azul',
              'Um coração vermelho',
              'Um laço verde',
              'Um flor branca',
            ],
            correctAnswerIndex: 0,
            explanation: 'Correto! O laço azul é o símbolo da campanha de conscientização sobre o câncer de próstata. O bigode também é um símbolo forte, associado ao movimento Movember pela saúde masculina.',
          },
        ],
      },
      mythsVsTruths: {
        title: 'Mitos vs. Verdades',
        items: [
          {
            topic: 'O câncer de próstata só atinge homens mais velhos?',
            statement: 'O câncer de próstata só atinge homens idosos.',
            isMyth: true,
            explanation: 'O risco aumenta com a idade, mas homens a partir dos 45 anos (ou antes, com histórico familiar) já devem se cuidar.',
          },
          {
            topic: 'O exame de toque é o único jeito de detectar o câncer de próstata?',
            statement: 'O exame de toque é o único método para detectar o câncer de próstata.',
            isMyth: true,
            explanation: 'O diagnóstico é feito com toque retal e exame de sangue (PSA). Um complementa o outro.',
          },
          {
            topic: 'Alimentação saudável ajuda na prevenção?',
            statement: 'Uma alimentação saudável ajuda na prevenção do câncer de próstata.',
            isMyth: false,
            explanation: 'Frutas, legumes e menos gordura saturada ajudam a reduzir o risco da doença.',
          },
          {
            topic: 'O câncer de próstata dá sintomas logo no começo?',
            statement: 'O câncer de próstata apresenta sintomas em sua fase inicial.',
            isMyth: true,
            explanation: 'Nos estágios iniciais, geralmente não há sintomas. Por isso, exames de rotina são essenciais.',
          },
          {
            topic: 'Saúde mental também faz parte do Novembro Azul?',
            statement: 'Novembro Azul também aborda a saúde mental masculina.',
            isMyth: false,
            explanation: 'A campanha fala sobre autocuidado completo — corpo e mente. Cuidar de si é um gesto de força, não de fraqueza.',
          },
        ],
      },
    },
  },
];

// FIX: Generate and export CONTEXT_FOR_CHATBOT for the Gemini model.
// This helper function stringifies campaign details for the chatbot context. It is not exported.
const generateChatbotContext = (campaigns: Campaign[]): string => {
  let context = '';
  campaigns.forEach(campaign => {
    context += `\n\n# Campanha: ${campaign.title}\n\n`;
    context += `**Descrição:** ${campaign.longDescription}\n\n`;

    const details = campaign.details;

    if (details.symptoms) {
      context += `## ${details.symptoms.title}\n`;
      details.symptoms.items.forEach(item => {
        context += `* ${item}\n`;
      });
      if (details.symptoms.source) {
        context += `Fonte: ${details.symptoms.source.name}\n`;
      }
      context += '\n';
    }

    if (details.stats) {
      context += `## ${details.stats.title}\n`;
      details.stats.items.forEach(item => {
        const yearInfo = item.year ? `(Dados de: ${item.year}, Fonte: ${item.source})` : `(Fonte: ${item.source})`;
        context += `* **${item.value} ${item.label}:** ${item.description} ${yearInfo}\n`;
      });
      context += '\n';
    }

    if (details.prevention) {
      context += `## ${details.prevention.title}\n`;
      details.prevention.items.forEach(item => {
        context += `* ${item}\n`;
      });
      if (details.prevention.source) {
        context += `Fonte: ${details.prevention.source.name}\n`;
      }
      context += '\n';
    }
    
    if (details.riskFactors) {
      context += `## ${details.riskFactors.title}\n`;
      details.riskFactors.items.forEach(item => {
        context += `* ${item}\n`;
      });
      if (details.riskFactors.source) {
        context += `Fonte: ${details.riskFactors.source.name}\n`;
      }
      context += '\n';
    }
    
    if (details.patientRights) {
        context += `## ${details.patientRights.title}\n`;
        details.patientRights.items.forEach(item => {
          context += `### ${item.name}\n`;
          context += `${item.description}\n`;
          if (item.source) {
            context += `Fonte: ${item.source.name}\n`;
          }
        });
        context += '\n';
    }
    
    if (details.tips) {
        context += `## ${details.tips.title}\n`;
        details.tips.items.forEach(item => {
            context += `* ${item}\n`;
        });
        context += '\n';
    }
    
    if (details.supporterGuide) {
        context += `## ${details.supporterGuide.title}\n`;
        details.supporterGuide.scenarios.forEach(scenario => {
            context += `### Cenário: ${scenario.scenario}\n`;
            context += `* **Resposta Construtiva:** "${scenario.goodResponse.text}" (Explicação: ${scenario.goodResponse.explanation})\n`;
            context += `* **Resposta a Evitar:** "${scenario.badResponse.text}" (Explicação: ${scenario.badResponse.explanation})\n`;
        });
        context += '\n';
    }

    if (details.help) {
      context += `## ${details.help.title}\n`;
      details.help.items.forEach(item => {
        context += `### ${item.name}\n`;
        context += `${item.description}\n`;
        context += `Link: ${item.link}\n`;
        if (item.phone) {
          context += `Telefone: ${item.phone}\n`;
        }
      });
      context += '\n';
    }

    if (details.mythsVsTruths) {
        context += `## ${details.mythsVsTruths.title}\n`;
        details.mythsVsTruths.items.forEach(item => {
            context += `* **Afirmação:** "${item.statement}"\n`;
            context += `  * **Isso é um ${item.isMyth ? 'Mito' : 'Verdade'}.**\n`;
            context += `  * **Explicação:** ${item.explanation}\n`;
        });
        if (details.mythsVsTruths.source) {
            context += `Fonte: ${details.mythsVsTruths.source.name}\n`;
        }
        context += '\n';
    }

  });
  return context;
};

export const CONTEXT_FOR_CHATBOT = generateChatbotContext(CAMPAIGNS);

export const AUTOPLAY_INTERVAL = 7000; // 7 seconds