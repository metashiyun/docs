const Code = (props: any) => {
    return <code {...props} className={`text-sm p-[2px] rounded bg-gray-300 dark:bg-gray-700 ml-[0.25em] mr-[0.25em]`}>
        {props.children}
    </code>
}

export default Code