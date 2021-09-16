import "./Register.scss";
export default function Register() {
  return (
    <>
      <span>Unlimited movies, TV shows and more.</span>
      <span>Watch anywhere. Cancel anytime.</span>
      <span>
        Ready to watch? Enter your email to create or restart your membership.
      </span>

      <label>Email</label>
      <div className="email">
        <input type="text" placeholder="Email" />
        <input type="button" placeholder="Get Started" />
      </div>
    </>
  );
}
