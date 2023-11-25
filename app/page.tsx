import Title from "@/components/typography/Title";
import Heading2 from "@/components/typography/Heading/Heading2";
import Paragraph from "@/components/typography/Paragraph";
import Heading3 from "@/components/typography/Heading/Heading3";
import Heading4 from "@/components/typography/Heading/Heading4";
import Hyperlink from "@/components/typography/Hyperlink";

const Homepage = () => {
    return (
        <article>
            <Title subtitle={"Shiyun Docs"}>石云文档</Title>

            <Heading2>欢迎来到石云文档</Heading2>
            <Paragraph>欢迎您来到石云文档！👏</Paragraph>
            <Paragraph>本文档讨论Minecraft服务器企划metaShiyun，及其旗下Minecraft服务器：Shiyun
                Works和ShiyunVerse。</Paragraph>
            <Paragraph>现在文档正在施工中，欢迎您保持关注！</Paragraph>

            <Heading2>查阅文档</Heading2>
            <Paragraph>请您在导航栏中点击您要查看的章节。</Paragraph>

            <Heading2>向石云文档贡献</Heading2>
            <Heading3>帮助完善文档文本</Heading3>
            <Heading4>修改页面</Heading4>
            <Paragraph>打开需要修改的页面，在页面的右上角找到并点击「修改此页」，您会被重定向至GitHub仓库中的此页面。其他操作说明请查看仓库的README文件。</Paragraph>
            <Heading4>添加页面</Heading4>
            <Paragraph>
                请访问<Hyperlink href={'https://github.com/metashiyun/docs'}>本项目GitHub仓库</Hyperlink>。其他操作说明请查看仓库的README文件。
            </Paragraph>
            <Heading3>帮助完善文档查看网站</Heading3>
            <Paragraph>
                请访问<Hyperlink href={'https://github.com/metashiyun/docs'}>本项目GitHub仓库</Hyperlink>。提交代码请查看对应章节说明。
            </Paragraph>
        </article>
    )
}

export default Homepage