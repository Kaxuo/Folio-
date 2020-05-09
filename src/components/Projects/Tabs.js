import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Cards from './Cards'
import beach from '../../logo/beach.png'
import phone from '../../logo/phone.png'
import poke from '../../logo/poke.png'
import blog from '../../logo/blog.png'
import ToD from '../../logo/ToD.png'
import react from '../../logo/react.png'
import crud from '../../logo/crud.png'
import covid from '../../logo/covid.png'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        paddingTop: "50px",

    },
    tabs: {
        backgroundColor: "#162C52",
        color: "white",
        textAlign: "center",
        width: "50%",
        left: "25%",
        zIndex: "1",
        position: "absolute",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            left: "0"
        },
        [theme.breakpoints.up('sm')]: {
            width: "100%",
            left:0
        },
        [theme.breakpoints.up('lg')]: {
            width: "50%",
            left:"25%"
        },

    },
    cards: {
        textAlign: "center",
        paddingTop: "1%"
    },
    tab:{
        borderRight:"3px solid white"
    },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <div className={classes.tabz}>
                <AppBar className={classes.tabs} position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        className={classes.tabz}
                    >
                        <Tab className={classes.tab} label="Featured" {...a11yProps(0)} />
                        <Tab className={classes.tab} label="Front End" {...a11yProps(1)} />
                        <Tab className={classes.tab} label="Back End" {...a11yProps(2)} />
                        <Tab  label="Full Stack" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
            </div>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel className={classes.cards} value={value} index={0} dir={theme.direction}>
                    <Cards title="Beach Resort" languages="React/ContextAPI/React Router" description="A simple Beach Resort, allowing you to check and filter the rooms available, click on a specific room to get more information about it" picture={beach} live="https://beach-resort-project-contentful.netlify.app/" code="https://github.com/Kaxuo/BeachResort" />
                    <Cards title="Coronavirus Tracker" languages="React" description="App that tracks the numbers of cases/recovered/deaths of the coronavirus, sorted by. Data coming from https://covid19.mathdro.id/api" picture={covid} live="https://inspiring-perlman-64d5b8.netlify.app/" code="https://github.com/Kaxuo/VirusData" />
                    <Cards title="Mock-Up Phone Store" languages="React/ContextAPI/React Router" description="Phone store where you can add items to a cart, delete/add more items to that cart and view a description of the items by clicking on it" picture={phone} live="https://happy-shaw-ee0b3d.netlify.app/" code="https://github.com/Kaxuo/Phone-Store" />
                    <Cards title="Authentication App" languages="React/Redux/Django" description="Authentication(Token) App(With ToDo App inside), Register or Log in to add your own Tasks. Mainly used to learn how to display user's data" picture={crud} live="https://todocrud000000.herokuapp.com/" code="https://github.com/Kaxuo/todocrud" />
                </TabPanel>
                <TabPanel className={classes.cards} value={value} index={1} dir={theme.direction}>
                    <Cards title="Beach Resort" languages="React/ContextAPI/React Router" description="A simple Beach Resort, allowing you to check and filter the rooms available, click on a specific room to get more information about it" picture={beach} live="https://beach-resort-project-contentful.netlify.app/" code="https://github.com/Kaxuo/BeachResort" />
                    <Cards title="Mock-Up Phone Store" languages="React/ContextAPI/React Router" description="Phone store where you can add items to a cart, delete/add more items to that cart and view a description of the items by clicking on it" picture={phone} live="https://happy-shaw-ee0b3d.netlify.app/" code="https://github.com/Kaxuo/Phone-Store" />
                    <Cards title="Pokedex" languages="React/React Router" description="Display all the pokemons. Get more informations about the pokemon by clicking on them. Data coming from PokeApi.co " picture={poke} live="https://jolly-brahmagupta-de67b8.netlify.app/" code="https://github.com/Kaxuo/Poke" />
                    <Cards title="Coronavirus Tracker" languages="React" description="App that tracks the numbers of cases/recovered/deaths of the coronavirus. A chart is used to display the data" picture={covid} live="https://inspiring-perlman-64d5b8.netlify.app/" code="https://github.com/Kaxuo/VirusData" />
                </TabPanel>
                <TabPanel className={classes.cards} value={value} index={2} dir={theme.direction}>
                    <Cards title="Blog" languages="Python/Django" description="Blog with authentication, by logging in, you're able to create/delete/edit posts.(If you want to create a post, log in : ID => random , PW => 12345)" picture={blog} live="https://blog00000000000000000.herokuapp.com/" code="https://github.com/Kaxuo/blog" />
                    <Cards title="To Do App" languages="Python/Django" description="Simple ToDo app linked to the backend with oblivious features such as 'Add Task, Delete Task, Delete Completed Task' and so on " picture={ToD} live="https://todospeacefulwave-72.herokuapp.com/" code="https://github.com/Kaxuo/TodoApp" />
                </TabPanel>
                <TabPanel className={classes.cards} value={value} index={3} dir={theme.direction}>
                    <Cards title="Authentication App" languages="React/Redux/Django" description="Authentication(Token) App(With ToDo App inside), Register or Log in to add your own Tasks. Mainly used to learn how to display user's data" picture={crud} live="https://todocrud000000.herokuapp.com/" code="https://github.com/Kaxuo/todocrud" />
                    <Cards title="To Do App" languages="React/Django" description="Another To Do App but with React as the front end and Django as the backend. Just learning how to put those two frameworks together and make them work" picture={react} live="https://guarded-shore-23074.herokuapp.com/" code="https://github.com/Kaxuo/ReactDjangoTodo" />
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}