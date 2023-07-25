import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "MENUITEMS.MAIN.TEXT",
    moduleName: "",
    iconType: "",
    icon: "",
    class: "",
    groupTitle: true,
    badge: "",
    badgeClass: "",
    role: ["All"],
    submenu: [],
  },

  // Admin Modules
  {
    path: "",
    title: "MENUITEMS.HOME.TEXT",
    moduleName: "dashboard",
    iconType: "material-icons-two-tone",
    icon: "home",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/dashboard/main",
        title: "MENUITEMS.HOME.LIST.DASHBOARD1",
        moduleName: "dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      // {
      //   path: "/admin/dashboard/dashboard2",
      //   title: "MENUITEMS.HOME.LIST.DASHBOARD2",
      //   moduleName: "dashboard",
      //   iconType: "",
      //   icon: "",
      //   class: "ml-menu",
      //   groupTitle: false,
      //   badge: "",
      //   badgeClass: "",
      //   role: [""],
      //   submenu: [],
      // },
      // {
      //   path: "/admin/dashboard/doctor-dashboard",
      //   title: "MENUITEMS.HOME.LIST.DOCTOR-DASHBOARD",
      //   moduleName: "doctor-dashboard",
      //   iconType: "",
      //   icon: "",
      //   class: "ml-menu",
      //   groupTitle: false,
      //   badge: "",
      //   badgeClass: "",
      //   role: [""],
      //   submenu: [],
      // },
      // {
      //   path: "/admin/dashboard/patient-dashboard",
      //   title: "MENUITEMS.HOME.LIST.PATIENT-DASHBOARD",
      //   moduleName: "patient-dashboard",
      //   iconType: "",
      //   icon: "",
      //   class: "ml-menu",
      //   groupTitle: false,
      //   badge: "",
      //   badgeClass: "",
      //   role: [""],
      //   submenu: [],
      // },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.APPOINTMENTS.TEXT",
    moduleName: "appointment",
    iconType: "material-icons-two-tone",
    icon: "assignment",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/appointment/viewAppointment",
        title: "MENUITEMS.APPOINTMENTS.LIST.VIEW-APPOINTMENT",
        moduleName: "appointment",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/appointment/bookAppointment",
        title: "MENUITEMS.APPOINTMENTS.LIST.BOOK-APPOINTMENT",
        moduleName: "appointment",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/appointment/edit-ppointment",
        title: "MENUITEMS.APPOINTMENTS.LIST.EDIT-APPOINTMENT",
        moduleName: "appointment",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.DOCTORS.TEXT",
    moduleName: "doctors",
    iconType: "material-icons-two-tone",
    icon: "supervised_user_circle",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/doctors/allDoctors",
        title: "MENUITEMS.DOCTORS.LIST.ALL-DOCTOR",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/doctors/add-doctor",
        title: "MENUITEMS.DOCTORS.LIST.ADD-DOCTOR",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/doctors/edit-doctor",
        title: "MENUITEMS.DOCTORS.LIST.EDIT-DOCTOR",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/doctors/doctor-profile",
        title: "MENUITEMS.DOCTORS.LIST.PROFILE",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.STAFF.TEXT",
    moduleName: "staff",
    iconType: "material-icons-two-tone",
    icon: "people_alt",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/staff/all-staff",
        title: "MENUITEMS.STAFF.LIST.ALL-STAFF",
        moduleName: "staff",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/staff/add-staff",
        title: "MENUITEMS.STAFF.LIST.ADD-STAFF",
        moduleName: "staff",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/staff/edit-staff",
        title: "MENUITEMS.STAFF.LIST.EDIT-STAFF",
        moduleName: "staff",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/staff/staff-profile",
        title: "MENUITEMS.STAFF.LIST.PROFILE",
        moduleName: "staff",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.PATIENTS.TEXT",
    moduleName: "patients",
    iconType: "material-icons-two-tone",
    icon: "face",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/patients/all-patients",
        title: "MENUITEMS.PATIENTS.LIST.ALL-PATIENT",
        moduleName: "patients",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/patients/add-patient",
        title: "MENUITEMS.PATIENTS.LIST.ADD-PATIENT",
        moduleName: "patients",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/patients/edit-patient",
        title: "MENUITEMS.PATIENTS.LIST.EDIT-PATIENT",
        moduleName: "patients",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/patients/patient-profile",
        title: "MENUITEMS.PATIENTS.LIST.PROFILE",
        moduleName: "patients",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
];
