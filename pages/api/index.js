import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import _ from 'loadsh';

import { readlink, readFile, readdir, realpath } from 'fs/promises';
import data from 'data';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any[]>
) {}
