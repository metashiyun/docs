const Hyperlink = (props: any) => {
    return <a {...props} className={`underline duration-150 hover:text-blue-500 dark:hover:text-blue-300`}>
        {props.children}
    </a>
}

export default Hyperlink