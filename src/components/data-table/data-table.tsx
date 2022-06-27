import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';

import styled from "styled-components";
import Exam from '../../models/exam';

const TableTitle = styled(Toolbar)`

`;

interface TableProps {
    examList: Exam[]
}

const headers = [
    "Exam Title", "Professor", "Start Date", "Close Date", "Time Limit"
];

type Order = 'asc' | 'desc';

export default function DataTable(props: TableProps) {
    const [rowsPerPage, setRowsPerPage] = React.useState(25);
    const [page, setPage] = React.useState(0);

    const sortHandler = (event: React.MouseEvent<unknown>) => {

    }

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    let orderBy: string = headers[0];
    let order: Order = 'asc';

    return <>
        <TableTitle>
            <Typography
                sx={{ flex: '1 1 100%' }}
                color="inherit"
                variant="h2"
                component="div"
            >
                Exams
            </Typography>
        </TableTitle>
        <TableContainer>
            <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={'medium'}
            >
                <TableHead>
                    <TableRow>
                        {headers.map(h => (
                            <TableCell
                                key={h}
                                align={'right'}
                                padding={'normal'}
                                sortDirection={orderBy === h ? order : false}
                            >
                                <TableSortLabel
                                    active={orderBy === h}
                                    direction={orderBy === h ? order : 'asc'}
                                    onClick={sortHandler}
                                >
                                    {h}
                                    {orderBy === h ? (
                                        <Box component="span" sx={visuallyHidden}>
                                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                        </Box>
                                    ) : null}
                                </TableSortLabel>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.examList.slice()
                        .map((row, index) =>
                            <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.id}
                            >
                                <TableCell
                                    component="th"
                                    scope="row"
                                    padding="none"
                                >
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">{row.professor}</TableCell>
                                <TableCell align="right">{row.dateOpen}</TableCell>
                                <TableCell align="right">{row.dateClose}</TableCell>
                                <TableCell align="right">{row.timeLimit}</TableCell>
                            </TableRow>
                        )}
                    {/*emptyRows > 0 && (
                        <TableRow
                            style={{
                                height: (dense ? 33 : 53) * emptyRows,
                            }}
                        >
                            <TableCell colSpan={6} />
                        </TableRow>
                        )*/}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={props.examList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </>;
}