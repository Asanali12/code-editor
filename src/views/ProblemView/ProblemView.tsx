import { useEffect } from "react";
import { Editor } from "../../components/Editor";
import { ProblemText } from "../../components/ProblemText";

export const ProblemView = () => {

  useEffect(() => {
    const handler = document.querySelector('.handler');
    //@ts-ignore
    const wrapper = handler.closest('.App');
    //@ts-ignore
    var boxA = wrapper.querySelector('.half');
    var isHandlerDragging = false;

    document.addEventListener('mousedown', function(e) {
      if (e.target === handler) {
        isHandlerDragging = true;
      }
    });

    document.addEventListener('mousemove', function(e) {
      if (!isHandlerDragging) {
        return false;
      }
      //@ts-ignore
      const containerOffsetLeft = wrapper.offsetLeft;

      const pointerRelativeXpos = e.clientX - containerOffsetLeft;
      
      const boxAminWidth = 60;
      //@ts-ignore
      boxA.style.width = (Math.max(boxAminWidth, pointerRelativeXpos - 8)) + 'px';
      //@ts-ignore
      boxA.style.flexGrow = 0;


    document.addEventListener('mouseup', function(e) {
      isHandlerDragging = false;
    });
    })
  })

  return (
    <>
      <div className='half' style={{width: '1056px', flexGrow: 0, backgroundColor: '#21221c', padding: '8px'}}>
        <ProblemText />
      </div>
      <div className="handler"></div>
      <div className='half'>
        <Editor />
      </div>
    </>
  );
};

