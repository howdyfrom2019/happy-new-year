import UpperCard from "./UpperCard.js";
import DownCard from "./DownCard.js";

export default function App($app) {
  this.$card =  document.createElement("div");
  this.state = {

  }

  this.$card.classList.add("card");
  $app.append(this.$card);

  const upperCard = new UpperCard({
    $app: this.$card,
    undefined,
    onClick: (e) => {
      console.log(e);
    }
  });

  const downCard = new DownCard({
    $app: this.$card,
    undefined,
    onClick: (e) => {
      console.log(e);
    }
  })

  this.render = () => {
    $app.innerHTML = this.$card;
  }
};
