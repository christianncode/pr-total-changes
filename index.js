import * as github from "@actions/github";
import * as core from "@actions/core";

async function run() {
  const token = core.getInput("GITHUB_TOKEN");
  const additionsLimit = core.getInput("ADDITIONS_LIMIT");
  const deletionsLimit = core.getInput("DELETIONS_LIMIT");
  const additionsLimitValue = additionsLimit || "not set";
  const deletionsLimitValue = deletionsLimit || "not set";
  const totalLimit = core.getInput("TOTAL_LIMIT");
  const octokit = github.getOctokit(token);
  const context = github.context;
  const pullRequest = context.payload.pull_request;

  if (
    !pullRequest ||
    !pullRequest.additions ||
    !pullRequest.deletions ||
    !pullRequest.number
  ) {
    console.error("Invalid pull request payload.");
    process.exit(1);
  }

  const additions = pullRequest.additions;
  const deletions = pullRequest.deletions;
  const totalChanges = additions + deletions;

  const commentBody = `
  ### 📊 Code Changes Summary
  | Lines Added | Lines Removed | Total Changes |
  |-------------|---------------|---------------|
  | ${additions} | ${deletions} | ${totalChanges} |

  ### ➡️ Configurations (Inputs)                                                       
  | Additions Limit | Deletions Limit | Total Limit |
  |-------------|---------------|---------------|
  | ${additionsLimitValue} | ${deletionsLimitValue} | ${totalLimit} |

  ${
    additions > Number(additionsLimit)
      ? `❌ **Too many additions! The PR exceeds the limit of ${additionsLimit} lines added.**`
      : "✅ **additions allowed.**"
  }
  ${
    deletions > Number(deletionsLimit)
      ? `❌ **Too many deletions! The PR exceeds the limit of ${deletionsLimit} lines removed.**`
      : "✅ **deletions allowed.**"
  }
  ${
    totalChanges > Number(totalLimit)
      ? `❌ **Too many changes! The PR exceeds the limit of ${totalLimit} lines.**`
      : "✅ **The PR is within the acceptable limit.**"
  }
  `;

  await octokit.rest.issues.createComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: pullRequest.number,
    body: commentBody,
  });
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
