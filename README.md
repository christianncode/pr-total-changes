# PR Total Changes by christianncode

Get a summary of the total number of changes (additions and deletions) in a pull request, and automatically comment on the PR with the results.

## Features

- Calculates lines added, removed, and total changes in a PR.
- Comments a summary table on the pull request.
- Warns if the PR exceeds 500 lines changed.

## Usage

Add the following step to your workflow:

```yaml
- name: PR Total Changes
  uses: christianncode/pr-total-changes@v1
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
```

## Inputs

| Name  | Description                               | Required | Default                       |
| ----- | ----------------------------------------- | -------- | ----------------------------- |
| token | GitHub token with read access to the repo | true     | `${{ secrets.GITHUB_TOKEN }}` |

## Example Output

The action will comment something like:

```
### 📊 Code Changes Summary
| Lines Added | Lines Removed | Total Changes |
|-------------|---------------|---------------|
| 123         | 45            | 168           |

✅ **The PR is within the acceptable limit.**
```

If the PR exceeds 500 lines changed:

```
❌ **Too many changes! The PR exceeds the limit of 500 lines.**
```

## License

[MIT](LICENSE)

---

Made with ❤️ by [Christian Díaz](https://github.com/christianncode)
