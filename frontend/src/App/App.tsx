import { useEffect, useState } from 'react';
import { Question } from '../Features/Question/questionTypes';
import './App.css';
import { Category } from '../Features/tema';





function App():JSX.Element {
  let ans = '';

  const [answer, setAnswer] = useState(ans)
  const [modal, setModal] = useState<boolean>(false)
  const [category,setCategory] = useState<Category[]>([])
  const [question, setQuestion] = useState<Question[]>([])
  const [modalQuestion, setModalQuestion] = useState(1)
  const[close,setClose]=useState<boolean>(false)



  useEffect(() => {
    fetch('https://6431836ed4518cfb0e6324d7.mockapi.io/question')
      .then((response) => response.json())
      .then((json) => setQuestion(json));

      fetch('https://6431836ed4518cfb0e6324d7.mockapi.io/category')
      .then((response) => response.json())
      .then((json) => setCategory(json));
  }, []);
  
  const handleQuestion =(id: number):void => {
    const q = category.filter((el) => el.id === id);
    console.log(q);
    const w = q[0].id
    setModalQuestion(w);
    // const quest = question.map((el)=> {
    //   console.log(el.category_id);
      
    //   if(el.category_id === w){
    //     setModalQuestion(w);
    //   }

      
    // })
    
   

  }

  const handleAnswer = (id: number): void => {
    const v = question.filter((el) => el.id === id);
    const num = Math.floor(Math.random() * 10);
    ans = v[0].answer[num];
    setAnswer(ans);
    setModal(true);
  };


  return (
    <div className='content'>
    <div className="toy">
  <form className="ball">
    <div className="window"></div>
    {/* <div className="eight"> */}
      {/* <span></span> */}
    {/* </div> */}
    
    <div className="answers">

       {modal && <div><input id="affirmative1" type="radio" name="answer" required/>
      <div className="answer up">{answer}</div></div>}
       </div>
      
      </form>
      </div>
       <div className='question'>
        
        {category.map((categ)=> 
        <div className='' data-id ={categ.id}>
          <button onClick={() => handleQuestion(categ.id)} type="button" className="btn">
  <strong>{categ.tema}</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
</button>
        {/* <Accordion title={categ.tema}>   */}
        {/* <button >{categ.tema}</button> */}
        {modalQuestion === categ.id  && (
        <div className="tema-btn">

            {question.map((quest) => (
              
              Number(categ.id) === quest.category_id && <button
              type='button'
                data-id={quest.id}
                onClick={() => handleAnswer(quest.id)}
                key={quest.id}
              >
                {quest.question}
              </button>
              
              // Number(categ.id) === quest.category_id && <QuestionView
              //                 question={quest}
              //                 handleAnswer={() => handleAnswer(quest.id)}
              //              />

            ))
            }
           {/* </Accordion> */}
           </div>
           )}
           </div>
        )}
        </div>
        </div>

      
     
   

  );
}

export default App;
{/* <button type="button" class="btn">
  <strong>SPACE</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button> */}