import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-elastic-carousel";

 class App extends Component {
   state = {
     items: [
       {
         id: 1,
         name: "Abir zayn",
         img: "https://i.ibb.co/G5bDDzC/img7.jpg",
         profession: "Businessman",
         comment:
           "Really It is a awesome website. I loved this website very much. Thanks a lot for proper service.It's a great honour to be part of this special website.",
       },
       {
         id: 2,
         name: "Salman Jayed",
         img: "https://i.ibb.co/G5bDDzC/img7.jpg",
         profession: "Businessman",
         comment:
           "Really It is a awesome website. I loved this website very much. Thanks a lot for proper service.It's a great honour to be part of this special website.",
       },
       {
         id: 3,
         name: "Afthab Hossen",
         img: "https://i.ibb.co/G5bDDzC/img7.jpg",
         profession: "Businessman",
         comment:
           "Really It is a awesome website. I loved this website very much. Thanks a lot for proper service.It's a great honour to be part of this special website.",
       },
       {
         id: 4,
         name: "Ismail Tamzid",
         img: "https://i.ibb.co/Vg31N3g/img8.jpg",
         profession: "Businessman",
         comment:
           "Really It is a awesome website. I loved this website very much. Thanks a lot for proper service.It's a great honour to be part of this special website.",
       },
       {
         id: 5,
         name: "Humaira Jannat",
         img: "https://i.ibb.co/Bg1LG5Z/img10.jpg",
         profession: "Businessman",
         comment:
           "Really It is a awesome website. I loved this website very much. Thanks a lot for proper service.It's a great honour to be part of this special website.",
       },
     ],
   };

   render() {
     const { items } = this.state;
     return (
       <div className="pd-5  mt-5 bg-dark">
         <div className="p-5">
           <Carousel interval={1000}>
             {items.map((item) => (
               <div key={item.id}>
                 <Card
                   className="text-center  rounded p-5 bg-opacity-25 mt-5"
                   style={{ width: "48rem" }}
                 >
                   <Card.Img
                     variant="top"
                     className="rounded-circle m-auto"
                     src={item?.img}
                     style={{ width: "10rem" }}
                   />
                   <Card.Body>
                     <Card.Title>{item.name}</Card.Title>
                     <Card.Subtitle className="mb-2 text-success">
                       {item.profession}
                     </Card.Subtitle>
                     <Card.Text>{item.comment}</Card.Text>
                   </Card.Body>
                 </Card>
               </div>
             ))}
           </Carousel>
         </div>
       </div>
     );
   }
 }
export default App;
