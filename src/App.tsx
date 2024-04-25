import './App.css'
import {Img} from "./views/ImgData.tsx";

const imgUrl1 = "https://th.bing.com/th/id/R.98415963b412fccea2d8c4e2b3f695e8?rik=HdwmF8f2XbTwUQ&riu=http%3a%2f%2fi1.hdslb.com%2fbfs%2farchive%2f25359e94f3481702ce699cc867b236c9d056adbc.jpg&ehk=aFN1%2f0CPFS8Bsm7lcpdWzXbRVVRniH9WE9GQ3nVnTNc%3d&risl=&pid=ImgRaw&r=0"

function App() {
    return (
        // 如果多个节点，需要用Fragment包裹起来
        <>
            <Img imgUrl={imgUrl1}/>
            <div>
                haha
                <hr />

            </div>
        </>

    )
}

export default App
