'use client'
import Link from 'next/link'
import x from '@/styles/app.module.css'
import y from '@/styles/hoidanit.module.css'
import AppTable from '@/components/app.table'
import { useEffect } from 'react'
import useSWR from "swr";

export default function Home() {

  const fetcher = (url: string) => fetch(url)
    .then((res) => res.json());

    const { data, error, isLoading } = useSWR(
      "http://localhost:8000/blogs",
      fetcher,
      {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
      }
    );
    console.log(">>> Check data:",data)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();
  //     console.log(">>> Check res:", data);
  //   }
  //   fetchData();
  // }, [])
  
    return (
      <div>
        <div>{data?.length}</div>
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
        <AppTable/>
      </div>
    )
  }
  