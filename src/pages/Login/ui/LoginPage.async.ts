import { lazy } from "react";

export const LoginPageAsync = lazy(
  () =>
    new Promise<{ default: React.ComponentType<object> }>((resolve) => {
      // Simulate network delay for lazy loading login page
      setTimeout(() => {
        import("./LoginPage").then((module) => {
          resolve({ default: module.default });
        });
      }, 1500);
    })
);
