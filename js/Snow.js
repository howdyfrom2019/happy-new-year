export default function Snow ({ $target, initialState }) {
  this.state = initialState;
  this.$snow = document.createElement("div");
  this.$snow.classList.add("snowing");
  $target.append(this.$snow);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    this.$snow.innerHTML = `
      ${this.snow("small")}
      ${this.snow("medium")}
    `;
  }

  this.snow = (size) => {
    return `<span class=${size}></span>`.repeat(this.state);
  }

  this.render();
}