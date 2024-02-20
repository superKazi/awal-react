import "./header.css";

function Header() {
  return (
    <header className="header">
      <img className="header__img" src="woofer.svg" width="60" height="60" alt="app logo" />
      <h1 className="header__hed">Woofer</h1>
    </header>
  );
}

export { Header }