function Image({ url, alt, className, ...rest }) {
  return <img src={url} alt={alt} className={className} {...rest} />;
}

export default Image;
