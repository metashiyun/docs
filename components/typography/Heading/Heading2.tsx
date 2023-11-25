import Heading from "@/components/typography/Heading/index";

const Heading2 = (props: any) => {
    return <div className={`text-3xl`}>
        <Heading {...props}>{props.children}</Heading>
    </div>
}

export default Heading2