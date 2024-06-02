import { TagsWithBadge } from "@components/tags";
import { useFilterResources, useRead } from "@lib/hooks";
import { DataTable, SortableHeader } from "@ui/data-table";
import { ServerComponents } from ".";
import { ResourceLink } from "../common";

export const ServerTable = ({ search }: { search?: string }) => {
  const servers = useRead("ListServers", {}).data;
  const filtered = useFilterResources(servers, search);
  return (
    <DataTable
      tableKey="servers"
      data={filtered}
      columns={[
        {
          accessorKey: "name",
          header: ({ column }) => (
            <SortableHeader column={column} title="Name" />
          ),
          cell: ({ row }) => (
            <ResourceLink type="Server" id={row.original.id} />
          ),
          size: 200,
        },
        {
          accessorKey: "id",
          sortingFn: (a, b) => {
            const sa = useDeploymentCount(a.original.id);
            const sb = useDeploymentCount(b.original.id);

            if (!sa && !sb) return 0;
            if (!sa) return -1;
            if (!sb) return 1;

            if (sa > sb) return 1;
            else if (sa < sb) return -1;
            else return 0;
          },
          header: ({ column }) => (
            <SortableHeader column={column} title="Deployments" />
          ),
          cell: ({ row }) => <DeploymentCountOnServer id={row.original.id} />,
        },
        {
          accessorKey: "info.region",
          header: ({ column }) => (
            <SortableHeader column={column} title="Region" />
          ),
        },
        {
          accessorKey: "info.state",
          header: ({ column }) => (
            <SortableHeader column={column} title="State" />
          ),
          cell: ({ row }) => (
            <ServerComponents.Status.State id={row.original.id} />
          ),
        },
        {
          header: "Tags",
          cell: ({ row }) => {
            return (
              <div className="flex gap-1">
                <TagsWithBadge tag_ids={row.original.tags} />
              </div>
            );
          },
        },
      ]}
    />
  );
};

const DeploymentCountOnServer = ({ id }: { id: string }) => {
  const count = useDeploymentCount(id);
  return <>{count ?? 0}</>;
};

const useDeploymentCount = (id: string) => {
  return useRead("ListDeployments", {}).data?.filter(
    (d) => d.info.server_id === id
  ).length;
};