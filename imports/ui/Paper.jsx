import React, { Component } from 'react';
import { Meteor } from "meteor/meteor";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import { Paper } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import './css/Paper.css'
const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


class Kertas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      Product: []
    };
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  async componentDidMount() {
    Meteor.call('get_data', (err, res)=>{
      if(!err){
        var Product = res
        this.setState({
          Product,
          isLoading: false
        })
        
      }
    })
  }
  render_title(Titles) {
    console.log(Titles[0].name)
    //const { classes } = props;
    return (Titles).map(
      (Title, i)=>(
        <Paper className="Kertas">
            <Grid container spacing={40} alignItems="flex-end">
              {(Title.Product).map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={3}>
                  <Card className="Kartu">
                    <CardActionArea>
                      <CardMedia
                        className="KartuImg"
                        image="https://placekitten.com/300/300"
                        title="Paella dish"
                      />
                      <CardContent>
                        <Typography gutterBottom color="textSecondary" variant="h5" component="h2">{product.Seller}</Typography>
                        <Typography component="p">Rp {product.balance}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
        </Paper>
      )
    )
  }
  render() {
    const Products = this.state.Product
    return(
      <div>
        {!this.state.isLoading && this.render_title(Products)}
      </div>
    )
  }
}

export default Kertas
