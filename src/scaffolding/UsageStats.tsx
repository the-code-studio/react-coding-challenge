import { ToastStats } from "../toast/types";

type Props = {
  stats: ToastStats | null;
};

export function UsageStats(props: Props) {
  const { stats } = props;

  return (
    <div className="flex font-bold text-center">
      <div className="flex-1">
        <div className="text-green-500">success</div>
        <div>{stats?.success ?? "?"}</div>
      </div>

      <div className="flex-1">
        <div className="text-yellow-500">warning</div>
        <div>{stats?.warning ?? "?"}</div>
      </div>

      <div className="flex-1">
        <div className="text-red-500">error</div>
        <div>{stats?.error ?? "?"}</div>
      </div>
    </div>
  );
}
