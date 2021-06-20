import AtomsText from "../atoms/text";
import AtomsImage from "../atoms/image";
import MoleculesMenuBar from "../molecules/menubar";
import { Button, Navbar,Nav,Form,FormControl,Row,Col} from 'react-bootstrap';
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { user,check_login,set_login } from "../variables/user";
import Modal from 'react-bootstrap/Modal'
import { listCart,list_product } from "../variables/product";
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
export default function adminPanels()
{
	const router = useRouter();
	let user;
	if (typeof 	Storage !== 'undefined') {
		user=JSON.parse(localStorage.getItem("useradmin"));
		if(!user)
		{
			router.push('/signin');
		}
	}
	//console.log(user);
	const handlelogout = () => {

    	localStorage.removeItem("useradmin");
    	console.log("Logout");
  	};
	return(
		<>
			<div className="col-md-3 text-left">
				<div className="m-3 p-5" style={{background:"#0086CF",borderRadius:"20px",color:"white",height:"600px"}}>
					<AtomsText value="Admin Panel" type="Roboto" size="18px" weight="bold" />
					<AtomsText value="Peduli Digital" type="Roboto" size="25px" weight="bold" />
					<div className="row">
						<div className="col-md-2">
							<AtomsImage image="/home/Koala.jpg" border="1px solid #FFFFFF" radius="100px" width="50px" height="50px" size="cover"  margin="0px 0px 0px -5px"/>
						</div>
						<div className="col-md-8 pl-5">
							<div className="row">
								<AtomsText value={user? user.user_name : ""} type="Roboto" size="18px" weight="bold" margin="0px"/>
							</div>
							<div className="row">
								<AtomsText value="Admin" type="Roboto" size="12px" weight="bold" margin="0px"/>
							</div>
						</div>
						<div className="col-md-2">

						</div>
					</div>
					<div className="mt-5">
						<MoleculesMenuBar let="/dashboard" menu="Dashboard" image="/icon/ic1.svg"/>
						<MoleculesMenuBar let="/product" menu="Products" image="/icon/ic2.svg"/>
						{/*<Menuk go="/selling" menu="Selling" img="/icon/ic3.svg"/>
						<Menuk go="/payment" menu="Payment" img="/icon/ic4.svg"/>
						<Menuk go="/upcoming" menu="Upcoming" img="/icon/ic5.svg"/>*/}
						<MoleculesMenuBar let="/signin" click={handlelogout} menu="Logout" image="/icon/ic6.svg"/>

					</div>
				</div>
			</div>
		</>
		);

}
