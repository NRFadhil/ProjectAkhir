import { Toast } from 'react-bootstrap';
export default function toast(
	{
		name,
		background,
		color,
		show,
		close,
		delay,
		value
	})
{
	return(
		<>
		<Toast className="p-2" style={{background:background,color:color}}
		show={show} onClose={close} delay={delay ? delay : 2500}
		 autohide>
		  			{value}

		</Toast>
		</>
		);
}
