import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post
        title="Govt introduces new registration mark for vehicles for seamless transfer across states"
        img="https://m.economictimes.com/thumb/msid-70906110,width-1200,height-900,resizemode-4,imgsize-277367/traffic-getty.jpg"
        description="Government has introduced a new registration mark for new vehicles – Bharat series (BH-series). A vehicle with BH-series mark will not require a new registration mark when the owner shifts from one state to another."    
      />
       <Post
        title="Google in advanced talks to invest several thousands of crores in Airtel: Report"
        img="https://www.zdnet.com/a/hub/i/r/2020/04/30/120ce3e8-a4c8-4d15-baaf-75335c8da183/resize/1200xauto/2c6c959cfdb072d98778533186344049/istock-1154834209.jpg"
        description="Alphabet's Google has been in advanced talks with Bharti Airtel for one year to make substantial investments, running into several thousands of crores, TOI reported citing sources. The board of Airtel, which had a debt of ₹1.6 lakh crore, as of June, will meet on Sunday to consider raising funds In July 2020 Google invested ₹34,000 crore in Jio Platforms."    
      />
       <Post
      title="Hacker used special tools, brute force to steal data: T-Mobile CEO"
      img="https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-672389648.jpg"
      description="T-Mobile CEO Mike Sievert has said that the 21-year-old hacker, who stole data of over 5.3 crore of the firm's users, used his knowledge of specialised tools  and  brute force attacks to make his way into IT servers."    
    />
     <Post
        title="Pokémon GO reinstates COVID-19 safety measure after user backlash"
        img="https://cdn.mos.cms.futurecdn.net/yxb4cm8DUWR5GGpXS5nh8S.jpg"
        description="Pokémon GO-developer Niantic has permanently increased the base interaction radius for PokéStops and Gyms to 80 metres globally. The radius had previously been increased from 40 metres to 80 metres as a COVID-19 safety measure. "    
      />
      
    </Container>
  );
};

export default Feed;