import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Layout from '../../components/Layout'

export default function OnePager({ source }) {
  return (
    <Layout>
      <div className="prose max-w-none">
        <MDXRemote {...source} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'docs', 'one-pager.md')
  const source = fs.readFileSync(filePath, 'utf8')
  const mdxSource = await serialize(source)
  return { props: { source: mdxSource } }
}
