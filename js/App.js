import UpperCard from "./UpperCard";
export default function App($app) {
  this.state = {

  }

  const upperCard = new UpperCard({ $app, initialState: 0, onClick: (e) => console.log(e) });
};
