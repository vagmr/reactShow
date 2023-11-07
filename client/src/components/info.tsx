import '../style/showInfo.scss'
const ShowInfo = (props: { msg: string, color: string }) => {
    const style = {
        color: props.color
    }
    return <>
        <div>
            <h1 className="error" style={style}>{props.msg}</h1>
        </div>
    </>
}
export default ShowInfo;