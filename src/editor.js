import React from 'react';
import {EditorState} from 'draft-js';
import './App.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
 class Textedit extends React.Component{
     state={
         editorState: EditorState.createEmpty(),
     }
     onEditorStateChange=(editorState)=>{
         this.setState({editorState});
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
         <button>Submit</button></div>);
     }
 }
 export default Textedit;