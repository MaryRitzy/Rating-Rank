import React, { useState } from 'react'
import {
    Box,
    Grid,
    Typography,
    MenuItem,
    Select,
    Checkbox,
    FormControlLabel,
    Slider,
    InputAdornment,
    IconButton,
    TextField,
} from '@mui/material'
import GoodsArray, { Goods } from './GoodsArray'
import ProductsCardItem from './ProductsCardItem'
import SearchIcon from '@mui/icons-material/Search'

const ProductsCardsList = () => {
    const [filters, setFilters] = useState({
        keywordSearch: '',
        language: 'EN-UA',
        languageTypes: ['Business', 'For Kids', 'Special Purpose'],
        categories: ['Загальний словник', 'Словник ігор', 'Ігри'],
        levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
        media: ['Відео', 'Аудіо', 'Фото'],
        age: [1, 14],
    })

    const filteredGoods = GoodsArray.filter((goods: Goods) => {
        const keywordSearch = filters.keywordSearch
            ? goods.Keywords.toLowerCase().includes(
                  filters.keywordSearch.toLowerCase()
              )
            : true

        return (
            keywordSearch ||
            filters.categories.includes(goods.category) ||
            filters.languageTypes.includes(goods.Language_type) ||
            filters.levels.some((level) => goods.level.includes(level)) ||
            filters.media.includes(goods.media) ||
            (goods.age >= filters.age[0] && goods.age <= filters.age[1])
        )
    })

    filteredGoods.sort((a, b) => a.title.localeCompare(b.title))

    const handleFilterChange = (filterType: string, value: any) => {
        setFilters({
            ...filters,
            [filterType]: value,
        })
    }

    return (
        <>
            <Grid
                container
                maxWidth="lg"
                spacing={4}
                sx={{
                    margin: 'auto',
                    width: 'fit-content',
                }}
            >
                <Grid item xs={3}>
                    <Typography variant="h6">Фільтри</Typography>
                    <Box>
                        <Typography variant="h6">Мова:</Typography>
                        <Select
                            value={filters.language}
                            onChange={(e) =>
                                handleFilterChange('language', e.target.value)
                            }
                        >
                            <MenuItem value="EN-UA">EN-UA</MenuItem>
                        </Select>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6" gutterBottom>
                            Типи мови:
                        </Typography>
                        {['Business', 'For Kids', 'Special Purpose'].map(
                            (type) => (
                                <FormControlLabel
                                    key={type}
                                    control={
                                        <Checkbox
                                            checked={filters.languageTypes.includes(
                                                type
                                            )}
                                            onChange={() =>
                                                handleFilterChange(
                                                    'languageTypes',
                                                    filters.languageTypes.includes(
                                                        type
                                                    )
                                                        ? filters.languageTypes.filter(
                                                              (t) => t !== type
                                                          )
                                                        : [
                                                              ...filters.languageTypes,
                                                              type,
                                                          ]
                                                )
                                            }
                                        />
                                    }
                                    label={
                                        <Typography variant="subtitle2">
                                            {type}
                                        </Typography>
                                    }
                                />
                            )
                        )}
                    </Box>
                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="h6">Категорії:</Typography>
                        {['Загальний словник', 'Словник ігор', 'Ігри'].map(
                            (type) => (
                                <FormControlLabel
                                    key={type}
                                    control={
                                        <Checkbox
                                            checked={filters.categories.includes(
                                                type
                                            )}
                                            onChange={() =>
                                                handleFilterChange(
                                                    'categories',
                                                    filters.categories.includes(
                                                        type
                                                    )
                                                        ? filters.categories.filter(
                                                              (t) => t !== type
                                                          )
                                                        : [
                                                              ...filters.categories,
                                                              type,
                                                          ]
                                                )
                                            }
                                        />
                                    }
                                    label={
                                        <Typography variant="subtitle2">
                                            {type}
                                        </Typography>
                                    }
                                />
                            )
                        )}
                    </Box>
                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="h6">Рівень:</Typography>
                        {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((type) => (
                            <FormControlLabel
                                key={type}
                                control={
                                    <Checkbox
                                        checked={filters.levels.includes(type)}
                                        onChange={() =>
                                            handleFilterChange(
                                                'levels',
                                                filters.levels.includes(type)
                                                    ? filters.levels.filter(
                                                          (t) => t !== type
                                                      )
                                                    : [...filters.levels, type]
                                            )
                                        }
                                    />
                                }
                                label={
                                    <Typography variant="subtitle2">
                                        {type}
                                    </Typography>
                                }
                            />
                        ))}
                    </Box>
                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="h6">Медія:</Typography>
                        {['Відео', 'Аудіо', 'Фото'].map((type) => (
                            <FormControlLabel
                                key={type}
                                control={
                                    <Checkbox
                                        checked={filters.media.includes(type)}
                                        onChange={() =>
                                            handleFilterChange(
                                                'media',
                                                filters.media.includes(type)
                                                    ? filters.media.filter(
                                                          (t) => t !== type
                                                      )
                                                    : [...filters.media, type]
                                            )
                                        }
                                    />
                                }
                                label={
                                    <Typography variant="subtitle2">
                                        {type}
                                    </Typography>
                                }
                            />
                        ))}
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">Вік:</Typography>
                        <Box display="flex" alignItems="center">
                            <Slider
                                getAriaLabel={() => 'Minimum distance'}
                                value={filters.age}
                                onChange={(_, newValue) =>
                                    handleFilterChange('age', newValue)
                                }
                                valueLabelDisplay="auto"
                                valueLabelFormat={(value) => `${value} років`}
                                min={1}
                                max={14}
                                disableSwap
                                sx={{ width: 150 }}
                            />
                            <Typography
                                variant="body1"
                                ml={2}
                                border={1}
                                p={1}
                                borderRadius={1}
                                borderColor="primary.main"
                            >{`${filters.age[0]} - ${filters.age[1]}`}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <Box display="flex" marginBottom={2}>
                        <Typography variant="subtitle1" marginRight={1}>
                            Пошук за ключовим словaм:
                        </Typography>
                        <TextField
                            type="text"
                            value={filters.keywordSearch}
                            onChange={(e) =>
                                handleFilterChange(
                                    'keywordSearch',
                                    e.target.value
                                )
                            }
                            placeholder="Ключові слова..."
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => {}}>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            size="small"
                            sx={{
                                width: '300px',
                            }}
                        />
                    </Box>
                    <Typography variant="h4" align="center" component="h2">
                        Карточки товарів
                    </Typography>
                    <Grid container spacing={4}>
                        {filteredGoods.map((goods) => (
                            <Grid item xs={12} sm={12} md={12} key={goods.id}>
                                <ProductsCardItem {...goods} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsCardsList
