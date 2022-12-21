import {Header} from "./Header";
import {Footer} from "./Footer";

export function Layout(props) {
  return ( 
    <div>
      <Header />
      {/* Afisam pe ecran copiii pe care Layout ii primeste la instantiere. */}
        {props.children}
      <Footer />
    </div>
  )
}