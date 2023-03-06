import { MathJax } from "better-react-mathjax";
import { useCallback, useEffect, useState } from "react";
import { QUES_API, QUES_ID } from "../Constants";
import NavigatorHead from "./NavigatorHead";

function Homepage() {
  const [quesSet, setQuesSet] = useState([]);
  const [quesIDIndx, setQuesIndx] = useState(0);

  const getPrevQues = () => {
    if (quesIDIndx > 0) setQuesIndx((prev) => prev - 1);
  };
  const getNextQues = () => {
    if (quesIDIndx < QUES_ID.length - 1) setQuesIndx((prev) => prev + 1);
  };

  const fetchHandler = useCallback(async () => {
    try {
      let question = await fetch(`${QUES_API}${QUES_ID[quesIDIndx]}`);
      let res = await question.json().then((r) => r[0].Question);
      setQuesSet((prev) => [...prev, res]);
    } catch (error) {
      console.log("There was an error in fetching data", error);
    }
  }, [quesIDIndx]);

  useEffect(() => {
    if (quesSet.length !== QUES_ID.length) fetchHandler();
    return () => {};
  }, [fetchHandler]);

  return (
    <>
      <div className="flex flex-col items-center px-4">
        <NavigatorHead
          totalQues={QUES_ID.length}
          getPrevQues={getPrevQues}
          getNextQues={getNextQues}
          quesIndx={quesIDIndx}
        />
        <MathJax className="py-4">{quesSet[quesIDIndx]}</MathJax>
      </div>
    </>
  );
}
export default Homepage;
