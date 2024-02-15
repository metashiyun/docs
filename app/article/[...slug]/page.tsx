import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Reader from "@/components/Reader";

interface ArticleProps {
    params: {
        slug: [string]
    }
}

const Article = ({params}: ArticleProps) => {
    const markdownFile = fs.readFileSync(path.join(process.cwd(), 'content', params.slug.reduce((a, b) => a + '/' + b) + '.mdx'), 'utf-8')
    const {data: frontMatter, content} = matter(markdownFile)

    return (
        <Reader
            title={frontMatter.title}
            content={content}
            subtitle={frontMatter.subtitle}
            link={'/' + params.slug.reduce((a, b) => a + '/' + b)}
        />
    )
}

export default Article