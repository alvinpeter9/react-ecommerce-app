import { lazy } from "react";

export const HomePageAsync = lazy(
  () =>
    new Promise<{ default: React.ComponentType<object> }>((resolve) => {
      // Simulate network delay for lazy loading home page
      setTimeout(() => {
        import("./HomePage").then((module) => {
          resolve({ default: module.default });
        });
      }, 1500);
    })
);
