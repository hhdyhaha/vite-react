import './App.css'
import {Img} from "./views/ImgData.tsx";

function App() {
    return (
        // 如果多个节点，需要用Fragment包裹起来
        <>
            <Img/>
            <div>
                haha
                <hr />

            </div>
        </>

    )
}

export default App
