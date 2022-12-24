export default function DownCard({ $app, initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;
  this.$target = document.createElement("div");
  this.$target.classList.add("down");
  $app.append(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    this.$target.innerHTML = `
      <span class="font-roboto msg">벌써 새해가 되었네요.</span>
      <span class="font-roboto msg">다들 잘 살고 있는지 궁금합니다. 저는 드디어 대학교를 졸업한답니다! :)</span>
      <span class="font-roboto msg">2023년은 모두에게 특별하고 의미있는 한 해가 되었으면 합니다.</span>
      <span class="font-roboto msg">제게 2023년은 새로운 출발의 해가 될 것 같네요. 모두의 1년을 응원합니다.</span>
      <span class="font-roboto from">성주 드림</span>
      <span class="font-roboto msg" style="margin-top: 120px">Happy new year for my foreign friends!</span>
      <span class="font-roboto msg">How have u been guys? I’m finally gonna get the undergraduate degree!</span>
      <span class="font-roboto msg">I hope coming new year to be special and meaningful.</span>
      <span class="font-roboto msg">For me, It would be a fresh start for next year. I root for your 2023!</span>
      <span class="font-roboto from">Best regard, sung joo</span>
    `;
  }

  this.sendMessages = async (text) => {
    try {
      const data = await (await fetch("http://localhost:3000/msgs", {
        method: "POST",
        credentials: "same-origin",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          msgs: text
        })
      })).json();

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  this.$target.addEventListener("click", this.onClick, false);
  this.render();
}