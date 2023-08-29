
import Sidebar from "../Sidebar/Sidebar";
import NavPage from "../NavPage/NavPage";

const MainPage = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-10">
                <div className="bg-purple-dark bg-gradient-to-r from-purple-black to-wine md:col-span-4">
                    <Sidebar />
                </div>
                <div className="md:h-screen md:col-span-6">
                    <NavPage />
                </div>
            </div>
        </>
    );
};

export default MainPage;

