import './page.scss'
import Homepage from './component/homepage/Homepage';
import Service from './component/service/Service';
import OurFaces from './component/ourFaces/OurFaces';
import Advantages from './component/advantages/Advantages';
import Number from './component/numbers/Number';


export default function Home() {
  return (
    <div className="container">
      <Homepage/>
      <Service/>
      <OurFaces/>
      <Advantages/>
      <Number/>
    </div>
  );
}
