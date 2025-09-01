import { useSelector } from "react-redux";
import type { RootState } from "../../assets/redux/store";
import './header.scss'

function Header() {
    const point = useSelector((state: RootState) => state.point.inputPoint);
    return (
        <header className="header">
            <h1 className="header__title">
                React＆TypeScript＆Redux<br/>
                「学習」兼「備忘録」
            </h1>
            <div className="header__learnedPoint">
                <p className="header__learnedPoint-title">学習ポイント</p>
                <p className="header__learnedPoint-point">{point}</p>
            </div>
        </header>
    )
}

export default Header
