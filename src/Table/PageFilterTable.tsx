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
} from '@mui/material'
import { ExpandLess, ExpandMore, Info as InfoIcon } from '@mui/icons-material'

type Props = {}
const PageFilterTable = (props: Props) => {
    const [openGeneral, setOpenGeneral] = useState(false)
    const [openGames, setOpenGames] = useState(false)

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
                                        <InfoIcon />
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

                            <ListItemButton>
                                <ListItemText primary="Розміщені" />
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemText primary="Очікують перегляду" />
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemText primary="Видалені" />
                            </ListItemButton>

                            <ListItemButton onClick={handleClickGames}>
                                <ListItemText primary="Ігри" />
                                {openGames ? <ExpandLess /> : <ExpandMore />}
                                <Tooltip title="Information about games">
                                    <IconButton>
                                        <InfoIcon />
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
