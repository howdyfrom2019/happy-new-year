import UpperCard from "./UpperCard.js";
import DownCard from "./DownCard.js";
import Snow from "./Snow.js";

export default function App($app) {
  this.$card =  document.createElement("div");
  this.mouseX = 0;
  this.mouseY = 0;
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
      // this.sendMessages("hi it's test~");
    }
  });

  const snow = new Snow({
    $target: $app,
    initialState: 20
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

  this.setState = (nextState) => {
    this.state = nextState;
    upperCard.setState(this.state.isEnvelopOpened);
  }

  this.sendMessages = (text) => {
    downCard.sendMessages(text);
  }

  this.mouseInteractive();
};
