import { initTRPC } from "@trpc/server";
import { z } from "zod";

export const t = initTRPC.create();

const publicProcedure = t.procedure;

export const appRouter = t.router({
  hello: publicProcedure
    .input(
      z
        .object({
          text: z.string(),
        })
        .optional()
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    }),
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
    .query(({ input }) => {
      return [];
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
