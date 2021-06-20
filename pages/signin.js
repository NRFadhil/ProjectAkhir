import "bootstrap/dist/css/bootstrap.min.css";
import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import MoleculesInputForm from "../components/molecules/input_form";
import Link from "next/link";
import { useRouter } from "next/router";
import { list_users } from "../components/variables/user";
import { fetch_data } from "../components/variables/api";
import { useState, useEffect } from "react";


export default function signIn() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    let json = {
      "username" : username,
      "password" : password
    }
    fetch_data("POST", "http://localhost/bootcam-api/user/login", json).then(function (
      result
    ) {
      if (result.success) {
        alert("Login Success");
        router.push("/");
        localStorage.setItem("user_id", JSON.stringify(result.data));
      } else if (username.length == 0) {
        alert("Username Empty");
      } else {
        alert(result.data);
      }
    });
    // let check = list_users.filter(
    //   (data) => data.username == username && data.password == password
    // );
    //

  };

  return (
    <>
      <center>
        <div className="templateLogin p-5">
          <div className="row">
            <div className="col-md-6 pl-4 pr-4">
              <Link href="/">
                <img src="/beranda/bro.png" />
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
              <AtomText size="36px" weight="bold" value="Sign In" />
              <MoleculesInputForm
                onChange={handleChangeUsername}
                value="Username / Email"
                height="61px"
                customClass="mt-5"
                border={username.length == 0 ? "solid thin red" : ""}
              />
              <MoleculesInputForm
                border={password.length == 0 ? "solid thin red" : ""}
                onChange={handleChangePassword}
                value="Password"
                type="password"
                height="61px"
                customClass="mt-3"
              />
              <div className="row mt-2 mb-3">
                <div className="col-1">
                  <MoleculesInputForm height="20px" type="checkbox" />
                </div>
                <div className="col">
                  <AtomText
                    value="Remember Me"
                    size="18px"
                    color="#9D9D9D"
                    marginTop="10px"
                  />
                </div>
              </div>
              <AtomButton
                onClick={handleLogin}
                value="Login"
                color="#FFF"
                width="100%"
                background="#0086CF"
                height="52px"
              />
              <p className="mt-5">
                Don’t have account
                <Link href="/signup">
                  <span style={{ color: "#0086CF" }}> Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
