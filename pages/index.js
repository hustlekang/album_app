import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import NavBar from "../components/Common/NavBar";
import Card from "../components/Card";
import RegisterButton from "../components/Register/RegisterButton";
import Head from "next/head";
import Login from "../components/Login/Login";
export default function Home() {
  const dispatch = useDispatch();
  const albums  = useSelector(({album})=>album.albums);
  
  

  return (
    <div className="main">
      <Head>
        <title>Album App</title>
      </Head>
      <Login/>
      <RegisterButton/>
      <Card/>
      <NavBar/>
      
      <style jsx>{`
      .main{
        max-width : 700px;
        border: 1px solid;
        border-radius: 10px;
        margin : auto;
        color : #789ab9;
        padding : 0 10px;
      
      }
    }
    `}</style>
    </div>
  )
}
