import "./CustomButton.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted && "inverted"} ${
      isGoogleSignIn && "sign-in-google"
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
