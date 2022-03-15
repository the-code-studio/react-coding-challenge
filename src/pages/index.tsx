import { TestForm } from "../scaffolding/TestForm";
import { UsageStats } from "../scaffolding/UsageStats";
import { useToasts } from "../toast";

export default function Page() {
  const { stats, addToast } = useToasts();

  return (
    <div className="my-8 px-4">
      <div className="mx-auto max-w-[400px]">
        <UsageStats stats={stats} />
      </div>

      <div className="mt-8 mx-auto max-w-[400px]">
        <TestForm onSubmit={addToast} />
      </div>
    </div>
  );
}
