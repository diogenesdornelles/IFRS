export const recipes: Recipe[] = [
    {
      id: 101,
      name: 'Bolo de Chocolate Fofinho',
      description: 'Um clássico bolo de chocolate úmido e delicioso, perfeito para qualquer ocasião.',
      ingredients: [
        '3 ovos',
        '1 xícara de açúcar',
        '1/2 xícara de óleo',
        '1 xícara de chocolate em pó 50%',
        '1 xícara de água morna',
        '2 xícaras de farinha de trigo',
        '1 colher de sopa de fermento em pó',
      ],
      instructions: [
        'Pré-aqueça o forno a 180°C.',
        'Bata os ovos com o açúcar até obter um creme claro.',
        'Adicione o óleo e o chocolate em pó, misture bem.',
        'Acrescente a água morna e a farinha de trigo peneirada, alternando.',
        'Por último, adicione o fermento e misture delicadamente.',
        'Despeje em forma untada e enfarinhada.',
        'Asse por cerca de 35-40 minutos.',
      ],
      prepTimeMinutes: 15,
      cookTimeMinutes: 40,
      servings: 10,
      difficulty: 'Fácil',
      categoryId: 1,
      isFavorite: false,
      imageUrl: 'https://via.placeholder.com/150/chocolatecake',
      tags: ['bolo', 'chocolate', 'festa']
    },
    {
      id: 102,
      name: 'Frango Assado com Batatas',
      description: 'Uma refeição completa e saborosa, com frango suculento e batatas douradas.',
      ingredients: [
        '1 frango inteiro (cerca de 1.5kg)',
        '1kg de batatas pequenas',
        '4 dentes de alho amassados',
        'Suco de 1 limão',
        'Sal e pimenta do reino a gosto',
        'Alecrim fresco a gosto',
        'Azeite de oliva',
      ],
      instructions: [
        'Tempere o frango com sal, pimenta, alho e suco de limão. Deixe marinar por 30 minutos.',
        'Cozinhe as batatas em água com sal até ficarem levemente macias. Escorra.',
        'Em uma assadeira, coloque o frango e distribua as batatas ao redor.',
        'Regue com azeite e salpique alecrim.',
        'Leve ao forno pré-aquecido a 200°C por cerca de 1 hora ou até o frango dourar e as batatas estiverem macias.',
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 60,
      servings: 4,
      difficulty: 'Médio',
      categoryId: 2,
      isFavorite: false,
      imageUrl: 'https://via.placeholder.com/150/roastchicken',
    },
    {
      id: 103,
      name: 'Salada Caesar Simples',
      description: 'Uma versão rápida e fácil da clássica salada Caesar.',
      ingredients: [
        '1 pé de alface americana lavado e picado',
        '50g de queijo parmesão ralado na hora',
        '1 xícara de croutons',
        'Molho Caesar pronto (ou caseiro)',
      ],
      instructions: [
        'Em uma saladeira grande, coloque a alface picada.',
        'Adicione os croutons e o queijo parmesão ralado.',
        'Regue com o molho Caesar a gosto e misture delicadamente antes de servir.',
      ],
      prepTimeMinutes: 10,
      difficulty: 'Fácil',
      categoryId: 3,
      isFavorite: false,
      imageUrl: 'https://via.placeholder.com/150/caesarsalad',
      tags: ['salada', 'leve', 'rápido']
    },
     {
      id: 104,
      name: 'Misto Quente Clássico',
      description: 'O lanche perfeito para qualquer hora do dia.',
      ingredients: [
        '2 fatias de pão de forma',
        '1 fatia de queijo muçarela',
        '1 fatia de presunto',
        'Manteiga ou margarina para untar',
      ],
      instructions: [
        'Monte o sanduíche colocando o queijo e o presunto entre as fatias de pão.',
        'Passe manteiga dos dois lados externos do pão.',
        'Aqueça uma frigideira ou sanduicheira.',
        'Grelhe o sanduíche dos dois lados até dourar e o queijo derreter.',
      ],
      prepTimeMinutes: 5,
      cookTimeMinutes: 5,
      servings: 1,
      difficulty: 'Fácil',
      categoryId: 4,
      isFavorite: false,
    },
    {
      id: 105,
      name: 'Bolo de Cenoura com Cobertura de Chocolate',
      description: 'Bolo de cenoura fofinho com uma cobertura cremosa de chocolate.',
      ingredients: [
        '3 cenouras médias picadas',
        '3 ovos',
        '1 xícara de óleo',
        '2 xícaras de açúcar',
        '2 e 1/2 xícaras de farinha de trigo',
        '1 colher de sopa de fermento em pó',
        '1 pitada de sal'
      ],
      instructions: [
        'Pré-aqueça o forno a 180°C.',
        'No liquidificador, bata as cenouras, os ovos e o óleo até formar um creme homogêneo.',
        'Transfira para uma tigela e adicione o açúcar, misturando bem.',
        'Incorpore a farinha de trigo e o sal, peneirados, mexendo delicadamente.',
        'Por último, adicione o fermento e misture suavemente.',
        'Despeje em forma untada e enfarinhada.',
        'Asse por aproximadamente 40-45 minutos, ou até que um palito saia limpo.'
      ],
      prepTimeMinutes: 15,
      cookTimeMinutes: 45,
      servings: 12,
      difficulty: 'Fácil',
      categoryId: 1,
      isFavorite: false,
      imageUrl: 'https://via.placeholder.com/150/bolocenoura',
      tags: ['bolo', 'cenoura', 'sobremesa']
    },
    {
      id: 106,
      name: 'Torta de Frango Cremosa',
      description: 'Torta de frango bem recheada, com massa leve e recheio cremoso.',
      ingredients: [
        '2 xícaras de farinha de trigo',
        '1 colher de chá de sal',
        '2 colheres de sopa de manteiga ou margarina',
        '1/2 xícara de leite',
        '2 ovos',
        '1 peito de frango cozido e desfiado',
        '1 cebola picada',
        '2 dentes de alho picados',
        '1 lata de milho verde (opcional)',
        '1 caixinha de creme de leite',
        '1 colher de sopa de amido de milho (dissolvido em um pouco de água)',
        'Sal, pimenta e temperos a gosto'
      ],
      instructions: [
        'Em uma tigela, misture a farinha, o sal e a manteiga até formar uma farofa.',
        'Acrescente 1 ovo e o leite aos poucos, até formar uma massa homogênea. Reserve.',
        'Refogue a cebola e o alho, depois adicione o frango desfiado e o milho. Tempere a gosto.',
        'Coloque o creme de leite e o amido de milho dissolvido, mexendo até engrossar levemente.',
        'Abra metade da massa em uma forma untada, recheie com o creme de frango, e cubra com o restante da massa.',
        'Pincele com 1 ovo batido por cima e asse em forno pré-aquecido a 180°C por cerca de 30-40 minutos, ou até dourar.'
      ],
      prepTimeMinutes: 30,
      cookTimeMinutes: 40,
      servings: 8,
      difficulty: 'Médio',
      categoryId: 2,
      isFavorite: false,
      imageUrl: 'https://via.placeholder.com/150/tortadefrango',
      tags: ['torta', 'frango', 'salgado']
    },
    {
      id: 107,
      name: 'Mousse de Maracujá',
      description: 'Sobremesa refrescante de mousse de maracujá, rápida e fácil de fazer.',
      ingredients: [
        '1 lata de leite condensado',
        '1 caixinha de creme de leite',
        '1 xícara de suco concentrado de maracujá',
        'Polpa de maracujá para decorar (opcional)'
      ],
      instructions: [
        'No liquidificador, bata o leite condensado, o creme de leite e o suco de maracujá por cerca de 2 minutos.',
        'Despeje em taças ou em um refratário e leve à geladeira por pelo menos 2 horas.',
        'Decore com a polpa de maracujá antes de servir, se desejar.'
      ],
      prepTimeMinutes: 5,
      cookTimeMinutes: 0,
      servings: 6,
      difficulty: 'Fácil',
      categoryId: 1,
      isFavorite: false,
      imageUrl: 'https://via.placeholder.com/150/moussedeMaracuja',
      tags: ['mousse', 'maracujá', 'sobremesa']
    },
    {
      id: 108,
      name: 'Empadão de Palmito',
      description: 'Clássico empadão com recheio cremoso de palmito, perfeito para um almoço ou lanche.',
      ingredients: [
        '3 xícaras de farinha de trigo',
        '1 colher de chá de sal',
        '150 g de manteiga gelada',
        '2 ovos',
        '2 colheres de sopa de água gelada (se necessário)',
        '1 cebola picada',
        '2 dentes de alho picados',
        '1 vidro de palmito picado',
        '1/2 xícara de leite',
        '1 colher de sopa de amido de milho (dissolvido em um pouco de água)',
        'Temperos a gosto (sal, pimenta, cheiro-verde)'
      ],
      instructions: [
        'Em uma vasilha, misture a farinha, o sal e a manteiga até formar uma farofa grossa.',
        'Acrescente 1 ovo e amasse até formar uma massa homogênea, adicionando água gelada se necessário. Reserve na geladeira por 20 minutos.',
        'Refogue a cebola e o alho, acrescente o palmito picado e tempere a gosto.',
        'Adicione o leite e o amido de milho dissolvido, mexendo até ficar cremoso. Reserve.',
        'Abra metade da massa e forre o fundo e as laterais de uma forma. Coloque o recheio de palmito.',
        'Abra a outra metade da massa para cobrir, feche bem as bordas.',
        'Pincele com o outro ovo batido e leve ao forno pré-aquecido a 180°C por cerca de 35-40 minutos, ou até dourar.'
      ],
      prepTimeMinutes: 30,
      cookTimeMinutes: 40,
      servings: 8,
      difficulty: 'Médio',
      categoryId: 2,
      isFavorite: false,
      imageUrl: 'https://via.placeholder.com/150/empadaopalmito',
      tags: ['empadão', 'palmito', 'salgado']
    }
  ];