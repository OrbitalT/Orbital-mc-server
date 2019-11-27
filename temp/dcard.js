const serfiles = [{
  title: "title1"
}, {
  title: "title2"
}, {
  title: "title3"
}];

const container = document.getElementById('here');

serfiles.forEach((result, idx) => {
  // Construct card content
  const content = `
  <div class="cards-list">
    <div class="card 1">
      <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
      <div class="card_title title-white">
        <p> ${result.title} </p>
      </div>
    </div>
  </div>
  `;
  // Append newyly created card element to the container
  container.innerHTML += content;
})
