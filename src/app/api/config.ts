export const API_CONFIG = {
  VERSION: "v1",
  BASE_URL: process.env.NEXT_PUBLIC_API_URL,
  TIMEOUT: 5000,
  MAX_RETRIES: 3,
  CACHE: {
    DEFAULT_TTL: 5 * 60 * 1000, // 5 phút
    MAX_SIZE: 1000,
  },
  RATE_LIMIT: {
    WINDOW_MS: 15 * 60 * 1000, // 15 phút
    MAX_REQUESTS: 100,
  },
  ERROR_HANDLING: {
    LOG_ERRORS: process.env.NODE_ENV === "development",
    RETURN_ERROR_DETAILS: process.env.NODE_ENV === "development",
  },
} as const;

export const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
