import Title from "@/components/typography/Title";
import Paragraph from "@/components/typography/Paragraph";
import Hyperlink from "@/components/typography/Hyperlink";
import UnorderedList from "@/components/typography/UnorderedList";

export default function NotFound() {
    return (
        <article>
            <Title subtitle={"找不到页面"}>发生错误</Title>

            <Paragraph>页面加载发生错误，您可以尝试：</Paragraph>
            <UnorderedList>
                <li>检查地址拼写；</li>
                <li>刷新页面；</li>
                <li><Hyperlink href={"/"}>回到主页</Hyperlink>。</li>
            </UnorderedList>
        </article>
    )
}