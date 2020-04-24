
import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';


let newText = `
Since those days I have steadily lost control over my memory; of late, however, I became convinced that with the aid of a certain artifice I can recall far more than I would otherwise credit myself with remembering. For example, when, during my office hours, a patient states that I have seen him before and I cannot recall either the fact or the time, then I help myself by guessing—that is, I allow a number of years, beginning from the present time, to come to my mind quickly. Whenever this could be controlled by records of definite information from the patient, it was always shown that in over ten years

NOTE: [In the course of the conference the details of the previous first visit return to consciousness]

I have seldom missed it by more than six months. The same thing happens when I meet a casual acquaintance and, from politeness, inquire about his small child. When he tells of its progress I try to fancy how old the child now is. I control my estimate by the information given by the father, and at most I make a mistake of a month, and in older children of three months. I cannot state, however, what basis I have for this estimate. Of late I have grown so bold that I always offer my estimate spontaneously, and still run no risk of grieving the father by displaying my ignorance in regard to his offspring. Thus I extend my conscious memory by invoking my larger unconscious memory.

I shall report some striking examples of forgetting which for the most part I have observed in myself. I distinguish forgetting of impressions and experiences, that is, the forgetting of knowledge, from forgetting of resolutions, that is, the forgetting of omissions. The uniform result of the entire series of observations I can formulate as follows: The forgetting in all cases is proved to be founded on a motive of displeasure.

A. Forgetting of Impressions and Knowledge

(a) During the summer my wife once made me very angry, although the cause in itself was trifling. We sat in a restaurant opposite a gentleman from Vienna whom I knew, and who had cause to know me, and whose acquaintance I had reasons for not wishing to renew. My wife, who had heard nothing to the disrepute of the man opposite her, showed by her actions that she was listening to his conversation with his neighbors, for from time to time she asked me questions which took up the thread of their discussion. I became impatient and finally irritated. A few weeks later I complained to a relative about this behavior on the part of my wife, but I was not able to recall even a single word of the conversation of the gentleman in the case. As I am usually rather resentful and cannot forget a single incident of an episode that has annoyed me, my amnesia in this case was undoubtedly determined by respect for my wife.

A short time ago I had a similar experience. I wished to make merry with an intimate friend over a statement made by my wife only a few hours earlier, but I found myself hindered by the noteworthy fact that I had entirely forgotten the statement. I had first to beg my wife to recall it to me. It is easy to understand that my forgetting in this case may be analogous to the typical disturbance of judgment which dominates us when it concerns those nearest to us.
`


let title = 'Title';
let textIndexNumber = 2; // holds your place, manipulating it changes how much is presented
let fullText = newText;
let fullTextArray = fullText.split(' ');
let textPresented = returnTextToPresent(fullTextArray, textIndexNumber);
let didion = `Once, in a dry season, I wrote in large letters across two pages of a notebook that innocence ends when one is stripped of the delusion that one likes oneself. Although now, some years later, I marvel that a mind on the outs with itself should have nonetheless made painstaking record of its every tremor, I recall with embarrassing clarity the flavor of those particular ashes. It was a matter of misplaced self-respect.`;

function returnTextToPresent(fullTextArray, textIndexNumber) {
    let toReturn = '';
    for (let i = 0; i < textIndexNumber; i++) {
        toReturn += fullTextArray[i] + ' ';
    }
    return toReturn;
}


export class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            title: 'Title',
            fullText: newText,
            textIndexNumber: 2,
            fullTextArray: fullText.split(' '),
            textPresented: returnTextToPresent(fullTextArray, textIndexNumber)
        }
       // this.onKeyDown = this.onKeyDown.bind(this); 
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('Click happened');
      }

      componentDidMount() {
        document.addEventListener('keydown', this.addWord);
      }

      setText = () => {
        let inputText = prompt('Enter your text', 'your text here...');
        if (inputText == null || inputText === "") {
            this.setState({fullTextArray: didion.split(' ')});
          } else {
            this.setState({fullTextArray: inputText.split(' ') });
          }
    }

      addWord = (e) => {
        
        if(e.keyCode === 16) {
            window.scrollBy(0, 30);
        }

        if(e.keyCode === 37 ) {
            console.log(e);
            if ( this.state.textIndexNumber > 0 ) {
                this.setState({textIndexNumber: this.state.textIndexNumber - 1});
                this.setState({textPresented: returnTextToPresent(this.state.fullTextArray, this.state.textIndexNumber) });
                window.scrollBy(0, -2);
            }           
        } else if (e.keyCode === 8) {
            let newArray = this.state.fullTextArray.slice(this.state.textIndexNumber, this.state.fullTextArray.length);
            this.setState({fullTextArray: newArray});
            this.setState({textPresented: '' });
            this.setState({textIndexNumber: 2 });
        } else if ((e.keyCode > 47 && e.keyCode < 91) || e.keyCode === 39 ){
            if (this.state.fullTextArray.length > this.state.textIndexNumber) {
                this.setState({textIndexNumber: this.state.textIndexNumber + 1});
                this.setState({textPresented: returnTextToPresent(this.state.fullTextArray, this.state.textIndexNumber) });
               window.scrollBy(0, 4);
              }
        }

          
            
      }


    render() {
        return (
            <div>

                <header className="App-header">

                    <h1 className='title' onClick={this.setText} > {title} </h1>

                    <Container className='container' >

                        {this.state.textPresented}

                    </Container>



                </header>

            </div>


        );
    }

}
export default Home;