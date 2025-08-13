import { useState } from "react";

function Calculator() {
    const [input, setInput] = useState("0") // 초기값을 문자열0으로 
    const [result, setResult] = useState(0) // 결과는 숫자0

    const onClickHandler = (e) => { //버튼이 클릭돼었을 때 동작하는 함수. 매개변수로는 event를 받음
        // console.log(e.target.value); // 어떤값이, 어떤버튼이 클릭돼었는지 알기 위해 출력
        const clickedValue = e.target.value; // 변수에 담아둠

        const lastChar = input.charAt(input.length -1);
        if ((lastChar === "+" || lastChar === "-") && clickedValue === "0") { // 마지막 글자가 +이거나 -일때 뒤에 바로0이 나올 수 없음음
            return;
        }

        if ((lastChar === "+" || lastChar === "-") && clickedValue === "0") { // 연속된 연산 불가하게 만들기 
            return;
        }

        if (
            (lastChar === "+" || lastChar === "-") && 
            (clickedValue === "+" || clickedValue === "-")
        ) {
            return;
        }
 

	    if (clickedValue === "r") {
			setInput(input.slice(0, -1));

			return;
		}
      

        if (clickedValue === "=") {
            setResult(eval(input)); // 결과값을 setResult에 넣음 
            setInput("0"); 
            return;
        }

        if (input == "0") {
            if (clickedValue === "+" || clickedValue === "-"){
                return
            } else {
                setInput(clickedValue)
            }
            setInput(clickedValue);
        } else {
            setInput(input + clickedValue); // input에 쌓아둘거임. setInput에다가 클릭이되면 새로 들어온 문자열을 원래 있던 문자열에서 이어붙임.
        }
    };

    return (
    <div>
        <h1>입력:{input}</h1>
        <h1>결과:{result}</h1>
        <div>
            <button onClick={onClickHandler} value={0}>0</button>
            <button onClick={onClickHandler} value={"r"}>←</button>
        </div>
        <div>
           <button onClick={onClickHandler} value={1}>1</button>
           <button onClick={onClickHandler} value={2}>2</button>
           <button onClick={onClickHandler} value={3}>3</button>
        </div>
        <div>
           <button onClick={onClickHandler} value={4}>4</button>
           <button onClick={onClickHandler} value={5}>5</button>
           <button onClick={onClickHandler} value={6}>6</button>
        </div>
        <div>
           <button onClick={onClickHandler} value={7}>7</button>
           <button onClick={onClickHandler} value={8}>8</button>
           <button onClick={onClickHandler} value={9}>9</button>
        </div>
        <div>
            <button onClick={onClickHandler} value={"+"}>+</button>
            <button onClick={onClickHandler} value={"-"}>-</button>
            <button onClick={onClickHandler} value={"="}>=</button>
        </div>
    </div>
  );
}

export default Calculator;