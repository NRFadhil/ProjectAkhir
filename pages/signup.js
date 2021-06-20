import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import { list_users } from "../components/variables/user";
import MoleculesInputForm from "../components/molecules/input_form";
import { fetch_data } from "../components/variables/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function signUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleRegistration = () => {
    let json = {
      action: "save",
      table: "tx_hdr_user",
      data: [
        {
          "USER_NAME": username,
          "USER_PASSWORD": password,
        },
      ],
    };

    if (password == passwordConfirmation) {
      fetch_data("POST", "http://localhost/bootcam-api/store", json).then(
        function (result) {
          if (result.success) {
            router.push("/signin");
            alert(result.message);
          } else {
            alert(result.message);
          }
        }
      );

      // let check = list_users.filter(
      //   (data) => data.username == username && data.password == password
      // );
      //
      // if (!check.length) {
      //   let newUser = {
      //     username:username,
      //     password:password
      //   }
      //   alert("Success Register User");
      //   list_users.push(newUser);
      //   console.log(list_users);
      // } else {
      //   alert("User Already Registered");
      //   console.log(list_users);
      // }
    } else {
      alert("Check Password Confirmation");
    }
  };

  return (
    <>
      <center>
        <div className="templateLogin p-5">
          <div className="row">
            <div className="col-md-6 pl-4 pr-4">
              <Link href="/">
                <img
                  src="/beranda/rafiki.png"
                  style={{ width: "100%", marginTop: "40px" }}
                />
              </Link>
              <AtomText
                value="Start your New Journey With Us"
                size="24px"
                weight="bold"
                marginTop="20px"
              />
              <AtomText
                value="Build your own shop using peduli digital Marketplace You can sell all your favorite item and get easy money"
                size="16px"
                color="#9D9D9D"
              />
            </div>
            <div className="col-md-6 text-left pl-3 pr-3">
              <AtomText size="36px" weight="bold" value="Sign Up" />
              <MoleculesInputForm
                onChange={handleChangeUsername}
                value="Username / Email"
                height="61px"
                customClass="mt-2"
              />
              <MoleculesInputForm
                onChange={handleChangePassword}
                value="Password"
                type="password"
                height="61px"
                customClass="mt-3"
              />
              <MoleculesInputForm
                onChange={handleChangePasswordConfirmation}
                value="Confirm Password"
                type="password"
                height="61px"
                customClass="mt-3"
                border={
                  password !== passwordConfirmation ? "solid thin red" : ""
                }
              />
              <AtomButton
                onClick={handleRegistration}
                value="Register"
                color="#FFF"
                width="100%"
                background="#0086CF"
                height="52px"
                customClass="mt-4"
              />
              <p className="mt-4">
                Already Have An Account{" "}
                <Link href="/signin">
                  <span style={{ color: "#0086CF" }}> Sign In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
