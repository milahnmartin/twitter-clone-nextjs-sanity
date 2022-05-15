import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="m-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Twitter Clone</title>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <main className="grid grid-cols-10">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export default Home

// export const getServerSideprops: GetServerSideProps = async (context) => {
//   const tweets = await fetchTweets()
//   return {
//     props: {},
//   }
// }
