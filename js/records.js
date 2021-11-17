/*
  Create an array of 'pet' objects.
  Each object should have the following properties:
  name, type, breed, age, and photo
*/
const records = [
  {
    torneo: 'Sub Campeones I Torneo 2021-2022',
    copa: 'Copa Droguería Platinum, C.A.',
    winnerOne: 'Andres Sanchez',
    winnerTwo: 'Luis Beltran',
    team: 'Equipo El Portu',
    winOneRanking: 2,
    winTwoRanking: 1,
    date: '13 Noviembre 2021',
    photo: 'IMAGE/image01.jpg'
  },
  {
    torneo: 'Campeones XIII Torneo 2020-2021',
    copa: 'Copa Cumpleaños Mamaota',
    winnerOne: 'Mamaota',
    winnerTwo: 'Dany Pinocho',
    team: 'Equipo El Portu',
    winOneRanking: 2,
    winTwoRanking: 2,
    date: '09 Noviembre 2021',
    photo: 'IMAGE/image02.jpg'
  },
  {
    torneo: 'Sub Campeones XIII Torneo 2020-2021',
    copa: 'Copa Cumpleaños Mamaota',
    winnerOne: 'Falta Nombre',
    winnerTwo: 'Falta Nombre',
    team: 'Falta Nombre',
    winOneRanking: 0,
    winTwoRanking: 0,
    date: '09 Noviembre 2021',
    photo: 'IMAGE/imageBlank.jpg'
  },
  {
    torneo: 'Campeones XII Torneo 2020-2021',
    copa: 'Copa Aluminios Pipo',
    winnerOne: 'Falta Nombre',
    winnerTwo: 'Falta Nombre',
    team: 'Falta Nombre',
    winOneRanking: 0,
    winTwoRanking: 0,
    date: '23 Octubre 2021',
    photo: 'IMAGE/imageBlank.jpg'
  },
  {
    torneo: 'Sub Campeones XII Torneo 2020-2021',
    copa: 'Copa Aluminios Pipo',
    winnerOne: 'Falta Nombre',
    winnerTwo: 'Falta Nombre',
    team: 'Falta Nombre',
    winOneRanking: 0,
    winTwoRanking: 0,
    date: '23 Octubre 2021',
    photo: 'IMAGE/imageBlank.jpg'
  },
  {
    torneo: 'Campeones XI Torneo 2020-2021',
    copa: 'Copa Cumpleaños Franklin Trias',
    winnerOne: 'El Portu',
    winnerTwo: 'Falta Nombre',
    team: 'Falta Nombre',
    winOneRanking: 4,
    winTwoRanking: 0,
    date: '03 Octubre 2021',
    photo: 'IMAGE/imageBlank.jpg'
  },
  {
    torneo: 'Sub Campeones XI Torneo 2020-2021',
    copa: 'Copa Cumpleaños Franklin Trias',
    winnerOne: 'Falat Nombre',
    winnerTwo: 'Falta Nombre',
    team: 'Falta Nombre',
    winOneRanking: 0,
    winTwoRanking: 0,
    date: '03 Octubre 2021',
    photo: 'IMAGE/imageBlank.jpg'
  },
  {
    torneo: 'Campeones X Torneo 2020-2021',
    copa: 'Copa Helados Kalipso',
    winnerOne: 'Falta Nombre',
    winnerTwo: 'Falta Nombre',
    team: 'Falta Nombre',
    winOneRanking: 0,
    winTwoRanking: 0,
    date: '17 Septiembre 2021',
    photo: 'IMAGE/imageBlank.jpg'
  },
  {
    torneo: 'Sub Campeones X Torneo 2020-2021',
    copa: 'Copa Helados Kalipso',
    winnerOne: 'Falta Nombre',
    winnerTwo: 'Falta Nombre',
    team: 'Falta Nombre',
    winOneRanking: 0,
    winTwoRanking: 0,
    date: '17 Septiembre 2021',
    photo: 'IMAGE/imageBlank.jpg'
  },
  {
    torneo: 'Campeones IX Torneo 2020-2021',
    copa: 'Sin Informacion',
    winnerOne: 'Falta Nombre',
    winnerTwo: 'Falta Nombre',
    team: 'Falta Nombre',
    winOneRanking: 0,
    winTwoRanking: 0,
    date: 'Sin Informacion',
    photo: 'IMAGE/imageBlank.jpg'
  },
  {
    torneo: 'Sub Campeones IX Torneo 2020-2021',
    copa: 'Sin Informacion',
    winnerOne: 'Falta Nombre',
    winnerTwo: 'Falta Nombre',
    team: 'Falta Nombre',
    winOneRanking: 0,
    winTwoRanking: 0,
    date: 'Sin Informacion',
    photo: 'IMAGE/imageBlank.jpg'
  },
  {
    torneo: 'Campeones VIII Torneo 2020-2021',
    copa: 'Copa Grupo Comuncacional LH',
    winnerOne: 'Falta Nombre',
    winnerTwo: 'Falta Nombre',
    team: 'Falta Nombre',
    winOneRanking: 0,
    winTwoRanking: 0,
    date: '17 Julio 2021',
    photo: 'IMAGE/imageBlank.jpg'
  },
  {
    torneo: 'Sub Campeones VIII Torneo 2020-2021',
    copa: 'Copa Grupo Comuncacional LH',
    winnerOne: 'Falta Nombre',
    winnerTwo: 'Falta Nombre',
    team: 'Falta Nombre',
    winOneRanking: 0,
    winTwoRanking: 0,
    date: '17 Julio 2021',
    photo: 'IMAGE/imageBlank.jpg'
  },
  {
    torneo: 'Campeones Torneo VII 2020-2021',
    copa: 'Copa Ernesto Luna / Ana Fuentes',
    winnerOne: 'Pescuezo',
    winnerTwo: 'Abraham Rojas',
    team: 'Equipo Que Arepas y Algo Mas...',
    winOneRanking: 2,
    winTwoRanking: 1,
    date: 'Sin Informacion',
    photo: 'IMAGE/image03.jpg'
  },
  {
    torneo: 'Sub Campeones Torneo VII 2020-2021',
    copa: 'Copa Ernesto Luna / Ana Fuentes',
    winnerOne: 'Manuel Beltran',
    winnerTwo: 'Andres Sanchez',
    team: 'Equipo El Portu',
    winOneRanking: 1,
    winTwoRanking: 1,
    date: 'Sin Informacion',
    photo: 'IMAGE/imageBlank.jpg'
  },
  /*{
    project: 'Chiquitin Carreando',
    work: 'Thinking',
    status: '0% Advance',
    hour_work: 6,
    photo: 'IMAGE/image04.jpg'
  },
  {
    project: 'Pipon Two',
    work: 'Reventing',
    status: 'Over Vieja',
    hour_work: 2,
    photo: 'IMAGE/image05.jpg'
  }*/
];
