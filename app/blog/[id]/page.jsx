import BlogPost from './BlogPost'; // client component

import { blog_data } from '../../assets/assets';

export default async function Page({ params }) {
const {id} = await params;
const blogId = Number(id)
  const post = blog_data.find(item => item.id === blogId);

  if (!post) {
    return <p>Post not found</p>;
  }

  return <BlogPost post={post} />;
}
