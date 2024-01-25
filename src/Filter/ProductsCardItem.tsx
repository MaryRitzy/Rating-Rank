import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from '@mui/material'

type Goods = {
    id: number
    article: number
    title: string
    language: string
    Keywords: string
    Language_type: string
    category: string
    level: string
    age: number
    media: string
    price: number
    image: string
    description: string
}

const ProductsCardItem = ({
    id,
    article,
    title,
    language,
    Keywords,
    Language_type,
    category,
    level,
    age,
    media,
    price,
    image,
    description,
}: Goods) => {
    return (
        <Card
            //variant="outlined"
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridTemplateRows: 'auto auto auto',
                gap: 2,
            }}
        >
            {/* first column */}
            <CardMedia
                component="img"
                alt="Product Image"
                sx={{
                    gridColumn: '1 / 2',
                    gridRow: '1 / 4',
                    objectFit: 'cover',
                    maxWidth: '200px',
                    maxHeight: '200px',
                    borderRadius: '10px',
                    margin: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
                image={image}
            />
            {/* second column */}
            <CardContent
                sx={{
                    gridColumn: '2 / 3',
                    gridRow: '1 / 4',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                }}
            >
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                    Тип мови: {Language_type}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                    Категорія: {category}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                    Рівень: {level}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                    Вік: {age}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                    Медіа:{' '}
                    <span>
                        <input type="checkbox" /> Відео{' '}
                        <input type="checkbox" /> Аудіо{' '}
                        <input type="checkbox" /> Фото
                    </span>
                </Typography>
            </CardContent>

            {/* third column */}
            <CardContent
                sx={{
                    gridColumn: '3 / 4',
                    gridRow: '1 / 4',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                }}
            >
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Button variant="contained" color="primary">
                        Buy now
                    </Button>
                    <Typography variant="body1" color="textPrimary">
                        Ціна: {price}
                    </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                    Артикул: {article}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Скільки разів купили: 47
                </Typography>
            </CardContent>

            {/* description below */}
            <CardContent
                sx={{
                    gridColumn: '1 / 4',
                    gridRow: '4 / 5',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                }}
            >
                <Typography variant="body1" color="textPrimary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProductsCardItem
