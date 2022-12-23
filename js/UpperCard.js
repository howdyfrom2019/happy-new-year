const celebration = new Image().src = "../assets/celebration.png";
const mountain1 = new Image().src = "../assets/mountain1.png";
const mountain2 = new Image().src = "../assets/mountain2.png";
const rabbit = new Image().src = "../assets/rabbit.png";
const rock = new Image().src = "../assets/rock.png";
const sun = new Image().src = "../assets/sun.png";

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
    this.$target.style.animationName = this.state ? "open" : "close";
    this.$target.innerHTML = `
      <span class="font-roboto cover">2023년 연하장 To 당신!</span>
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
