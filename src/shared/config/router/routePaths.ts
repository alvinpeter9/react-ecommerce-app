export const AppRoutes = {
  HOME: "home",
  LOGIN: "login",
  REGISTER: "register",
  NOT_FOUND: "not_found",
} as const;

export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routePaths: Record<AppRoutesType, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.REGISTER]: "/register",

  //should come last
  [AppRoutes.NOT_FOUND]: "*",
};
