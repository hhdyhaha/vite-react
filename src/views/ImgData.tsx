export function Img({ imgUrl1, imgUrl2, isHide }: { imgUrl1: string, imgUrl2: string, isHide: boolean }) {
    const animeInfo = {
        name: '不良人',
        status: '待完结',
    };

    // 条件判断应该在 JSX 之外
    const imageElement = isHide ? (
        <img src={imgUrl1} alt="这是一张图片" width={200}/>
    ) : (
        <img src={imgUrl2} alt="这是一张图片" width={200}/>
    );

    return (
        <div>
            {imageElement}
            <div>
                <h1>{animeInfo.name}</h1>
                <p style={{ color: 'red', fontSize: '20px' }}>
                    {animeInfo.status}
                </p>
            </div>
        </div>
    );
}