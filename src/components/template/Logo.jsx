import Image from "next/image"

export default function Logo(props){
    const style = props?.style
    return (
        <aside className={`logo ${style}`}>
            <Image
                src={'/assets/images/logoB.png'}
                width={200}
                height={200}
                alt='GBM'
            ></Image>
        </aside>
    )

} 