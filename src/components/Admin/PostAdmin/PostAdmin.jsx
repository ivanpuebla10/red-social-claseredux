import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../../features/posts/postsSlice";


const PostAdmin = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const post = posts.map((post) => {
    return (
      <div className="post" key={post.id} >
          <p>{post.title}</p>
          <button onClick={() => dispatch(deletePost(post.id))}>X</button>
      </div> 
    );
  });
  return <div>{post}</div>;
};

export default PostAdmin;