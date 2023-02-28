import React from 'react';
import Box from './component/box';
import './App.css'

function App() {

    const list = {
        menu1:{
            type: "อาหารคาว",
            name: "ข้าวผัด",
            describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit, nibh vitae convallis tempor, nunc dolor feugiat libero, quis ultrices ligula dolor sed velit. Donec turpis lacus, mattis at convallis ultricies, iaculis eu risus. Praesent sit amet purus eget nisl.",
            imageSrc: "https://images.aws.nestle.recipes/resized/10f33893492769337355e77962aa1b95_fried-rice_944_531.jpeg"
        },
        
        menu2:{
            type: "อาหารหวาน",
            name: "บัวลอย",
            describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non arcu eget lorem aliquet congue at id velit. Mauris vitae tincidunt nisl, ornare consectetur mauris. Vestibulum viverra nunc et enim malesuada, at dignissim eros sollicitudin. Cras id scelerisque justo. Ut.",
            imageSrc: "https://img.kapook.com/u/2022/wanwanat/1079595941.jpg"
        
        }
    }

  return (
  <div>
    <div className='body'>
        <h1 className='head'>โหวตอาหาร</h1>
        <Box 
        type={list.menu1.type}
        name={list.menu1.name}
        describe={list.menu1.describe}
        imageSrc={list.menu1.imageSrc}
        />

        <Box
        type={list.menu2.type}
        name={list.menu2.name}
        describe={list.menu2.describe}
        imageSrc={list.menu2.imageSrc}
        />
        
    </div>
  </div>
    
    
  );
}

export default App;
