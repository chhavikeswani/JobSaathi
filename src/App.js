import logo from './logo.png';
import './App.css';
import JobCard from './JobCard.js';
import Icon from '@material-ui/core/Icon';
import AutoGrid from './AutoGrid';
import TextField from '@material-ui/core/TextField';
import {useState} from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobs.filter((job) => {
    if(searchTerm == "") return job;
    else {
      const jobSearcher = job.title.toLowerCase() + " " + job.description.toLowerCase();
      if (jobSearcher.includes(searchTerm.toLowerCase())) return job;

    }
  })
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}} >
        <img src={logo} alt="logo" style = {{width: "25%", marginTop:30 }} />
        {/* <Icon>star</Icon> */}

        {/* <Image>"logo.png"</Image> */}
        <TextField id="outlined-basic" label="Search" variant="outlined" onChange = {(event) => setSearchTerm(event.target.value)} 
        style={{marginTop: 30, width:"500%", color:"white", marginBottom:15, marginLeft:25}} />
        </div>
        <div style={{flexDirection: 'row', marginTop: 20, color:"white"}}>
        
        <AutoGrid listOfJobs={filteredJobs}/>
        </div>
      </header>
    </div>
  );
}

const jobs = [
  // export default function JobCard({image='https://5.imimg.com/data5/KD/OI/GLADMIN-19043424/housemaid-500x500.jpg', title='Househelp', description='syz', location="Kalkaji", pay = "Rs. 10000", ft = "Full-time", hours = "8:00 am - 7:00 pm", employerName = "Sushil Kumar", contact = "9177410283", rating = "4/5", date = "9th February 2021"}) {

  {
      image: "https://thumbs.dreamstime.com/b/indian-village-carpenter-working-wooden-work-factory-indian-village-carpenter-working-wooden-work-factory-logs-cutting-162009331.jpg",
      title: "Carpenter",
      description: "Carpenter needed to build a study desk. This is a part time job and we need the finished product within a week.",
      location: "Kalkaji",
      pay: "Rs. 10000",
      hours: "12:00 pm - 2:00 pm",
      ft: "Temporary",
      employerName: "Kishna Sharma",
      contact: "9172038172",
      rating: "3.8/5",
      date: "4th February 2021"
  },
  {
      image: "https://5.imimg.com/data5/KD/OI/GLADMIN-19043424/housemaid-500x500.jpg",
      title: "House Help",
      description: "House help needed for doing the dishes, washing clothes and vaccuuming.",
      location: "C.R. Park",
      pay: "Rs. 15000",
      hours: "9:00 am - 9:00 pm",
      ft: "Full-time",
      employerName: "Sakshi Keswani",
      contact: "8192731283",
      rating: "4.4/5",
      date: "8th February 2021"
  },
  {
      image: "https://advancedplumbingandrootertexas.com/wp-content/uploads/2019/01/How-Do-I-Find-a-Reliable-Plumber-Near-Me-2.jpg",
      title: "Plumber",
      description: "Plumber needed to fix a leaking tap and other minor leaks around the house.",
      location: "Jasola",
      pay: "Rs. 4000",
      hours: "11:00 am - 1:00 pm",
      ft: "Temporary",
      employerName: "Rajiv Khanna",
      contact: "8191921283",
      rating: "4.2/5",
      date: "7th February 2021"
  },
  {
      image: "https://images.indianexpress.com/2017/12/party-driver.jpg",
      title: "Driver",
      description: "Driver needed to drive an SUV for work in the evenings.",
      location: "Hauz Khas",
      pay: "Rs. 25000",
      hours: "7:00 pm - 10:00 pm",
      ft: "Part-time",
      employerName: "Jasjit Karwal",
      contact: "9173718283",
      rating: "3.9/5",
      date: "10th February 2021"
  },
  {
      image: "https://bpmelectric.b-cdn.net/wp-content/uploads/2019/03/Fotolia_170179753_Subscription_Monthly_M.jpg",
      title: "Electrician",
      description: "We need an electrician to install a few lights and bulbs around the house.",
      location: "Okhla",
      pay: "Rs. 5000",
      hours: "9:00 am - 1:00 pm",
      ft: "Temporary",
      employerName: "Nalin Kumar",
      contact: "9173731283",
      rating: "4.7/5",
      date: "8th February 2021"
  },
{
      image: "https://www.missouribotanicalgarden.org/Portals/0/Images/Horticulture/MasterGardeners/PPL_VOL_At-work_01_Claire-Cohen.jpg",
      title: "Gardener",
      description: "We need a permanent gardener to tend to our house garden once a week.",
      location: "Saket",
      pay: "Rs. 8000",
      hours: "9:00 am - 1:00 pm",
      ft: "Part-time",
      employerName: "Mohit Sharma",
      contact: "9192731283",
      rating: "4.1/5",
      date: "6th February 2021"
  },
  {
      image: "https://image.shutterstock.com/image-photo/watchman-protecting-himself-mask-times-260nw-1661592304.jpg",
      title: "Guard",
      description: "We need a guard to guard our house during night time.",
      location: "GK II",
      pay: "Rs. 25000",
      hours: "9:00 pm - 7:00 am",
      ft: "Full-time",
      employerName: "Diljit Singh",
      contact: "9152618273",
      rating: "4.6/5",
      date: "8th February 2021"
  },
  {
      image: "https://cdn.kinsights.com/cache/6d/43/6d4369f8e951f45836f2d70b6995fd17.jpg",
      title: "Babysitter",
      description: "We need a babysitter to look after 2 toddlers during weekdays",
      location: "Sukhdev Vihar",
      pay: "Rs. 15000",
      hours: "9:00 am - 5:00 pm",
      ft: "Part-time",
      employerName: "Mukesh Dev",
      contact: "9173017492",
      rating: "4.8/5",
      date: "8th February 2021"
  },
  {
      image: "https://assets.bonappetit.com/photos/5f3bffa3b62c45d85d5245df/16:9/w_2560%2Cc_limit/Stop-Cooking-Like-a-Chef-Meherwan-Irani.jpg",
      title: "Cook",
      description: "We need someone to cook nutitious meals on weekday mornings",
      location: "Sarvodaya Enclave",
      pay: "Rs. 15000",
      hours: "7:00 am - 10:00 am",
      ft: "Part-time",
      employerName: "Drishti Kumar",
      contact: "9173501739",
      rating: "4.1/5",
      date: "8th February 2021"
  },
]

export default App;
