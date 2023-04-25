function DivContainer({ number, details }) {
  const divs = [];

  for (let i = 0; i < number; i++) {
    divs.push(
        <div key={i}>
          <input type="text" name={`title_${i+1}`} placeholder="Detail Title"/>
          <input type="text" name={`desc_${i+1}`} placeholder="Detail Description"/>
    </div>
    );
  }

  return <div>{divs}</div>;
}

export default DivContainer;