import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import Tooltip from '@material-ui/core/Tooltip';
import { blue, grey } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import WebDev from './WebDev/WebDev';
import IdentityDesign from './IdentityDesign/IdentityDesign';
import Editorial from '../../images/Editorial.png';

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: grey[900],
  },
  tooltip: {
    backgroundColor: grey[900],
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const MenuItems = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.itemBar}>
        <CardHeader
          title={
            loading ? (
              <Skeleton width='100%' />
            ) : (
              <Box className={classes.mainContainer}>
                <Box position='static' color='default'>
                  <AntTabs
                    value={value}
                    onChange={handleChange}
                    aria-label='simple tabs example'
                  >
                    <AntTab label='Web Development' {...a11yProps(0)} />
                    <AntTab label='Identity Design' {...a11yProps(1)} />
                    {/* <AntTab label='Editorial' {...a11yProps(2)} /> */}
                  </AntTabs>
                </Box>

                <TabPanel value={value} index={0}>
                  <Box className={classes.tab}>
                    <WebDev />
                  </Box>
                </TabPanel>

                <TabPanel value={value} index={1}>
                  <IdentityDesign />
                </TabPanel>

                {/* <TabPanel value={value} index={2}>
                  <Box className={classes.tab}>
                    <img src={Editorial} alt='Project' width={'70%'} />
                  </Box>
                </TabPanel> */}
              </Box>
            )
          }
        />
      </Box>
    </Box>
  );
};

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #A5A5A5  ',
  },
  indicator: {
    backgroundColor: '#A5A5A5  ',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#FFFFFF',
      opacity: 1,
    },
    '&$selected': {
      color: '#FFFFFF',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#FFFFFF',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    background: '#000000',
    color: '#FFFFFF',
  },
  mainContainer: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
  tab: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
}));

export default MenuItems;
