import './reduxPage.scss'
import Panel from '../../components/panel/panel.tsx'

function ReduxPage() {
    return (
        <main className="redux">
            <Panel 
                title="state更新方法" 
                description={[
                    "①トリガーとなるアクションが起こる",
                    "②dispatchでリデューサーを実行",
                    "③stateが更新される",
                ]}
            />
            <Panel 
                title="state使用方法" 
                description={[
                    "①useSelectorでstateを取得",
                ]}
            />
        </main>
    )
}

export default ReduxPage
