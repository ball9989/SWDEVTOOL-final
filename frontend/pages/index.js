import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';


import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
<main className="d-flex flex-column min-vh-100">
      <Head>
        <title>AIS Vaccination</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="mt-5 text-center flex-grow-1">
        <img src="banner.png" height="200px"/>
        <div className="col-lg-6 mx-auto">
          <p className="lead mt-3 mb-4">
          เชื่อมต่อ ช่วยเหลือ เพื่อคนไทยสู้ภัยโควิด
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" onClick={() => router.push('/register')} className="btn btn-primary btn-lg px-4 gap-3">
              ลงทะเบียนจองคิว - Register
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
