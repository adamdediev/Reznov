import './page.scss'
import Homepage from './component/homepage/Homepage';
import Service from './component/service/Service';
import OurFaces from './component/ourFaces/OurFaces';


export default function Home() {
  return (
    <div className="container">
      <Homepage/>
      <Service/>
      <OurFaces/>
    </div>
  );
}
