import { InfoCardContainer, InfoDivider, InfoText, InfoTitle } from './InformationCardStyles';

export default function InformationCard({ icons, result, title }) {
    return (
        <>
            {icons}
            < InfoCardContainer >
                <InfoTitle>
                    {title}
                </InfoTitle>
                <InfoText>
                    {result}
                </InfoText>
                <InfoDivider />
            </InfoCardContainer >
        </>
    );
}