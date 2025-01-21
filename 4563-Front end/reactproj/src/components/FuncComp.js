
// function FuncComp(){
//     return <h2>This is Function Component</h2>
// }
const FuncComp = (props) =>{
    return (
        <div>
            <h2>This is Function Component!!</h2>
            <p> I am {props.fname} and I am <strong>{props.post}</strong> </p>
        </div>
    )
}
export default FuncComp;