import { useState } from "react";
import { ToastInput, ToastType } from "../toast/types";

type Props = {
  onSubmit: (input: ToastInput) => void;
};

export function TestForm(props: Props) {
  const { onSubmit } = props;

  const [type, setType] = useState<ToastType>("success");
  const [ttl, setTtl] = useState<string>("");
  const [body, setBody] = useState<string>(
    "Cras mattis consectetur purus sit amet fermentum."
  );

  return (
    <form onSubmit={onSubmitProxy}>
      <label className="block">
        <div>type</div>
        <select
          className="w-full"
          onChange={(e) => setType(e.target.value as any)}
          value={type}
        >
          <option>success</option>
          <option>warning</option>
          <option>error</option>
        </select>
      </label>

      <label className="block mt-5">
        <div>ttl (ms)</div>
        <input
          className="w-full"
          type="number"
          value={ttl || ""}
          onChange={(e) => setTtl(e.target.value as any)}
        />
      </label>

      <label className="block mt-5">
        <div>body</div>
        <textarea
          className="w-full"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </label>

      <div className="mt-5">
        <button
          className="flex justify-center items-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          type="submit"
        >
          Create Toast
        </button>
      </div>
    </form>
  );

  function onSubmitProxy(e: any) {
    e.preventDefault();

    onSubmit({ type, ttl: normalizeTtl(ttl), body });
  }
}

function normalizeTtl(raw: string) {
  if (raw === "") return null;

  const parsed = +raw;
  return Number.isNaN(parsed) ? null : parsed;
}
