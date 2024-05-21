function Button({text, color, fontSize, backColor, alignit}){
    // const buttonStyle = {
    //     color: props.color,
    //     fontSize: props.fontSize + 'px',
    //     backgroundColor: props.backColor,
    // }
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px',
        backgroundColor: backColor,
	alignItems: alignit,
    }
    return(
        <button style={buttonStyle}>{text}</button>
    )
}

export default Button
