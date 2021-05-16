import NameContext from "./ContextAPI"

const GrandChild = () => {
    return(
        <NameContext.Consumer>
            {(name) => {
                return(
                    <h1>My name is {name}</h1>
                )
            }}

        </NameContext.Consumer>
        
    )
}

export default GrandChild;