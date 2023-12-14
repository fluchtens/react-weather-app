interface ContainerTitleProps {
  title: string;
}

export const ContainerTitle = ({ title }: ContainerTitleProps) => (
  <p className="text-center font-semibold md:text-left uppercase text-[#939aa3]">
    {title}
  </p>
);
