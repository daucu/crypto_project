
import './App.css';
import Benifits from './componants/benifits/benifits';
import FirstBottom from './componants/top/firstBottom/firstBottom';
import Team from './componants/team/Team';
import Topnav from './componants/top/topnav';
import SecondPairUpper from './componants/secondPair/secondPairUpper';
import SecondpairBottom from './componants/secondPair/secondpairBottom/secondpairBottom';
import ThirdPairUpper from './componants/thirdPair/thirdPairUpper';
import ThirdPairBottom from './componants/thirdPair/thirdPairBottom/thirdPairBottom';
import Fourthpair from './componants/footer/fourthpair';
import Footer from './componants/footer/footerMenu/footer';



function App() {
  return (
    <div className="App">
      < Topnav />
      <FirstBottom  />
      <SecondPairUpper />
      <SecondpairBottom />
       <Benifits />  
      < ThirdPairUpper />
      <ThirdPairBottom /> 
      <Team />
      <Fourthpair />
      <Footer />

    </div>
  );
}

export default App;
