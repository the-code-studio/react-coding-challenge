import { NextApiRequest, NextApiResponse } from "next";

const IN_MEMORY_STORAGE = {
  success: 0,
  warning: 0,
  error: 0,
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const path = getPath(req);

  if (req.method === "GET" && !path) {
    res.json(IN_MEMORY_STORAGE);
    return;
  }

  if (
    req.method === "POST" &&
    path &&
    Object.keys(IN_MEMORY_STORAGE).includes(path)
  ) {
    IN_MEMORY_STORAGE[path] = IN_MEMORY_STORAGE[path] + 1;
    res.json(IN_MEMORY_STORAGE);
    return;
  }

  res.status(500).end();
}

function getPath(
  req: NextApiRequest
): "success" | "warning" | "error" | undefined {
  return (req.query.path || [])[0] as any;
}
