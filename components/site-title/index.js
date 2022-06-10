const SiteTitle = (props) => {
  return (
    <h2 className="font-dosis text-3xl font-bold mb-3 text-body-color uppercase">
      {props.title}
    </h2>
  );
};

export default SiteTitle;
