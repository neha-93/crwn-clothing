import { Component } from "react";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";
import CustomButton from "./CustomButton";
import InputForm from "./InputForm";
import "./SignIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const {email,password} = this.state;

      await auth.signInWithEmailAndPassword(email, password);

    }catch(error){
      console.log(error);
    }

    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account.</h2>
        <span>Sign In with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <InputForm
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <InputForm
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              SIGN IN
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
