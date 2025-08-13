function Props2({ a, b, ...나머지 }) {
    console.log(나머지);
    return (
        <div>
            <p>{a}</p>
            <p>{b}</p>
        </div>
    );
}

export default Props2