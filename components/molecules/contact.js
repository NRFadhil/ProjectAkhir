import AtomsImage from "../atoms/image"
import AtomsText from "../atoms/text"
export default function contact({
  value,
  image,
  height,
  weight,
  size
})
{
	return (
		<>
			<div className="row mt-2">
              <div className="col-md-2">
                <Imagek
                  image={img}
                  border="none"
                  height="20px"
                  width="40px"
                  position="right"
                  size="50%"
                 />
              </div>
              <div className="col-md-10">
                <Textk
                  value={value}
                  size="14px"
                  margin="0px"
                />
              </div>
            </div>
		</>
		);
}
