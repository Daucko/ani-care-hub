function DocEntry(props) {
  const handleClick = () => {
    props.onClickHandler(props.data.location);
  };
  // Add basic styling for each restaurant entry
  const entryStyle = {
    display: 'inline-block',
    padding: '10px',
    margin: '5px',
    border: '1px solid gray',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={entryStyle} onClick={handleClick}>
      {props.data.name}
    </div>
  );
}

function DocsList(props) {
  const entries = props.list;
  const list = entries.map((entry) => {
    return (
      <DocEntry
        data={entry}
        onClickHandler={props.onClickHandler}
        key={Math.random()}
      ></DocEntry>
    );
  });
  return (
    <div id="restaurant-list" className="grid border-2 border-red-600">
      {list}
    </div>
  );
}

export default DocsList;
