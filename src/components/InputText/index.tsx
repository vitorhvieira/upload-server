import { useId } from "react";

type Props = {
  labelText?: string;
} & React.ComponentProps<"input">;

export function InputText({ labelText, ...props }: Props) {
  const id = useId();
  return (
    <div className="flex flex-col gap-5">
      {labelText && (
        <label className="text-lg" htmlFor="">
          {labelText}
        </label>
      )}
      <input
        {...props}
        className="bg-white outline-0 ring-2 ring-slate-500 rounded-lg p-3 text-base/tight transistion focus:ring-slate-950 placeholder-black"
        type="text"
        id={id}
      />
    </div>
  );
}
