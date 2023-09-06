import Form from './Form';
import './app.css';

const notFoundIdList = [86, 97, 105, 138, 148, 150, 207, 226, 298, 262, 285, 303, 205, 224, 245, 246, 286, 333, 332, 346, 359, 394, 414, 438, 422, 462, 463, 470, 489, 561, 578, 597, 540, 587, 601, 589, 592, 595, 632, 624, 636, 647, 644, 697, 673, 709, 707, 706, 710, 708, 711, 712, 714, 720, 734, 725, 748, 752, 759, 750, 751, 753, 713, 747, 749, 761, 762, 763, 745, 771, 754, 801, 746, 792, 850, 812, 854, 843, 897, 899, 895, 917, 934, 920, 963, 956, 968, 1007, 1034, 1017, 1046, 1030];

function App() {

  return (
    <div className="app">
      <Form />
    </div>
  )
  // const [count, setCount] = useState(0);

  // const filteredData = () => {
  //   let data = [];

  //   for (let i = 0; i < 1084; i++) {
  //     if (notFoundIdList.every(item => item !== i)) {
  //       data.push(
  //         <div key={i} style={{ display: 'inline-block' }}>
  //           <header>{`Image ${i + 1}`}</header>
  //           <img
  //             src={`https://picsum.photos/id/${i}/200/150`}
  //             alt=""
  //           />
  //         </div>
  //       )
  //     }
  //   }

  //   return data;
  // };

  // return (
  //   <div>
  //     <h1>
  //       Categories
  //     </h1>
  //     <div>
  //       {
  //         filteredData()
  //       }
  //     </div>

  //   </div>
  // )
}

export default App;
