const animeContainer = document.querySelector('#anime-container');

// Data for anime
const animeData = [
  {
    title: 'Naruto',
    image: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
    description: 'The story follows the adventures of Naruto Uzumaki, a young ninja from the fictional village of Konohagakure.'
  },
  {
    title: 'Attack on Titan',
    image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
    description: 'The story follows Eren Yeager, who lives in a world where humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid beings who devour humans without apparent reason.'
  },
  {
    title: 'One Piece',
    image: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
    description: 'The series focuses on Monkey D. Luffy, a young man who, inspired by his childhood idol and powerful pirate "Red Haired" Shanks, sets off on a journey from the East Blue Sea to find the titular treasure and proclaim himself the King of the Pirates.'
  }
];

// Render anime
animeData.forEach(anime => {
  const animeElement = document.createElement('div');
  animeElement.classList.add('anime');

  const imageElement = document.createElement('img');
  imageElement.src = anime.image;
  imageElement.alt = anime.title;
  animeElement.appendChild(imageElement);

  const titleElement = document.createElement('h2');
  titleElement.textContent = anime.title;
  animeElement.appendChild(titleElement);

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = anime.description;
  animeElement.appendChild(descriptionElement);

  animeContainer.appendChild(animeElement);
});
