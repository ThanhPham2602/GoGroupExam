import { clsx } from "clsx";

type WrapHeaderProps = {
  wrapHeaderStyles?: string;
  children?: React.ReactNode;
  hiddenInMobile?: boolean;
  hiddenInDesktop?: boolean;
  hiddenInTablet?: boolean;
  isFullWidth?: boolean;
};

const WrapHeader: React.FC<WrapHeaderProps> = ({
  wrapHeaderStyles = "",
  children,
  hiddenInMobile,
  hiddenInDesktop,
  hiddenInTablet,
  isFullWidth,
}) => {
  return (
    <section
      className={`m-auto ${clsx({
        hideInMobile: hiddenInMobile,
        hideInTablet: hiddenInTablet,
        hideInDesktop: hiddenInDesktop,
        "w-[100%]": isFullWidth,
        "px-primary": !isFullWidth,
        "xl:px-0": true,
        [wrapHeaderStyles]: typeof wrapHeaderStyles === "string",
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

export default WrapHeader;
