import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Alert from '../components/alert'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd} >...</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg} >Blog</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  )
}

// This runs only at run time in development
// It runs only at build time in production
export async function getStaticProps() {

  // Instead of the file system,
  // fetch post data from an external API endpoint
  //
  // const res = await fetch('..')
  // return res.json()


  // Instead of the file system,
  // fetch post data from a database
  // return databaseClient.query('SELECT posts...')

  // Read From File System
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}