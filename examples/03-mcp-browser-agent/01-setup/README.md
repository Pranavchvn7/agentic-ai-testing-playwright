# Exercise: Set Up Playwright MCP

Set up Playwright MCP with an MCP-capable AI client.

## Objective

By the end of this exercise, you should be able to:

- Understand the role of an MCP client and MCP server.
- Configure Playwright MCP locally.
- Verify that the agent can access a running ShopLite browser session.
- Use MCP safely with a local test application.

## Prerequisites

- Node.js 20 or newer.
- ShopLite running locally.
- An MCP-capable AI client such as VS Code, Cursor, Claude Desktop, or another supported client.

## Steps

1. Start ShopLite:

```bash
npm run demo
```

2. Confirm the app is available:

```text
http://localhost:5173
```

3. Confirm the API is available:

```text
http://localhost:4000/api/health
```

4. Choose one MCP configuration example from `mcp-config-examples.md`.

5. Add the configuration to your chosen MCP client.

6. Restart or reload the MCP client if required.

7. Ask the agent:

```text
Use Playwright MCP to open http://localhost:5173.
Summarize the visible page structure and main navigation options.
Do not modify any files.
```

8. Save the agent response as `first-mcp-session.md`.

## Definition of done

- Playwright MCP is configured.
- The agent can open the ShopLite home page.
- The agent can describe visible navigation and primary page elements.
- No credentials, secrets, or private data were shared.