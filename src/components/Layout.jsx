import {Header} from "./Header";
import {Footer} from "./Footer";

export function Layout(props) {
  return ( 
    <div>
      <Header />
        {props.children}
      <Footer />
    </div>
  )
}