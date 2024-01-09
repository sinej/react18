const App = () => (
    <div className="Page">
        <div className="ProductPage">
            <header>
                <h1>메뉴목록</h1>
            </header>
            <main>
                <ul>
                    <li>
                        <div>
                            <div>
                                <h2 className="ProductItem">고소한 바질 파스타</h2>
                                <div className="description">6,000원</div>
                                <button className="Button brand">주문하기</button>
                            </div>
                            <div className="thumbnail">
                                <img src={`./images/menu-고소한바질파스타.jpg`} alt="고소한바질파스타 6000원"/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <h2></h2>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <h2></h2>
                            </div>
                        </div>
                    </li>
                </ul>
            </main>
            <footer>
                <nav className="Navbar">
                    <a href="#" className="active">메뉴목록</a>
                    <a href="#" className="active">주문목록</a>
                </nav>
            </footer>
        </div>
    </div>
)

export default App;
