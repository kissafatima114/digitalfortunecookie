const storedFortune = localStorage.getItem("selectedFortune");

if (storedFortune) {
  const fortune = JSON.parse(storedFortune);

  document.getElementById("fortune-quote").textContent = `"${fortune.quote}"`;
  document.getElementById("fortune-title").textContent = fortune.title;
  document.getElementById("fortune-category").textContent = fortune.category;
  document.getElementById("fortune-description").textContent = fortune.description;

  const image = document.getElementById("fortune-image");
  image.src = fortune.image;
  image.alt = fortune.title;
}
//DETAILS PAGE THAT DESCRIBES WHERE YOUR FORTUNE IS FROM