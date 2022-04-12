import { Component, Show } from "solid-js";
import { pushNotification, URL } from "../../../..";
import { copyToClipboard } from "../../../../util/helpers";
import ConfirmButton from "../../../util/ConfirmButton";
import Icon from "../../../util/Icon";
import Flex from "../../../util/layout/Flex";
import Grid from "../../../util/layout/Grid";
import Loading from "../../../util/loading/Loading";
import { useConfig } from "../Provider";
import Git from "./Git";
import OnClone from "./OnClone";

const GitConfig: Component<{}> = (p) => {
  const { build, reset, save, userCanUpdate } = useConfig();
  const listenerUrl = () => `${URL}/api/listener/build/${build._id}`;
  return (
    <Show when={build.loaded}>
      <Grid class="config">
        <Grid class="config-items scroller">
          <Git />
          <OnClone />
          <Grid class="config-item shadow">
            <h1>webhook url</h1>
            <Flex justifyContent="space-between" alignItems="center">
              <div class="ellipsis" style={{ width: "350px" }}>
                {listenerUrl()}
              </div>
              <button
                class="blue"
                onClick={() => {
                  copyToClipboard(listenerUrl());
                  pushNotification("good", "copied url to clipboard");
                }}
              >
                <Icon type="clipboard" />
              </button>
            </Flex>
          </Grid>
        </Grid>
        <Show when={userCanUpdate() && build.updated}>
          <Show
            when={!build.saving}
            fallback={
              <button class="green">
                updating <Loading type="spinner" />
              </button>
            }
          >
            <Flex style={{ "place-self": "center", padding: "1rem" }}>
              <button onClick={reset}>
                reset
                <Icon type="reset" />
              </button>
              <ConfirmButton onConfirm={save} color="green">
                save
                <Icon type="floppy-disk" />
              </ConfirmButton>
            </Flex>
          </Show>
        </Show>
      </Grid>
    </Show>
  );
};

export default GitConfig;
