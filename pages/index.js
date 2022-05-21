import NavBar from "../components/Common/NavBar";
import RegisterButton from "../components/Register/RegisterButton";
import Head from "next/head";
import Login from "../components/Login/Login";
import Album from "../components/Album";

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Album App</title>
      </Head>
      <Login/>
      <RegisterButton/>
      <Album/>
      <NavBar/>
      
      <style jsx>{`
        .main{
          max-width : 700px;
          border: 1px solid;
          border-radius: 10px;
          margin : auto;
          color : #dbdbdb; 
          padding : 0 10px;
        }
      `}</style>
    </div>
  )
}
