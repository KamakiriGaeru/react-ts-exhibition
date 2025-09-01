import './reduxPage.scss'
import Panel from '../../components/panel/panel.tsx'

function ReduxPage() {
    return (
        <main className="redux">
            <Panel 
                title="Reduxの流れ" 
                description={[
                    "①なにかしらのアクションが起こる",
                    "②sliceがアクションを受け取る",
                    "③sliceがstoreの中に状態を管理する",
                    "④storeの中に状態が管理される",
                    "⑤storeの中に状態が管理される",
                    "⑥storeの中に状態が管理される",
                    "⑦storeの中に状態が管理される",
                    "⑧storeの中に状態が管理される",
                ]}
            />
        </main>
    )
}

export default ReduxPage
