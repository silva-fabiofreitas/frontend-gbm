import Image from "next/image"

export default function Logo(props){
    const style = props?.style
    return (
        <aside className={`logo ${style}`}>
            <Image
                src={'/assets/images/logo.jfif'}
                width={80}
                height={80}
                alt='GBM'
            ></Image>
        </aside>
    )

} 