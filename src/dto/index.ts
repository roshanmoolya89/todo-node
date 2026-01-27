export type ApiResponseDto<T = any> = {
  message: string;
  data?: T;
  status: boolean;
};
export function ApiResponseDto<T>(
  message: string,
  data: T,
  status: boolean = true,
) {
  return {
    message,
    status,
    ...(data !== undefined && { data }),
  };
}
