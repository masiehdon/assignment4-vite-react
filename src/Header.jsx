import "./styles/Header.css"

const Header = function() {
    return (
        <div className="header">
  <a href="#default" className="logo">My Shop</a>
  <div className="header-right">
    <a className="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>
    )
}

export default Header;
