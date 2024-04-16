export async function withAsync<T>(fn: () => Promise<{ data: T }>) {
  try {
    if (typeof fn !== "function") {
      throw new Error("withAsync: fn must be a function");
    }

    const { data } = await fn();
    return {
      response: data,
      error: null,
    };
  } catch (error) {
    return {
      error,
      response: null,
    };
  }
}
