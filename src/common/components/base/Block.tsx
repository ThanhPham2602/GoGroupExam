import { clsx } from "clsx";

type BlockProps = {
  blockStyles?: string;
  children?: React.ReactNode;
  hiddenInMobile?: boolean;
  hiddenInDesktop?: boolean;
  hiddenInTablet?: boolean;
  isFullWidth?: boolean;
};

const Block: React.FC<BlockProps> = ({
  blockStyles = "",
  children,
  hiddenInMobile,
  hiddenInDesktop,
  hiddenInTablet,
  isFullWidth,
}) => {
  return (
    <section
      className={`m-auto block-app ${clsx({
        hideInMobile: hiddenInMobile,
        hideInTablet: hiddenInTablet,
        hideInDesktop: hiddenInDesktop,
        "w-[100%]": isFullWidth,
        "px-primary": !isFullWidth,
        "xl:px-0": true,
        [blockStyles]: typeof blockStyles === "string",
      })}
          `}
    >
      <div
        className={`h-full ${clsx({
          "max-w-primary": !isFullWidth,
          "mx-auto": true,
        })}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Block;
