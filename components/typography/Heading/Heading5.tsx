import Heading from "@/components/typography/Heading/index";

const Heading5 = (props: any) => {
    return <div className={`text-lg`}>
        <Heading {...props}>{props.children}</Heading>
    </div>
}

export default Heading5