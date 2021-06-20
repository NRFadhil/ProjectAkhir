import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fetch_data } from "../variables/api";
import { Table, Modal, Button, Alert, Toast } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';
import AtomsText from "../atoms/text";
import AtomsButton from "../atoms/button";
import AtomsImage from "../atoms/image";
import MoleculesInput from "../molecules/input";

export default function modal_product(shows,hide,success) {
	return(
		<>
		<Modal size="lg" show={shows} onHide={hide} contentClassName={styles.modr}>
					<Modal.Header closeButton>
					  <Modal.Title className="text-center">Add New Product</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="row">
							<div className="col-md-6">
								<center>
									<AtomsImage image="/beranda/pana.png" radius="0px" width="360px" height="350px" repeat="no-repeat" border="none"/>
									<AtomsButton value="Upload Picture" name="mt-2" bg="white" color="black" border="solid thin black"/>
								</center>
							</div>
							<div className="col-md-6">
								<MoleculesInput
					                value="Product Name"
					                height="40px"
					            />
					            <div className="row">
									<div className="col-md-6">
										<MoleculesInput
						            	value="Price"
						                height="40px"
						            	/>
									</div>
									<div className="col-md-6">
										<MoleculesInput
						            	value="Stock"
						                height="40px"
						            	/>
									</div>
								</div>
					            <MoleculesInput
					            	value="Category"
					                height="40px"
					            />
					            <MoleculesInput
					            	value="Description"
					            	type="textarea"
					            	rows="2"
					            />
							</div>

						</div>
						<div className="row">
							<div className="col-md-6">
							</div>
							<div className="col-md-6">
								<AtomsButton bg="#0086CF" value="Save" width="100%" click={success}/>
							</div>
						</div>
					</Modal.Body>
				</Modal>
		</>
		);
}
