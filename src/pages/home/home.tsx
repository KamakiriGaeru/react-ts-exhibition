import Panel from '../../components/panel/panel.tsx'
import './home.scss'

function Home() {
    return (
        <main className="home">
            <Panel 
                title="React" 
                description={["UIを部品化して再利用したり部品間でデータのやりとりができるJavaScriptのライブラリ"]}
                route="/react"
            />
            <Panel 
                title="TypeScript" 
                description={["JavaScriptに型などを追加した言語"]}
                route="/typescript"
            />
            <Panel 
                title="Redux" 
                description={["状態管理ライブラリ"]}
                route="/redux"
            />
        </main>
    )
}

export default Home
