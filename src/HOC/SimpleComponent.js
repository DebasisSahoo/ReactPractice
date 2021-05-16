import withBackground from './withBackground'
const SimpleComponent = (props) => {

    return(
        <h1>This displays my name {props.name} with background color {props.colorName}</h1>
    )

}

export default withBackground(SimpleComponent);