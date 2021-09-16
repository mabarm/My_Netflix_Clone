import Netflix_logo from "../../Image/Netfilx-logo.png";
import { useState, useRef } from "React";

export default function Login() {
  return (
    <>
      <img src={Netflix_logo} alt="Netflix_logo" />
      <form>
        <label>Email</label>
        <input type="text" placeholder="Email or phone number" />
        <label>Password</label>
        <input type="password" placeholder="Password" />
        <span>Need help?</span>
        <span>New to Netflix?Sign up now</span>
        <span>
          Sign in is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </span>
      </form>
    </>
  );
}
