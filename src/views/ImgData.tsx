export function Img({imgUrl}: {imgUrl: string}) {
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