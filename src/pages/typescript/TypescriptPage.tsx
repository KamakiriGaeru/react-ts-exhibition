import './tsPage.scss'
import Panel from '../../components/panel/panel.tsx'

function TypescriptPage() {
    return (
        <main className="typescript">
            <Panel 
                title="ジェネリクス" 
                description={[
                    "関数の引数などの型を指定可能",
                    "function generics<T>(arg: T): T { return arg; }",
                    'generics<string>("hello")',
                ]}
            />
            <Panel 
                title="interface" 
                description={[
                    "オブジェクトの型と要素を定義可能",
                    'interface Person { name: string, age: number }',
                    'let obj: Person = { name: "takashi", age: 30 };',
                ]}
            />
        </main>
    )
}

export default TypescriptPage
