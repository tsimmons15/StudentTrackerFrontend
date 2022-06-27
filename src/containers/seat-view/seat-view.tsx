import { Card, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../stores/exam-store';

const Seat = styled(Card)`
    max-width: 6rem;
    min-width: 3rem;
    text-align: center;
`;

const Seats = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    gap: 1em;
`;

const Section = styled.div`
`;

const Sections = styled(Stack)`
    margin: 1em;
`;

const Title = styled.div`
`;

export default function SeatView() {
    const seatList = useSelector((s: RootState) => s.seating);
    const sectionList = useSelector((s: RootState) => s.sections);
    return <>
        <ul>
            <Sections spacing={2}>
                {
                    sectionList.map(s =>
                        <>

                            <Section>
                                <Title>{s.Title}</Title>
                                <Seats>{
                                    seatList.filter(seat => seat.Section === s.Id)
                                        .map(seat =>
                                            <>
                                                <Seat>
                                                    <p>{seat.SeatId}</p>
                                                </Seat>
                                            </>
                                        )
                                }
                                </Seats>
                            </Section>
                        </>)
                }
            </Sections>
        </ul>
    </>;
}