const BorderBar = (props) => {
  const { height } = props;
  return <div className={`block bg-base-color rounded-md h-${height}`}></div>;
};

export default BorderBar;
