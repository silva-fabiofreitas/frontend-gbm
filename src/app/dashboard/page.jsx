import PageWrapper from "@/components/template/Wrapper";
import Sidebar from "@/components/sidebar/Sidebar";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Dashboard() {
    return (
        <PageWrapper>
            <div className={`flex m-2 gap-6`}>                
                    <Sidebar className={'flex w-60 rounded-md shadow-sm bg-gray-600 h-[calc(100vh_-_200px)]'}/>  
                
                <div className="">Dashboard</div>
            </div>
        </PageWrapper>
    )

} 