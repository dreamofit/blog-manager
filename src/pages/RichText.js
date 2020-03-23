import React from 'react'
import {Card, Modal} from 'antd'
import {Editor} from 'react-draft-wysiwyg'
import draftjs from 'draftjs-to-html'
import {Button,} from '@material-ui/core';
import './test.css'
export default class RichText extends React.Component{
    state = {
        showRichText: false,
        editorContent: '',
        editorState: ''
    }
    handleClearContent = () => {  //清空文本
        this.setState({
            editorState: ''
        })
    }
    handleGetText = () => {    //获取文本内容
        console.log(draftjs(this.state.editorContent))
    }

    uploadContent = () => {
        
    }

    onEditorStateChange = (editorState) => {   //编辑器的状态
        this.setState({
            editorState
        })
    }
    onEditorChange = (editorContent) => {   //编辑器内容的状态
        this.setState({
            editorContent
        })
    }
    render(){
        const { editorState, editorContent } = this.state;
        return (
            <div>
                <Card>
                    <Button 
                      style={{position:"absolute",left:600,top:60,zIndex:9}}
                      variant="contained" 
                      color="primary" 
                      onClick={this.handleGetText}>
                      上传图片
                      </Button>
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={this.onEditorStateChange}
                        onContentStateChange={this.onEditorChange}
                        toolbarClassName="toolbar"
                        wrapperClassName="wrapper"
                        editorClassName="editor"
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </Card>
                <Card>
                    <Button 
                      style={{marginLeft:1000}}
                      variant="contained" 
                      color="primary" 
                      onClick={this.handleGetText}>
                      上传文章</Button>
                </Card>
            </div>
        )
    }
}　　　