import { useRead } from "@hooks";
import { BuildCard } from "@resources/build";
import { History } from "lucide-react";
import { DeploymentCard } from "@resources/deployment";
import { ServerCard } from "@resources/server";
import { BuilderCard } from "@resources/builder";
import { Section } from "@layouts/page";

export const RecentlyViewed = () => {
  const recents = useRead("GetUser", {}).data?.recently_viewed;
  return (
    <Section
      title="Recently Viewed"
      icon={<History className="w-4 h-4" />}
      actions=""
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recents?.map(({ type, id }) => {
          if (type === "Deployment") return <DeploymentCard key={id} id={id} />;
          if (type === "Build") return <BuildCard key={id} id={id} />;
          if (type === "Server") return <ServerCard key={id} id={id} />;
          if (type === "Builder") return <BuilderCard key={id} id={id} />;
        })}
      </div>
    </Section>
  );
};
