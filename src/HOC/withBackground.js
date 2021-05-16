const withBackground = (SimpleComp) => {
    const wrappedComp = (props) => {

        return(
            <div style={{backgroundColor: props.colorName}}>
                <SimpleComp {...props}/>
            </div>
        )
        
    }

    return wrappedComp;
}

export default withBackground;