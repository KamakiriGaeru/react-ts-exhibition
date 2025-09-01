import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "./panel.scss";
import { pointAdd } from "../../assets/redux/slice/pointSlice";
import type { AppDispatch } from "../../assets/redux/store";

//引数の型を定義
interface PanelProps {
    title: string;
    description: string[];
    route?: string;
}

function Panel({ title, description, route }: PanelProps) {
    const navigate = useNavigate();
    const [learned, setLearned] = useState(false);
    const [isInitialMount, setIsInitialMount] = useState(true);
    const dispatch = useDispatch<AppDispatch>();

    //ルーティング先が渡されていれば画面遷移する
    const handleClick = () => {
        if (route != undefined) {
            navigate(route);
        }
        else if (learned == true) {
            setLearned(false);
        }
        else if (learned == false) {
            setLearned(true);
        }
    };

    //学習ポイントの増減
    useEffect(() => {
        // 初期マウント時はポイントを変更しない
        if (isInitialMount) {
            setIsInitialMount(false);
            return;
        }
        
        if ( (learned == true ) && (route == undefined) ) {
            dispatch(pointAdd(1));
        }
        else if ( (learned == false) && (route == undefined) ) {
            dispatch(pointAdd(-1));
        }
    }, [learned, route, dispatch, isInitialMount]);

    //routeが変更されたときにlearnedをリセット
    useEffect(() => {
        setLearned(false);
        setIsInitialMount(true); // 新しいページでは初期マウント状態に戻す
    }, [route]);

    return (
        <div className={`panel ${learned ? 'learnedPanel' : ''}`} onClick={handleClick}>
            <h2 className="panel-title">{title}</h2>
            <ul className="panel-description">
                {description.map((item, index) => (
                    <li className="panel-description-item" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Panel
