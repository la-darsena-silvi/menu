const Aperitivo = [
  {
    nome: "Aperibeach",
    contenuto: [
      {
        sottosezione: (
          <>
            7€ con bevanda inclusa <br /> esclusi cockatil e birre
          </>
        ),
      },
      {
        testo:
          "Selezione di salumi e pecorino, paninetto farcito e stuzzicherie.",
      },
    ],
  },
  {
    nome: "Aperitivo Darsena",
    contenuto: [
      {
        sottosezione: "15€ bevande escluse",
      },
      {
        testo:
          "Selezione di crudi e cotti in base al pescato di giornata e cartoccio di frittura.",
      },
    ],
  },
  {
    nome: "Panini",
    contenuto: [
      {
        nome: "Ciabatta con Polpo *",
        testo:
          "Ciabatta farcita con polpo arrostito, insalatina croccante, maionese alla curcuma e chips di patate.",
        prezzo: "13,00",
        allergeni: ["cereali", "uova", "molluschi"],
      },
      {
        nome: "Michetta con tonno *",
        testo:
          "Michetta farcita con tonno, carpaccio di zucchine alla menta, maionese al wasabi e chips di patate.",
        prezzo: "13,00",
        allergeni: ["cereali", "uova", "pesce", "frutta a guscio", "solfiti"],
      },
    ],
  },
  {
    nome: "bevande",
    contenuto: [
      {
        nome: "Calice di vino",
        prezzo: "3,50",
      },
      {
        nome: "Calice di prosecco",
        prezzo: "4,00",
      },
      {
        nome: "Campari Soda",
        prezzo: "4,00",
      },
      {
        nome: "Spritz",
        prezzo: "5,00",
      },
      {
        nome: "Lattina 33cl",
        testo: "Fanta, Pepsi Zero, Tè al limone, Tè alla pesca.",
        prezzo: "3,00",
      },
      {
        nome: "Spina 33cl",
        testo: "Pepsi Cola, 7UP, Lemon Soda, Acqua tonica",
        prezzo: "3,00",
      },
      {
        nome: "Crodino",
        prezzo: "3,50",
      },
      {
        nome: "Sanbitter bianco",
        prezzo: "3,50",
      },
      {
        nome: "Sanbitter rosso",
        prezzo: "3,50",
      },
      {
        nome: "Cocktail Sanpellegrino",
        prezzo: "3,50",
      },
      {
        nome: "Succhi di frutta",
        testo: "ACE, mirtillo, arancia, pera, pesca, albicocca",
        prezzo: "3,00",
      },
    ],
  },
  {
    nome: "birre",
    contenuto: [
      {
        nome: "Ichnusa non filtrata 33cl",
        prezzo: "4,00",
      },
      {
        nome: "Corona 33cl",
        prezzo: "4,00",
      },
      {
        nome: "Peroni 66cl",
        prezzo: "4,00",
      },
    ],
  },
  {
    nome: "drink",
    contenuto: [
      {
        nome: "hugo",
        testo: "Prosecco, sciroppo, soda, menta, limone.",
        prezzo: "5,00",
      },
      {
        nome: "negroni",
        testo: "gin, bitter campari, vermouth rosso.",
        prezzo: "5,00",
      },
      {
        nome: "negroni sbagliato",
        testo: "prosecco, bitter campari, vermouth rosso.",
        prezzo: "5,00",
      },
      {
        nome: "americano",
        testo: "vermouth rosso, bitter campari, fetta di arancia.",
        prezzo: "5,00",
      },
      {
        nome: "sensual peach",
        testo: "prosecco, liquore alla pesca, polpa di pesca, lime.",
        prezzo: "5,00",
      },
    ],
  },
  {
    nome: "cocktail",
    contenuto: [
      {
        nome: "mojito",
        testo: "Rum bianco, zucchero di canna, menta, lime, soda.",
        prezzo: "6,00",
      },
      {
        nome: "black mojito",
        testo:
          "Rum bianco, liquore alla liquirizia, zucchero di canna, menta, lime, soda.",
        prezzo: "6,50",
      },
      {
        nome: "kiev mule",
        testo: "Vodka, ginger beer, succo di lime.",
        prezzo: "6,00",
      },
      {
        nome: "gin tonic",
        testo: "Gin, acqua tonica, fetta di limone.",
        prezzo: "6,00",
      },
      {
        nome: "gin lemon",
        testo: "Gin, lemon soda, fetta di limone.",
        prezzo: "6,00",
      },
      {
        nome: "cuba libre",
        testo: "Rum bianco, Coca Cola, lime.",
        prezzo: "6,00",
      },
      {
        nome: "caipirinha",
        testo: "Cachaca, zucchero di canna, lime.",
        prezzo: "6,00",
      },
      {
        nome: "caipiroska",
        testo: "Vodka, zucchero di canna, lime.",
        prezzo: "6,00",
      },
    ],
  },
  {
    nome: "cocktail analcolici",
    contenuto: [
      {
        nome: "mojito",
        testo: "Lemon soda, zucchero di canna, menta, lime, soda.",
        prezzo: "5,00",
      },
      {
        nome: "orange sunrise",
        testo: "Succo di arancia, Fanta, granatina, arancia.",
        prezzo: "5,00",
      },
      {
        nome: "multifruit",
        testo: "Cocktail analcolico alla frutta.",
        prezzo: "5,00",
      },
    ],
  },
  {
    nome: "vini",
    contenuto: [
      {
        sottosezione: "vini bianchi",
      },
      {
        nome: "J'abbruzzu",
        nomeMinuscolo: "Trebbiano",
        testo: "Podere Castorani",
        prezzo: "16,00",
      },
      {
        nome: "Amorino",
        nomeMinuscolo: "Trebbiano d'Abruzzo DOC Superiore",
        testo: "Podere Castorani",
        prezzo: "21,00",
      },
      {
        nome: "Amorino",
        nomeMinuscolo: "Abruzzo Pecorino DOC Superiore",
        testo: "Podere Castorani",
        prezzo: "21,00",
      },
      {
        nome: "Villa gemma",
        nomeMinuscolo: "Bianco Colline Teatine IGT",
        testo: "Masciarelli Tenute Agricole",
        prezzo: "23,00",
      },
      {
        nome: "Marina Cvetic",
        nomeMinuscolo: "Trebbiano d'Abruzzo DOC Riserva",
        testo: "Masciarelli Tenute Agricole",
        prezzo: "45,00",
      },
      {
        nome: "malandrino",
        nomeMinuscolo: "Trebbiano d'Abruzzo DOC",
        testo: "Cataldi Madonna",
        prezzo: "23,00",
      },
      {
        nome: "giulia",
        nomeMinuscolo: "Pecorino IGT Terre Aquilane",
        testo: "Cataldi Madonna",
        prezzo: "23,00",
      },
      {
        nome: "60 passi",
        nomeMinuscolo: "Pecorino Colline Pescaresi IGP",
        testo: "Cantina Marramiero",
        prezzo: "19,00",
      },
      {
        nome: "emidio pepe 2022",
        nomeMinuscolo: "Trebbiano d'Abruzzo DOC",
        testo: "Emidio Pepe",
        prezzo: "60,00",
      },
      {
        nome: "emidio pepe 2022",
        nomeMinuscolo: "Pecorino Colli Aprutini IGT 2022",
        testo: "Emidio Pepe",
        prezzo: "80,00",
      },
      {
        nome: "cococciola",
        nomeMinuscolo: "Terre di Chieti IGP",
        testo: "Tenuta Ulisse",
        prezzo: "23,00",
      },
      {
        nome: "passerina",
        nomeMinuscolo: "Terre di Chieti IGP",
        testo: "Tenuta Ulisse",
        prezzo: "23,00",
      },
      {
        nome: "chardonnay",
        nomeMinuscolo: "Alto Adige DOC",
        testo: "Kellerei Meran Burggräfler",
        prezzo: "21,00",
      },
      {
        nome: "gewurztraminer",
        nomeMinuscolo: "Alto Adige DOC",
        testo: "Kellerei Meran Burggräfler",
        prezzo: "23,00",
      },
      {
        nome: "la segreta il bianco",
        nomeMinuscolo: "Sicilia DOC",
        testo: "Planeta",
        prezzo: "21,00",
      },
      { sottosezione: "vini rossi" },
      {
        nome: "malandrino",
        nomeMinuscolo: "Montepulciano d'Abruzzo bio",
        testo: "Cataldi Madonna",
        prezzo: "21,00",
      },
      {
        nome: "testa rossa rosso",
        nomeMinuscolo: "Montepulciano d'Abruzzo DOC",
        testo: "Pasetti",
        prezzo: "28,00",
      },
      {
        nome: "J'abbruzzu",
        nomeMinuscolo: "Montepulciano d'Abruzzo DOC",
        testo: "Podere Castorani",
        prezzo: "16,00",
      },
      {
        nome: "Amorino",
        nomeMinuscolo: "Montepulciano d'Abruzzo DOC",
        testo: "Podere Castorani",
        prezzo: "21,00",
      },
      {
        nome: "Inferi",
        nomeMinuscolo: "Montepulciano d'Abruzzo DOC Riserva",
        testo: "Marramiero",
        prezzo: "28,00",
      },
      {
        nome: "Antàres",
        nomeMinuscolo: "Montepulciano d'Abruzzo Colline Teramane DOCG",
        testo: "San Lorenzo Vini",
        prezzo: "18,00",
      },
      {
        nome: "emidio pepe 2020",
        nomeMinuscolo: "Montepulciano d'Abruzzo DOC",
        testo: "Emidio Pepe",
        prezzo: "65,00",
      },
      {
        nome: "Marina Cvetic",
        nomeMinuscolo: "Montepulciano d'Abruzzo DOC Riserva",
        testo: "Masciarelli Tenute Agricole",
        prezzo: "35,00",
      },
      {
        nome: "villa gemma 2017",
        nomeMinuscolo: "Montepulciano d'Abruzzo DOC Riserva",
        testo: "Masciarelli Tenute Agricole",
        prezzo: "70,00",
      },
      { sottosezione: "vini rosati" },
      {
        nome: "rosato san lorenzo",
        nomeMinuscolo: "Colli Aprutini IGT",
        testo: "San Lorenzo Vini",
        prezzo: "19,00",
      },
      {
        nome: "villa gemma",
        nomeMinuscolo: "Cerasuolo d'Abruzzo DOC",
        testo: "Masciarelli Tenute Agricole",
        prezzo: "23,00",
      },
      {
        nome: "testa rossa rosato",
        nomeMinuscolo: "Terre Aquilane IGP",
        testo: "Pasetti",
        prezzo: "21,00",
      },
      {
        nome: "J'abbruzzu",
        nomeMinuscolo: "Cerasuolo d'Abruzzo DOC",
        testo: "Podere Castorani",
        prezzo: "16,00",
      },
      {
        nome: "Amorino",
        nomeMinuscolo: "Cerasuolo d'Abruzzo DOC",
        testo: "Podere Castorani",
        prezzo: "21,00",
      },
      {
        nome: "merlot",
        nomeMinuscolo: "Terre di Chieti IGT",
        testo: "Tenute Ulisse",
        prezzo: "23,00",
      },
      {
        nome: "malandrino",
        nomeMinuscolo: "Cerasuolo d'Abruzzo bio DOC",
        testo: "Cataldi Madonna",
        prezzo: "21,00",
      },
      {
        nome: "calalenta",
        nomeMinuscolo: "Merlot Rosato",
        testo: "Cantina Fantini",
        prezzo: "21,00",
      },
      { sottosezione: "spumanti & champagne" },
       {
        nome: "pecorino brut",
        testo: "San Lorenzo Vini",
        prezzo: "18,00",
      },
      {
        nome: "rosato brut",
        testo: "San Lorenzo Vini",
        prezzo: "20,00",
      },
      {
        nome: "za grazia",
        nomeMinuscolo: "Za' Grazia",
        testo: "Cantina Fuschi",
        prezzo: "18,00",
      },
      {
        nome: "Fuschi Rosa",
        nomeMinuscolo: "Fuschi Rosa",
        testo: "Cantina Fuschi",
        prezzo: "18,00",
      },
      {
        nome: "passerina podere castorani",
        nomeMinuscolo: "Metodo Classico Millesimato",
        testo: "Podere Castorani",
        prezzo: "36,00",
      },
      {
        nome: "gran cuvée bianca",
        nomeMinuscolo: "Swarovsky",
        testo: "Cantina Fantini",
        prezzo: "21,00",
      },
      {
        nome: "gran cuvée rosé",
        nomeMinuscolo: "Swarovsky",
        testo: "Cantina Fantini",
        prezzo: "21,00",
      },
      {
        nome: "ferrari brut",
        testo: "Ferrari - Fratelli Lunelli",
        prezzo: "33,00",
      },
      {
        nome: "cuvée imperiale brut",
        nomeMinuscolo: "Franciacorta",
        testo: "Guido Berlucchi & C.",
        prezzo: "33,00",
      },
      {
        nome: "yellow label",
        nomeMinuscolo: "Champagne Brut",
        testo: "Veuve Clicquot & Ponsardin",
        prezzo: "65,00",
      },
      {
        nome: "fernand lemarie",
        nomeMinuscolo: "FERNAND LEMAIRE Champagne Brut",
        testo: "Fernand Lemarie",
        prezzo: "50,00",
      },
      {
        nome: "theophile",
        nomeMinuscolo: "Thèophile Champagne Brut",
        testo: "Louis Roederer",
        prezzo: "50,00",
      },
      {
        nome: "demonge",
        nomeMinuscolo: "Demonge Champagne Brut-Rosè",
        testo: "Demonge",
        prezzo: "55,00",
      },
      {
        nome: "leon launois",
        nomeMinuscolo: "LEON LAUNOIS Champagne Cuvée Rèservèe Brut",
        testo: "Azienda Vinicola Léon Launois",
        prezzo: "50,00",
      },

      {
        nome: "princes blanc de blancs",
        nomeMinuscolo: "Princes Blanc De Blancs Brut",
        testo: "De Venoge",
        prezzo: "95,00",
      },

      {
        nome: "princes blanc de noirs",
        nomeMinuscolo: "Princes Blanc De Noirs Brut",
        testo: "De Venoge",
        prezzo: "105,00",
      },
      {
        nome: "princes extra brut",
        nomeMinuscolo: "Princes Extra Brut",
        testo: "De Venoge",
        prezzo: "95,00",
      },
      
      {
        nome: "princes rosè brut",
        nomeMinuscolo: "Princes Rosè Brut",
        testo: "De Venoge",
        prezzo: "110,00",
      },
    ],
  },
];

export default Aperitivo;
