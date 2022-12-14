// utils/trpc.ts
import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "../server/trpcConfig";

export const trpc = createTRPCReact<AppRouter>();
