'use client'
import Link from 'next/link'
import x from '@/styles/app.module.css'
import y from '@/styles/hoidanit.module.css'
import AppTable from '@/components/app.table'
import { useEffect } from 'react'
import useSWR from "swr";
import Spinner from 'react-bootstrap/Spinner';
import ProgressBar from 'react-bootstrap/ProgressBar';

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
    if (!data) {
      // return <div>loading...</div>
      const now = 60;
      return <ProgressBar now={now} label={`${now}%`} />;
    }
  
    return (
      <div>

        <AppTable 
          blogs={data?.sort((a: any, b: any) => b.id - a.id)}
        />
      </div>
    )
  }
  