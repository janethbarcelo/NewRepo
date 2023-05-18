console.log('hola mundo');

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3';
const API_URL2 = 'https://dog.ceo/api/breeds/image/random';

async function reload() {
  const res = await fetch(API_URL);
  const data = await res.json();

  console.log(data);
  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');
  const img3 = document.getElementById('img3');
  const img4 = document.getElementById('img4');

  img1.src = data[0].url;
  img2.src = data[1].url;
  img3.src = data[2].url;

  try {
    const res2 = await fetch(API_URL2);
    const data2 = await res2.json();
    console.log(data2);
    img4.src = data2.message; // Accedemos a la propiedad 'message' para obtener la URL de la imagen de Dog CEO
  } catch (error) {
    console.error('Error al llamar a la API de Dog CEO:', error);
  }
}

reload();
