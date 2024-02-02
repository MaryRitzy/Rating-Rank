import { Grid, Typography, Select, MenuItem } from '@mui/material'
import TableUsers from './TableUsers'

type Props = {}
const PageFilterTable = (props: Props) => {
    return (
        <>
            <Grid
                container
                maxWidth="lg"
                spacing={2}
                sx={{
                    //maxWidth: 900,
                    display: 'grid',
                    gridTemplateColumns: '200px 1fr',
                    gap: 1,
                    margin: 'auto',
                }}
            >
                <Grid>
                    <Typography variant="subtitle2">
                        Загальний словник
                    </Typography>
                    <Typography variant="subtitle2">
                        Словник ігор
                        <Select sx={{ fontSize: '0.8rem' }}>
                            <MenuItem value="EN-UA" sx={{ fontSize: '0.8rem' }}>
                                EN-UA
                            </MenuItem>
                        </Select>
                    </Typography>
                    <Typography variant="subtitle2">Розміщені 21</Typography>
                    <Typography variant="subtitle2">
                        Очікують перегляду 3
                    </Typography>
                    <Typography variant="subtitle2">Видалені 5</Typography>
                    <Typography variant="subtitle2">
                        Ігри
                        <Select>
                            <MenuItem value="EN-UA">EN-UA</MenuItem>
                        </Select>
                    </Typography>
                </Grid>
                <Grid>
                    <TableUsers />
                </Grid>
            </Grid>
        </>
    )
}
export default PageFilterTable
