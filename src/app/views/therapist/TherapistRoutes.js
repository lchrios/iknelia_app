import  React  from "react";
import { authRoles } from '../../auth/authRoles'

const EditBlogForm = React.lazy(() => import("./components/blogs/EditBlogForm"))

const TherapistHome = React.lazy(() => import('./TherapistHome'))

const TherapistBlogs = React.lazy(() => import('./TherapistBlogs'))

const BlogEntryForm = React.lazy(() => import('./components/blogs/BlogEntryForm'))

const TherapistCalendar = React.lazy(() => import('./TherapistCalendar'))

const PatientsList = React.lazy(() => import('./PatientList'))

const CompletedSessions = React.lazy(() => import('./TherapistsSessionsHistory'))

const Comments = React.lazy(() => import('./CommentsApp'))

const therapistRoutes = [
  {
      path: "/:tid/dashboard",
      component: TherapistHome,
      exact: false,
      auth: authRoles.therapist,
  },
  {
      path: "/:tid/appointments",
      component: TherapistCalendar,
      exact: false,
      auth: authRoles.therapist,
  },
  {
      path: "/:tid/myblogs",
      component: TherapistBlogs,
      exact: false,
      auth: authRoles.therapist,
  },
  {
      path: "/:tid/newblog",
      component: BlogEntryForm,
      exact: false,
      auth: authRoles.therapist,
  },
  {
      path: "/:tid/patients",
      component: PatientsList,
      exact: false,
      auth: authRoles.therapist,
  },
  {
      path: "/:tid/editblog/",
      component: EditBlogForm,
      exact: false,
      auth: authRoles.therapist,
  },
  {
      path:"/:tid/completedApp",
      component: CompletedSessions,
      exact: false,
      auth: authRoles.therapist,
  },
  {
      path: "/:tid/comments",
      component: Comments,
      exact: false,
      auth: authRoles.therapist,
  },
];

export default therapistRoutes;
