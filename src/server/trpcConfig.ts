import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { getDataArray } from "./utils.js";

export const t = initTRPC.create();

const publicProcedure = t.procedure;

export const appRouter = t.router({
  historicalData: publicProcedure
    .input(
      z.object({
        ticker: z.union([
          z.literal("QQQ"),
          z.literal("SPY"),
          z.literal("SQQQ"),
          z.literal("VTI"),
          z.literal("ABALX"),
        ]),
      })
    )
    .query(async ({ input }) => {
      const result = await getDataArray(input.ticker);
      return result;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
