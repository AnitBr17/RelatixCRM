import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import leadsReducer from "../features/leads/leadsSlice";
import actReducer from "../features/activities/activitiesSlice";
import notifReducer from "../features/notifications/notificationsSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        leads: leadsReducer,
        activities: actReducer,
        notifications: notifReducer,
    },
});
