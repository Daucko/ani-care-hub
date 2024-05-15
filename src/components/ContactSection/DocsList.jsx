import HoverCardUi from '../../ui/HoverCard';

function DocEntry(props) {
  const handleClick = () => {
    props.onClickHandler(props.data.location);
  };
  // Add basic styling for each restaurant entry
  const entryStyle = {
    display: 'inline-block',
    padding: '6px',
    margin: '5px',
    border: '1px solid #2D3250',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    backgroundColor: '#F6B17A',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#2D3250',
  };

  return (
    <div style={entryStyle} onClick={handleClick}>
      {/* {props.data.name} */}
      <HoverCardUi
        name={props.data.name}
        image={props.data.image}
        address={props.data.address}
        className="z-50"
      />
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
    <div
      id="restaurant-list"
      className="grid overflow-auto scroll-smooth max-h-screen "
    >
      {list}
    </div>
  );
}

export default DocsList;
