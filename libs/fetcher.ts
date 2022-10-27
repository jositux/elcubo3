export const fetcher = (url) => fetch(`${process.env.API_URL}${url}`).then((r) => r.json());

export const rawFetch = (url) => fetch(`${process.env.API_URL}${url}`);

export default fetcher;
