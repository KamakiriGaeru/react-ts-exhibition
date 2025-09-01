import Panel from '../../components/panel/panel.tsx'
import './home.scss'

function Home() {
    return (
        <main className="home">
            <Panel 
                title="React" 
                description={["React is a JavaScript library for building user interfaces."]}
                route="/react"
            />
            <Panel 
                title="TypeScript" 
                description={["TypeScript is a JavaScript library for building user interfaces."]}
                route="/typescript"
            />
            <Panel 
                title="Redux" 
                description={["Redux is a JavaScript library for building user interfaces."]}
                route="/redux"
            />
        </main>
    )
}

export default Home
