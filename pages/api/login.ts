import type { NextApiRequest, NextApiResponse } from "next";
import { authenticateUser } from "@/db/users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const userData = req.body;
    const user = await authenticateUser(userData);
    if (user)
      res.status(200).json({
        email: user.email,
        id: user.id,
      });
    else
      res.status(400).json({
        message: "Invalid credentials",
      });
  }
}
