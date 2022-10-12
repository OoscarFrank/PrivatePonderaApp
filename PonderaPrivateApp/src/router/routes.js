const routes = [
  {
    path: "/login",
    name: "Loginr",
    component: () => import("pages/Login.vue"),
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter: (to, from, next) => {
      console.log("routes.js beforeEnter", localStorage.tokenpro);
      if (
        !localStorage.tokenpro ||
        localStorage.tokenpro === "" ||
        localStorage.tokenpro == null
      ) {
        console.log("go to login");
        // next(false);
        next({
          name: "Loginr",
        });
      } else {
        next();
      }
    },
    children: [
      { path: "", component: () => import("pages/Contact/ContactPage.vue") },
      {
        path: "Contact",
        component: () => import("pages/Contact/ContactPage.vue"),
      },
      {
        path: "ContactAbout",
        component: () => import("pages/Contact/ContactAboutPage.vue"),
      },
      {
        path: "EditInfosClient",
        component: () => import("pages/Contact/EditInfosClientPage.vue"),
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
