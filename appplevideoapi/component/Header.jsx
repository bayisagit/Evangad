function Header() {
  return (
    <div>
      <header className="headerwrapper">
        <div className="internalwrapper">
          <ul className="linkswrapper">
            <li className="applelink">
              <a href="#"><img src="/images/logo.png" alt="apple" /></a>
            </li>
            <li><a href="#">mac</a></li>
            <li><a href="#">iphone</a></li>
            <li><a href="#">i-pad</a></li>
            <li><a href="#">watch</a></li>
            <li><a href="#">tv</a></li>
            <li><a href="#">music</a></li>
            <li><a href="#">support</a></li>
            <li className="searchlink">
              <a href="search"><img src="/images/search-icon.png" alt="search" /></a>
            </li>
            <li className="cartlink">
              <a href="cart"><img src="/images/cart.png" alt="cart" /></a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
export default Header;