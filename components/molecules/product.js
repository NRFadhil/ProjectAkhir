import AtomsImage from "../atoms/image";
import AtomsText from "../atoms/text";
import { useRouter } from "next/router";

export default function product({
  name,
  category,
  price,
  image,
  index,
  click,
  let,
  id
})
{
	const router = useRouter();
	const handle = e => {
		router.push(
		{
			pathname : let,
			query : {id: e.target.id}
		}
		);

	};
	return (
		<>
		<div className="col-md-3 mt-3">
	        	<div className="p-4 text-left text-light" style={{background:"#024aca",borderRadius:"10px"}}>
	            	<div onClick={handle}>
			        	<Imagek aidi={id} name="mb-3" width="100%" height="156px" image={image} size="contain" border="none"/>
			        </div>
			        <Textk value={name} size="14px" weight="bold" />
			        <Textk value={category} size="9px" margin="-10px 0px 20px 0px" />
			        <div className="row">
			         	<div className="col-md-8">
			         	   	<Textk value={price} size="18px" weight="bold" />
			          	</div>
			          	<div className="col-md-4">
			           		<img id={name} className="mr-4" src="/home/cart.png" onClick={click}/>
			          	</div>
			        </div>
			</div>
	        </div>
		</>
		);
}
