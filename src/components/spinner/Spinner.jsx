import "./spinner.css";

function Spinner() {
  // loadership
  return (
    <div className="spinner">
      <p className="visually-hidden">Loading</p>
      <div aria-hidden="true" className="loadership">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export { Spinner };
