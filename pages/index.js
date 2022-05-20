import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const albums  = useSelector(({album})=>album.albums);

  return (
    <div >
      <Link href="/test">
        <a>test페이지 모든 데이터 보기</a>
      </Link>
    </div>
  )
}
