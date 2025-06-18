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
  uses: christianncode/pr-total-changes@v1.2
  with:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    # ADDITIONS_LIMIT: 1000
    # DELETIONS_LIMIT: 1000
    # TOTAL_LIMIT: 500
```

## Inputs

| Name            | Description                                    | Required | Default                       |
| --------------- | ---------------------------------------------- | -------- | ----------------------------- |
| GITHUB_TOKEN    | GitHub token with read access to the repo      | true     | `${{ secrets.GITHUB_TOKEN }}` |
| ADDITIONS_LIMIT | Maximum number of additions allowed in the PR  | false    |                               |
| DELETIONS_LIMIT | Maximum number of deletions allowed in the PR  | false    |                               |
| TOTAL_LIMIT     | Total number of changes to consider for the PR | false    | 500                           |

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
