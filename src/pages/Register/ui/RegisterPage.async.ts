import { lazy } from "react";

export const RegisterPageAsync = lazy(
  () =>
    new Promise<{ default: React.ComponentType<object> }>((resolve) => {
      // Simulate network delay for lazy loading Register page
      setTimeout(() => {
        import("./RegisterPage").then((module) => {
          resolve({ default: module.default });
        });
      }, 1500);
    })
);
