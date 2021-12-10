import React from "react";
import Typewriter from "typewriter-effect";

function WriterEffect() {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .typeString(
              "<span className='indigo'>var myObject</span> = {  <br/> name : 'sam' <br/> course:['React',Angular','Vue','Next','Python','HTML','Mysql','NODE ' <br/>,'Php','Express' , 'mysql','Express','Firebase','Heroku', ' mongoDB','Azure','AI' 'php', ], <br/>} "
            )

            // .pauseFor(1000)
            // .deleteAll()
            // .typeString("write some code everyday")
            .start();
        }}
      />
    </div>
  );
}

export default WriterEffect;
