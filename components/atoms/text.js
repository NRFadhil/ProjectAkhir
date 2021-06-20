export default function text({
  value,
  color,
  margin,
  size,
  weight,
  name,
  type,
}) {
  return(
  		<p style={{color:color,
        margin:margin,
        fontSize:size,
        fontWeight:weight,
        fontFamily:type}}
         className={name}>
  		{value}
  		</p>
  		);

  }
