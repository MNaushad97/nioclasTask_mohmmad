import NavigationButton from "./NavigationButton";

function NavigatorHead({ totalQues, getPrevQues, getNextQues, quesIndx }) {
  return (
    <>
      <div>
        <div className="bg-white flex justify-center items-center p-2 w-screen">
          <NavigationButton
            isbackButton
            action={getPrevQues}
            quesIndx={quesIndx}
            isDisable={quesIndx === 0}
          />

          <h6> Question: {`${quesIndx + 1}/${totalQues}`}</h6>
          <NavigationButton
            action={getNextQues}
            quesIndx={quesIndx}
            isDisable={!(quesIndx + 1 < totalQues)}
          />
        </div>
      </div>
    </>
  );
}
export default NavigatorHead;
