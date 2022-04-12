import { Component, JSX } from "solid-js";

export type IconType =
  | "arrow-down"
  | "arrow-up"
  | "arrow-left"
  | "chevron-down"
  | "cross"
  | "double-chevron-right"
  | "exchange"
  | "eye-off"
  | "eye-open"
  | "star-empty"
  | "star"
  | "chevron-left"
  | "trash"
  | "info-sign"
  | "menu"
  | "build"
  | "notifications"
  | "user"
  | "play"
  | "pause"
  | "reset"
  | "plus"
  | "minus"
  | "floppy-disk"
  | "command"
  | "log"
  | "console"
  | "application"
  | "error"
  | "refresh"
  | "cut"
  | "fullscreen"
  | "github"
  | "edit"
  | "clipboard";

const Icon: Component<{
  type: IconType;
  alt?: string;
  className?: string;
  style?: JSX.CSSProperties;
  width?: string;
  height?: string;
  onClick?: JSX.EventHandlerUnion<HTMLImageElement, MouseEvent>;
  title?: string;
}> = (p) => {
  return (
    <img
      className={p.className}
      src={`/icons/${p.type}.svg`}
      alt={p.alt || p.type}
      title={p.title}
      style={{
        ...p.style,
        width: p.width || "1rem",
        height: p.height,
      }}
      onClick={p.onClick}
    />
  );
};

export default Icon;
