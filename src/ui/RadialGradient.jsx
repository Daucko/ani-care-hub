const RadialGradient = ({
  type = 'circle',
  from = 'rgba(120,119,198,0.3)',
  to = 'hsla(0, 0%, 0%, 0)',
  size = 300,
  origin = 'center',
  className,
}) => {
  const styles = {
    position: 'absolute',
    pointerEvents: 'none',
    inset: 0,
    backgroundImage: `radial-gradient(${type} ${size}px at ${origin}, ${from}, ${to})`,
  };

  return <div className={className} style={styles} />;
};

export default RadialGradient;
