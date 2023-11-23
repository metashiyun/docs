"use client"

import React, {useEffect} from "react";
import adobeLoader from "@/utils/adobeLoader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    useEffect(() => {
        adobeLoader(document)
    }, [])

    return (
        <html lang="zh">
        <body className={`h-screen`}>
        <Navbar />

        <div className={`flex flex-col min-h-full p-8 md:p-12 sm:ml-64`}>
            <article className={`mb-auto`}>
                {children}
            </article>
            <Footer />
        </div>

        </body>
        </html>
    )
}

export default Layout