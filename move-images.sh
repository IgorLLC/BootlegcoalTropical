#!/bin/bash

# Base directory
BASE_DIR="/Users/luisviera/CascadeProjects/bootlegcoal-tropical-fork/public/images/blog/articles"

# Create directories
mkdir -p "$BASE_DIR"/{out-of-state,headlines,coal-navy,prohibition,thank-you,rebellion,portraits,homestead,book-excerpt,equalization}

# Move files to their respective directories
mv "$BASE_DIR/komptech-930x576.jpg" "$BASE_DIR/out-of-state/mining-machinery.jpg"
mv "$BASE_DIR/headline-feat-930x620.png" "$BASE_DIR/headlines/newspaper-clips.png"
mv "$BASE_DIR/the-billy-marks.webp" "$BASE_DIR/coal-navy/bridge-flag.webp"
mv "$BASE_DIR/kaiers-bottled-beer-toc-sign.jpeg" "$BASE_DIR/prohibition/kaiers-sign.jpeg"
mv "$BASE_DIR/Screen-Shot-2022-08-27-at-12.44.45-PM-772x620.png" "$BASE_DIR/thank-you/collage.png"
mv "$BASE_DIR/explosion-gce33994d6_1920-930x620.jpg" "$BASE_DIR/rebellion/explosion.jpg"
mv "$BASE_DIR/1626385864-930x620.png" "$BASE_DIR/book-excerpt/cover.png"
mv "$BASE_DIR/Bootleg-Coal-Mining-Pa_0054-930x620.jpg" "$BASE_DIR/portraits/miner.jpg"
mv "$BASE_DIR/Screen-Shot-2022-06-25-at-8.27.24-AM-768x433.png" "$BASE_DIR/homestead/qa-video.png"
mv "$BASE_DIR/image-930x620.png" "$BASE_DIR/equalization/march.png"
