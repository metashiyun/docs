"use client"

import React, {useEffect} from "react";
import adobeLoader from "@/utils/adobeLoader";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    useEffect(() => {
        adobeLoader(document)
    }, [])

    return (
        <html lang="zh">
        <body className={`h-screen bg-white text-black dark:bg-black dark:text-white`}>
        <Sidebar/>

        <div className={`flex flex-col min-h-full p-8 md:p-12 sm:ml-64`}>
            <div className={`mb-auto`}>
                {children}
            </div>
            <Footer/>
        </div>

        </body>
        </html>
    )
}

export default Layout