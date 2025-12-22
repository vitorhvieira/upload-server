type Props = {
  variant?: "default" | "clean";
  size?: "sm" | "md";
} & React.ComponentProps<"button">;

export function Button({ variant = "default", size = "sm", ...props }: Props) {
  const buttonVariant = {
    default:
      "bg-yellow-700 hover:bg-yellow-800 text-white font-semibold rounded-lg transform hover:scale-105",
    clean:
      "bg-white hover:bg-[#c9a961] hover:text-white text-[#c9a961] font-semibold border-2 border-[#c9a961] rounded-lg",
  };

  const buttonSize = {
    sm: "mt-8 px-8 py-3",
    md: "px-8 py-3",
  };
  return (
    <button
      {...props}
      className={`${buttonVariant[variant]} ${buttonSize[size]} flex items-center justify-center cursor-pointer transition-all duration-300`}
    />
  );
}
