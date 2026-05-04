#!/usr/bin/env bash
# Capture 1280×800 screenshots of every before/ + after/ index.html
# in this directory tree, using headless Chrome.
#
# Usage:  bash _capture.sh

set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
HERE="$(cd "$(dirname "$0")" && pwd)"
OUT="$HERE/_thumbs"
mkdir -p "$OUT"

WIDTH=1280
HEIGHT=800

for dir in "$HERE"/0[1-5]-*/; do
  brief="$(basename "$dir")"
  for variant in before after; do
    src="$dir$variant/index.html"
    [ -s "$src" ] || { echo "skip $brief/$variant (missing or empty)"; continue; }
    dst="$OUT/${brief}-${variant}.png"
    echo "→ $brief/$variant → $dst"
    "$CHROME" \
      --headless=new \
      --disable-gpu \
      --hide-scrollbars \
      --window-size="$WIDTH,$HEIGHT" \
      --screenshot="$dst" \
      "file://$src" 2>/dev/null
  done
done

echo
echo "Done. Thumbnails in $OUT"
ls -1 "$OUT"
