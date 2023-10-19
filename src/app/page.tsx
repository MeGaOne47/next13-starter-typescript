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

export default function Home() {

  const fetcher = (url: string) => fetch(url)
    .then((res) => res.json());

    const { data, error, isLoading } = useSWR(
      "https://8000-megaone47-backendfakejs-1ls4m8017ml.ws-us105.gitpod.io/blogs",
      fetcher,
      {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
      }
    );
    if (!data) {
      return (
          <div>
              {/* <Login/> */}
              {/* <Register/> */}
              loading AppTable...
          </div>
      )  
    }

    return (
      <div>
        <AppTable 
          blogs={data?.sort((a: any, b: any) => b.id - a.id)}
        />
      </div>
    )
  }
  