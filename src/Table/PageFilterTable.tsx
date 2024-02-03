import { useState } from 'react'
import TableUsers from './TableUsers'
import {
    Grid,
    List,
    ListItemButton,
    ListItemText,
    Collapse,
    Box,
    IconButton,
    Tooltip,
    Typography,
    SvgIcon,
} from '@mui/material'
import { ExpandLess, ExpandMore, Info as InfoIcon } from '@mui/icons-material'
import InfoRedIcon from './img_icons/icon_InfoRed.svg'

type Props = {}
const PageFilterTable = (props: Props) => {
    const [openGeneral, setOpenGeneral] = useState(false)
    const [openGames, setOpenGames] = useState(false)

    const placedCount = 21
    const reviewCount = 3
    const deletedCount = 5

    const handleClickGeneral = () => {
        setOpenGeneral(!openGeneral)
    }

    const handleClickGames = () => {
        setOpenGames(!openGames)
    }

    return (
        <>
            <Grid
                container
                maxWidth="lg"
                spacing={2}
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '200px 1fr',
                    gap: 1,
                    margin: 'auto',
                }}
            >
                <Grid>
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: 200,
                            bgcolor: 'background.paper',
                        }}
                    >
                        <List
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton onClick={handleClickGeneral}>
                                <ListItemText primary="Загальний словник" />
                                {openGeneral ? <ExpandLess /> : <ExpandMore />}
                                <Tooltip title="Information about general dictionary">
                                    <IconButton>
                                        <img
                                            src={InfoRedIcon}
                                            alt="info"
                                            style={{
                                                width: '20px',
                                                height: '20px',
                                            }}
                                        />
                                    </IconButton>
                                </Tooltip>
                            </ListItemButton>
                            <Collapse
                                in={openGeneral}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="General" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Medical" />
                                    </ListItemButton>
                                </List>
                            </Collapse>

                            <ListItemButton
                                sx={{ justifyContent: 'space-between' }}
                            >
                                <ListItemText primary="Розміщені" />
                                <Typography
                                    variant="subtitle1"
                                    component="span"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    {placedCount}
                                </Typography>
                            </ListItemButton>

                            <ListItemButton
                                sx={{ justifyContent: 'space-between' }}
                            >
                                <ListItemText primary="Очікують перегляду" />
                                <Typography
                                    variant="subtitle1"
                                    component="span"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    {reviewCount}
                                </Typography>
                            </ListItemButton>

                            <ListItemButton
                                sx={{ justifyContent: 'space-between' }}
                            >
                                <ListItemText primary="Видалені" />
                                <Typography
                                    variant="subtitle1"
                                    component="span"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    {deletedCount}
                                </Typography>
                            </ListItemButton>
                            <ListItemButton onClick={handleClickGames}>
                                <ListItemText primary="Ігри" />
                                {openGames ? <ExpandLess /> : <ExpandMore />}
                                <Tooltip title="Information about games">
                                    <IconButton>
                                        <img
                                            src={InfoRedIcon}
                                            alt="info"
                                            style={{
                                                width: '20px',
                                                height: '20px',
                                            }}
                                        />
                                    </IconButton>
                                </Tooltip>
                            </ListItemButton>
                            <Collapse
                                in={openGames}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="For Kids" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Teenager" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </Box>
                </Grid>
                <Grid>
                    <TableUsers />
                </Grid>
            </Grid>
        </>
    )
}
export default PageFilterTable
