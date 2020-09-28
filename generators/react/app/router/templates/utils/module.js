export const requireAll = (ctx) =>
  ctx
    .keys()
    .map(ctx)
    .map((m) => m.default)
    .filter(Boolean);
