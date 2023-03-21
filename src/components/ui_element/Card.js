function Card(props) {
  return (
    <div className="max-w-sm bg-white my-3 rounded-lg border border-gray-200 shadow-md">
      {props.children}
    </div>
  );
}
export default Card;
