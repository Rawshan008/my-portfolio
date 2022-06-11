const HomeBanner = (props) => {
  const { title, subtitle, description } = props;
  return (
    <div className="py-14">
      {title && (
        <h1 className="font-dosis text-7xl font-bold mb-3 text-body-color">
          {title}
        </h1>
      )}

      {subtitle && (
        <h3 className="font-normal font-bitter text-3xl mb-5 text-body-color">
          {subtitle}
        </h3>
      )}

      {description && (
        <div
          className="home-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      )}
    </div>
  );
};

export default HomeBanner;
