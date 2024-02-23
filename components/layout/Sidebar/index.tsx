import Link from "next/link";
import SidebarItem from "@/components/layout/Sidebar/SidebarItem";
import SidebarTitle from "@/components/layout/Sidebar/SidebarTitle";
import {useState} from "react";
import {useOutsideClick} from "@/hooks/useOutsideClick";

function Logo() {
    return (
        <Link aria-label="metaShiyun" href="/">
            <svg className="text-black dark:text-white" width="40" height="32" viewBox="0 0 256 160" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M0 80L60.9524 41.9048L121.905 80L60.9524 118.095L0 80Z" fill="currentColor"/>
                <path d="M67.0476 38.0952L128 0L188.952 38.0952L128 76.1905L67.0476 38.0952Z" fill="currentColor"/>
                <path d="M67.0476 121.905L128 83.8095L188.952 121.905L128 160L67.0476 121.905Z" fill="currentColor"/>
                <path d="M134.095 80L195.048 41.9048L256 80L195.048 118.095L134.095 80Z" fill="currentColor"/>
            </svg>
        </Link>
    )
}

const navbarData = [
    {
        title: "总览",
        links: [
            {
                title: "基本信息",
                href: "/article/overview/info"
            },
            {
                title: "关于白名单",
                href: "/article/overview/allowlist"
            },
            {
                title: "关于登录验证",
                href: "/article/overview/login"
            }
        ]
    },
    {
        title: "企划信息",
        links: [
            {
                title: "石云宇宙",
                href: "/article/kikaku/shiyun-verse"
            },
            {
                title: "限定活动信息",
                href: "/article/kikaku/limited"
            },
            {
                title: "SSMP",
                href: "/article/kikaku/ssmp"
            }
        ]
    },
    {
        title: "社区信息",
        links: [
            {
                title: "玩家群组",
                href: "/article/community"
            }
        ]
    },
    {
        title: "红石云工场",
        links: [
            {
                title: "基本规则",
                href: "/article/shiyun-works/basic-rule"
            },
            {
                title: "实用传送点",
                href: "/article/shiyun-works/warp"
            },
            {
                title: "区划一览",
                href: "/article/shiyun-works/regions"
            }
        ]
    },
    {
        title: "外部链接",
        links: [
            {
                title: "元石云主页",
                href: "https://www.shiyun.org"
            }
        ]
    }
]

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const ref = useOutsideClick(() => {
        closeSidebar()
    })

    return (
        <header>
            <div className={`sm:hidden`}>
                <button
                    onClick={() => openSidebar()}
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd"
                              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
            </div>

            <aside ref={ref}
                   className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}>
                <nav className={`h-full px-3 py-8 overflow-y-auto bg-gray-50 dark:bg-gray-800`}>
                    <div className={`space-y-2`}>
                        <div className={`ml-2 mb-4 sm:translate-x-0`}>
                            <Logo/>
                            <p className={`mt-2 text-2xl font-ming font-bold`}>Shiyun Docs</p>
                        </div>
                        <SidebarItem href={'/'} closeSidebar={closeSidebar}>首页</SidebarItem>
                        {
                            navbarData.map((group, key) => <div key={key}>
                                <SidebarTitle>{group.title}</SidebarTitle>
                                {group.links.map((link, key) => <div key={key}>
                                    <SidebarItem href={link.href} closeSidebar={closeSidebar}>{link.title}</SidebarItem>
                                </div>)}
                            </div>)
                        }
                    </div>
                </nav>
            </aside>
        </header>
    )
}

export default Sidebar