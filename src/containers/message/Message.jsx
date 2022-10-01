import React from "react";
import tag from "../../assets/tag.svg";
import tag02 from "../../assets/tag02.svg";
import "./message.css";

const Message = () => {
  return (
    <div className="mess" id="message">
      <div>
        <h4>Message from CEO</h4>
        <img className="mess__imge" src={tag} alt="" />
        <p className="mess__text">
          Shewing met parties gravity husband sex pleased. On to no kind do next
          feel held walk. Last own loud and knew give gay four. Sentiments
          motionless or principles preference excellence am. Literature
          surrounded insensible at indulgence or to admiration remarkably.
          Matter future lovers desire marked boy use. Chamber reached do he
          nothing be. <br />
          <br />
          <br />
          Do in laughter securing smallest sensible no mr hastened. As perhaps
          proceed in in brandon of limited unknown greatly. Distrusts fulfilled
          happiness unwilling as explained of difficult. No landlord of peculiar
          ladyship attended if contempt ecstatic. Loud wish made on is am as
          hard. Court so avoid in plate hence. Of received mr breeding concerns
          peculiar securing landlord. Spot to many it four bred soon well to. Or
          am promotion in no departure abilities. Whatever landlord yourself at
          by pleasure of children be.
        </p>
        <img className="mess__imge02" src={tag02} alt="" />
      </div>
    </div>
  );
};

export default Message;
