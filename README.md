# PR Total Changes

Get a summary of the total number of changes (additions and deletions) in a pull request, and automatically comment on the PR with the results.

## Features

- Calculates lines added, removed, and total changes in a PR.
- Comments a summary table on the pull request.
- Warns if the PR exceeds configurable limits for additions, deletions, or total changes.

## Usage

Add the following step to your workflow:

```yaml
- name: PR Total Changes
  uses: christianncode/pr-total-changes@v1
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    # additions_limit: 1000
    # deletions_limit: 1000
    # total_limit: 500
```

## Inputs

| Name            | Description                                     | Required | Default |
| --------------- | ----------------------------------------------- | -------- | ------- |
| github_token    | GitHub token with read access to the repository | true     |         |
| additions_limit | Maximum number of additions allowed in the PR   | false    |         |
| deletions_limit | Maximum number of deletions allowed in the PR   | false    |         |
| total_limit     | Total number of changes to consider for the PR  | false    | 500     |

## Example Output

The action will comment something like:

```
### 📊 Code Changes Summary
| Lines Added | Lines Removed | Total Changes |
|-------------|---------------|---------------|
| 123         | 45            | 168           |

### ➡️ Configurations (Inputs)
| Additions Limit | Deletions Limit | Total Limit |
|-----------------|-----------------|-------------|
| 1000            | 1000            | 500         |

✅ **The PR is within the acceptable limit.**
```

If any limit is exceeded:

```
❌ **Too many additions! The PR exceeds the limit of 1000 lines added.**
❌ **Too many deletions! The PR exceeds the limit of 1000 lines removed.**
❌ **Too many changes! The PR exceeds the limit of 500 lines.**
```

## License

[MIT](LICENSE)

---

Made with ❤️ by [Christian Díaz](https://github.com/christianncode)
