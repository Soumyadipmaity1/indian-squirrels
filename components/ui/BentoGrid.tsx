import { cn } from "@/utils/cn";
import GlassMorphism from "./GlassMorphism";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <div className={cn(className)}>{children}</div>;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  content,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  content?: string | React.ReactNode;
}) => {
  return (
    <GlassMorphism
      variant="light"
      className={cn(
        "h-72 overflow-hidden rounded-xl group/bento transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:-white/[0.2] justify-between flex flex-col space-y-6 ",
        className
      )}
    >
      <div className=" text-sm transition duration-200">
        <span
          className="text-center text-xl block mb-5"
          dangerouslySetInnerHTML={{ __html: title ?? "" }}
        ></span>
        <span className="text-center text-xs inline-block text-dim-gray">
          {description}
        </span>
      </div>
      <div className="grid place-items-center">{content}</div>
    </GlassMorphism>
  );
};