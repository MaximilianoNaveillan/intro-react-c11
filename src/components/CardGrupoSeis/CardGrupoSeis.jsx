import "./styles.css";

function CardGrupoSeis({ children }) {
  return (
    <div className="card">
      <img
        className="cardImg"
        src="https://img.freepik.com/free-vector/gradient-background-with-wavy-shapes_23-2149128551.jpg?t=st=1719867258~exp=1719870858~hmac=4a3803716ff9ae79b0bd65fcbf683c6056f0d7297f1f0eb9be1645fac80275fa&w=1060"
        alt="card image"
      />
      <div className="text">
        <h3>{children[0]}</h3>
        <h2>{children[1]}</h2>
        <p>{children[2]}</p>
      </div>
    </div>
  );
}

export default CardGrupoSeis;
