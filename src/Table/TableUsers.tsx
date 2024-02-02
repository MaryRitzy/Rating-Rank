import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
    TableSortLabel,
} from '@mui/material'
import TablePagination from '@mui/material/TablePagination'
import DataBaseUsers, { PropsData } from './DataBaseUsers'

type Order = 'asc' | 'desc'

const TableUsers: React.FC = () => {
    const [orderDirection, setOrderDirection] = useState<Order>('asc')
    const [valueToOrderBy, setValueToOrderBy] =
        useState<keyof PropsData>('number')
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const handleRequestSort = (property: keyof PropsData) => {
        const isAsc = valueToOrderBy === property && orderDirection === 'asc'
        setOrderDirection(isAsc ? 'desc' : 'asc')
        setValueToOrderBy(property)
    }

    const sortData = (a: PropsData, b: PropsData): number => {
        let valueA: string | number = ''
        let valueB: string | number = ''

        switch (valueToOrderBy) {
            case 'number':
            case 'lots':
            case 'wordsInQuestions':
            case 'numberOfQuestions':
            case 'price':
                valueA = a[valueToOrderBy] as number
                valueB = b[valueToOrderBy] as number
                break
            case 'name':
            case 'Language_type':
                valueA = a[valueToOrderBy] as string
                valueB = b[valueToOrderBy] as string
                break
            case 'age':
                valueA = parseInt(a[valueToOrderBy][0], 10) as number
                valueB = parseInt(b[valueToOrderBy][0], 10) as number
                break
            case 'level':
                valueA = a[valueToOrderBy][0].split(/-|\s/)[0]
                valueB = b[valueToOrderBy][0].split(/-|\s/)[0]
                break
            case 'Keywords':
                valueA = a.Keywords[0]
                valueB = b.Keywords[0]

                break
            case 'video':
            case 'audio':
            case 'photo':
                valueA = a[valueToOrderBy] ? 1 : 0
                valueB = b[valueToOrderBy] ? 1 : 0
                break
            default:
                valueA = ''
                valueB = ''
        }

        if (typeof valueA === 'string' && typeof valueB === 'string') {
            return orderDirection === 'asc'
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA)
        } else if (typeof valueA === 'number' && typeof valueB === 'number') {
            return orderDirection === 'asc' ? valueA - valueB : valueB - valueA
        }

        return 0
    }

    const sortedData = [...DataBaseUsers].sort(sortData)

    const columns: {
        id: keyof PropsData
        label: string
        isSortable: boolean
    }[] = [
        { id: 'number', label: '№', isSortable: true },
        { id: 'name', label: "Ім'я", isSortable: true },
        { id: 'rating', label: 'Звання', isSortable: false },
        { id: 'lots', label: 'К-сть лотів', isSortable: true },
        { id: 'age', label: 'Вік', isSortable: true },
        { id: 'level', label: 'Рівень', isSortable: true },
        { id: 'Language_type', label: 'Тип мови', isSortable: true },
        { id: 'Keywords', label: 'Ключові слова', isSortable: true },
        {
            id: 'wordsInQuestions',
            label: 'К-сть слів в питань',
            isSortable: true,
        },
        { id: 'numberOfQuestions', label: 'К-сть питань', isSortable: true },
        { id: 'video', label: 'Відео', isSortable: true },
        { id: 'audio', label: 'Аудіо', isSortable: true },
        { id: 'photo', label: 'Фото', isSortable: true },
        { id: 'price', label: 'Вартість', isSortable: true },
    ]

    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
            >
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                sortDirection={
                                    valueToOrderBy === column.id
                                        ? orderDirection
                                        : false
                                }
                                sx={{
                                    padding: '2px',
                                    fontSize: '0.8rem',
                                    fontWeight: '700',
                                    textAlign: 'center',
                                }}
                            >
                                {column.isSortable ? (
                                    <TableSortLabel
                                        active={valueToOrderBy === column.id}
                                        direction={
                                            valueToOrderBy === column.id
                                                ? orderDirection
                                                : 'asc'
                                        }
                                        onClick={() =>
                                            handleRequestSort(column.id)
                                        }
                                    >
                                        {column.label}
                                    </TableSortLabel>
                                ) : (
                                    column.label
                                )}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedData
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((user: PropsData) => (
                            <TableRow key={user.id}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{
                                        padding: '2px',
                                        fontSize: '0.6rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    {user.number}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        padding: '2px',
                                        fontSize: '0.7rem',
                                        fontWeight: '600',
                                        textAlign: 'center',
                                    }}
                                >
                                    {user.name}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        padding: '2px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <img
                                        src={user.rating}
                                        alt="rating"
                                        style={{ width: 20, height: 20 }}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        padding: '2px',
                                        fontSize: '0.6rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    {user.lots}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        padding: '2px',
                                        fontSize: '0.6rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    {user.age.join(', ')}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        padding: '2px',
                                        fontSize: '0.6rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    {user.level.join(', ')}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        padding: '2px',
                                        fontSize: '0.6rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    {user.Language_type}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        padding: '2px',
                                        fontSize: '0.6rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    {user.Keywords.join(', ')}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        padding: '2px',
                                        fontSize: '0.6rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    {user.wordsInQuestions}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        padding: '2px',
                                        fontSize: '0.6rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    {user.numberOfQuestions}
                                </TableCell>
                                <TableCell sx={{ padding: '2px' }}>
                                    <Checkbox
                                        checked={user.video}
                                        disabled={!user.video}
                                    />
                                </TableCell>
                                <TableCell sx={{ padding: '2px' }}>
                                    <Checkbox
                                        checked={user.audio}
                                        disabled={!user.audio}
                                    />
                                </TableCell>
                                <TableCell sx={{ padding: '2px' }}>
                                    <Checkbox
                                        checked={user.photo}
                                        disabled={!user.photo}
                                    />
                                </TableCell>
                                <TableCell
                                    sx={{
                                        padding: '2px',
                                        fontSize: '0.6rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    {user.price}$
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 100]}
                component="div"
                count={sortedData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            ></TablePagination>
        </TableContainer>
    )
}

export default TableUsers
