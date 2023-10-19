'use client'
import Link from 'next/link'
import x from '@/styles/app.module.css'
import y from '@/styles/hoidanit.module.css'
import AppTable from '@/components/app.table'
import { useEffect } from 'react'
import useSWR from "swr";
import Spinner from 'react-bootstrap/Spinner';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Login from './login/page'
import Register from './register/page'
import Button from "react-bootstrap/Button";

export default function Home() {

  // const fetcher = (url: string) => fetch(url)
  //   .then((res) => res.json());

    // const { data, error, isLoading } = useSWR(
    //   "http://localhost:8000/blogs",
    //   fetcher,
    //   {
    //     revalidateIfStale: false,
    //     revalidateOnFocus: false,
    //     revalidateOnReconnect: false
    //   }
    // );
    // if (isLoading) {
    //   return (
    //       <div>
    //           Loading...
    //       </div>
    //   )
    // }

    return (
      <div>
        {/*<AppTable */}
        {/*  blogs={data?.sort((a: any, b: any) => b.id - a.id) ?? []}*/}
        {/*/>*/}
          <Button variant={"outline-danger"}>
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
          </Button>

      </div>
    )
  }
  