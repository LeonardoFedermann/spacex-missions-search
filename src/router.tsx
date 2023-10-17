import { ReactElement, lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router";

const SearchPage = lazy(() => import("./pages/search-page"))
const ProfilePage = lazy(() => import("./pages/profile-page"))

const Router = (): ReactElement => (
    <Routes>
        <Route index element={(
            <Suspense fallback={null}>
                <SearchPage />
            </Suspense>
        )} />
        <Route path="/:id" element={(
            <Suspense fallback={null}>
                <ProfilePage />
            </Suspense>
        )} />
        <Route path="*" element={(
            <Suspense fallback={null}>
                <Navigate to="/" replace />
            </Suspense>
        )} />
    </Routes>
)

export default Router