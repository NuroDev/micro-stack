# Micro Stack

A simple & tiny stack for building web applications using [Astro](https://astro.build), [SQLite](https://www.sqlite.org/index.html) & [Litestream](https://litestream.io).

This project is a fork of `tiny-stack` by [@Sh4yy](https://github.com/Sh4yy/tiny-stack). To learn more I recommend reading his [blog post](https://logsnag.com/blog/the-tiny-stack) about it.

## Quick Start

1. Build the Docker image

```bash
docker build -t micro-stack .
```

2. Set environment variables

```bash
export REPLICA_URL=https://<bucket_id>.r2.cloudflarestorage.com
export LITESTREAM_ACCESS_KEY_ID=access_key_id
export LITESTREAM_SECRET_ACCESS_KEY=secret_access_key
```

3. Run the Docker image

```bash
docker run \
  -p 4321:4321 \
  -e REPLICA_URL \
  -e LITESTREAM_ACCESS_KEY_ID \
  -e LITESTREAM_SECRET_ACCESS_KEY \
  -v $(pwd)/data:/data \
  micro-stack
```

4. Head to http://localhost:4321
