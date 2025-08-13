import React from 'react'
import Props1 from './Props1/Props1'
import Props2 from './Props2/Props2';
import Props3 from './Props3/Props3';

function BasicProps() {
  return (
    <div>
        <Props1 a={"data1"} b={"data2"} />
        <Props2 a={"data3"} b={"data4"} c={"data5"} d={"data6"} />
        {/* <Props3 ch1={<div>자식요소1</div>} /> */}
        <Props3>
            <div>자식요소1</div>
        </Props3>
    </div>
  );
}

export default BasicProps