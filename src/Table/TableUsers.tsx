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
import DataBaseUsers, { PropsData } from './DataBaseUsers'

type Order = 'asc' | 'desc'

const TableUsers: React.FC = () => {
    const [orderDirection, setOrderDirection] = useState<Order>('asc')
    const [valueToOrderBy, setValueToOrderBy] =
        useState<keyof PropsData>('number')

    const handleRequestSort = (property: keyof PropsData) => {
        const isAsc = valueToOrderBy === property && orderDirection === 'asc'
        setOrderDirection(isAsc ? 'desc' : 'asc')
        setValueToOrderBy(property)
    }
    // Ключові слова і вік неправильно сортує
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
            case 'level':
                valueA = a[valueToOrderBy][0].split(/-|\s/)[0]
                valueB = b[valueToOrderBy][0].split(/-|\s/)[0]
                break
            case 'Keywords':
                valueA =
                    a.Keywords && a.Keywords.length > 0
                        ? a.Keywords[0].split(' ')[0].trim()
                        : ''
                valueB =
                    b.Keywords && b.Keywords.length > 0
                        ? b.Keywords[0].split(' ')[0].trim()
                        : ''
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
            <Table aria-label="simple table">
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
                    {sortedData.map((user: PropsData) => (
                        <TableRow key={user.id}>
                            <TableCell component="th" scope="row">
                                {user.number}
                            </TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>
                                <img
                                    src={user.rating}
                                    alt="rating"
                                    style={{ width: 20, height: 20 }}
                                />
                            </TableCell>
                            <TableCell>{user.lots}</TableCell>
                            <TableCell>{user.age.join(', ')}</TableCell>
                            <TableCell>{user.level.join(', ')}</TableCell>
                            <TableCell>{user.Language_type}</TableCell>
                            <TableCell>{user.Keywords.join(', ')}</TableCell>
                            <TableCell>{user.wordsInQuestions}</TableCell>
                            <TableCell>{user.numberOfQuestions}</TableCell>
                            <TableCell>
                                <Checkbox
                                    checked={user.video}
                                    disabled={!user.video}
                                />
                            </TableCell>
                            <TableCell>
                                <Checkbox
                                    checked={user.audio}
                                    disabled={!user.audio}
                                />
                            </TableCell>
                            <TableCell>
                                <Checkbox
                                    checked={user.photo}
                                    disabled={!user.photo}
                                />
                            </TableCell>
                            <TableCell>{user.price}$</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableUsers
