import { ROUTES } from "../constants/routes";

export const NavigationData = [
    {label:"Dashboard", path:ROUTES.DASHBOARD, role:["Admin","Manager","Agent"]},
    {label:"Leads", path:ROUTES.LEADS, role:["Admin","Manager","Agent"]},
    {label:"Contacts", path:ROUTES.CONTACTS, role:["Admin","Manager","Agent"]},
    {label:"Reports", path:ROUTES.REPORTS, role:["Admin","Manager"]},
    {label:"Settings", path:ROUTES.SETTINGS, role:["Admin"]}
]