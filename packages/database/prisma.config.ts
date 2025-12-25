import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { defineConfig, env } from "prisma/config";

const pool = new Pool({ connectionString: env("DATABASE_URL") });

export default defineConfig({
	schema: "prisma/schema.prisma",
	datasource: {
		url: env("DATABASE_URL"),
	},
});

export const adapter = new PrismaPg(pool);
