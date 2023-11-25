import Heading from "@/components/typography/Heading/index";

const Heading4 = (props: any) => {
    return <div className={`text-xl`}>
        <Heading {...props}>{props.children}</Heading>
    </div>
}

export default Heading4