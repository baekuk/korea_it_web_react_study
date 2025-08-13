import { useState } from "react";
import CountHeader from "../CountHeader/CountHeader";
import CountButton from "../CountButton/CountButton";

function CountState() {
  const [count, setCount] =  useState(0); // count는 현재상태. setcount는 count의 상태를 변경해주는 함수. useState가 이 2개를 반환. useState(0)에서의 0은 초기값. 
  // let count = 0;
  console.log("countState 렌더링");

  const onClickHandler =(e) => { // 클릭이 됐을 때 
    const num = parseInt(e.target.value); // 정수형태 
    setCount(num + count); // 현재 상태인 count에 내가 클릭한 수 num만큼
    // count += num; // 더하고 나서 
    // console.log(count);
    // document.querySelector("h1").innerText = count; // 이 값(count)을 h1에 넣어라
  };

  /**
   * State란 컴포넌트가 가질 수 있는 상태를 의미 
   * state를 사용해서 컴포넌틑가 렌더링될 때 데이터를 보유하고, 이 데이터를 업데이트 해 
   * 화면을 다시 렌더링할 수 있다. 
   * useState는 배열을 반환하는데, 이 때 첫 번째 요소가 현재 상태의 값을 담고있는 변수. 두 번째 요소가 상태를 업데이트해주는 함수를 반환
   * 장점 : 자동 재렌더링되어 state 데이터들이 변경되면 html에도 자동적으로 변경사항이 적용됨. 
   * 상태가 변경돼도 새로고침을 할 필요가 없어진다. 
   */

  return (
    <div>
        <CountHeader count={count} />
        <CountButton value={1} onClick={onClickHandler} text={"+1"}/>
        <CountButton value={-1} onClick={onClickHandler} text={"-1"}/>
    </div> 
  );
}

export default CountState;

/**
 * 리액트의 동작 원리
 * 1. 가상돔(Virtual DOM)
 * 우리가 실제로 보는 화면 돔(DOM)이라는 트리구조로 관리, 화면이 변화가 생길 때마다 이 실제 돔을 직접 조작하는 것은 비효율적. 
 * 실제 돔의 구조를 그대로 복사한 가상돔을 메모리에 만든다. (현재 메모리안에는 실제돔[0], 가상돔[0] 있음) 
 * 상태(State)에 변화가 생기면 리액트는 실제돔을 바로 건드리지 않고 메모리에 새 가상돔을 만든다. (메모리 안에는 실제돔[0], 가상돔2개[0],[1] 있음) 
 * 이전에 있던 가상돔(원래)과 새 가상돔(변화가 일어난)을 비교하고 새 가상돔을 실제 돔으로 보냄(기존 실제돔[0]에 덮어씌우는듯[1]). 실제 돔으로 보낸 걸 복사를 해서 가상돔에 둔다(현재 실제돔, 가상돔 1개씩[1]) 
 * 
 * 2. 컴포넌트
 * 재사용이 가능한 레고블럭이라고 생각. 
 * 재사용이 가능하도록 UI를 만들고 여러 조각으로 나누어서 관리하는데, 이 조각 하나하나를 컴포넌트라고 한다. 
 * 한 화면은 여러 컴포넌트들을 조합해서 합쳐서 하나의 화면을 만든다. 
 */