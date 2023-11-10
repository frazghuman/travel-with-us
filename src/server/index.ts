import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";
import { z } from "zod";

import { publicProcedure, router } from "./trpc";

import { todos } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { exec } from "child_process";



const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

migrate(db, { migrationsFolder: "drizzle" });

export const appRouter = router({
    getTodos: publicProcedure.query(async () => {
        return await db.select().from(todos).all();
    }),
    addTodo: publicProcedure.input(z.string()).mutation(async (opts) => {
        await db.insert(todos).values({ content: opts.input, done: 0 }).run();
        return true;
    }),
    setDone: publicProcedure
        .input(
            z.object({
                id: z.number(),
                done: z.number(),
            })
        )
        .mutation(async (opts) => {
            await db
                .update(todos)
                .set({ done: opts.input.done })
                .where(eq(todos.id, opts.input.id))
                .run();
            return true;
        }),
    removeTodo: publicProcedure.input(z.number()).mutation(async (opts) => {
        await db.delete(todos).where(eq(todos.id, opts.input));
        return true;
    }),
    migrateDB: publicProcedure.query(async () => {
        exec('pnpm drizzle-kit generate:sqlite', () => {
          
        });
      })
})

export type AppRouter = typeof appRouter;
