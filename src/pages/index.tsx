import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import Form from '../components/forms/login/loginForm'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout home>
    <Head>
      <title>Home page</title>
      <link rel='icon' href='/favicon.ico'></link>
    </Head>
    <Form></Form>
    <Link href="/login">check this page!</Link>
    </Layout>
  )
  
}
