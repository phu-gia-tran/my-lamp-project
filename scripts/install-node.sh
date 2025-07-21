#!/bin/bash

echo "Installing Node.js 16 and build tools..."
# Thêm kho lưu trữ của NodeSource để có phiên bản Node.js mới
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
# Cài đặt Node.js và build-essential (cần cho một số package)
sudo apt-get install -y nodejs build-essential
echo "Node.js installation complete."

# Kiểm tra phiên bản
node -v
npm -v