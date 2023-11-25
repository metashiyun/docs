const Heading = (props: any) => {
    return <div {...props} className={`font-bold font-hei my-3`}>{props.children}</div>
}

export default Heading