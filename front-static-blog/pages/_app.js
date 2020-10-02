import "../styles/tailwind.css";
import {useState} from 'react';

function MyApp({ Component, pageProps }) {
  const [testage, setTestage] = useState(false);
  return <Component {...pageProps}{...testage} />;
}

export default MyApp;
