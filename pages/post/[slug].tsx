
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.scss'

const { BLOG_URL, CONTENT_API_KEY } = process.env

async function getPost(slug: string) {
  // https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062
  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`)
    .then(res => res.json())

  return res.posts[0]

}


export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  return {
    props: { post },
    revalidate: 10
  }
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  }
}
type Post = {
  title: string,
  html: string,
  slug: string
}

const Post: React.FC<{ post: Post }> = props => {
  const router = useRouter()

  const [enableLoadComments, setEnabledLoadComments] = useState<boolean>(true)

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  function loadComments() {
    setEnabledLoadComments(false);

    (window as any).disqus_config = function () {
      this.page.url = window.location.href;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = props.post.slug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    const script = document.createElement("script");
    script.src = 'https://ghost-cms-nextjs-backend-app-1.disqus.com/embed.js'
    script.setAttribute('data-timestamp', Date.now().toString());
    document.body.appendChild(script)
  }
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>Go Back</a>
      </Link>
      <h1>{props.post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.post.html }}></div>
      {enableLoadComments && <p className={styles.goback} onClick={loadComments}>
        Load Comments
      </p>
      }
      <div id="disqus_thread"></div>

    </div>)
}
export default Post