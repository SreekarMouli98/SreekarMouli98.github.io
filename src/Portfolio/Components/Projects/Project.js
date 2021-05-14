import React from 'react';
import { Card, CardActions, CardContent, CardHeader, Grid, IconButton, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
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
  SiMysql as MySQLIcon
} from 'react-icons/si';
import { RiFileUnknowFill as UnknwownIcon } from 'react-icons/ri';
import { IoLogoGitlab as GitlabIcon } from 'react-icons/io5';
import { FaNodeJs as NodeJSIcon } from 'react-icons/fa';

function Project(props) {
  const { project } = props;

  const useStyles = makeStyles({
    project: {
      height: '310px',
      transition: '250ms',
      border: '2px solid #ef6c00',
      backgroundColor: '#353535',
      '&:hover': {
        transform: 'scale(1.025)',
        backgroundColor: '#212121',
      }
    },
    subProject: {
      transition: '250ms',
      '&:hover': {
        transform: 'scale(1.025)'
      }
    },
    icon: {
      '&:hover': {
        transform: 'scale(1.05)'
      }
    }
  });

  const classes = useStyles();

  const openLinkInNewTab = link => window.open(link);

  const getTechnologyIcon = technology => {
    if (technology === 'JavaScript') {
      return <JSIcon />
    } else if (technology === 'NPM') {
      return <NPMIcon />
    } else if (technology === 'Python') {
      return <PyIcon />
    } else if (technology === 'Django') {
      return <DjangoIcon />
    } else if (technology === 'ReactJS') {
      return <ReactIcon />
    } else if (technology === 'NodeJS') {
      return <NodeJSIcon />
    } else if (technology === 'MongoDB') {
      return <MongoDBIcon />
    } else if (technology === 'Redis') {
      return <RedisIcon />
    } else if (technology === 'RabbitMQ') {
      return <RabbitMQIcon />
    } else if (technology === 'Nginx') {
      return <NginxIcon />
    } else if (technology === 'MySQL') {
      return <MySQLIcon />
    } else {
      return <UnknwownIcon />
    }
  };

  const getHeaderLinks = project => {
    return (
      <React.Fragment>
        {project.accessLink && (
          <Tooltip title='Open'>
            <IconButton
              className={classes.icon}
              size='small'
              onClick={() => openLinkInNewTab(project.accessLink)}
            >
              <OpenIcon />
            </IconButton>
          </Tooltip>
        )}
        {project.githubLink && (
          <Tooltip title='Github'>
            <IconButton
              className={classes.icon} 
              size='small'
              onClick={() => openLinkInNewTab(project.githubLink)}
            >
              <GithubIcon />
            </IconButton>
          </Tooltip>
        )}
        {project.gitlabLink && (
          <Tooltip title='Gitlab'>
            <IconButton
              className={classes.icon} 
              size='small'
              onClick={() => openLinkInNewTab(project.gitlabLink)}
            >
              <GitlabIcon />
            </IconButton>
          </Tooltip>
        )}
      </React.Fragment>
    )
  };

  return (
    <React.Fragment>
      <Card className={classes.project}>
        <CardHeader
          title={project.name}
          subheader={project.desc}
          action={getHeaderLinks(project)}
        />
        <CardContent>
          {project.type === 'collection' && (
            <Grid
              container
              justify='center'
              spacing={1}
            >
              {project.collection.map((subProject, index) => (
                <Grid
                  item
                  key={index}
                  xs={6}
                >
                  <Card className={classes.subProject}>
                    <CardHeader
                      subheader={subProject.name}
                      action={getHeaderLinks(subProject)}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </CardContent>
        <CardActions>
          {project.technologies.map((technology, index) => (
            <Tooltip
              key={index}
              title={technology}
            >
              <IconButton
                className={classes.icon}
                size='small'
              >
                {getTechnologyIcon(technology)}
              </IconButton>
            </Tooltip>
          ))}
        </CardActions>
      </Card>
    </React.Fragment>
  )
}

export default Project;