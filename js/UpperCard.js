import celebration from "../assets/celebration.png";
import mountain1 from "../assets/mountain1.png";
import mountain2 from "../assets/mountain2.png";
import rabbit from "../assets/rabbit.png";
import rock from "../assets/rock.png";
import sun from "../assets/sun.png";

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