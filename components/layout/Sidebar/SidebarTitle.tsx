interface NavGroupTitleProps {
    children: React.ReactNode
}

const SidebarTitle = ({children}: NavGroupTitleProps) => {
    return (
        <div className={`text-center font-kai`}>
            {children}
        </div>
    )
}

export default SidebarTitle