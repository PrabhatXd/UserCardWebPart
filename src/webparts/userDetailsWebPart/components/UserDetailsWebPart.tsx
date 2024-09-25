import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { IUserDetailsWebPartProps } from './IUserDetailsWebPartProps';

export default class UserDetailsWebPart extends React.Component<IUserDetailsWebPartProps, {}> {
  public render(): React.ReactElement<IUserDetailsWebPartProps> {
    const { imageUrl, name, description1 } = this.props;

    return (
      <div>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="230"
                image={imageUrl}
                alt="profile"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {description1}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Know More
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}
