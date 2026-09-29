#!/usr/bin/env zsh
set -e

# List of 6 showcase projects
PROJECTS=(
  "jewells-nova"
  "ekotex-mobile"
  "hirehunt-ai"
  "soul-viva-soap"
  "bintelleapps"
  "ignicia-charter"
)

echo "================================================"
echo "🚀 Creating & Pushing 6 GitHub Showcase Repos"
echo "================================================"

for proj in "${PROJECTS[@]}"; do
  repo_name="${proj}-showcase"
  dir="showcase-repos/${proj}"

  echo "\n📦 Processing: ${repo_name}..."

  if [ -d "$dir" ]; then
    cd "$dir"

    # Initialize git repo if not already initialized
    if [ ! -d ".git" ]; then
      git init -b main
    fi

    git add README.md
    git commit -m "docs: add project overview and live Vercel review link" || true

    # Create public GitHub repository via gh CLI if authenticated
    echo "Creating public repo '${repo_name}' on GitHub..."
    gh repo create "Apurv-15/${repo_name}" --public --source=. --remote=origin --push || {
      echo "⚠️ Repo creation returned an alert or existing repo; attempting git push..."
      git push -u origin main || true
    }

    cd - > /dev/null
  fi
done

echo "\n✨ All 6 showcase repositories processed successfully!"
