import { ReactElement, lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router";

const SearchPage = lazy(() => import("./pages/search-page"))
const ProfilePage = lazy(() => import("./pages/profile-page"))

const Router = (): ReactElement => (
    <Suspense fallback={null}>
        <Routes>
            <Route index element={<SearchPage />} />
            <Route path="/:id" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </Suspense>
)

export default Router