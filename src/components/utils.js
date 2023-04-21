export function Image({data}){
    console.log(data.url)
    return (
        <img src={data.url} alt={data.alt} width="200" height="200"/>
    )
}