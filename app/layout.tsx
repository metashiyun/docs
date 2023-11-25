import type {Metadata} from 'next'
import './globals.css'
import React from "react";
import Layout from "@/components/layout/Layout";


export const metadata: Metadata = {
    title: 'Shiyun Docs',
    description: '石云文档 Shiyun Docs',
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <Layout>
            {children}
        </Layout>
    )
}
