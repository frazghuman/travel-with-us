import React from "react"

type ButtonProps = {
    //Define your props here
    title: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    const {title} = props;
  return (
    <div className="justify-center items-center shadow-[0px_20px_35px_0px_rgba(223,105,81,0.15)] bg-red-400 self-stretch flex w-[177px] max-w-full flex-col px-5 py-4 rounded-xl">
        <div className="text-white text-center text-base font-semibold self-center">{title}</div>
    </div>
  )
};

export default Button;
