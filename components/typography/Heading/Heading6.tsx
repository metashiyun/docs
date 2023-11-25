import Heading from "@/components/typography/Heading/index";

const Heading6 = (props: any) => {
    return <div className={`text-base`}>
        <Heading {...props}>{props.children}</Heading>
    </div>
}

export default Heading6