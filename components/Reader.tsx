import {MDXRemote} from "next-mdx-remote/rsc";

const Reader = ({title, subtitle, content}: MdxPage) => {
    return (
        <article>
            <h1>{title}</h1>
            {
                subtitle ?
                    <h3>{subtitle}</h3>
                    :
                    <></>
            }
            <MDXRemote source={content} />
        </article>
    )
}

export default Reader