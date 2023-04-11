import useToggle from "./useToggle";

const ToggleExample = () => {
  const {show, toggle} = useToggle(true)
   return (
    <div>
      <h4>toggle custom hooks</h4>
      <button className='btn' onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuffs</h4>}
    </div>
  );
};
export default ToggleExample;
