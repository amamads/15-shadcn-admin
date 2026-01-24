export const ROUTES = {
  auth: {
    signUp: "/sign-up",
    signIn: "/sign-in",
    signIn2: "/sign-in2",
    forgotPassword: "/forgot-password",
    otp: "/otp",
  },
  dashboard: { root: "/" },
  tasks: { root: "/tasks" },
  apps: { root: "/apps" },
  chats: { root: "/chats" },
  users: { root: "/users" },
  errors: {
    unauthorized: "/unauthorized",
    forbidden: "/forbidden",
    notFound: "/not-found",
    internalServerError: "/internal-server-error",
    maintenanceError: "/maintenance-error ",
  },
  settings: {
    root: "/settings",
    profile: "/settings/profile",
    account: "/settings/account",
    appearance: "/settings/appearance",
    notifications: "/settings/notifications",
    display: "/settings/display",
  },
  generals: {
    help: "/help",
  },
};