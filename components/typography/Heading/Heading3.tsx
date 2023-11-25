import Heading from "@/components/typography/Heading/index";

const Heading3 = (props: any) => {
    return <div className={`text-2xl`}>
        <Heading {...props}>{props.children}</Heading>
    </div>
}

export default Heading3