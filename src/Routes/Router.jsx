import AddService from "../components/AddService";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Faq from "../components/Home/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import MyReview from "../components/MyReview";
import Register from "../components/Register";
import ReviewUpdate from "../components/ReviewUpdate";
import ServiceDetail from "../components/Services/ServiceDetail";
import Services from "../components/Services/Services";
import Main from "../layout/Main";


const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/services',
                element: <Services></Services>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/servicedetail/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`https://tech-tutor-server-side.vercel.app/services/${params.id}`)
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/reviewupdate/:id',
                element: <ReviewUpdate></ReviewUpdate>,
                loader: ({ params }) => fetch(`https://tech-tutor-server-side.vercel.app/review/${params.id}`)
            }

        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])