import Subtitle from "@/components/typography/Title/Subtitle";
import React from "react";

interface TitlesProps {
    subtitle?: string,
    children: React.ReactNode
}

const Title = ({subtitle, children}: TitlesProps) => {
    return <div className={`mb-4`}>
        <div className={`text-4xl font-hei mt-0.5 mb-0.5 font-bold`}>{children}</div>
        {
            subtitle ?
                <Subtitle>{subtitle}</Subtitle>
                :
                <></>
        }
    </div>
}

export default Title