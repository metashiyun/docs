interface NavGroupTitleProps {
    children: React.ReactNode
}

const NavGroupTitle = ({children}: NavGroupTitleProps) => {
    return (
        <div className={`text-center kai`}>
            {children}
        </div>
    )
}

export default NavGroupTitle