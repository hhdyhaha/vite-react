export function Img() {
    const imgUrl = "https://th.bing.com/th/id/R.98415963b412fccea2d8c4e2b3f695e8?rik=HdwmF8f2XbTwUQ&riu=http%3a%2f%2fi1.hdslb.com%2fbfs%2farchive%2f25359e94f3481702ce699cc867b236c9d056adbc.jpg&ehk=aFN1%2f0CPFS8Bsm7lcpdWzXbRVVRniH9WE9GQ3nVnTNc%3d&risl=&pid=ImgRaw&r=0"
    const animeInfo = {
        name: '不良人',
        status: '待完结',
    }
    return (
        <>
            <img src={imgUrl} alt="这是一张图片" width={200}/>
            <div>
                <h1>{animeInfo.name}</h1>
                <p style={{color: 'red', fontSize: '20px'}}>{animeInfo.status}</p>
            </div>
        </>

    )
}