import React, { useContext } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AiFillGithub as GithubIcon } from 'react-icons/ai';
import { MdOpenInNew as OpenIcon } from 'react-icons/md';
import {
  SiJavascript as JSIcon,
  SiNpm as NPMIcon,
  SiPython as PyIcon,
  SiDjango as DjangoIcon,
  SiReact as ReactIcon,
  SiMongodb as MongoDBIcon,
  SiRedis as RedisIcon,
  SiRabbitmq as RabbitMQIcon,
  SiNginx as NginxIcon,
  SiMysql as MySQLIcon,
} from 'react-icons/si';
import { RiFileUnknowFill as UnknwownIcon } from 'react-icons/ri';
import { IoLogoGitlab as GitlabIcon } from 'react-icons/io5';
import { FaNodeJs as NodeJSIcon } from 'react-icons/fa';
import {
  BsServer as BackendIcon,
  BsArrowRightShort as RightArrowIcon,
} from 'react-icons/bs';
import { CgWebsite as FrontendIcon } from 'react-icons/cg';

import Context from '../../Context';

const useStyles = makeStyles((theme) => ({
  project: (props) => ({
    borderRadius: 0,
    background: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
    ...(!props.mobileView && { height: '380px' }),
  }),
  subProjectsList: {
    color: theme.palette.secondary.main,
  },
  icon: {
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  subProjectIcon: {
    color: theme.palette.secondary.main,
    transform: 'scale(1.25)',
  },
}));

function Project(props) {
  const { project } = props;
  const context = useContext(Context);
  const styleProps = {
    mobileView: context.mobileView,
  };
  const classes = useStyles(styleProps);

  const openLinkInNewTab = (link) => window.open(link);

  const getTechnologyIcon = (technology) => {
    if (technology === 'JavaScript') {
      return <JSIcon />;
    } else if (technology === 'NPM') {
      return <NPMIcon />;
    } else if (technology === 'Python') {
      return <PyIcon />;
    } else if (technology === 'Django') {
      return <DjangoIcon />;
    } else if (technology === 'ReactJS') {
      return <ReactIcon />;
    } else if (technology === 'NodeJS') {
      return <NodeJSIcon />;
    } else if (technology === 'MongoDB') {
      return <MongoDBIcon />;
    } else if (technology === 'Redis') {
      return <RedisIcon />;
    } else if (technology === 'RabbitMQ') {
      return <RabbitMQIcon />;
    } else if (technology === 'Nginx') {
      return <NginxIcon />;
    } else if (technology === 'MySQL') {
      return <MySQLIcon />;
    } else {
      return <UnknwownIcon />;
    }
  };

  const getSubProjectIcon = (project) => {
    if (project.type === 'backend') return <BackendIcon />;
    if (project.type === 'frontend') return <FrontendIcon />;
    return <RightArrowIcon />;
  };

  const getHeaderLinks = (project) => {
    return (
      <React.Fragment>
        {project.accessLink && (
          <Tooltip title="Open">
            <IconButton
              className={classes.icon}
              size="small"
              onClick={() => openLinkInNewTab(project.accessLink)}
              color="secondary"
            >
              <OpenIcon />
            </IconButton>
          </Tooltip>
        )}
        {project.githubLink && (
          <Tooltip title="Github">
            <IconButton
              className={classes.icon}
              size="small"
              onClick={() => openLinkInNewTab(project.githubLink)}
              color="secondary"
            >
              <GithubIcon />
            </IconButton>
          </Tooltip>
        )}
        {project.gitlabLink && (
          <Tooltip title="Gitlab">
            <IconButton
              className={classes.icon}
              size="small"
              onClick={() => openLinkInNewTab(project.gitlabLink)}
              color="secondary"
            >
              <GitlabIcon />
            </IconButton>
          </Tooltip>
        )}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Card className={classes.project} elevation={2}>
        <CardHeader
          title={project.name}
          action={getHeaderLinks(project)}
          titleTypographyProps={{
            style: {
              fontFamily: '"Exo 2"',
            },
          }}
        />
        <CardContent>
          <Typography style={{ fontFamily: '"Noto Sans"' }}>
            {project.desc}
          </Typography>
          {project.type === 'collection' && (
            <Paper
              style={{
                minHeight: '80px',
                maxHeight: '150px',
                overflowY: 'scroll',
                overflowX: 'hidden',
                marginTop: 20,
              }}
            >
              <Container>
                <List
                  className={classes.subProjectsList}
                  dense={context.mobileView}
                >
                  {project.collection.map((subProject, index) => (
                    <React.Fragment key={index}>
                      <ListItem>
                        <ListItemIcon className={classes.subProjectIcon}>
                          {getSubProjectIcon(subProject)}
                        </ListItemIcon>
                        <ListItemText
                          primary={subProject.name}
                          primaryTypographyProps={{
                            style: {
                              fontFamily: '"Noto Sans"',
                            },
                          }}
                        />
                        <ListItemSecondaryAction>
                          {getHeaderLinks(subProject)}
                        </ListItemSecondaryAction>
                      </ListItem>
                      {index !== project.collection.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </Container>
            </Paper>
          )}
        </CardContent>
        <CardActions>
          <Grid container spacing={1}>
            {project.technologies.map((technology, index) => (
              <Grid item key={index}>
                {context.mobileView ? (
                  <Tooltip title={technology}>
                    <IconButton color="secondary" size="small">
                      {getTechnologyIcon(technology)}
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Chip
                    icon={getTechnologyIcon(technology)}
                    label={technology}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

export default Project;
