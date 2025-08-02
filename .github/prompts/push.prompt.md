---
mode: agent
---
# Git Commit and Push Changes

## Task
Commit and push all current changes to the repository.

## Requirements
1. Stage all modified files
2. Create a descriptive commit message
3. Push changes to the remote repository

## Steps
1. Check current status: `git status`
2. Stage changes: `git add .`
3. Commit with message: `git commit -m "feat: update AI agent instructions"`
4. Push to remote: `git push origin main`

## Success Criteria
- All changes are committed to the repository
- Changes are successfully pushed to the remote
- No uncommitted changes remain

## Error Handling
If push fails:
1. Pull latest changes: `git pull --rebase origin main`
2. Resolve any conflicts
3. Try pushing again