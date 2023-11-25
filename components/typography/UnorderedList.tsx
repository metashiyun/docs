const UnorderedList = (props: any) => {
    return <ul {...props} className={`font-ming list-disc ml-4`}>
        {props.children}
    </ul>
}

export default UnorderedList