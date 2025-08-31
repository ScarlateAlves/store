interface TextProps {
  children: React.ReactNode;
}

export const Text = ({ children }: TextProps) => {
  return <p className="text-base">{children}</p>;
};
