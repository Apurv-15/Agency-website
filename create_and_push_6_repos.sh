#!/usr/bin/env zsh
set -e

# Retrieve stored GitHub token from git credentials
TOKEN=$(printf "protocol=https\nhost=github.com\n" | git credential fill | grep password | cut -d= -f2)

if [ -z "$TOKEN" ]; then
  echo "❌ Error: Could not retrieve GitHub token."
  exit 1
fi

PROJECTS=(
  "jewells-nova"
  "ekotex-mobile"
  "hirehunt-ai"
  "soul-viva-soap"
  "bintelleapps"
  "ignicia-charter"
)

echo "========================================================"
echo "🚀 Creating & Pushing 6 Public Showcase Repos on GitHub"
echo "========================================================"

for proj in "${PROJECTS[@]}"; do
  repo_name="${proj}-showcase"
  dir="showcase-repos/${proj}"

  echo "\n📦 [1/2] Creating GitHub repo: ${repo_name}..."

  # Create repo on GitHub via API
  HTTP_STATUS=$(curl -s -o /tmp/gh_api_resp.json -w "%{http_code}" \
    -H "Authorization: token ${TOKEN}" \
    -H "Accept: application/vnd.github+json" \
    https://api.github.com/user/repos \
    -d "{\"name\":\"${repo_name}\",\"private\":false}")

  if [ "$HTTP_STATUS" = "201" ]; then
    echo "✅ Successfully created repository ${repo_name} on GitHub."
  elif [ "$HTTP_STATUS" = "422" ]; then
    echo "ℹ️ Repository ${repo_name} already exists on GitHub."
  else
    echo "⚠️ GitHub API returned HTTP ${HTTP_STATUS}. Response:"
    cat /tmp/gh_api_resp.json
  fi

  echo "📤 [2/2] Initializing git and pushing README..."
  if [ -d "$dir" ]; then
    cd "$dir"

    if [ ! -d ".git" ]; then
      git init -b main
    fi

    git add README.md
    git commit -m "docs: add project overview and live Vercel review link" || true
    git remote remove origin 2>/dev/null || true
    git remote add origin "https://${TOKEN}@github.com/Apurv-15/${repo_name}.git"
    git push -u origin main --force

    cd - > /dev/null
    echo "✨ Pushed https://github.com/Apurv-15/${repo_name}"
  fi
done

echo "\n🎉 All 6 showcase repositories created and pushed to GitHub!"
