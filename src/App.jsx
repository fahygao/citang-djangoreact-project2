import { useState } from 'react'
import FlashcardList from './FlashcardList.jsx'
import Search from './Search.jsx'

const SAMPLE_FLASHCARDS = [
  { id: 1, question: '恐龙抗狼', answer: '该梗出自云南的博主"云南权妹"，因记不住《眉飞色舞》的部分歌词，将歌词以前奏的"恐龙抗狼"代替，成为洗脑神曲。' },
  { id: 2, question: '查水表', answer: '形容当某人做出不符合法律法规或破坏稳定的行为，最后被领导请去约谈。如今多用来调侃某人说出敏感信息时将受到处罚。' },
  { id: 3, question: '逗比', answer: '直译为"挺逗的二比"，形容某人挺逗、有点可爱、有点中二；但在特定语句下也有鄙视调侃的意味。' },
  { id: 4, question: '夹子', answer: '指那些夹着声音说话装可爱但可能会造成听觉污染的人，女生叫"女夹子"，男生叫"男夹子"。' },
  { id: 5, question: '打脸', answer: '意为被当面证明错误，使其丢脸。指当事人用来辟谣的话被辟谣了。' },
  { id: 6, question: '你人还怪好嘞', answer: '用来形容单纯且善良的人，在被陌生人帮助后（不论真心还是缺德），都会回上一句"你人还怪好嘞"来进行内涵调侃。' },
  { id: 7, question: '日本生可乐', answer: '百事可乐推出的产品，23年4月在内地上市。因抖音博主@夏老实粤语带货而火，她经常发表前后矛盾的话来夸赞带货产品。' },
  { id: 8, question: '如来来没来', answer: '出自中国政法大学郭继承教授对"如来"一词的解读，在一次授课中展开了十分抽象的讲解，"如来来没来"是最具代表性的语句。' },
  { id: 9, question: '梗', answer: '直译指笑点，一般用于流行事物比如综艺、动画、漫画、小说、电子游戏等。' },
  { id: 10, question: '奔周', answer: '粤语粗口，指男性生殖器官。量词一般为"条"、"碌"。' },
]

export default function App() {
  const [flashcards] = useState(SAMPLE_FLASHCARDS)

  return (
    <>
      <h1 className="header">词堂后花园</h1>
      <p className="subtitle">词堂帮你应对以下场景：</p>
      <Search details={flashcards} />
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  )
}
