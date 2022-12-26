import UpperCard from "./UpperCard.js";
import DownCard from "./DownCard.js";
import Snow from "./Snow.js";
import checkMobile from "./checkMobile.js";

export default function App($app) {
  this.$card =  document.createElement("div");
  this.mouseX = 0;
  this.mouseY = 0;
  this.cardX = 0;
  this.cardY = 0;
  this.state = {
    isEnvelopOpened: false,
  }

  this.$card.classList.add("card");
  $app.append(this.$card);

  const upperCard = new UpperCard({
    $app: this.$card,
    initialState: false,
    onClick: () => {
      this.setState({...this.state, isEnvelopOpened: !this.state.isEnvelopOpened});
    }
  });

  const downCard = new DownCard({
    $app: this.$card,
    undefined,
    onClick: (e) => {
      console.log(e);
    }
  });

  const snow = new Snow({
    $target: $app,
    initialState: 20
  });

  this.mouseInteractive = () => {
    if (checkMobile()) {
      window.addEventListener("deviceorientation", (e) => {
        this.mouseX = e.gamma;
        this.mouseY = e.beta;
      });
    } else {
      window.addEventListener("mousemove", (e) => {
        this.mouseX = e.clientX - (window.innerWidth / 2);
        this.mouseY = e.clientY - (window.innerHeight / 2);
      }, false);
    }
  }

  this.rotateCard = () => {
    this.cardX += (this.mouseX - this.cardX) * 0.1;
    this.cardY += (this.mouseY - this.cardY) * 0.1;

    if (checkMobile()) {
      this.$card.style.transform = `translate(-50%, -48%) rotateZ(${(this.cardX + this.cardY) / 60}deg) rotateY(${-(this.cardX + 50) / 50}deg) rotateX(${-(this.cardY + 90) / 60}deg) ${window.innerWidth < 768 ? 'scale(0.2)' : 'scale(0.3)'}`;
    } else {
      this.$card.style.transform = `translate(-50%, -48%) rotateZ(${(this.cardX + this.cardY) / 100}deg) rotateY(${this.cardX / 120}deg) rotateX(${-this.cardY / 80}deg) ${window.innerWidth < 768 ? 'scale(0.2)' : 'scale(0.3)'}`;
    }
    window.requestAnimationFrame(this.rotateCard);
  }

  this.setState = (nextState) => {
    this.state = nextState;
    upperCard.setState(this.state.isEnvelopOpened);
  }

  this.mouseInteractive();
  this.rotateCard();
};
