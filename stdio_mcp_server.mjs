#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "arcdev",
  boardId: "arcdev-official",
  domain: "arc.dev",
  npmName: "zc-arcdev-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
