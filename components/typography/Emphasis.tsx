const Emphasis = (props: any) => {
    return <em {...props} className={`font-kai non-italic`}>
        {props.children}
    </em>
}

export default Emphasis