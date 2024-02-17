import MDXContents from "@/components/MDXContents";
import Hyperlink from "@/components/typography/Hyperlink";
import Title from "@/components/typography/Title";

const Reader = ({title, subtitle, content, link}: MdxPage) => {
    return (
        <article>
            <p className={`text-right font-ming`}>
                <Hyperlink
                    href={'https://github.com/metashiyun/docs/blob/main/content' + link + ".mdx"}>修改此页</Hyperlink>
            </p>
            <Title subtitle={subtitle}>{title}</Title>
            <MDXContents source={content}/>
        </article>
    )
}

export default Reader