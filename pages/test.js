import { useSelector,useDispatch } from "react-redux"

export default function Test() {
  const dispatch = useDispatch();
  const albums  = useSelector(({album})=>album.albums);
  
  return (
    <div>
    {albums.map((post)=>{
      return (
        <p key={post.id}>
          {post.id} {post.title}
        </p>
      )
    })}
  </div>
  )
  }
