import Msg from "./components/Msg";
import "./style.css"



function App() {
  return (
    <div className="bir">
      <Msg
      yıl= {new Date().getFullYear()}
      ay = {new Date().getMonth()}
      gün= {new Date().getDate()}
      saat={new Date().getHours()}
      dakika={new Date().getMinutes()}
      saniye={new Date().getSeconds()}/>
    </div>
  );
}

export default App;
