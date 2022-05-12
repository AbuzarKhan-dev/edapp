import List from "../../../components/List/List"

interface PropsInterface {
    array: string[],
    display: string
}

const Record = ({array, display}: PropsInterface) => {
    return (
        <div style={{display:display}}>
            <List array={array}/>
        </div>
    )
}

export default Record;