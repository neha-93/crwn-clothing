import { Component } from "react";
import { signInWithGoogle } from "../firebase/firebase.utils";
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

  handleSubmit = (event) => {
    event.preventDefault();

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
            label="email"
          />
          <InputForm
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
          />

          <CustomButton type="submit" value="Submit Form">
            SIGN IN
          </CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
