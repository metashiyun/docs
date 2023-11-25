const Subtitle = (props: any) => {
    return <div {...props}
                className={`text-2xl font-hei mt-0.5 mb-0.5 text-gray-500 dark:text-gray-400`}>{props.children}</div>
}

export default Subtitle