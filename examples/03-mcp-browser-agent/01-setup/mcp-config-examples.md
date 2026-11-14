# Playwright MCP Configuration Examples

Use only one configuration method for your chosen MCP client.

## Generic MCP client configuration

Many MCP clients use a JSON configuration similar to this:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

## Important notes

- `npx` downloads and runs the specified package.
- Pin the version in a team or production-like setup to avoid unexpected changes.
- Do not add browser profiles containing personal data or saved credentials.
- Run MCP against local test environments whenever possible.
- Review your MCP client’s permissions before granting filesystem, shell, or repository access.

## Verification prompt

After configuration, use this prompt:

```text
Use Playwright MCP to open http://localhost:5173.
Do not modify files.
Summarize:
1. The main page heading
2. The primary navigation options
3. The visible product categories
4. Any obvious accessibility concerns
```