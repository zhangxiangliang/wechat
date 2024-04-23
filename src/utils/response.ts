import { ZodIssue, ZodIssueCode } from "zod";

interface ZodErrorResponse {
  success: false;
  error: {
    name: string;
    issues: ZodIssue[];
  };
}

export const ZodErrorResponse = (
  issues: ZodIssue | ZodIssue[]
): ZodErrorResponse => {
  return {
    success: false,
    error: {
      name: "ZodError",
      issues: Array.isArray(issues) ? issues : [issues],
    },
  };
};

export const successResponse = ({
  message = "Success",
  items = [],
  item = null,
}) => {
  return {
    item,
    items,
    message,
    success: true,
  };
};

export const errorResponse = ({
  code = ZodIssueCode.custom,
  message = "",
  path = ["unknow"],
}): ZodErrorResponse => {
  return ZodErrorResponse({
    code,
    path,
    message,
  });
};
