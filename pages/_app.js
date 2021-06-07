import "bulma/css/bulma.min.css";
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  console.log(Component);
  return <Component {...pageProps} />
}

export default MyApp
