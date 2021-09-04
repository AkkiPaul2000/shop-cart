import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
   marginLeft:'20px'
  },
});

export default function Item(props) {
  const classes = useStyles();
  const {product}=props;
  return (
    <Card className={classes.root} mx={5}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={product.name}
          height="140"
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>Vendor: {product.vendor}</p>
            <p>Price: ₹{product.price}</p>
            <p>Category: {product.category}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {
                product.available===0 && 
                <Button size="small" color="primary" disabled>
          Add to Cart
        </Button>
            }
            {
                product.available>0 && 
                <Button size="small" color="primary">
          Add to Cart
        </Button>
            }
        
        {
                product.available===0 && 
                <Button size="small" color="primary">
          OUT OF STOCK
        </Button>
            }
             {
                product.available>0 && 
                <Button size="small" color="primary">
          IN STOCK
        </Button>
            }
      </CardActions>
    </Card>
  );
}