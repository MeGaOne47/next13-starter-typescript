// "use client"
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'HomePage',
    description: 'Generated by create next app',
  }

export default function Home() {

    return (
      <div>
            <Link href={"/facebook"} className='nav-link'>
                  Facebook
            </Link>
          {/* <Button variant={"outline-danger"}>
              <Link href={"/facebook"} className='nav-link'>
                  Facebook
              </Link>
          </Button>
            
          <Button variant={"outline-info"}>
              <Link href={"/tiktok"} className='nav-link'>
                  Tiktok
              </Link>
          </Button>

          <Button variant={"outline-secondary"}>
              <Link href={"/youtube"} className='nav-link'>
                  Youtube
              </Link>
          </Button>

          <Button variant={"outline-secondary"}>
              <Link href={"/twitter"} className='nav-link'>
                  Twitter
              </Link>
          </Button> */}

      </div>
    )
  }
  