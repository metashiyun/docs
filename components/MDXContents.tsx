import {MDXRemote} from 'next-mdx-remote/rsc'
import Paragraph from "@/components/typography/Paragraph";
import Heading2 from "@/components/typography/Heading/Heading2";
import Heading3 from "@/components/typography/Heading/Heading3";
import Heading4 from "@/components/typography/Heading/Heading4";
import Heading5 from "@/components/typography/Heading/Heading5";
import Heading6 from "@/components/typography/Heading/Heading6";
import Blockquote from "@/components/typography/Blockquote";
import Code from "@/components/typography/Code";
import Emphasis from "@/components/typography/Emphasis";
import Hyperlink from "@/components/typography/Hyperlink";
import UnorderedList from "@/components/typography/UnorderedList";

const components = {
    p: (props: any) => <Paragraph {...props}>{props.children}</Paragraph>,
    h2: (props: any) => <Heading2 {...props}>{props.children}</Heading2>,
    h3: (props: any) => <Heading3 {...props}>{props.children}</Heading3>,
    h4: (props: any) => <Heading4 {...props}>{props.children}</Heading4>,
    h5: (props: any) => <Heading5 {...props}>{props.children}</Heading5>,
    h6: (props: any) => <Heading6 {...props}>{props.children}</Heading6>,
    blockquote: (props: any) => <Blockquote {...props}>{props.children}</Blockquote>,
    code: (props: any) => <Code {...props}>{props.children}</Code>,
    em: (props: any) => <Emphasis {...props}>{props.children}</Emphasis>,
    a: (props: any) => <Hyperlink {...props}>{props.children}</Hyperlink>,
    ul: (props: any) => <UnorderedList {...props}>{props.children}</UnorderedList>
}

const MDXContents = (props: any) => {
    return (
        <MDXRemote
            {...props}
            components={{...components, ...(props.components || {})}}
        />
    )
}

export default MDXContents