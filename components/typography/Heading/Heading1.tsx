import Heading from "@/components/typography/Heading/index";

const Heading1 = (props: any) => {
    return <div className={`text-4xl`}>
        <Heading {...props}>{props.children}</Heading>
    </div>
}

export default Heading1