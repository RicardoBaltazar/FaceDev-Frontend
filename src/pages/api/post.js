// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { posts } from '../../db';

export default function handler(req, res) {
  // res.status(200).json(posts);
  const { method } = req;

  if (method === 'GET') {
    res.status(200).json(posts);
  }

  if (method === 'POST') {
    const { body } = req;
    posts.unshift({ ...body });
    return res.status(200).json(posts);
  }

  return res.status(200).json(posts);
}
