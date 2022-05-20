import { wrapper } from "../store";
import { useDispatch } from "react-redux";
import { setAlbum } from "../store/modules/album";

const getApiData = async () => {
  const url = 'https://jsonplaceholder.typicode.com/albums';
  const response = await fetch(url);
  const album = await response.json();
  return album;
}

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  getApiData()
    .then( result => dispatch(setAlbum(result)));
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);