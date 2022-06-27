import { useSelector } from 'react-redux';
import DataTable from '../../components/data-table/data-table';
import { RootState } from '../../stores/exam-store';

export default function DataView() {
    const examList = useSelector((e: RootState) => e.exams);

    console.log(examList);

    return <>
        <DataTable examList={examList} />
    </>;
}