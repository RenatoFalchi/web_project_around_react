import logo from '../../images/Header-Around_The_Us_Logo.png'

export default function Header () {
    
    return(
        <header className="header">
            <div className="header__box">
                <img
                    src={logo}
                    className="header__logo"
                    alt="Around The US logotype"
                />
            </div>
        </header>
    )
}

