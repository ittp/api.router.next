import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '../../interfaces';

// Fake users data
let a = new Range(0, 1000);

console.log(a);
const users: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }];
// const rooms: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  // Get data from your database
  res.status(200).json(users);
}


