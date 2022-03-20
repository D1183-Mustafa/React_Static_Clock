import Clock from "./Clock";

function Msg(props) {
  // console.log(props);
  return (
    <div className="msg">
      <Clock yıl={props.yıl} ay={props.ay} gün={props.gün} saat={props.saat} dakika={props.dakika} saniye={props.saniye} />
    </div>
  );
}

export default Msg;
