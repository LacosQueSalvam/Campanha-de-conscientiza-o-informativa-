import { Campaign } from './types';

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'setembro-amarelo',
    title: 'Setembro Amarelo',
    description: 'A campanha de prevenção ao suicídio que salva vidas.',
    longDescription: 'Setembro Amarelo é uma campanha brasileira de prevenção ao suicídio, iniciada em 2015. O mês de setembro foi escolhido para a campanha porque, desde 2003, o dia 10 de setembro é o Dia Mundial de Prevenção do Suicídio. A ideia é promover eventos que abram espaço para debates sobre suicídio e divulgar o tema alertando a população sobre a importância de sua discussão.',
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
            value: '17.124',
            label: 'Vidas perdidas',
            description: 'Número de suicídios registrados no Brasil.',
            year: 2023,
            source: 'Anuário Bras. de Segurança Pública',
          },
          {
            value: '96,8%',
            label: 'Transtornos Mentais',
            description: 'Dos casos de suicídio estão relacionados a transtornos mentais, como depressão e bipolaridade.',
            year: 'Estimativa',
            source: 'Ministério da Saúde',
          },
          {
            value: '4ª',
            label: 'Causa de Morte',
            description: 'Entre jovens de 15 a 29 anos no mundo, o suicídio é a quarta principal causa de morte.',
            year: 2019,
            source: 'OMS',
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
        whatToSay: [
            '“Estou aqui por você, não importa o quê.” (Mostra apoio incondicional)',
            '“Seus sentimentos são válidos e importantes para mim.” (Valida a dor da pessoa)',
            '“Você não está sozinho(a) nisso. Vamos passar por isso juntos.” (Oferece companhia)',
            '“Não sou especialista, mas posso te ajudar a encontrar ajuda profissional.” (Incentiva ajuda qualificada)',
            '“Quer conversar sobre o que está sentindo? Estou aqui para ouvir sem julgar.” (Abre um espaço seguro)',
        ],
        whatToAvoid: [
            '“Pense positivo” ou “Anime-se”. (Minimiza o sofrimento)',
            '“Isso é só para chamar atenção.” (Julga e invalida o pedido de ajuda)',
            '“Sua vida é tão boa, por que você se sente assim?” (Gera culpa e incompreensão)',
            '“Eu já passei por coisa pior e superei.” (Transforma a conversa em uma competição de sofrimento)',
            '“Você precisa sair mais” ou dar conselhos não solicitados. (Simplifica um problema complexo)',
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
            topic: 'Se alguém está pensando em suicídio, tocar no assunto pode piorar a situação e incentivar o ato?',
            statement: 'Falar sobre suicídio pode incentivar a pessoa a cometer o ato.',
            isMyth: true,
            explanation: 'Falar sobre o assunto de forma aberta e responsável quebra tabus, alivia a angústia e mostra à pessoa que ela não está sozinha, sendo um passo crucial para a prevenção.',
          },
          {
            topic: 'Quando uma pessoa fala sobre se matar, na maioria das vezes é apenas um blefe para chamar atenção?',
            statement: 'Quem ameaça se matar só quer chamar atenção.',
            isMyth: true,
            explanation: 'Ameaças de suicídio são um pedido de ajuda. Levar a sério qualquer sinal é fundamental, pois a maioria das pessoas que tiram a própria vida deu avisos antes.',
          },
          {
            topic: 'Existe uma forte ligação entre transtornos mentais, como a depressão, e o risco de suicídio?',
            statement: 'Transtornos mentais, como depressão, são a principal causa de suicídio.',
            isMyth: false,
            explanation: 'É verdade. Mais de 96% dos casos de suicídio estão relacionados a transtornos mentais. O tratamento adequado é a forma mais eficaz de prevenção.',
          },
          {
            topic: 'Procurar ajuda para a saúde mental é um sinal de que a pessoa não consegue lidar com seus problemas sozinha e é fraca?',
            statement: 'Buscar ajuda profissional é um sinal de força e coragem.',
            isMyth: false,
            explanation: 'É verdade. Reconhecer que precisa de ajuda e procurar um profissional de saúde mental é um passo fundamental e corajoso para a recuperação e o bem-estar.',
          },
        ],
        source: { name: 'Cartilha "Suicídio: informando para prevenir"', url: 'https://www.abp.org.br/suicidio-informando-para-prevenir' }
      },
    },
  },
  {
    id: 'outubro-rosa',
    title: 'Outubro Rosa',
    description: 'A conscientização sobre o câncer de mama é um ato de amor.',
    longDescription: 'Outubro Rosa é uma campanha anual realizada mundialmente em outubro, com a intenção de alertar a sociedade sobre o diagnóstico precoce do câncer de mama. A mobilização visa também à disseminação de dados preventivos e ressalta a importância de olhar com atenção para a saúde, além de lutar por direitos como o atendimento médico e o suporte emocional, garantindo um tratamento de qualidade.',
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
            description: 'Quando diagnosticado em estágio inicial, as chances de tratamento bem-sucedido são altíssimas.',
            year: 'Estimativa',
            source: 'FEMAMA',
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
        whatToSay: [
            '“Como você está se sentindo hoje?” (Mostra interesse genuíno e abre espaço para a verdade)',
            '“Estou pensando em você. Não se sinta pressionada a responder.” (Oferece apoio sem exigir nada em troca)',
            '“Posso te ajudar com [tarefa específica]? Ex: levar as crianças, fazer compras.” (Oferece ajuda prática e concreta)',
            '“Você é muito mais do que o seu diagnóstico.” (Lembra a pessoa de sua identidade completa)',
            '“Estou aqui para ouvir, seja para desabafar ou falar de qualquer outra coisa.” (Dá liberdade para a pessoa guiar a conversa)',
        ],
        whatToAvoid: [
            '“Seja forte” ou “Pense positivo”. (Pode invalidar o medo e a tristeza que são naturais)',
            '“Minha tia teve isso e...” (Evite comparar experiências ou contar histórias assustadoras)',
            'Dar conselhos médicos ou sobre tratamentos alternativos não solicitados. (Pode ser perigoso e desrespeitoso)',
            '“Você está com uma aparência ótima!” (A pessoa pode não se sentir bem, invalidando seus sentimentos)',
            'Fazer perguntas invasivas sobre o tratamento, corpo ou prognóstico. (Respeite a privacidade)',
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
            topic: 'Ao fazer o autoexame, se uma mulher encontrar um nódulo na mama, é quase certeza que se trata de câncer?',
            statement: 'Achar um nódulo na mama é certeza de câncer.',
            isMyth: true,
            explanation: 'Cerca de 80% dos nódulos mamários são benignos (não cancerosos). Mesmo assim, qualquer alteração deve ser investigada por um médico.',
          },
          {
            topic: 'O uso diário de desodorantes antitranspirantes é um fator de risco comprovado para o câncer de mama?',
            statement: 'Desodorantes antitranspirantes podem causar câncer de mama.',
            isMyth: true,
            explanation: 'Não há evidências científicas sólidas que comprovem a relação entre o uso de desodorantes e o desenvolvimento de câncer de mama.',
          },
          {
            topic: 'A mamografia é o método mais eficaz para o diagnóstico precoce, ou o autoexame já é suficiente?',
            statement: 'A mamografia é o método mais eficaz para o diagnóstico precoce.',
            isMyth: false,
            explanation: 'Verdade. A mamografia pode detectar tumores em estágio inicial, antes mesmo de serem palpáveis, aumentando as chances de cura para mais de 95%.',
          },
          {
            topic: 'O ato de amamentar oferece uma proteção real para a mãe contra o câncer de mama?',
            statement: 'Amamentar protege contra o câncer de mama.',
            isMyth: false,
            explanation: 'Verdade. O ato de amamentar promove a renovação das células mamárias e reduz os níveis de certos hormônios, diminuindo o risco de desenvolvimento da doença.',
          },
        ],
        source: { name: 'INCA - Mitos e Verdades', url: 'https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/mama/mitos-e-verdades' }
      },
    },
  },
  {
    id: 'novembro-azul',
    title: 'Novembro Azul',
    description: 'Cuidar da saúde também é coisa de homem.',
    longDescription: 'Novembro Azul é um movimento mundial que acontece durante o mês de novembro para reforçar a importância da prevenção e do diagnóstico precoce do câncer de próstata. A doença é o segundo tipo de câncer mais comum entre os homens brasileiros e as maiores vítimas são homens a partir dos 50 anos, além de pessoas com presença da doença em parentes de primeiro grau, como pai, irmão ou filho.',
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
        whatToSay: [
            '“Estou aqui para te dar uma força, seja para ir ao médico ou só para conversar.” (Oferece apoio prático e emocional)',
            '“Cuidar da saúde é um ato de coragem. Admiro você por isso.” (Reforça a masculinidade de forma positiva)',
            '“Sua saúde é importante para mim e para todos que te amam.” (Mostra o impacto positivo do autocuidado)',
            '“Não precisa passar por isso sozinho. Conte comigo.” (Cria um ambiente de confiança)',
            '“Vamos marcar nossos exames juntos?” (Normaliza a prevenção e cria um pacto de cuidado mútuo)',
        ],
        whatToAvoid: [
            '“Isso é frescura” ou “Exame de toque é coisa de...” (Usa preconceito e desincentiva o cuidado)',
            '“Homem de verdade não fica doente.” (Reforça estereótipos tóxicos e perigosos)',
            'Pressionar ou fazer piadas sobre os exames preventivos. (Cria constrangimento e resistência)',
            '“Se você não se cuidar, vai acabar mal.” (Usa o medo como motivador, o que pode causar o efeito contrário)',
            'Ignorar o assunto ou fingir que não é importante. (A omissão também é uma forma de desincentivo)',
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
            topic: 'Se o resultado do exame de sangue PSA estiver normal, um homem pode ficar tranquilo e não precisa fazer o exame de toque retal?',
            statement: 'O exame de toque retal é desnecessário se o PSA estiver normal.',
            isMyth: true,
            explanation: 'Cerca de 15% dos tumores não elevam o nível de PSA. O toque retal é fundamental para detectar alterações na próstata que o exame de sangue pode não mostrar.',
          },
          {
            topic: 'É possível um homem ter câncer de próstata em estágio inicial e não sentir absolutamente nenhum sintoma?',
            statement: 'Câncer de próstata sempre apresenta sintomas em sua fase inicial.',
            isMyth: true,
            explanation: 'O câncer de próstata é silencioso no início. Os sintomas geralmente aparecem em estágio avançado, por isso os exames preventivos são tão importantes.',
          },
          {
            topic: 'O envelhecimento é considerado o principal e mais significativo fator de risco para o câncer de próstata?',
            statement: 'A idade é o principal fator de risco para o câncer de próstata.',
            isMyth: false,
            explanation: 'Verdade. O risco aumenta significativamente após os 50 anos. Por isso, os exames de rotina são cruciais para homens nessa faixa etária.',
          },
          {
            topic: 'Adotar um estilo de vida saudável pode realmente diminuir as chances de um homem desenvolver câncer de próstata?',
            statement: 'Hábitos saudáveis podem ajudar a prevenir o câncer de próstata.',
            isMyth: false,
            explanation: 'Verdade. Manter uma dieta equilibrada, praticar atividades físicas e evitar o tabagismo e o álcool são práticas que contribuem para a saúde geral e podem reduzir o risco da doença.',
          },
        ],
        source: { name: 'Instituto Lado a Lado pela Vida', url: 'https://ladoaladopelavida.org.br/cancer-de-prostata-mitos-e-verdades' }
      },
    },
  },
];

export const AUTOPLAY_INTERVAL = 7000; // 7 seconds