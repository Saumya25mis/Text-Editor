import React from 'react';
import {EditorState,convertToRaw, ContentState} from 'draft-js';
import './App.css';
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from 'draft-convert';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { jsPDF } from "jspdf";

 class Textedit extends React.Component{
     constructor(props){
         super(props)
         this.state={
            editorState: EditorState.createEmpty(),
            
        }
     }
     
     onEditorStateChange=(editorState)=>{
       this.setState({editorState})
     }
     onhandleSubmit=()=>{
         const ContentState =  convertToHTML(this.state.editorState.getCurrentContent());
         const formated=this.state.editorState.getCurrentInlineStyle()
         console.log(ContentState)
         console.log(formated);
         let doc = new jsPDF("landscape", 'pt', 'A4');
         doc.html(ContentState, {
           callback: () => {
            
           }
     });
        
        //  const blocks = convertToRaw(this.state.editorState.getCurrentContent()).blocks;
        //  const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
    }
     render(){
         const {editorState}=this.state;
         return(
             <div> <Editor
             editorState={editorState}
             toolbarClassName="toolbarClassName"
             wrapperClassName="wrapperClassName"
             editorClassName="editorClassName"
             onEditorStateChange={this.onEditorStateChange}
         />
         <button style={{cursor:'pointer'}} onClick={this.onhandleSubmit}>Submit</button>
         <div>{ContentState}</div>
         </div>);
     }
 }
 export default Textedit;