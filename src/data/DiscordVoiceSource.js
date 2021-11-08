  import DocsManager from "./DocsManager";

  const blacklisted = new Set(["gh-pages", "docs"]);

  export default new DocsManager({
      id: "main",
      name: "Main",
      global: "DiscordVoice",
      repo: "Lebyy/discord-voice",
      defaultTag: "master",
      docsBranch: "docs",
      branchFilter: (branch) => !blacklisted.has(branch) && !branch.startsWith("dependabot/"),
      tagFilter: () => false
  });