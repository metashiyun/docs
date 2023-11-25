const Blockquote = (props: any) => {
    return <div {...props} className={`p-0.5 ml-1 font-kai`}>
        {props.children}
    </div>
}

export default Blockquote