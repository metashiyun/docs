import React from "react";

const Footer = () => {
    return (
        <footer className={`flex flex-col md:flex-row mt-2`}>
            <div className={`text-center font-kai md:grow md:text-left`}>
                游戏内容纯属虚构，不与现实世界任何人、组织、事件存在联系。
            </div>
            <div className={`text-center font-hei md:text-right`}>
                &copy; 2014 - {new Date().getFullYear()} metaShiyun
            </div>
        </footer>
    );
}

export default Footer