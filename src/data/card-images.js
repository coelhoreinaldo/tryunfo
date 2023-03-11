// // const cardImages = new Map();

// // // Adicione cada imagem ao Mapa de Módulos
// // cardImages.map((image) => cardImages.set(`${image}`, require('./card-images/image.jpg')));
// // cardImages.set('naruto', require('./card-images/naruto.jpg'));
// // cardImages.set('sasuke', require('./card-images/sasuke.jpg'));
// // cardImages.set('sakura', require('./card-images/sakura.jpg'));
// // // Adicione outras imagens conforme necessário

// // export default cardImages;

// const fs = require('fs');

// const cardImages = new Map();

// // Ler o diretório "card-images" e adicionar cada imagem ao Mapa de Módulos
// fs.readdirSync('./card-images').forEach((file) => {
//   const cardName = file.replace('.jpg', ''); // Extrair o nome da carta sem a extensão
//   const cardImagePath = `./card-images/${file}`;
//   cardImages.set(cardName, require(cardImagePath));
// });

// export default cardImages;
