const cardImages = new Map();

// Adicione cada imagem ao Mapa de Módulos

cardImages.set('naruto', require('./card-images/naruto.jpg'));
cardImages.set('sasuke', require('./card-images/sasuke.jpg'));
cardImages.set('sakura', require('./card-images/sakura.jpg'));
// Adicione outras imagens conforme necessário

export default cardImages;
