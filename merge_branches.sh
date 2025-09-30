#!/usr/bin/env bash
set -e
git fetch --all
git checkout main
git pull origin main
branches=$(git for-each-ref --format='%(refname:short)' refs/heads/ | grep -v '^main$')
if [ -z "$branches" ]; then
  echo "Nenhuma branch encontrada."
  exit 0
fi
for branch in $branches; do
  git merge --no-ff "$branch" -m "Merge branch '$branch' into main"
done
git push origin main
for branch in $branches; do
  git branch -d "$branch"
  git push origin --delete "$branch"
done
echo "Merge e limpeza concluídos."
