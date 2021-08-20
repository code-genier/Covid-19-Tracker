import React from "react";
import "./items2.css";
import SubItems2 from "./items2Subitem";

export default function items2(props) {
  return (
    <div className="master">
    <div className="master_item2">
      <div className="Wrap">
        {Object.values(props.stateData1.state_wise).map((e) => (
          <div className="leftlist">
            <SubItems2
              key={e.id}
              state={e.state}
              active={e.active}
              recovered={e.recovered}
              confirmed={e.confirmed}
              deaths={e.deaths}
            />
          </div>
        ))}
        {/* convert object to array so as use .map() function by Object.values(props.stateData1.state_wise) */}
        {/* {console.log(Object.values(props.stateData1.state_wise))} */}
      </div>
      </div>
      <div className="NewsBox">
        <div className="head2">
          <h2>
            Protect yourself and others around you by knowing the facts and
            taking appropriate precautions.
          </h2>
        </div>
        <p className="prec">
          1. Clean your hands often. Use soap and water, or an alcohol-based
          hand rub. <br />
          2. Maintain a safe distance from anyone who is coughing or sneezing.
          <br />
          3. Wear a mask when physical distancing is not possible.
          <br />
          4. Cover your nose and mouth with your bent elbow or a tissue when you
          cough or sneeze.
          <br />
          5. If you have a fever, cough and difficulty breathing, seek medical
          attention.
        </p>
        <hr />
        <div className="head2">
          <h2>
            COVID-19 affects different people in different ways. Most infected
            people will develop mild to moderate illness and recover without
            hospitalization.
          </h2>
        </div>
        <p className="sym">
          <h3 className="minorHead">Most common symptoms:</h3> fever, dry,
          cough, tiredness.
          <br />
          <h3 className="minorHead">Less common symptoms:</h3> aches and pains,
          sore throat, diarrhoea, conjunctivitis, headache, loss of taste or
          smell, a rash on skin, or discolouration of fingers or toes.
          <br />
          <h3 className="minorHead">Serious symptoms:</h3> difficulty breathing
          or shortness of breath, chest pain or pressure, loss of speech or
          movement.
        </p><hr/>
        <div className="head2">
          <h2>
            Common Side Effects (AEFI) Some common ailments that can be expected
            after vaccination
          </h2>
        </div>
        <p className="vaccine">
          1. Mild Headache.<br/>
          2. Pain or Swellimg at injection site.<br/>
          3. Mild Fever.<br/>
          4. Irritability.
        </p><hr/>
        <h2 className="end">
            I GOT MY COVID-19 VACCINE! 💉 , WHAT ABOUT YOU?
          </h2>
      </div>
    </div>
  );
}
