const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "Contact",
        component: () => import("pages/Contact/ContactPage.vue"),
      },
      {
        path: "ContactAbout",
        component: () => import("pages/Contact/ContactAboutPage.vue"),
      },
      {
        path: "RecentCallsPage",
        component: () => import("pages/RecentCalls/RecentCallsPage.vue"),
      },
      {
        path: "CalendarPage",
        component: () => import("pages/Calendar/CalendarPage.vue"),
      },
      {
        path: "RemindersPage",
        component: () => import("pages/WalletReminders/RemindersPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
