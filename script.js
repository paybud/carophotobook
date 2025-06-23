const images = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg"
];

function showRandomImage() {
  const index = Math.floor(Math.random() * images.length);
  document.getElementById("memory-photo").src = images[index];
}