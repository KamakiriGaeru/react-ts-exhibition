import './ReactPage.scss'
import Panel from '../../components/panel/panel.tsx'

function ReactPage() {
    return (
        <main className="react">
            <Panel 
                title="Props" 
                description={["Props are read-only parameters that are passed to a component."]}
            />
            <Panel 
                title="Hooks" 
                description={["Hooks are functions that allow you to use state and other React features in functional components."]}
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
