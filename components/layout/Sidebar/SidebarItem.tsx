import Link from "next/link";
import React from "react";

interface NavItemProps {
    children: React.ReactNode,
    href: string,
    closeSidebar: () => void
}

const SidebarItem = ({href, children, closeSidebar}: NavItemProps) => {
    return (
        <div
            className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
            <Link href={href} onClick={() => closeSidebar()}>{children}</Link>
        </div>
    )
}

export default SidebarItem