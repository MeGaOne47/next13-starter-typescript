import Link from 'next/link'
import x from '@/styles/app.module.css'
import y from '@/styles/hoidanit.module.css'

export default function Home() {
    return (
      <div>
          <ul >
          <li className={x['red']} style={{margin: "20px 0"}}>
            <Link href={"/facebook"}>
                <span className={y['red']}> Facebook </span>
            </Link>
          </li>
          <li style={{margin: "20px 0"}}>
              <a href="/tiktok">
                  TikTok
              </a>  
          </li>
          <li  style={{margin: "20px 0"}}>
              <a href="/youtube">
                  YouTube
              </a>
          </li>
          <li  style={{margin: "20px 0"}}>
              <a href="/twitter">
                  Twitter
              </a>
          </li>
      </ul>
      </div>
    )
  }
  