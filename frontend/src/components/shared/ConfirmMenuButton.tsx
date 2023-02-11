import { Component, createSignal, JSX } from "solid-js";
import { pushNotification } from "../..";
import { useToggle } from "../../util/hooks";
import ConfirmButton from "./ConfirmButton";
import Input from "./Input";
import Grid from "./layout/Grid";
import CenterMenu from "./menu/CenterMenu";

const ConfirmMenuButton: Component<{
  onConfirm?: () => void;
  class?: string;
  style?: JSX.CSSProperties;
  title: string;
  match: string;
  info?: JSX.Element;
  children: JSX.Element;
}> = (p) => {
  const [show, toggleShow] = useToggle();

  return (
    <CenterMenu
      show={show}
      toggleShow={toggleShow}
      title={p.title}
      targetClass={p.class}
      target={p.children}
      content={() => (
        <ConfirmMenuContent
          class={p.class}
          title={p.title}
          match={p.match}
          info={p.info}
          onConfirm={p.onConfirm}
        />
      )}
      position="center"
    />
  );
};

const ConfirmMenuContent: Component<{
  class?: string;
  title: string;
  match: string;
  onConfirm?: () => void;
  info?: JSX.Element;
}> = (p) => {
  const [input, setInput] = createSignal("");
  return (
    <Grid placeItems="center">
      {p.info}
      <Input
        class="darkgrey"
        style={{
          padding: "0.5rem",
          width: "100%",
          "border-style": "solid",
          "border-width": "1px",
          "border-color": input() === p.match ? "#41764c" : "#952E23",
        }}
        placeholder={`enter '${p.match}'`}
        onEdit={setInput}
        value={input()}
        autofocus
      />
      <ConfirmButton
        class={p.class}
        style={{ width: "100%" }}
        onConfirm={() => {
          if (input() === p.match) {
            p.onConfirm && p.onConfirm();
          } else {
            pushNotification("bad", "must enter value to confirm");
          }
        }}
      >
        {p.title}
      </ConfirmButton>
    </Grid>
  );
};

export default ConfirmMenuButton;