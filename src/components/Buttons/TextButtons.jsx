import "./styles.css";
/* 
function myFunction(prp) {
  console.log(prp)
}

myFunction("lo que sea")

*/
function TextButtons({ children }) {
  return (
    <button className="btn" type="button">
      <span>{children}</span>
    </button>
  );
}

export default TextButtons;
