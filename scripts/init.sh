#!/usr/bin/env bash

set -e

test -f .env || cp .env.example .env

grep -q '^JWT_SECRET=' .env && \
sed -i "s/^JWT_SECRET=$/JWT_SECRET=$(openssl rand -hex 128)/" .env

grep -q '^DB_PASSWORD=' .env && \
sed -i "s/^DB_PASSWORD=$/DB_PASSWORD=$(openssl rand -hex 128)/" .env

