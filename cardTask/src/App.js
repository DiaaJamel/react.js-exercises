import React from 'react'
import './App.css';
import Card from './components/Card'

function App() {
  return (
<div className='App'>
<Card name="Diaa Jamel" pic= {'https://pbs.twimg.com/profile_images/1252265936666705922/avtX8I1Q.jpg'} address= {'Amman, Jordan'} title={'Electrical Engineer'} about={'Electrical Engineer. Jordanian man, Technology lover, Designer, Passionate about marketing & social media.'} github={'https://github.com/DiaaJamel'} twitter={'#'} instagram={'#'}/>

<Card name={'Monther Twaissi'} pic={'https://avatars2.githubusercontent.com/u/71584000?s=400&u=4ee019affa6883c074003bb0bd7ddba2ce8e1021&v=4'} address= {'Jerash, Jordan'} title={'Civil Engineer'} about={'Full-Stack Developer Trainee'} github={'https://github.com/Monther-Twaissi'} twitter={'#'} instagram={'#'}/>

<Card name={'Ahmad Emar'} pic={'https://avatars0.githubusercontent.com/u/71763607?s=400&u=40b3c151bf4dbd5216fcc21363ffb7533d1beccb&v=4'} address= {'Amman, Jordan'} title={'Nurse'} about={'Full stack Dev. trainee @oca-class-a'} github={'https://github.com/ahmada3mar'} twitter={'#'} instagram={'#'}/>

<Card name={'Ashraf Al jabari'} pic={'https://avatars0.githubusercontent.com/u/71584075?s=400&u=1f2699d33de5e5c2299c21efa4a7b807e5341923&v=4'} address= {'Amman, Jordan'} title={'Web Developer'} about={'Full-stack Mobile/Web Developer'} github={'https://github.com/ashraf-aljabari'} twitter={'#'} instagram={'#'}/>

<Card name={'Abdallah-Alhajeid'} pic={'https://media-exp1.licdn.com/dms/image/C4D03AQHMNY5_j9-Obw/profile-displayphoto-shrink_800_800/0?e=1611187200&v=beta&t=HXEMN4JPZwRZZ19OTE9ZlqScywsRbTQ6ra3oLEPPtKs'} address= {'Amman, Jordan'} title={'Student'} about={'life is too short to safely remove your usb'} github={'https://github.com/Abdallah-Alhajeid'} twitter={'#'} instagram={'#'}/>
</div>
  );
}

export default App;
