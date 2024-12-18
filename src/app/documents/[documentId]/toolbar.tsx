"use client";
import {
  BoldIcon,
  LucideIcon,
  PrinterIcon,
  Redo2Icon,
  SpellCheck,
  Undo2Icon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { Separator } from "@/components/ui/separator";

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
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "SpellCheck",
        icon: SpellCheck,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
    ],
  ];
  return (
    <div className=" bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] gap-x-0.5 flex items-center  overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {/*TODO : FONT FAMILY*/}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {/*TODO : HEADING*/}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {/*TODO : FONT SIZE*/}
      {sections[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
}
