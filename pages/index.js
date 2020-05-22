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


// Client-side Rendering
// BEST FOR DASHBOARDS, Since there is no SEO
// Pre-render parts of the page that not require external data
// WHen the page loads, fetch external data from the client
// using Javascript and populate the remaining parts
// SWR: 
// https://swr.now.sh/
// https://github.com/zeit/swr

// This runs only at run time in development
// It runs only at build time in production
// To fetch data before loading page, see getServerSideProps below
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

// Only use this if you need to pre-render a 
// page whose data must be fetched at request time.
// TTFB (Time To First Byte) will be slower than
// getStaticPropsbecause the server must compute 
// the result on every request, and the result 
// cannot be cached by a CDN without extra configuration.
// export async function getServerSideProps() {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }