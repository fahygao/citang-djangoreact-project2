
import React, { useEffect, useState } from "react";
import FlashcardList from "./FlashcardList";
import './app.css'
import axios from "axios";

// class App extends React.Component{
//   state = {details: [],}
//   componentDidMount() {


//     let data; 
//     axios.get('http://localhost:8080')
//     .then(res => {

//       data = res.data;
//       this.setState({
//           details: data


//       });
//     })
//     .catch(err => {})
//   }
//   render(){
//     return (
//       <div>
//         <hr></hr>
//         {this.state.details.map((output,id) => (
//           <div key = {id}>
//               <div>
//               <h2>{output.word}</h2>
//               <h2>{output.Long_Definition}</h2>
//               </div>
//           </div>
//         ))}
//       </div>


//     )

//   }




// }
function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  
  useEffect(() => {
    axios
    .get('http://localhost:8080')
    .then(res => {
      setFlashcards(res.data.map((questionItem, index) =>
      {
        return {
          id: `${index}-${Date.now()}`,
          question: questionItem.word,
          answer: questionItem.Long_Definition,
        }
      }
      ))
    })
    .catch(err => {})




  },[])



  return (
<>
    <div className="header"> 词堂后花园</div>
    <div className="container"><FlashcardList flashcards = {flashcards} /></div>
    </>
  );
}

const SAMPLE_FLASHCARDS = [
  {
      id: 1, 
      question: "恐龙抗狼",
      answer: "该梗出自云南的博主 '云南权妹'近日作为洗脑神曲，刷屏网络。据悉，是因为博主在一次直播中，因记不住《眉飞色舞》的部分歌词，为维护直播效果，将歌词以前奏的“恐龙抗狼”代替。"
  },
  {
    id: 2, 
    question: "打脸",
    answer: "意为被当面证明错误，使其丢脸。指在各种事件中，当事人用来辟谣的话被辟谣了。"
},
{
  id: 3, 
  question: "查水表",
  answer: "该词语多用于形容当某人做出或做出一种不符合法律法规或破坏社会稳定又或者是某种言论，最后被领导请去约谈的一种情况。如今，这个词语多用来调侃某人说出某种敏感的信息时或将会受到某种处罚。"
},
{
  id: 4, 
  question: '逗比', 
  answer:'直译为“挺逗的二比”，形容某人挺逗、有点可爱、有点中二等；但在特定的语句下，也有鄙视调侃的意味。'},
  {
  id: 5, 
  question: '夹子', 
  answer:'指那些夹着声音说话装可爱但可能会造成听觉污染的人，女生叫“女夹子”，男生叫“男夹子”。'},
  {
  id: 6, 
  question: '梗', 
  answer:'直译指笑点，一般用于流行事物比如综艺、动画剧、动画电影、真人剧、漫画小说、电子游戏等。'},

]



// ]
export default App;
