function LeftMenuLabel() {
  return (
    <li className="item toggle">
      <label htmlFor="hide-read">Hide read</label>
      <input id="hide-read" type="checkbox" checked={false} />
    </li>
  );
}
 export default LeftMenuLabel;