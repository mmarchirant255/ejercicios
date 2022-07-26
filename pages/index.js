import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/Link' 

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BestCycling</title>
        <meta name="description" content="Proyecto para la empresa BestCycling" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className='main'>
        <header className='cabecera'>
          <nav>
            <h1 className='logo'>
              <Link href='/ListaClases'>
                <img src='/logo.png' width='200px'/>
              </Link>
            </h1>
          </nav>
        </header>
      </main>
    </div>
  )
}
