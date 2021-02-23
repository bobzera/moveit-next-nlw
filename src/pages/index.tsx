import Head from 'next/head'

import { ExperienceBar } from '../components/ExperienceBar'

export default function Home() {
  return (<>
    <Head>     
      <title>Moveit</title>
    </Head>

    <div className="container">
      <ExperienceBar/>
    </div>

  </>)
}
