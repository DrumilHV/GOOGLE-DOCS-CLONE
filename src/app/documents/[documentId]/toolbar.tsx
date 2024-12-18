"use client";
import { LucideIcon, Undo2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";

interface ToolbarButtonsProps {
  onClick?: () => void;
  isActive?: boolean;
  icon?: LucideIcon;
}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonsProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      {Icon && <Icon className="size-4" />}
    </button>
  );
};

export default function Toolbar() {
  const { editor } = useEditorStore();
  console.log(editor);
  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
    ],
  ];
  return (
    <div className=" bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] gap-x-0.5 flex items-center  overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
}
