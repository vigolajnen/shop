import { FC, ReactNode, LabelHTMLAttributes } from 'react';

interface ICustomLabelFieldsProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
  children: ReactNode;
}

const CustomLabelFields: FC<ICustomLabelFieldsProps> = ({
  htmlFor,
  children,
  label,
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className="mb-1 block leading-6 relative"
    >
      {label && <span className="font-black text-md">{label}</span>}
      {children}
    </label>
  );
};

export default CustomLabelFields;
