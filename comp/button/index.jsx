import ButtonStyles from "../../styles/button.module.css";
const Button = ({ text, Icon, fn, sidebar }) => {
  return (
    <div>
      <button
        className={sidebar ? ButtonStyles.sidebar_btn : ButtonStyles.btn}
        onClick={fn}
      >
        {text} <Icon className={ButtonStyles.icon} />
      </button>
    </div>
  );
};

export default Button;
