import "./Home.css";

export default function Home() {
  return (
    <div className="home-page__container" area="content">
      <div className="my-image">
        <img className="img" src="https://www.iberdrola.com/documents/20125/40480/Alimentacion_746x419.jpg/785549d3-a553-cae2-30c0-cba06eac96fe?t=1627378457816" alt="sustainable_apples"></img>
      </div>
      <div className="header">
        <span className="welcome">Gaia Sustainable Food</span>
        <p className="welcome__detail">
          Welcome to my WebStore! I'm Iván, founder of Gaia Sustainable Food. I'm so happy you are here. I invite you to look up my site and check it out
        </p>
      </div>
    </div>
  );
}
