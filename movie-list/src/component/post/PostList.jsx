import { Link, useOutletContext } from "react-router-dom";

function PostList() {
  const { posts } = useOutletContext();
  const { data, isLoading } = posts;

  if (isLoading) return;

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={"/post/" + item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
