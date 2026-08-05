import { Check } from "lucide-react";

type Props = {
  text: string;
};

export function AboutItem({ text }: Props) {
  return (
    <div className="flex items-center gap-3">
      <Check className="h-5 w-5 text-amber-500" />

      <span>{text}</span>
    </div>
  );
}