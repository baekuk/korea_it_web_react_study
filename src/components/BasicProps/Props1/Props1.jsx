function Props1(props) {
    console.log(props);
    // 비구조할당 (구조분해)
    const { a, b } = props;
    return (
        <div>
            <p>a라는 데이터 - {a}</p>
            <p>b라는 데이터 - {b}</p>
        </div>
    );
}

export default Props1