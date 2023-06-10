import PageWrapper from "@/components/template/Wrapper";
export default function Dashboard(props) {
    const style = props.style
    return (
        <PageWrapper>
            <div className={`footer flex items-center justify-center ${style}`}>
                {props.children}
                Dashboard
            </div>
        </PageWrapper>
    )

} 