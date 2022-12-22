import UpperCard from "./UpperCard.js";
import DownCard from "./DownCard.js";

export default function App($app) {
  this.$card =  document.createElement("div");
  this.mouseX = 0;
  this.mouseY = 0;
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
  });

  this.mouseInteractive = () => {
    window.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX - (window.innerWidth / 2);
      this.mouseY = e.clientY - (window.innerHeight / 2);
      this.rotateCard();
    }, false);
  }

  this.rotateCard = () => {
    this.$card.style.transform = `translate(-50%, -48%) rotateZ(${(this.mouseX + this.mouseY) / 100}deg) rotateY(${this.mouseX / 100}deg) rotateX(${-this.mouseY / 100}deg) ${window.innerWidth < 768 ? 'scale(0.14)' : 'scale(0.3)'}`;
  }

  this.mouseInteractive();
};
