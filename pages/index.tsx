import type { User } from '../interfaces';
import useSwr from 'swr';
import Link from 'next/link';

import { parser, generator } from 'csv';

import Axios from 'axios';
import { useEffect } from 'react';

const fetcher = (url: string) =>
  Axios.request({ url }).then((response) => {
    let { data, headers, status } = response;

    console.log(data, status);

    if (status == 200) {
    }

    let jsonData = JSON.stringify(data);

    return data;
  });

const fetcherF = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error, isLoading } = useSwr<User[]>('/api/users', fetcher);

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link href="/user/[id]" as={`/user/${user.id}`}>
            {user.name ?? `User ${user.id}`}
          </Link>
        </li>
      ))}
    </ul>
  );
}
