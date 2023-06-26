type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

const Button = (props: Props) => {
  return <button {...props} />;
};

export default Button;

// const Button = styles.button`
//   fontsize: 1rem;
//   padding: 0.5rem 1rem;
//   border: 0;
//   background-color: #000;
//   color: #fff;
//   border-radius: 0.25rem;
//   cursor: pointer;
//   box-shadow: var(--borderShadow);
//   transition: 300ms;
//   &:hover {
//     background-color: dodgerblue;
//     opacity: 0.8;
//   }

//   &:active {
//     transform: scale(0.95);
//   }
// `;
