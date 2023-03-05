import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

import shareVideo from '../assets/share.mp4';
import logoWhite from '../assets/logowhite.png';

const Login = () => {
  return (
  	<div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
				<video
					src={shareVideo}
					type="video/mp4"
					loop
					controls={false}
					muted
					autoPlay
					className="w-full h-full object-cover"
				/>
      </div>

			<div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
				<div className="p-5">
					<img src={logoWhite} width="130px" alt="logo" />
				</div>


      <div className="App">
          <GoogleLogin
            onSuccess={credentialResponse => {
							var decoded = jwt_decode(credentialResponse.credential);
              console.log(decoded);
            }}
          
            onError={() => {
              console.log('Login Failed');
            }}
          
          />
      </div>
		</div>
	</div>
	)
}

export default Login