import './ReactPage.scss'
import Panel from '../../components/panel/panel.tsx'

function ReactPage() {
    return (
        <main className="react">
            <Panel 
                title="Props" 
                description={["子コンポーネントを呼び出し時にデータを渡せる"]}
            />
            <Panel 
                title="Hooks" 
                description={["useState", "useEffect", "など"]}
            />
            <Panel 
                title="React Router" 
                description={[
                    "フロント側でルーティングを制御する",
                    "以下三段階のタグで囲う",
                    "①<BrowserRouter>",
                    "②<Routes>",
                    "③<Route>"
                ]}
            />
            <Panel 
                title="イベントハンドラ" 
                description={[
                    "各種タイミングをトリガーとした処理を実装できる",
                    "onClick",
                    "onKeyDown",
                    "onChange",
                    "onSubmit",
                    "onScroll"
                ]}
            />
        </main>
    )
}

export default ReactPage
