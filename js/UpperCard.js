const celebration = new Image().src = "../happy-new-year/assets/celebration.png";
const mountain1 = new Image().src = "../happy-new-year/assets/mountain1.png";
const mountain2 = new Image().src = "../happy-new-year/assets/mountain2.png";
const rabbit = new Image().src = "../happy-new-year/assets/rabbit.png";
const rock = new Image().src = "../happy-new-year/assets/rock.png";
const sun = new Image().src = "../happy-new-year/assets/sun.png";

export default function UpperCard({ $app, initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;
  this.$target = document.createElement("div");
  this.$target.className = 'upper';
  $app.append(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    this.$target.innerHTML = `
      <img class="sun" src=${sun} alt="sun" />
      <img class="mountain1" src=${mountain1} alt="mountain1" />
      <img class="mountain2" src=${mountain2} alt="mountain2" />
      <img class="rabbit" src=${rabbit} alt="rabbit" />
      <img class="rock" src=${rock} alt="rock" />
      <img class="celebration" src=${celebration} alt="celebration" />
     `;

    this.$target.addEventListener("click", onClick);
  }

  this.render();
}
