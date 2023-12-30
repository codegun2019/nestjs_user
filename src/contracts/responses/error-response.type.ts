export type ErrorResponseType = {
  status: { code: number; message: string };
  error: { code: number; message: string; errors: string[] };
};
