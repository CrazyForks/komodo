import { ConfirmButton } from "@components/util";
import { useExecute, useRead } from "@lib/hooks";
import { Types } from "@monitor/client";
import { Ban, Hammer, Loader2 } from "lucide-react";

export const RunBuild = ({ id }: { id: string }) => {
  const perms = useRead("GetPermissionLevel", {
    target: { type: "Build", id },
  }).data;
  const building = useRead(
    "GetBuildActionState",
    { build: id },
    { refetchInterval: 5000 }
  ).data?.building;
  const { mutate: run_mutate, isPending: runPending } = useExecute("RunBuild");
  const { mutate: cancel_mutate, isPending: cancelPending } =
    useExecute("CancelBuild");

  // make sure hidden without perms.
  // not usually necessary, but this button also used in deployment actions.
  if (
    perms !== Types.PermissionLevel.Execute &&
    perms !== Types.PermissionLevel.Write
  )
    return null;

  if (building) {
    return (
      <ConfirmButton
        title="Cancel Build"
        variant="destructive"
        icon={<Ban className="h-4 w-4" />}
        onClick={() => cancel_mutate({ build: id })}
        disabled={cancelPending}
      />
    );
  } else {
    return (
      <ConfirmButton
        title="Build"
        icon={
          runPending ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Hammer className="h-4 w-4" />
          )
        }
        onClick={() => run_mutate({ build: id })}
        disabled={runPending}
      />
    );
  }
};